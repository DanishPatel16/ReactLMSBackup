import React, { useState } from "react";
import {
  Typography,
  Card,
  Button,
  Form,
  Input,
  message,
  DatePicker,
} from "antd";
import Navbar from "../Component/Navbar";
import AddEmployeeService from "../services/AddEmployeeService";
import AppFooter from "../Component/footer";

const { Title } = Typography;

const AddEmployee = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await AddEmployeeService.addEmployee(values);
      message.success("Employee added successfully!");
    } catch (error) {
      message.error("Failed to add employee. Please try again.");
      console.error("Error adding employee:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          minHeight: "calc(100vh - 120px)", // To prevent overlap with navbar/footer
          backgroundColor: "#f0f2f5",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          bordered
          style={{
            width: "100%",
            maxWidth: "600px", // Max width for larger screens
            backgroundColor: "#ffffff",
            border: "1px solid #1890ff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              backgroundColor: "#1890ff",
              padding: "10px",
              borderRadius: "8px 8px 0 0",
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            <Title
              level={4}
              style={{ margin: 0, color: "white", textTransform: "uppercase" }}
            >
              Add New Employee
            </Title>
          </div>
          <Form
            name="add_employee"
            onFinish={onFinish}
            style={{ padding: "20px" }}
          >
            <Form.Item
              name="employeeCode"
              rules={[
                { required: true, message: "Please input the employee code!" },
              ]}
            >
              <Input placeholder="Employee Code" />
            </Form.Item>
            <Form.Item
              name="firstName"
              rules={[
                { required: true, message: "Please input the first name!" },
              ]}
            >
              <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item name="middleName">
              <Input placeholder="Middle Name" />
            </Form.Item>
            <Form.Item
              name="lastName"
              rules={[
                { required: true, message: "Please input the last name!" },
              ]}
            >
              <Input placeholder="Last Name" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please input a valid email!",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="contactNo"
              rules={[
                { required: true, message: "Please input the contact number!" },
              ]}
            >
              <Input placeholder="Contact Number" />
            </Form.Item>
            <Form.Item
              name="department"
              rules={[
                { required: true, message: "Please input the department!" },
              ]}
            >
              <Input placeholder="Department" />
            </Form.Item>
            <Form.Item
              name="position"
              rules={[
                { required: true, message: "Please input the position!" },
              ]}
            >
              <Input placeholder="Position" />
            </Form.Item>
            <Form.Item
              name="role"
              rules={[{ required: true, message: "Please input the role!" }]}
            >
              <Input placeholder="Role" />
            </Form.Item>
            <Form.Item
              name="managerId"
              rules={[
                { required: true, message: "Please input the manager ID!" },
              ]}
            >
              <Input placeholder="Manager ID" />
            </Form.Item>
            <Form.Item
              name="pancardNo"
              rules={[
                {
                  required: true,
                  message: "Please input the PAN card number!",
                },
              ]}
            >
              <Input placeholder="PAN Card Number" />
            </Form.Item>
            <Form.Item
              name="adharcardNo"
              rules={[
                {
                  required: true,
                  message: "Please input the Aadhar card number!",
                },
              ]}
            >
              <Input placeholder="Aadhar Card Number" />
            </Form.Item>
            <Form.Item
              name="currentAddress"
              rules={[
                {
                  required: true,
                  message: "Please input the current address!",
                },
              ]}
            >
              <Input placeholder="Current Address" />
            </Form.Item>
            <Form.Item
              name="permanentAddress"
              rules={[
                {
                  required: true,
                  message: "Please input the permanent address!",
                },
              ]}
            >
              <Input placeholder="Permanent Address" />
            </Form.Item>
            <Form.Item name="bloodGroup">
              <Input placeholder="Blood Group" />
            </Form.Item>
            <Form.Item
              name="joiningDate"
              rules={[
                { required: true, message: "Please select the joining date!" },
              ]}
            >
              <DatePicker
                placeholder="Joining Date"
                style={{ width: "100%" }}
              />
            </Form.Item>
            <Form.Item name="releaseDate">
              <DatePicker
                placeholder="Release Date"
                style={{ width: "100%" }}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input the password!" },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                style={{ width: "100%" }}
              >
                Add Employee
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
      <AppFooter />
    </>
  );
};

export default AddEmployee;
