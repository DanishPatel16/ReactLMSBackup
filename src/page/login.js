import React, { useState } from "react";
import { Form, Input, Button, Typography, message, Row, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import csLogo from "../assets/csLogo.png";
import { userLogin } from "../services/LoginServices";

const { Title } = Typography;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const credentials = { username, password };
      const response = await userLogin(credentials);

      if (response?.success === true) {
        message.success("Login successful");
        console.log("Login successful:", response);
        navigate("/Home");

        // console.log("Result : " + response?.result?.employeeId);
        // localStorage.setItem("Result", response?.result?.employeeId);
        const employeeId = response?.result?.employeeId;
        const employeeCode = response?.result?.employeeCode;

        console.log("Employee ID: " + employeeId);
        console.log("Employee Code: " + employeeCode);

        localStorage.setItem("EmployeeID", employeeId);
        localStorage.setItem("EmployeeCode", employeeCode);
      } else {
        message.error("Invalid username or password");
      }
    } catch (err) {
      message.error("Error during login");
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Row style={{ height: "100vh" }}>
      <Col
        span={12}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <img
          src={csLogo}
          alt="Logo"
          style={{
            maxWidth: "100%",
            height: "auto",
            padding: "20px",
          }}
        />
      </Col>

      <Col
        span={12}
        style={{
          backgroundColor: "#1890ff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form
          name="login"
          onFinish={handleSubmit}
          style={{
            maxWidth: "400px",
            width: "100%",
            padding: "20px",
            backgroundColor: "white",
            borderRadius: "8px",
          }}
        >
          <Title level={2} style={{ textAlign: "center", color: "#333" }}>
            Login
          </Title>

          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Username/email"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              Login
            </Button>
          </Form.Item>

          <Form.Item>
            <Link
              to="/ForgotPassword"
              style={{ display: "block", textAlign: "center" }}
            >
              Forgot your password?
            </Link>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
