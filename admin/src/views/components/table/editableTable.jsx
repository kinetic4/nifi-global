import React, { useState } from 'react'
import { Row, Col, Button, Container } from 'react-bootstrap';
import Card from '../../../components/Card';
import { Link } from 'react-router-dom';

const EditableTable = () => {
  const data = [
    {
      id: 1,
      Name: "Gio Metric",
      Age: "25",
      Company: "Deepends",
      Country: "Spain",
      City: "Madrid",
    },
    {
      id: 2,
      Name: "Manny Petty",
      Age: "45",
      Company: "Insectus",
      Country: "France",
      City: "San Francisco",
    },
    {
      id: 3,
      Name: "Lucy Tania",
      Age: "26",
      Company: "Isotronic",
      Country: "Germany",
      City: "Frankfurt am Main",
    },
    {
      id: 4,
      Name: "Anna Mull",
      Age: "35",
      Company: "Portica",
      Country: "USA",
      City: "Oregon",
    },
  ];

  const [Add, setAdd] = useState(data);
  const [addFormData] = useState({
    id: "",
    Name: "",
    Age: "",
    Company: "",
    Country: "",
    City: "",
  });

  const addNewValue = () => {
    setAdd(Add.concat(data[3]))
  }

  const handleAddFormChanges = (event) => {
    event.preventDefault();
    const id = event.target.closest("tr").getAttribute("dataid");
    const tdElem = event.target.closest("tr").querySelectorAll("td");
    const obj = {
      id: Number(id),
    };
    Array.from(tdElem, (elem) => {
      if (elem.getAttribute("name") !== null) {
        obj[elem.getAttribute("name")] = elem.innerText;
      }
      return null;
    });
    const newArrIndex = Add.findIndex((item) => {
      if (item.id === Number(id)) {
        return item;
      } else {
        return null;
      }
    });
    Add[newArrIndex] = obj;
    setAdd(Add);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    let newContact = {
      id: Add.length + 1,
      Name: addFormData.Name,
      Age: addFormData.Age,
      Company: addFormData.Company,
      Country: addFormData.Country,
      City: addFormData.City,
    };
    const newContacts = [...Add, newContact];
    setAdd(newContacts);
  };
  const handleDeleteClick = (addId) => {
    const newContacts = [...Add];
    const index = Add.findIndex((adds) => adds.id === addId);
    newContacts.splice(index, 1);
    setAdd(newContacts);
  };

  return (
    <>
      <Container id="content-page" fluid>
        <Row>
          <Col sm="12">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Editable Table</h4>
                </Card.Header.Title>
              </Card.Header>
              <Card.Body>
                <div id="table" className="table-editable d-flex flex-column">

                  <div>
                    <span className="table-add float-end mb-3 me-2">
                      <button className="btn btn-sm bg-primary"><i
                        className="ri-add-fill" onClick={addNewValue}><span className="pl-1">Add New</span></i>
                      </button>
                    </span>
                  </div>
                  <div className='table-responsive'>
                    <table className="table table-bordered table-responsive table-striped text-center">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Age</th>
                          <th>Company Name</th>
                          <th>Country</th>
                          <th>City</th>
                          <th>Sort</th>
                          <th>Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Add.map((adds, props) => (
                          <tr key={props} dataid={adds.id}>
                            <td
                              name="Name"
                              contentEditable={true}
                              suppressContentEditableWarning={true}
                              onBlur={handleAddFormChanges}
                            >
                              {adds.Name}
                            </td>
                            <td
                              name="Age"
                              contentEditable={true}
                              suppressContentEditableWarning={true}
                              onBlur={handleAddFormChanges}
                            >
                              {adds.Age}
                            </td>
                            <td
                              name="Company"
                              contentEditable={true}
                              suppressContentEditableWarning={true}
                              onBlur={handleAddFormChanges}
                            >
                              {adds.Company}
                            </td>
                            <td
                              name="Country"
                              contentEditable={true}
                              suppressContentEditableWarning={true}
                              onBlur={handleAddFormChanges}
                            >
                              {adds.Country}
                            </td>
                            <td
                              name="City"
                              contentEditable={true}
                              suppressContentEditableWarning={true}
                              onBlur={handleAddFormChanges}
                            >
                              {adds.City}
                            </td>
                            <td>
                              <span className="table-up">
                                <Link href="#" className="indigo-text">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="blue">
                                    <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                  </svg>
                                </Link>
                              </span>{" "}
                              <span className="table-down">
                                <Link href="#" className="indigo-text">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="blue">
                                    <path fill-rule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                  </svg>
                                </Link>
                              </span>
                            </td>
                            <td>
                              <span className="table-remove">
                                <Button
                                  onClick={() => handleDeleteClick(adds.id)}
                                  className="btn btn-danger-subtle rounded border-0 btn-sm my-0"
                                >
                                  Remove
                                </Button>
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default EditableTable