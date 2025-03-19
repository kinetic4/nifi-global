import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import ReactQuill from 'react-quill';
import "quill/dist/quill.snow.css";
import 'react-quill/dist/quill.snow.css';
import Quill from 'quill';
import Card from '../../../../components/Card';

const BasicQuill = (props) => {
  const [value, setValue] = useState('');
  return (
    <>
      <ReactQuill id="editor" theme="snow" value={value} onChange={setValue} />
    </>
  );
};

const FormQuill = () => {

  const editorRef = useRef(null);
  useEffect(() => {
    if (editorRef.current) {
      const quill = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            ['bold', 'underline', 'italic', 'image', 'code-block'],
          ]
        },
        placeholder: 'Compose an epic...',
        readOnly: false,
        bounds: editorRef.current,
        scrollingContainer: editorRef.current

      });
      const placeholderText = `<h1>This is a heading text...</h1><br/><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui arcu, pellentesque id mattis sed, mattis semper erat. Etiam commodo arcu a mollis consequat. Curabitur pretium auctor tortor, bibendum placerat elit feugiat et. Ut ac turpis nec dui ullamcorper ornare. Vestibulum finibus quis magna at accumsan. Praesent a purus vitae tortor fringilla tempus vel non purus. Suspendisse eleifend nibh porta dolor ullamcorper laoreet. Ut sit amet ipsum vitae lectus pharetra tincidunt. In ipsum quam, iaculis at erat ut, fermentum efficitur ipsum. Nunc odio diam, fringilla in auctor et, scelerisque at lorem. Sed convallis tempor dolor eu dictum. Cras ornare ornare imperdiet. Pellentesque sagittis lacus non libero fringilla faucibus. Aenean ullamcorper enim et metus vestibulum, eu aliquam nunc placerat. Praesent fringilla dolor sit amet leo pulvinar semper. </p>`
      quill.root.innerHTML = placeholderText;
    }
  }, []);
  return (
    <Container fluid>
      <Row>
      </Row>
      <Row>
        <Col lg="12">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4 className="card-title">Basic Quill Editor</h4>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body>
              <BasicQuill ></BasicQuill>
            </Card.Body>
          </Card>
          <Col lg={12}>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <Card.Header.Title>
                  <h4 className="card-title">Custom Select</h4>
                </Card.Header.Title>
              </Card.Header>
              <Card.Body className="card-body">
                <div ref={editorRef} ></div>
              </Card.Body>
            </Card>
          </Col>
        </Col>
      </Row>
    </Container>
  )
}

export default FormQuill