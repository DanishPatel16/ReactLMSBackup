import React from "react";
import { Layout, Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
// import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer style={styles.footerContainer }>
      <Row justify="space-between" align="middle" style={{padding:'0px 20px'}}>
        <Col>
          <p style={styles.text}>© 2024 - CoreScripts Technologies LTD</p>
        </Col>
        <Col>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
          >
            <FontAwesomeIcon icon={faFacebook} style={styles.icon} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
          >
            <FontAwesomeIcon icon={faInstagram} style={styles.icon} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
          >
            <FontAwesomeIcon icon={faLinkedin} style={styles.icon} />
          </a>
        </Col>
      </Row>
    </Footer>
  );
};

const styles = {
  footerContainer: {
    backgroundColor: "#007bff",
    padding: "20px 0px",
    margin:'auto',
    color: "#ffffff",
    width:' 100vw'
  },
  text: {
    margin: 0,
    fontSize: "14px",
  },
  iconLink: {
    color: "#ffffff",
    marginLeft: "15px",
  },
  icon: {
    fontSize: "20px",
  },
};

export default AppFooter;
