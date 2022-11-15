import React from "react";
import { Container, Row, Col } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { Link } from "react-router-dom";

const D = () => {
  document.title = "Risk Register";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Risk Register" pageTitle="Risk Register" />
          <Row>
            <Col>
              <div className="table-responsive table-card">
                <table className="table align-middle table-nowrap table-striped-columns mb-0">
                  <thead className="table-light">
                    <tr>
                      <th scope="col" style={{ width: "46px" }}>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="cardtableCheck"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="cardtableCheck"
                          ></label>
                        </div>
                      </th>
                      <th scope="col">Risk</th>
                      <th scope="col">Category</th>
                      <th scope="col">Inherent Risk</th>
                      <th scope="col">Risk Treatment</th>
                      <th scope="col">Controls</th>
                      <th scope="col">Residual Risk</th>
                      <th scope="col text-center">
                        <i className="mdi mdi-account fs-18"></i>
                      </th>
                      <th scope="col text-center">
                        <i className="mdi mdi-check fs-18"></i>
                      </th>
                      <th scope="col text-center">
                        <i className="mdi mdi-clock fs-18"></i>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="cardtableCheck01"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="cardtableCheck01"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <Link to="#" className="d-flex flex-column">
                          <span className="text-primary fw-bold fs-16">
                            Customer misuse the system due to their failure to
                            under
                          </span>
                          <span>Risk ID: 4</span>
                        </Link>
                      </td>
                      <td>Customer</td>
                      <td className="text-center">
                        <span className="badge badge-soft-danger fs-16">
                          High
                        </span>
                      </td>
                      <td>Mitigate</td>
                      <td className="text-center">
                        <span className="badge badge-outline-primary fs-16">
                          6
                        </span>
                      </td>
                      <td className="text-center">
                        <span className="badge badge-soft-danger fs-16">
                          High
                        </span>
                      </td>
                      <td>
                        <div className="avatar-xs">
                          <div className="avatar-title rounded-circle bg-soft-info text-info">
                            AN
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <i className="mdi mdi-circle text-danger"></i>
                      </td>
                      <td className="text-center">
                        <i className="mdi mdi-circle text-danger"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="cardtableCheck01"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="cardtableCheck01"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <Link to="#" className="d-flex flex-column">
                          <span className="text-primary fw-bold fs-16">
                            Customer misuse the system due to their failure to
                            under
                          </span>
                          <span>Risk ID: 4</span>
                        </Link>
                      </td>
                      <td>Customer</td>
                      <td className="text-center">
                        <span className="badge badge-soft-warning fs-16">
                          Medium
                        </span>
                      </td>
                      <td>Mitigate</td>
                      <td className="text-center">
                        <span className="badge badge-outline-primary fs-16">
                          6
                        </span>
                      </td>
                      <td className="text-center">
                        <span className="badge badge-soft-danger fs-16">
                          High
                        </span>
                      </td>
                      <td>
                        <div className="avatar-xs">
                          <div className="avatar-title rounded-circle bg-soft-info text-info">
                            AN
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <i className="mdi mdi-circle text-warning"></i>
                      </td>
                      <td className="text-center">
                        <i className="mdi mdi-circle text-success"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="cardtableCheck01"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="cardtableCheck01"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <Link to="#" className="d-flex flex-column">
                          <span className="text-primary fw-bold fs-16">
                            Customer misuse the system due to their failure to
                            under
                          </span>
                          <span>Risk ID: 4</span>
                        </Link>
                      </td>
                      <td>Customer</td>
                      <td className="text-center">
                        <span className="badge badge-soft-success fs-16">
                          Low
                        </span>
                      </td>
                      <td>Mitigate</td>
                      <td className="text-center">
                        <span className="badge badge-outline-primary fs-16">
                          6
                        </span>
                      </td>
                      <td className="text-center">
                        <span className="badge badge-soft-danger fs-16">
                          High
                        </span>
                      </td>
                      <td>
                        <div className="avatar-xs">
                          <div className="avatar-title rounded-circle bg-soft-info text-info">
                            AN
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <i className="mdi mdi-circle text-success"></i>
                      </td>
                      <td className="text-center">
                        <i className="mdi mdi-circle text-success"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="cardtableCheck01"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="cardtableCheck01"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <Link to="#" className="d-flex flex-column">
                          <span className="text-primary fw-bold fs-16">
                            Customer misuse the system due to their failure to
                            under
                          </span>
                          <span>Risk ID: 4</span>
                        </Link>
                      </td>
                      <td>Customer</td>
                      <td className="text-center">
                        <span className="badge badge-soft-danger fs-16">
                          High
                        </span>
                      </td>
                      <td>Mitigate</td>
                      <td className="text-center">
                        <span className="badge badge-outline-primary fs-16">
                          6
                        </span>
                      </td>
                      <td className="text-center">
                        <span className="badge badge-soft-danger fs-16">
                          High
                        </span>
                      </td>
                      <td>
                        <div className="avatar-xs">
                          <div className="avatar-title rounded-circle bg-soft-info text-info">
                            AN
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <i className="mdi mdi-circle text-danger"></i>
                      </td>
                      <td className="text-center">
                        <i className="mdi mdi-circle text-danger"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="cardtableCheck01"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="cardtableCheck01"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <Link to="#" className="d-flex flex-column">
                          <span className="text-primary fw-bold fs-16">
                            Customer misuse the system due to their failure to
                            under
                          </span>
                          <span>Risk ID: 4</span>
                        </Link>
                      </td>
                      <td>Customer</td>
                      <td className="text-center">
                        <span className="badge badge-soft-danger fs-16">
                          High
                        </span>
                      </td>
                      <td>Mitigate</td>
                      <td className="text-center">
                        <span className="badge badge-outline-primary fs-16">
                          6
                        </span>
                      </td>
                      <td className="text-center">
                        <span className="badge badge-soft-danger fs-16">
                          High
                        </span>
                      </td>
                      <td>
                        <div className="avatar-xs">
                          <div className="avatar-title rounded-circle bg-soft-info text-info">
                            AN
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <i className="mdi mdi-circle text-danger"></i>
                      </td>
                      <td className="text-center">
                        <i className="mdi mdi-circle text-danger"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="cardtableCheck01"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="cardtableCheck01"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <Link to="#" className="d-flex flex-column">
                          <span className="text-primary fw-bold fs-16">
                            Customer misuse the system due to their failure to
                            under
                          </span>
                          <span>Risk ID: 4</span>
                        </Link>
                      </td>
                      <td>Customer</td>
                      <td className="text-center">
                        <span className="badge badge-soft-danger fs-16">
                          High
                        </span>
                      </td>
                      <td>Mitigate</td>
                      <td className="text-center">
                        <span className="badge badge-outline-primary fs-16">
                          6
                        </span>
                      </td>
                      <td className="text-center">
                        <span className="badge badge-soft-danger fs-16">
                          High
                        </span>
                      </td>
                      <td>
                        <div className="avatar-xs">
                          <div className="avatar-title rounded-circle bg-soft-info text-info">
                            AN
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <i className="mdi mdi-circle text-danger"></i>
                      </td>
                      <td className="text-center">
                        <i className="mdi mdi-circle text-danger"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="cardtableCheck01"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="cardtableCheck01"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <Link to="#" className="d-flex flex-column">
                          <span className="text-primary fw-bold fs-16">
                            Customer misuse the system due to their failure to
                            under
                          </span>
                          <span>Risk ID: 4</span>
                        </Link>
                      </td>
                      <td>Customer</td>
                      <td className="text-center">
                        <span className="badge badge-soft-danger fs-16">
                          High
                        </span>
                      </td>
                      <td>Mitigate</td>
                      <td className="text-center">
                        <span className="badge badge-outline-primary fs-16">
                          6
                        </span>
                      </td>
                      <td className="text-center">
                        <span className="badge badge-soft-danger fs-16">
                          High
                        </span>
                      </td>
                      <td>
                        <div className="avatar-xs">
                          <div className="avatar-title rounded-circle bg-soft-info text-info">
                            AN
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <i className="mdi mdi-circle text-danger"></i>
                      </td>
                      <td className="text-center">
                        <i className="mdi mdi-circle text-danger"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="cardtableCheck01"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="cardtableCheck01"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <Link to="#" className="d-flex flex-column">
                          <span className="text-primary fw-bold fs-16">
                            Customer misuse the system due to their failure to
                            under
                          </span>
                          <span>Risk ID: 4</span>
                        </Link>
                      </td>
                      <td>Customer</td>
                      <td className="text-center">
                        <span className="badge badge-soft-danger fs-16">
                          High
                        </span>
                      </td>
                      <td>Mitigate</td>
                      <td className="text-center">
                        <span className="badge badge-outline-primary fs-16">
                          6
                        </span>
                      </td>
                      <td className="text-center">
                        <span className="badge badge-soft-danger fs-16">
                          High
                        </span>
                      </td>
                      <td>
                        <div className="avatar-xs">
                          <div className="avatar-title rounded-circle bg-soft-info text-info">
                            AN
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <i className="mdi mdi-circle text-danger"></i>
                      </td>
                      <td className="text-center">
                        <i className="mdi mdi-circle text-danger"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="cardtableCheck01"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="cardtableCheck01"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <Link to="#" className="d-flex flex-column">
                          <span className="text-primary fw-bold fs-16">
                            Customer misuse the system due to their failure to
                            under
                          </span>
                          <span>Risk ID: 4</span>
                        </Link>
                      </td>
                      <td>Customer</td>
                      <td className="text-center">
                        <span className="badge badge-soft-danger fs-16">
                          High
                        </span>
                      </td>
                      <td>Mitigate</td>
                      <td className="text-center">
                        <span className="badge badge-outline-primary fs-16">
                          6
                        </span>
                      </td>
                      <td className="text-center">
                        <span className="badge badge-soft-danger fs-16">
                          High
                        </span>
                      </td>
                      <td>
                        <div className="avatar-xs">
                          <div className="avatar-title rounded-circle bg-soft-info text-info">
                            AN
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <i className="mdi mdi-circle text-danger"></i>
                      </td>
                      <td className="text-center">
                        <i className="mdi mdi-circle text-danger"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="cardtableCheck01"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="cardtableCheck01"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <Link to="#" className="d-flex flex-column">
                          <span className="text-primary fw-bold fs-16">
                            Customer misuse the system due to their failure to
                            under
                          </span>
                          <span>Risk ID: 4</span>
                        </Link>
                      </td>
                      <td>Customer</td>
                      <td className="text-center">
                        <span className="badge badge-soft-danger fs-16">
                          High
                        </span>
                      </td>
                      <td>Mitigate</td>
                      <td className="text-center">
                        <span className="badge badge-outline-primary fs-16">
                          6
                        </span>
                      </td>
                      <td className="text-center">
                        <span className="badge badge-soft-danger fs-16">
                          High
                        </span>
                      </td>
                      <td>
                        <div className="avatar-xs">
                          <div className="avatar-title rounded-circle bg-soft-info text-info">
                            AN
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <i className="mdi mdi-circle text-danger"></i>
                      </td>
                      <td className="text-center">
                        <i className="mdi mdi-circle text-danger"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default D;
