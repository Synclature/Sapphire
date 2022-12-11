import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Grid, _ } from 'gridjs-react';
import './index.css';
import { Link } from 'react-router-dom';

const Products = () => {
    document.title = 'Products';
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Products" pageTitle="Products" />
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
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Products;
