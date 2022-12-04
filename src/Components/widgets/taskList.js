import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader } from 'reactstrap';

//SimpleBar
import SimpleBar from "simplebar-react";

const MyTasks = (props) => {
    return (
        <React.Fragment>
                <Card className="card-height-100">
                    <CardHeader className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">{props.title || 'MyTitle'}</h4>
                    </CardHeader>

                    <CardBody className="p-0">
                        <SimpleBar style={{ maxHeight: "219px" }}>
                            <ul className="list-group list-group-flush border-dashed px-3">
                                {(props.tasks || []).map((item, index) => (
                                    <li className="list-group-item ps-0" key={index}>
                                        <div className="d-flex align-items-start">
                                            <div className="form-check ps-0 flex-sharink-0">
                                                <input type="checkbox" className="form-check-input ms-0" id={item.forId} />
                                            </div>
                                            <div className="flex-grow-1">
                                                <label className="form-check-label mb-0 ps-2" htmlFor={item.forId}>{item.text}</label>
                                            </div>
                                            <div className="flex-shrink-0 ms-2">
                                                <p className="text-muted fs-12 mb-0">{item.date}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </SimpleBar>
                        <div className="p-3 pt-2">
                            <Link to={props.showmore} className="text-muted text-decoration-underline">Show more...</Link>
                        </div>
                    </CardBody>
                </Card>
        </React.Fragment>
    );
};

export default MyTasks;