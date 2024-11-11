import React, { useEffect, useState } from "react";
import { Form, Input, Button, Radio, DatePicker, message } from "antd";
import Navbar from "../Component/Navbar";
import dayjs from "dayjs";
import ProfileService from "../services/ProfileService";
import AppFooter from "../Component/footer";
import { createLeave } from "../services/LeaveApplyService";

const { TextArea } = Input;

function LeaveApply() {
  const [form] = Form.useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const [employeeData, setEmployeeData] = useState(null);

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const id = localStorage.getItem("EmployeeID");

        // Fetch employee details by EmployeeID
        if (id) {
          const data = await ProfileService.getEmployeeDetailsById(id);
          setEmployeeData(data[0]); // Set the data to the state
        } else {
          console.error("No Employee ID found");
        }
      } catch (error) {
        console.error("Failed to fetch employee details", error);
      }
    };

    fetchEmployeeDetails();
  }, []);

  useEffect(() => {
    if (employeeData) {
      const fullName = `${employeeData.firstName} ${employeeData.lastName}`;
      form.setFieldsValue({
        employeeName: fullName,
        Mname: employeeData.managerId,
        Eid: employeeData.employeeCode,
      });
    }
  }, [employeeData, form]);

  const handleSubmit = async (values) => {
    if (dayjs(values.from).isAfter(values.to)) {
      setErrorMessage('The "From" date must be before the "To" date.');
      return;
    }

    const payload = {
      employeeCode: values.Eid,
      employeeName: values.employeeName,
      approver: values.Mname,
      leaveType: values.leaveType,
      fromDate: values.from.format("YYYY-MM-DD"),
      dayTypeFrom: values.dayTypeFrom,
      toDate: values.to.format("YYYY-MM-DD"),
      dayTypeTo: values.dayTypeTo,
      reason: values.reason,
    };

    setErrorMessage("");
    try {
      const response = await createLeave(payload);
      if (response.success) {
        message.success("Leave request submitted successfully!");
        form.resetFields(); // Clear the form after successful submission
      } else {
        message.error("Error submitting leave request.");
      }
    } catch (error) {
      console.error("Error submitting leave request:", error);
    }
  };

  return (
    <>
      <Navbar />
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        style={styles.form}
        initialValues={{
          leaveType: "Leave",
          dayTypeFrom: "Full",
          dayTypeTo: "Full",
          from: dayjs(),
          to: dayjs(),
        }}
      >
        <Form.Item
          label="Employee ID"
          name="Eid"
          rules={[{ message: "Employee ID" }]}
        >
          <Input placeholder="Employee ID" disabled />
        </Form.Item>
        <Form.Item
          label="Employee Name"
          name="employeeName"
          rules={[{ message: "Please enter your name!" }]}
        >
          <Input placeholder="Enter employee name" disabled />
        </Form.Item>

        <Form.Item
          label="Reporting Manager"
          name="Mname"
          rules={[{ message: "Please enter your manager's name!" }]}
        >
          <Input placeholder="Manager Name" disabled />
        </Form.Item>

        <Form.Item label="Leave Type" name="leaveType">
          <Radio.Group>
            <Radio value="Leave">Leave</Radio>
            <Radio value="Medical Leave">Medical Leave</Radio>
            <Radio value="Other Type Leave">Other Type Leave</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="From" rules={[{ required: true }]} name="from">
          <DatePicker style={styles.input} />
        </Form.Item>

        <Form.Item label="Day Type (From)" name="dayTypeFrom">
          <Radio.Group>
            <Radio value="Full">Full</Radio>
            <Radio value="First Half">First Half</Radio>
            <Radio value="Second Half">Second Half</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="To" rules={[{ required: true }]} name="to">
          <DatePicker style={styles.input} />
        </Form.Item>

        <Form.Item label="Day Type (To)" name="dayTypeTo">
          <Radio.Group>
            <Radio value="Full">Full</Radio>
            <Radio value="First Half">First Half</Radio>
            <Radio value="Second Half">Second Half</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Reason for Leave"
          name="reason"
          rules={[{ required: true, message: "Please enter a valid reason!" }]}
        >
          <TextArea rows={4} placeholder="Enter reason for leave" />
        </Form.Item>

        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

        <Form.Item>
          <Button type="primary" htmlType="submit" style={styles.button}>
            Submit
          </Button>
        </Form.Item>
      </Form>
      <AppFooter />
    </>
  );
}

const styles = {
  form: {
    maxWidth: "600px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#f0f8ff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 255, 0.2)",
  },
  button: {
    width: "100%",
  },
};

export default LeaveApply;
