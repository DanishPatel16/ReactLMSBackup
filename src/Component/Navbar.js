import React from "react";
import { Menu, Modal } from "antd";
import {
  // HomeOutlined,
  UserOutlined,
  LogoutOutlined,
  UserAddOutlined,
  PlusCircleOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";
import "./Navbar.css";
import csLogo from "../assets/csLogo.png";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Modal.confirm({
      title: "Are you sure you want to logout?",
      content: "You will be redirected to the login page.",
      okText: "Yes",
      cancelText: "No",
      onOk: () => {
        navigate("/");
        localStorage.clear();
      },
    });
  };

  return (
    <Menu
      mode="horizontal"
      theme="light"
      className="ant-menu"
      style={{
        justifyContent: "right",
        backgroundColor: "#1890ff",
        borderBottom: "none",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Menu.Item key="logo" style={{ marginRight: "auto", cursor: "default" }}>
        <Link to="/Home">
          <img
            src={csLogo}
            alt="Corescripts Logo"
            style={{
              height: "30px",
              background: "white",
              padding: "10px",
              borderRadius: "5px",
              position: "relative",
              top: "9px",
            }}
          />
        </Link>
      </Menu.Item>

      <Menu.Item key="home" icon={<DashboardOutlined />}>
        <Link to="/Home">Dashboard</Link>
      </Menu.Item>

      <Menu.Item key="LeaveApply" icon={<PlusCircleOutlined />}>
        <Link to="/LeaveApply">Apply Leave</Link>
      </Menu.Item>

      <Menu.Item key="profile" icon={<UserOutlined />}>
        <Link to="/Profile">Profile</Link>
      </Menu.Item>

      <Menu.Item key="AddEmployee" icon={<UserAddOutlined />}>
        <Link to="/AddEmployee">Add Employee</Link>
      </Menu.Item>

      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
