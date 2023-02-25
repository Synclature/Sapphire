import React, { useState } from 'react';
import { Button, Container, Row, Col, Input, Modal, ModalBody, ModalFooter } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Grid, _ } from 'gridjs-react';
import './index.css';
import { Link } from 'react-router-dom';

const Products = () => {
    document.title = 'Products';
    const [modal_standard, setmodal_standard] = useState(false);

    function tog_standard() {
        setmodal_standard(!modal_standard);
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Products" pageTitle="Products" />
                    <Row>
                        <Col className="d-flex justify-content-end">
                            <button className="btn btn-primary" onClick={() => tog_standard()}>
                                <i className="las la-plus mr-sm-2"></i>
                            </button>
                        </Col>
                    </Row>
                    <Row id="job-list">
                        <Col lg={4} md={6}>
                            <div className="card card-body text-center">
                                <div className="avatar-sm mx-auto mb-3">
                                    <div className="avatar-title bg-light text-primary fs-20 rounded">
                                        FP
                                    </div>
                                </div>
                                <h4 className="card-title">Flagship Product</h4>
                                <p className="card-text text-muted">Description</p>
                                <Link to="#" className="btn btn-soft-primary">
                                    View Product Details
                                </Link>
                            </div>
                        </Col>
                    </Row>

                    <Modal
                        id="myModal"
                        isOpen={modal_standard}
                        toggle={() => {
                            tog_standard();
                        }}>
                        <ModalBody>
                            <form action="#">
                                <div className="row g-3">
                                    <p className="fs-22">Create Product</p>
                                    <Col sm="12">
                                        <div>
                                            <label htmlFor="Name" className="form-label">
                                                Product Name
                                            </label>
                                            <Input
                                                type="text"
                                                className="form-control"
                                                id="Name"
                                                placeholder="Enter Product Name"
                                            />
                                        </div>
                                    </Col>
                                    <Col sm="12">
                                        <label htmlFor="ProductDesc" className="form-label">
                                            Product Description
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="ProductDesc"
                                            rows="3"></textarea>
                                    </Col>
                                </div>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="light"
                                onClick={() => {
                                    tog_standard();
                                }}>
                                Close
                            </Button>
                            <Button color="primary">Create</Button>
                        </ModalFooter>
                    </Modal>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Products;
