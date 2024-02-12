// components/UserDetails.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons"; // Import required FontAwesome icons
import { logoutUser } from "../actions/userActions";
const UserDetails = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleLogout = () => {
    // Dispatch the logoutUser action when the logout button is clicked
    dispatch(logoutUser());
  };

  return (
    <div>
      <header
        style={{
          backgroundColor: "#6a62d2",
          color: "white",
          padding: "10px 20px",
          marginBottom: "20px",
        }}
      >
        <Container fluid>
          <Row className="align-items-center">
            <Col xs={6}>
              <Row>
                <Col>
                  <FontAwesomeIcon
                    icon={faUser}
                    size="2x"
                    style={{ marginRight: "10px" }}
                  />
                  <span>{user.name}</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span>{user.phone}</span>
                </Col>
              </Row>
            </Col>
            <Col className="d-flex justify-content-end" xs={6}>
              <Button variant="light" onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} />
                Logout
              </Button>
            </Col>
          </Row>
        </Container>
      </header>

      <Container
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Row className="align-items-center flex-grow-1">
          {/* Column 1 */}
          <Col md={6} className="d-flex flex-column justify-content-between">
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <FontAwesomeIcon icon={faUser} size="5x" />
              <h4>{user.name}</h4>
              <p>{user.phone}</p>
              <p>{user.email}</p>
            </div>
          </Col>
          {/* Column 2 */}
          <Col md={6} className="d-flex flex-column justify-content-between">
            <div>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li>Street: {user.address.street}</li>
                <li>City: {user.address.city}</li>
                <li>Suite: {user.address.suite}</li>
                <li>Zip: {user.address.zipcode}</li>
                <li>Website: {user.website}</li>
                <li>Company Name: {user.company.name}</li>
                {/* Add more details as needed */}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserDetails;
