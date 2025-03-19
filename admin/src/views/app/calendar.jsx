import React, { useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import { Row, Col, Container } from 'react-bootstrap';
import Card from '../../components/Card';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import bootstrapPlugin from '@fullcalendar/bootstrap';
import moment from "moment";
import HeaderBreadcrumb from '../../components/header-breadcrumb';

const CalendarPage = () => {
  const moments = moment();
  const uuidv4 = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c === "x" ? r : r;
        return v.toString(16);
      }
    );
  };

  const events = [
    {
      id: uuidv4(),
      title: "Click for Google 1",
      start: moment().subtract(20, "days").format("YYYY-MM-DD") + 'T05:30:00.000Z',
      end: moment().subtract(20, "days").format("YYYY-MM-DD") + 'T05:30:00.000Z',
      backgroundColor: "#4731b6",
      textColor: "rgba(58,87,232,1)",
      borderColor: "#4731b6",
      description: "test",
    },
    {
      id: uuidv4(),
      title: "All Day Event",
      start: moment().subtract(18, "days")
        .format("YYYY-MM-DD") + 'T05:30:00.000Z',
      end: moment().subtract(18, "days")
        .format("YYYY-MM-DD") + 'T05:30:00.000Z',
      backgroundColor: "#465af7",
      textColor: "rgba(108,117,125,1)",
      borderColor: "#465af7",
    },
    {
      id: uuidv4(),
      title: "Long Event",
      start: moment().subtract(16, "days")
        .format("YYYY-MM-DD") + 'T05:30:00.000Z',
      end: moment().subtract(13, "days")
        .format("YYYY-MM-DD") + 'T05:30:00.000Z',
      backgroundColor: "#7858d7",
      textColor: "#ffffff",
      borderColor: "#7858d7",
    },
    // Date 19
    {
      id: uuidv4(),
      title: "Repeating Event",
      start: moment().subtract(12, "days")
        .format("YYYY-MM-DD") + 'T05:30:00.000Z',
      end: moment().subtract(12, "days")
        .format("YYYY-MM-DD") + 'T05:30:00.000Z',
      backgroundColor: "#465af7",
      textColor: "rgba(108,117,125,1)",
      borderColor: "#465af7",
    },
    {
      id: uuidv4(),
      title: "Repeating Event",
      start: moment().subtract(10, "days")
        .format("YYYY-MM-DD") + 'T05:30:00.000Z',
      end: moment().subtract(10, "days")
        .format("YYYY-MM-DD") + 'T05:30:00.000Z',
      backgroundColor: "#5baa73",
      textColor: "rgba(108,117,125,1)",
      borderColor: "#5baa73",
    },
    {
      id: uuidv4(),
      title: "Birthday Party",
      start: moment().subtract(8, "days")
        .format("YYYY-MM-DD") + 'T05:30:00.000Z',
      end: moment().subtract(8, "days")
        .format("YYYY-MM-DD") + 'T05:30:00.000Z',
      backgroundColor: "#01041b",
      textColor: "rgba(108,117,125,1)",
      borderColor: "#01041b",
    },
    {
      id: uuidv4(),
      title: "Meeting",
      start: moment().subtract(6, "days")
        .format("YYYY-MM-DD") + 'T05:30:00.000Z',
      end: moment().subtract(6, "days")
        .format("YYYY-MM-DD") + 'T05:30:00.000Z',
      backgroundColor: "#4731b6",
      textColor: "rgba(108,117,125,1)",
      borderColor: "#4731b6",
    },
    {
      id: uuidv4(),
      title: "Birthday Party",
      start: moment().subtract(5, "days")
        .format("YYYY-MM-DD") + 'T05:30:00.000Z',
      end: moment().subtract(5, "days")
        .format("YYYY-MM-DD") + 'T05:30:00.000Z',
      backgroundColor: "#15ca92",
      textColor: "rgba(108,117,125,1)",
      borderColor: "#15ca92",
    },
    {
      id: uuidv4(),
      title: "Birthday Party",
      start: moment().subtract(2, "days")
        .format("YYYY-MM-DD") + 'T08:30:00.000Z',
      end: moment().subtract(2, "days")
        .format("YYYY-MM-DD") + 'T05:30:00.000Z',
      backgroundColor: "#f4a965",
      textColor: "rgba(108,117,125,1)",
      borderColor: "#f4a965",
    },
  
    {
      id: uuidv4(),
      title: "Meeting",
      start: moment().subtract(0, "days")
        .format("YYYY-MM-DD") + 'T05:30:00.000Z',
      end: moment().subtract(0, "days").format("YYYY-MM-DD") + 'T05:30:00.000Z',
      backgroundColor: "#ea643f",
      textColor: "rgba(108,117,125,1)",
      borderColor: "#ea643f",
    },
    {
      id: uuidv4(),
      title: "Click for Google",
      url: "http://google.com/",
      start: moment().subtract(0, "days")
        .format("YYYY-MM-DD") + 'T06:30:00.000Z',
      end: moment().subtract(0, "days").format("YYYY-MM-DD") + 'T06:30:00.000Z',
      backgroundColor: "#f4a965",
      textColor: "rgba(108,117,125,1)",
      borderColor: "#f4a965",
    },
    {
      id: uuidv4(),
      title: "Repeating Event",
      start: moment().subtract(0, "days")
        .format("YYYY-MM-DD") + 'T07:30:00.000Z',
      end: moment().subtract(0, "days").format("YYYY-MM-DD") + 'T07:30:00.000Z',
      backgroundColor: "#15ca92",
      textColor: "rgba(108,117,125,1)",
      borderColor: "#15ca92",
    },
    {
      id: uuidv4(),
      title: "Birthday Party",
      start: moment().subtract(0, "days")
        .format("YYYY-MM-DD") + 'T08:30:00.000Z',
      backgroundColor: "#4731b6",
      textColor: "rgba(108,117,125,1)",
      borderColor: "#4731b6",
    },
    {
      id: uuidv4(),
      title: "Doctor Meeting",
      start: moment().subtract(0, "days")
        .format("YYYY-MM-DD") + 'T05:30:00.000Z',
      backgroundColor: "#5baa73",
      textColor: "rgba(108,117,125,1)",
      borderColor: "#5baa73",
    },
    {
      id: uuidv4(),
      title: "All Day Event",
      start: moment().subtract(-1, "days")
        .format("YYYY-MM-DD") + 'T05:30:00.000Z',
      backgroundColor: "#f4a965",
      textColor: "rgba(108,117,125,1)",
      borderColor: "#f4a965",
    },
    {
      id: uuidv4(),
      title: "Repeating Event",
      start: moment().subtract(14, "days")
        .format("YYYY-MM-DD") + 'T05:30:00.000Z',
      end: moment().subtract(14, "days")
        .format("YYYY-MM-DD") + 'T05:30:00.000Z',
      backgroundColor: "#465af7",
      textColor: "rgba(108,117,125,1)",
      borderColor: "#465af7",
    },
    {
      id: uuidv4(),
      title: "Repeating Event",
      start: moment().subtract(-10, "days")
        .format("YYYY-MM-DD") + 'T05:30:00.000Z',
      backgroundColor: "#5baa73",
      textColor: "rgba(108,117,125,1)",
      borderColor: "#5baa73",
    },
  ]; 

 useEffect(()=>{
  setTimeout(() => {
    const event_desc = document.querySelectorAll('.fc-daygrid-event');
  for(let i = 0; i<event_desc.length; i++){
    event_desc[i].style.backgroundColor = events[i].backgroundColor 
    event_desc[i].style.color = "#fff"
    let rgba = events[i].backgroundColor;
    let matches = rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+),?\s*(\d*(?:\.\d+)?)?\)$/);

    if (matches) {
      let red = matches[1];
      let green = matches[2];
      let blue = matches[3]; 
      let newAlpha = 0.8;   
      let newRgba = `rgba(${red}, ${green}, ${blue}, ${newAlpha})`; 
      event_desc[i].style.backgroundColor = newRgba;  
    }
  }
  }, 10); 
 },[])

  return (
    <>
      <Container fluid>
        <div>
          <HeaderBreadcrumb />
          <Row>
            <Col lg="12" className="iq-cust-calender">
              <Card>
                <Card.Body>
                  <FullCalendar
                    plugins={[
                      timeGridPlugin,
                      dayGridPlugin,
                      interactionPlugin,
                      listPlugin,
                      bootstrapPlugin,
                    ]}
                    initialView="dayGridMonth"
                    headerToolbar={{
                      left: 'prev,next today',
                      center: 'title',
                      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
                    }}
                    dayMaxEvents={true}
                    timeZone="UTC"
                    events={events} 
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default CalendarPage;



