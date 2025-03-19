import React, { useRef } from 'react'
import { Row, Col, Button, Container } from 'react-bootstrap'
import Card from '../../../components/Card'

import useDataTable from "../../../hooks/useDatatable";

//DATA
const tableData = [
  { Name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_Date: '2011/04/25', salary: '$320,800' },
  { Name: 'Garrett Winters', position: 'Accountant', office: 'Tokyo', age: 63, start_Date: '2011/07/25', salary: '$170,750' },
  { Name: 'Herrod Chandler', position: 'Sales Assistant', office: 'San Francisco', age: 59, start_Date: '2012/08/06', salary: '$137,500' },
  { Name: 'Rhona Davidson	', position: 'Integration Specialist', office: 'Tokyo', age: 55, start_Date: '2010/10/14', salary: '$327,900' },
  { Name: 'Colleen Hurst', position: 'Javascript Developer', office: 'San Francisco', age: 39, start_Date: '2009/09/15', salary: '$205,500' },
  { Name: 'Sonya Frost', position: 'Software Engineer', office: 'Edinburgh', age: 23, start_Date: '2008/12/13', salary: '$103,600' },
  { Name: 'Jena Gaines', position: 'Office Manager', office: 'London', age: 30, start_Date: '2008/12/19', salary: '$90,560' },
  { Name: 'Quinn Flynn', position: 'Support Lead', office: 'Edinburgh', age: 22, start_Date: '2013/03/03', salary: '$342,000' },
  { Name: 'Charde Marshall', position: 'Regional Director', office: 'San Francisco', age: 36, start_Date: '2008/10/16', salary: '$470,600' },
  { Name: 'Haley Kennedy', position: 'Senior Marketing Designer', office: 'London', age: 43, start_Date: '2012/12/18', salary: '$313,500' },
  { Name: 'Tatyana Fitzpatrick', position: 'Regional Director', office: 'London', age: 19, start_Date: '2010/03/17', salary: '$385,750' },
];

const columns = [
  {
    data: null,
    orderable: false,
    searchable: false,
    title: '<input type="checkbox" className="form-check-input">',
    render: function () {
      return `
       <input type="checkbox" className="form-check-input">
        `;
    },
  },
  { data: 'Name', title: ' Name' },
  { data: 'position', title: 'Position' },
  { data: 'office', title: 'Office' },
  { data: 'age', title: 'Age' },
  { data: 'start_Date', title: 'Start Date' },
  { data: 'salary', title: 'Salary' },
];

const DataTable = () => {
  const tableRef = useRef(null);
  useDataTable({
    tableRef: tableRef,
    columns: columns,
    data: tableData,
    isFooter: true
  });
  return (
    <Container fluid>
      <Row>
        <Col>
          <Card className='card-block card-stretch datatable-arrow-position'>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <Card.Header.Title>
                <h4 className="card-title">Bootstrap Datatables</h4>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className=''>
              <p className="mb-0">Images in Bootstrap are made responsive with <code>.img-fluid</code>.{" "}
                <code>max-width: 100%;</code>{" "}
                and <code>height: auto;</code> are applied to the image so that it scales with the parent element.
              </p>
              <div className="table-responsive">
                <table
                  id="datatable"
                  ref={tableRef}
                  className='table table-striped table-bordered data-table mb-0 dataTable no-footer'>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default DataTable