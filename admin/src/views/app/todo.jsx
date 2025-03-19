import React, { useState } from 'react'
import { Col, Row, Dropdown, ButtonGroup, Button, Container } from "react-bootstrap";
import Card from "../../components/Card";
// import CustomToggle from "../../../components/dropdowns";
import { ReactSortable } from "react-sortablejs";

//TodoBoardCard
import TodoBoardCard from "../../components/TodoBoardCard";
import TodoListCard from "../../components/TodoListCard";

const Todo = () => {
  const [state1, setState1] = useState([
    { id: "1", class: "border-color-left-blue", title: "Launch SpaceX" },
    { id: "2", class: "border-color-left-red", title: "New Updates" },
    { id: "3", class: "border-color-left-yellow", title: "Night mode" },
    { id: "4", class: "border-color-left-green", title: "Use-cases" },
  ]);
  const [state2, setState2] = useState([
    { id: "7", title: "New Updates" },
    { id: "6", class: "border-color-left-yellow", title: "Launch SpaceX" },
    { id: "9", class: "border-color-left-red", title: "Use-cases" },
    { id: "8", class: "border-color-left-blue", title: "Night mode" },
  ]);
  const [state3, setState3] = useState([
    { id: "13", class: "border-color-left-red", title: "Night mode" },
    { id: "11", class: "border-color-left-blue", title: "Launch SpaceX" },
    { id: "14", class: "border-color-left-green", title: "Use-cases" },
    { id: "12", class: "border-color-left-red", title: "New Updates" },
  ]);
  const [state4, setState4] = useState([
    { id: "19", title: "Use-cases" },
    { id: "17", className: "border-color-left-red", title: "New Updates" },
    { id: "18", title: "Night mode" },
    { id: "16", title: "Launch SpaceX" },
  ]);
  const [tab, SetTab] = useState(true);
  return (
    <div>
      <Container fluid>
        <Row >
          <Col md="12">
            <Card>
              <Card.Header className="border-bottom-0">
                <Card.Header.Title>
                  <h4 className="card-title">Todo</h4>
                </Card.Header.Title>
                <Card.Header.Action>
                  <ButtonGroup
                    className="btn-group btn-group-sm"
                    role="group"
                    aria-label="Basic example"
                  >
                    <Button
                      type="button"
                      variant={`outline-primary ${tab === true ? "active" : ""
                        }`}
                      onClick={() => SetTab(true)}
                      data-toggle-extra="tab"
                      data-target-extra="#board-content"
                    >
                      Board
                    </Button>
                    <Button
                      type="button"
                      variant={`outline-primary ${tab === false ? "active" : ""
                        } `}
                      onClick={() => SetTab(false)}
                      data-toggle-extra="tab"
                      data-target-extra="#list-content"
                    >
                      List
                    </Button>
                  </ButtonGroup>
                </Card.Header.Action>
              </Card.Header>
            </Card>
          </Col>
          <Col md={12}>
            <div
              id="board-content"
              className={`animate__animated animate__fadeIn ${tab === true ? "active" : ""
                }`}
              data-toggle-extra="tab-content"
            >
              <div className="board-content">
                <div className="board-item">
                  <Card>
                    <Card.Body>
                      <h5 className="item-title">Todo</h5>
                    </Card.Body>
                  </Card>
                  <div className="board-scrollbar board-scrollbar-0">
                    <ReactSortable
                      list={state1}
                      group={{
                        name: "group1",
                        put: ["group1", "group2", "group3", "group4"],
                      }}
                      pull={true}
                      animation={200}
                      delayOnTouchStart={true}
                      delay={2}
                      setList={setState1}
                    >
                      {state1.map((item, index) => (
                        <div key={index}>
                          <TodoBoardCard
                            id={item.id}
                            className={item.class}
                            title={item.title}
                          />
                        </div>
                      ))}
                    </ReactSortable>
                  </div>
                </div>
                <div className="board-item">
                  <Card>
                    <Card.Body>
                      <h5 className="item-title">In Progress</h5>
                    </Card.Body>
                  </Card>
                  <div className="board-scrollbar board-scrollbar-0">
                    <ReactSortable
                      list={state2}
                      group={{
                        name: "group1",
                        put: ["group1", "group2", "group3", "group4"],
                      }}
                      pull={true}
                      animation={200}
                      delayOnTouchStart={true}
                      delay={2}
                      setList={setState2}
                    >
                      {state2.map((item, index) => (
                        <div key={index}>
                          <TodoBoardCard
                            id={item.id}
                            className={item.class}
                            title={item.title}
                          />
                        </div>
                      ))}
                    </ReactSortable>
                  </div>
                </div>
                <div className="board-item">
                  <Card>
                    <Card.Body>
                      <h5 className="item-title">Complete</h5>
                    </Card.Body>
                  </Card>
                  <div className="board-scrollbar board-scrollbar-0">
                    <ReactSortable
                      list={state3}
                      group={{
                        name: "group1",
                        put: ["group1", "group2", "group3", "group4"],
                      }}
                      pull={true}
                      animation={200}
                      delayOnTouchStart={true}
                      delay={2}
                      setList={setState3}
                    >
                      {state3.map((item, index) => (
                        <div key={index}>
                          <TodoBoardCard
                            id={item.id}
                            className={item.class}
                            title={item.title}
                          />
                        </div>
                      ))}
                    </ReactSortable>
                  </div>
                </div>
                <div className="board-item">
                  <Card>
                    <Card.Body>
                      <h5 className="item-title">Review</h5>
                    </Card.Body>
                  </Card>
                  <div className="board-scrollbar board-scrollbar-0">
                    <ReactSortable
                      list={state4}
                      group={{
                        name: "group1",
                        put: ["group1", "group2", "group3", "group4"],
                      }}
                      pull={true}
                      animation={200}
                      delayOnTouchStart={true}
                      delay={2}
                      setList={setState4}
                    >
                      {state4.map((item, index) => (
                        <div key={index}>
                          <TodoBoardCard
                            id={item.id}
                            className={item.class}
                            title={item.title}
                          />
                        </div>
                      ))}
                    </ReactSortable>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="list-content"
              className={`animate__animated animate__fadeIn ${tab === false ? "active" : ""
                }`}
              data-toggle-extra="tab-content"
            >
              <div className="list-content">
                <div className="list-item">
                  <Card>
                    <Card.Body>
                      <h5 className="item-title">Todo</h5>
                    </Card.Body>
                  </Card>
                  <ReactSortable
                    list={state1}
                    group={{
                      name: "group1",
                      put: ["group1", "group2", "group3", "group4"],
                    }}
                    pull={true}
                    animation={200}
                    delayOnTouchStart={true}
                    delay={2}
                    setList={setState1}
                  >
                    {state1.map((item, index) => (
                      <div key={index}>
                        <TodoListCard
                          id={item.id}
                          className={item.class}
                          title={item.title}
                        />
                      </div>
                    ))}
                  </ReactSortable>
                </div>
                <div className="list-item">
                  <Card>
                    <Card.Body>
                      <h5 className="item-title">In Progress</h5>
                    </Card.Body>
                  </Card>
                  <ReactSortable
                    list={state2}
                    group={{
                      name: "group1",
                      put: ["group1", "group2", "group3", "group4"],
                    }}
                    pull={true}
                    animation={200}
                    delayOnTouchStart={true}
                    delay={2}
                    setList={setState2}
                  >
                    {state2.map((item, index) => (
                      <div key={index}>
                        <TodoListCard
                          id={item.id}
                          className={item.class}
                          title={item.title}
                        />
                      </div>
                    ))}
                  </ReactSortable>
                </div>
                <div className="list-item">
                  <Card>
                    <Card.Body>
                      <h5 className="item-title">Complete</h5>
                    </Card.Body>
                  </Card>
                  <ReactSortable
                    list={state3}
                    group={{
                      name: "group1",
                      put: ["group1", "group2", "group3", "group4"],
                    }}
                    pull={true}
                    animation={200}
                    delayOnTouchStart={true}
                    delay={2}
                    setList={setState3}
                  >
                    {state3.map((item, index) => (
                      <div key={index}>
                        <TodoListCard
                          id={item.id}
                          className={item.class}
                          title={item.title}
                        />
                      </div>
                    ))}
                  </ReactSortable>
                </div>
                <div className="list-item">
                  <Card>
                    <Card.Body>
                      <h5 className="item-title">Review</h5>
                    </Card.Body>
                  </Card>
                  <ReactSortable
                    list={state4}
                    group={{
                      name: "group1",
                      put: ["group1", "group2", "group3", "group4"],
                    }}
                    pull={true}
                    animation={200}
                    delayOnTouchStart={true}
                    delay={2}
                    setList={setState4}
                  >
                    {state4.map((item, index) => (
                      <div key={index}>
                        <TodoListCard
                          id={item.id}
                          className={item.class}
                          title={item.title}
                        />
                      </div>
                    ))}
                  </ReactSortable>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Todo