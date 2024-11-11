import React, { useState } from "react";
import { Form, Input, Button, Typography, message, Row, Col } from "antd";
import { MailOutlined } from "@ant-design/icons";
import csLogo from "../assets/csLogo.png"; 

const { Title } = Typography;

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      
      await new Promise((resolve) => setTimeout(resolve, 1000));
      message.success("Password reset link has been sent to your email");
    } catch (err) {
      message.error("Error sending password reset link");
    }
    setLoading(false);
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
          name="forgotPassword"
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
            Forgot Password
          </Title>

          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              Send Reset Link
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default ForgotPassword;
