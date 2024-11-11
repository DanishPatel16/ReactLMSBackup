import React, { useEffect, useState } from "react";
import { Typography, Card, Button, Avatar, Table } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Navbar from "../Component/Navbar";
import ProfileService from "../services/ProfileService";
import DProfile from "../assets/DProfile.jpg";
import AppFooter from "../Component/footer";

const { Title } = Typography;

const Profile = () => {
  const [employeeData, setEmployeeData] = useState(null); // State to store the employee data

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const id = localStorage.getItem("EmployeeID");
        const employeeCode = localStorage.getItem("EmployeeCode");

        if (id) {
          const data = await ProfileService.getEmployeeDetailsById(id);

          // Set the employee data with employeeCode
          setEmployeeData({ ...data[0], employeeCode });
        } else {
          console.error("No employee ID found");
        }
      } catch (error) {
        console.error("Failed to fetch employee details", error);
      }
    };
    fetchEmployeeDetails();
  }, []);

  if (!employeeData) {
    return <div>Loading...</div>;
  }

  const columns = [
    { title: "Detail", dataIndex: "detail", key: "detail" },
    { title: "Information", dataIndex: "info", key: "info" },
  ];

  const data = [
    { key: "1", detail: "Employee Code", info: employeeData.employeeCode },
    {
      key: "2",
      detail: "Full Name",
      info: `${employeeData.firstName} ${employeeData.middelName || ""} ${employeeData.lastName}`.trim(),
    },
    { key: "3", detail: "Email", info: employeeData.email },
    { key: "4", detail: "Contact No", info: employeeData.contactNo },
    { key: "5", detail: "Department", info: employeeData.department },
    { key: "6", detail: "Position", info: employeeData.position },
    { key: "7", detail: "Manager", info: employeeData.managerId },
  ];

  return (
    <>
      <Navbar />
      <div
        style={{
          height: "100vh",
          backgroundColor: "#f0f2f5",
          padding: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          bordered
          style={{
            width: "80%",
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
            }}
          >
            <div style={{ flex: 1, textAlign: "center" }}>
              <Title
                level={4}
                style={{
                  margin: 0,
                  color: "white",
                  textTransform: "uppercase",
                  letterSpacing: "5px",
                }}
              >
                {employeeData.firstName} {employeeData.lastName}
              </Title>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <Avatar
              src={
                employeeData.firstName === "Danishraja"
                  ? DProfile
                  : "https://www.w3schools.com/howto/img_avatar.png"
              }
              size={200}
              icon={<UserOutlined />}
              style={{ marginRight: "20px", border: "2px solid #1890ff" }}
            />
            <div style={{ flex: 1 }}>
              <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                rowKey="key"
                showHeader={false}
                bordered={false}
                style={{ borderCollapse: "collapse" }}
              />
            </div>
          </div>
          <Button type="primary" style={{ marginTop: "10px", width: "100%" }}>
            Edit Profile
          </Button>
        </Card>
      </div>
      <AppFooter />
    </>
  );
};

export default Profile;
