import React, { useState } from "react";
import classnames from "classnames";
import { Accordion, AccordionItem, Container, Row, Col, Collapse, Card, CardBody, CardHeader, Table, Input, Label } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { Link } from "react-router-dom";

const SOA = () => {
  document.title = "SOA";
  // Accordions Bordered
    const [borderCol1, setborderCol1] = useState(true);
    const [borderCol2, setborderCol2] = useState(false);
    const [borderCol3, setborderCol3] = useState(false);
    const [borderCol4, setborderCol4] = useState(false);
    const [borderCol5, setborderCol5] = useState(false);
    const [borderCol6, setborderCol6] = useState(false);
    const [borderCol7, setborderCol7] = useState(false);
    const [borderCol8, setborderCol8] = useState(false);
    const [borderCol9, setborderCol9] = useState(false);
    const [borderCol10, setborderCol10] = useState(false);
    const [borderCol11, setborderCol11] = useState(false);
    const [borderCol12, setborderCol12] = useState(false);
    const [borderCol13, setborderCol13] = useState(false);
    const [borderCol14, setborderCol14] = useState(false);
    const [borderCol15, setborderCol15] = useState(false);

    const t_borderCol1 = () => {
        setborderCol1(!borderCol1);
        setborderCol2(false);
        setborderCol3(false);
    };

    const t_borderCol2 = () => {
        setborderCol2(!borderCol2);
        setborderCol1(false);
        setborderCol3(false);
    };

    const t_borderCol3 = () => {
        setborderCol3(!borderCol3);
        setborderCol1(false);
        setborderCol2(false);
    };

    const t_borderCol4 = () => {
        setborderCol4(!borderCol4);
        setborderCol1(false);
        setborderCol2(false);
    };

    const t_borderCol5 = () => {
        setborderCol5(!borderCol5);
        setborderCol1(false);
        setborderCol2(false);
    };

    const t_borderCol6 = () => {
        setborderCol6(!borderCol6);
        setborderCol1(false);
        setborderCol2(false);
    };

    const t_borderCol7 = () => {
        setborderCol7(!borderCol7);
        setborderCol1(false);
        setborderCol2(false);
    };

    const t_borderCol8 = () => {
        setborderCol8(!borderCol8);
        setborderCol1(false);
        setborderCol2(false);
    };

    const t_borderCol9 = () => {
        setborderCol9(!borderCol9);
        setborderCol1(false);
        setborderCol2(false);
    };

    const t_borderCol10 = () => {
        setborderCol10(!borderCol10);
        setborderCol1(false);
        setborderCol2(false);
    };

    const t_borderCol11 = () => {
        setborderCol11(!borderCol11);
        setborderCol1(false);
        setborderCol2(false);
    };

    const t_borderCol12 = () => {
        setborderCol12(!borderCol12);
        setborderCol1(false);
        setborderCol2(false);
    };

    const t_borderCol13 = () => {
        setborderCol13(!borderCol13);
        setborderCol1(false);
        setborderCol2(false);
    };

    const t_borderCol14 = () => {
        setborderCol14(!borderCol14);
        setborderCol1(false);
        setborderCol2(false);
    };

    const t_borderCol15 = () => {
        setborderCol15(!borderCol15);
        setborderCol1(false);
        setborderCol2(false);
    };
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb
            title="ISO 27001:2013 Controls"
            pageTitle="SOA"
          />
        <Row>
          <Col>
          

<Accordion className="custom-accordionwithicon custom-accordion-border accordion-border-box accordion-primary" id="accordionBordered">
    <AccordionItem>
        <h2 className="accordion-header" id="accordionborderedExample1">
            <button
                className={classnames("accordion-button", { collapsed: !borderCol1 })} type="button" onClick={t_borderCol1} style={{ cursor: "pointer" }} >
                A.5 Information security policies
            </button>
        </h2>
        <Collapse isOpen={borderCol1} className="accordion-collapse" id="accor_borderedExamplecollapse1" >
            <div className="accordion-body">
                <Card>
                  <CardHeader className="fs-14">A.5.1 Management direction for information security <br /> <span className="fs-12 text-muted mt-1">Objective: To provide management direction and support for information security in accordance with business requirements and relevant laws and regulations.</span></CardHeader>
                  <CardBody>
                    <div className="table-responsive">
                      <Table className="align-middle table-nowrap mb-0">
                          <thead className="table-light">
                              <tr>
                                  <th scope="col">Control Objectives</th>
                                  <th scope="col">Controls</th>
                                  <th scope="col">Evidence expected</th>
                                  <th scope="col">Selected</th>
                                  <th scope="col">Justification</th>
                                  <th scope="col">Legal Requirement</th>
                                  <th scope="col">Contractual Obligation</th>
                                  <th scope="col">Business Requirement</th>
                                  <th scope="col">Risk Requirement</th>
                                  <th scope="col">Responsibility</th>
                                  <th scope="col">Control Status</th>
                                  <th scope="col">Notes/Document Reference</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>Policies for information security</td>
                                  <td>A set of policies for information security shall be defined, approved by management, published and communicated to employees and relevant external parties.</td>
                                  <td className="text-center"><i className="mdi mdi-attachment fs-22"></i>
                                  </td>
                                  <td className="text-center"><Input className="form-check-input" type="checkbox" /></td>
                                  <td><Input className="form-control" type="text" style={{ width: "200px" }} /></td>
                                  <td className="text-center"><Input className="form-check-input" type="checkbox" /></td>
                                  <td className="text-center"><Input className="form-check-input" type="checkbox" /></td>
                                  <td className="text-center"><Input className="form-check-input" type="checkbox" /></td>
                                  <td className="text-center"><Input className="form-check-input" type="checkbox" /></td>
                                  <td>
                                    <select className="form-select" style={{ width: '200px'}} aria-label="Default select example">
                                        <option >Select </option>
                                        <option defaultValue="1">Abhishek</option>
                                        <option defaultValue="2">Himanshu</option>
                                        <option defaultValue="3">Akhilesh</option>
                                    </select>
                                  </td>
                                  <td>
                                    <select className="form-select" style={{ width: '200px'}} aria-label="Default select example">
                                        <option >Select </option>
                                        <option defaultValue="1">Started</option>
                                        <option defaultValue="2">Planning Hold</option>
                                        <option defaultValue="3">Work in Progress</option>
                                        <option defaultValue="3">Not Implemented</option>
                                        <option defaultValue="3">Implemented</option>
                                    </select>
                                  </td>
                                  <td><Input className="form-control" type="text" style={{ width: "200px" }} /></td>

                              </tr>

                              <tr>
                                  <td>Review of the policies for information security</td>
                                  <td>"The policies for information security shall be reviewed at planned
intervals or if significant changes occur to ensure their continuing
suitability, adequacy and effectiveness."</td>
                                  <td className="text-center"><i className="mdi mdi-attachment fs-22"></i>
                                  </td>
                                  <td className="text-center"><Input className="form-check-input" type="checkbox" /></td>
                                  <td><Input className="form-control" type="text" style={{ width: "200px" }} /></td>
                                  <td className="text-center"><Input className="form-check-input" type="checkbox" /></td>
                                  <td className="text-center"><Input className="form-check-input" type="checkbox" /></td>
                                  <td className="text-center"><Input className="form-check-input" type="checkbox" /></td>
                                  <td className="text-center"><Input className="form-check-input" type="checkbox" /></td>
                                  <td>
                                    <select className="form-select" style={{ width: '200px'}} aria-label="Default select example">
                                        <option >Select </option>
                                        <option defaultValue="1">Abhishek</option>
                                        <option defaultValue="2">Himanshu</option>
                                        <option defaultValue="3">Akhilesh</option>
                                    </select>
                                  </td>
                                  <td>
                                    <select className="form-select" style={{ width: '200px'}} aria-label="Default select example">
                                        <option >Select </option>
                                        <option defaultValue="1">Started</option>
                                        <option defaultValue="2">Planning Hold</option>
                                        <option defaultValue="3">Work in Progress</option>
                                        <option defaultValue="3">Not Implemented</option>
                                        <option defaultValue="3">Implemented</option>
                                    </select>
                                  </td>
                                  <td><Input className="form-control" type="text" style={{ width: "200px" }} /></td>

                              </tr>
                              
                          </tbody>
                      </Table>                                                
</div>
                  </CardBody>
                </Card>
            </div>
        </Collapse>
    </AccordionItem>
    <AccordionItem>
        <h2 className="accordion-header" id="accordionborderedExample2">
            <button
                className={classnames("accordion-button", { collapsed: !borderCol2 })} type="button" onClick={t_borderCol2} style={{ cursor: "pointer" }} >
                A.6 Organisation of information security
            </button>
        </h2>
        <Collapse isOpen={borderCol2} className="accordion-collapse" id="accor_borderedExamplecollapse2" >
            <div className="accordion-body">
            </div>
        </Collapse>
    </AccordionItem>
    <AccordionItem>
        <h2 className="accordion-header" id="accordionborderedExample3">
            <button
                className={classnames("accordion-button", { collapsed: !borderCol3 })} type="button" onClick={t_borderCol3} style={{ cursor: "pointer" }} >
                A.7 Human resource security
            </button>
        </h2>
        <Collapse isOpen={borderCol3} className="accordion-collapse" id="accor_borderedExamplecollapse3" >
            <div className="accordion-body">
            </div>
        </Collapse>
    </AccordionItem>
    <AccordionItem>
        <h2 className="accordion-header" id="accordionborderedExample4">
            <button
                className={classnames("accordion-button", { collapsed: !borderCol4 })} type="button" onClick={t_borderCol4} style={{ cursor: "pointer" }} >
                A.8 Asset management
            </button>
        </h2>
        <Collapse isOpen={borderCol4} className="accordion-collapse" id="accor_borderedExamplecollapse4" >
            <div className="accordion-body">
            </div>
        </Collapse>
    </AccordionItem>
    <AccordionItem>
        <h2 className="accordion-header" id="accordionborderedExample5">
            <button
                className={classnames("accordion-button", { collapsed: !borderCol5 })} type="button" onClick={t_borderCol5} style={{ cursor: "pointer" }} >
A.9 Access control            </button>
        </h2>
        <Collapse isOpen={borderCol5} className="accordion-collapse" id="accor_borderedExamplecollapse5" >
            <div className="accordion-body">
            </div>
        </Collapse>
    </AccordionItem>
    <AccordionItem>
        <h2 className="accordion-header" id="accordionborderedExample6">
            <button
                className={classnames("accordion-button", { collapsed: !borderCol6 })} type="button" onClick={t_borderCol6} style={{ cursor: "pointer" }} >
A.10 Cryptography												           </button>
        </h2>
        <Collapse isOpen={borderCol6} className="accordion-collapse" id="accor_borderedExamplecollapse6" >
            <div className="accordion-body">
            </div>
        </Collapse>
    </AccordionItem>
    <AccordionItem>
        <h2 className="accordion-header" id="accordionborderedExample7">
            <button
                className={classnames("accordion-button", { collapsed: !borderCol7 })} type="button" onClick={t_borderCol7} style={{ cursor: "pointer" }} >
A.11 Physical and environmental security																						           </button>
        </h2>
        <Collapse isOpen={borderCol7} className="accordion-collapse" id="accor_borderedExamplecollapse7" >
            <div className="accordion-body">
            </div>
        </Collapse>
    </AccordionItem>
    <AccordionItem>
        <h2 className="accordion-header" id="accordionborderedExample8">
            <button
                className={classnames("accordion-button", { collapsed: !borderCol8 })} type="button" onClick={t_borderCol8} style={{ cursor: "pointer" }} >
A.11 Physical and environmental security																						           </button>
        </h2>
        <Collapse isOpen={borderCol8} className="accordion-collapse" id="accor_borderedExamplecollapse8" >
            <div className="accordion-body">
            </div>
        </Collapse>
    </AccordionItem>
    <AccordionItem>
        <h2 className="accordion-header" id="accordionborderedExample9">
            <button
                className={classnames("accordion-button", { collapsed: !borderCol9 })} type="button" onClick={t_borderCol9} style={{ cursor: "pointer" }} >
A.12 Operations security																																		           </button>
        </h2>
        <Collapse isOpen={borderCol9} className="accordion-collapse" id="accor_borderedExamplecollapse9" >
            <div className="accordion-body">
            </div>
        </Collapse>
    </AccordionItem>
    <AccordionItem>
        <h2 className="accordion-header" id="accordionborderedExample10">
            <button
                className={classnames("accordion-button", { collapsed: !borderCol10 })} type="button" onClick={t_borderCol10} style={{ cursor: "pointer" }} >
A.110 Communications security																																											           </button>
        </h2>
        <Collapse isOpen={borderCol10} className="accordion-collapse" id="accor_borderedExamplecollapse10" >
            <div className="accordion-body">
            </div>
        </Collapse>
    </AccordionItem>
    <AccordionItem>
        <h2 className="accordion-header" id="accordionborderedExample11">
            <button
                className={classnames("accordion-button", { collapsed: !borderCol11 })} type="button" onClick={t_borderCol11} style={{ cursor: "pointer" }} >
A.14 System acquisition, development and maintenance																																																					           </button>
        </h2>
        <Collapse isOpen={borderCol11} className="accordion-collapse" id="accor_borderedExamplecollapse11" >
            <div className="accordion-body">
            </div>
        </Collapse>
    </AccordionItem>
    <AccordionItem>
        <h2 className="accordion-header" id="accordionborderedExample12">
            <button
                className={classnames("accordion-button", { collapsed: !borderCol12 })} type="button" onClick={t_borderCol12} style={{ cursor: "pointer" }} >
A.15 Supplier relationships																																																																           </button>
        </h2>
        <Collapse isOpen={borderCol12} className="accordion-collapse" id="accor_borderedExamplecollapse12" >
            <div className="accordion-body">
            </div>
        </Collapse>
    </AccordionItem>
    <AccordionItem>
        <h2 className="accordion-header" id="accordionborderedExample13">
            <button
                className={classnames("accordion-button", { collapsed: !borderCol13 })} type="button" onClick={t_borderCol13} style={{ cursor: "pointer" }} >
A.16 Information security incident management																																																																										           </button>
        </h2>
        <Collapse isOpen={borderCol13} className="accordion-collapse" id="accor_borderedExamplecollapse13" >
            <div className="accordion-body">
            </div>
        </Collapse>
    </AccordionItem>
    <AccordionItem>
        <h2 className="accordion-header" id="accordionborderedExample14">
            <button
                className={classnames("accordion-button", { collapsed: !borderCol14 })} type="button" onClick={t_borderCol14} style={{ cursor: "pointer" }} >
A.17 Information security aspects of business continuity management																																																																																				           </button>
        </h2>
        <Collapse isOpen={borderCol14} className="accordion-collapse" id="accor_borderedExamplecollapse14" >
            <div className="accordion-body">
            </div>
        </Collapse>
    </AccordionItem>
    <AccordionItem>
        <h2 className="accordion-header" id="accordionborderedExample15">
            <button
                className={classnames("accordion-button", { collapsed: !borderCol15 })} type="button" onClick={t_borderCol15} style={{ cursor: "pointer" }} >
A.18 Compliance																																																																																														           </button>
        </h2>
        <Collapse isOpen={borderCol15} className="accordion-collapse" id="accor_borderedExamplecollapse15" >
            <div className="accordion-body">
            </div>
        </Collapse>
    </AccordionItem>
</Accordion>
          </Col>
        </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default SOA;
