import React, { useEffect, useState } from "react";
import { Typography, Row, Col, Card, Table, Tag } from "antd";
import Navbar from "../Component/Navbar";
import AppFooter from "../Component/footer";
import GetLeaveDetailsService from "../services/GetLeaveDetailsService";
import dayjs from "dayjs";
const { Title } = Typography;

const Home = () => {
  const [employeeData, setEmployeeData] = useState([]); // State to store the employee data

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const employeeCode = localStorage.getItem("EmployeeCode");

        if (employeeCode) {
          const data =
            await GetLeaveDetailsService.getLeaveDetails(employeeCode);
          setEmployeeData(data); // Assuming 'data' is an array of leave records
        } else {
          console.error("No employee ID found");
        }
      } catch (error) {
        console.error("Failed to fetch employee details", error);
      }
    };
    fetchEmployeeDetails();
  }, []);

  // Transform the fetched data to match the required structure
  const data = employeeData.map((leave, index) => ({
    key: index + 1, // Use the index as the key
    Leavetype: leave.leaveType, // Map API data fields
    From: dayjs(leave.fromDate).format("DD-MMM-YYYY"), // Format the date
    To: dayjs(leave.toDate).format("DD-MMM-YYYY"), // Format the date
    Reason: leave.reason,
    Approver: leave.approver,
  }));

  const columns = [
    { title: "Leave Type", dataIndex: "Leavetype", key: "Leavetype" },
    { title: "From Date", dataIndex: "From", key: "From" },
    { title: "To Date", dataIndex: "To", key: "To" },
    { title: "Reason", dataIndex: "Reason", key: "Reason" },
    {
      title: "Approver",
      dataIndex: "Approver",
      key: "Approver",
      render: (approver) => <Tag color="blue">{approver}</Tag>,
    },
  ];

  return (
    <>
      <Navbar />
      <Row
        style={{ height: "80vh", backgroundColor: "#e6f7ff", padding: "20px" }}
      >
        <Col span={24} style={{ height: "0px" }}>
          <Title level={2} style={{ color: "#1e90ff", marginTop: "0px" }}>
            Dashboard
          </Title>
        </Col>

        <Row
          gutter={16}
          style={{ width: "100%", marginBottom: "0px" }}
          justify="center"
        >
          <Col span={6}>
            <Card
              title="Total Annual Leave"
              bordered={false}
              style={{ backgroundColor: "#bae7ff", color: "#0050b3" }}
            >
              0
            </Card>
          </Col>
          <Col span={6}>
            <Card
              title="Total Sick Leave"
              bordered={false}
              style={{ backgroundColor: "#bae7ff", color: "#0050b3" }}
            >
              0
            </Card>
          </Col>
          <Col span={6}>
            <Card
              title="Total Casual Leave"
              bordered={false}
              style={{ backgroundColor: "#bae7ff", color: "#0050b3" }}
            >
              0
            </Card>
          </Col>
          <Col span={6}>
            <Card
              title="Total Unpaid Leave"
              bordered={false}
              style={{ backgroundColor: "#bae7ff", color: "#0050b3" }}
            >
              0
            </Card>
          </Col>
        </Row>

        <Row style={{ width: "100vw" }} justify="center">
          <Col span={24}>
            <Table
              dataSource={data}
              columns={columns}
              pagination={false}
              rowKey="key" // Use the key generated in the data mapping
              bordered
              style={{ borderColor: "#1e90ff" }}
              rowClassName={() => "blue-row"}
              title={() => (
                <Title level={4} style={{ color: "#1e90ff" }}>
                  Leave Details
                </Title>
              )}
            />
          </Col>
        </Row>
      </Row>
      <AppFooter />
    </>
  );
};

export default Home;
