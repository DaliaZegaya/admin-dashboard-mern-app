import "./Dashboard.css";
import 'react-circular-progressbar/dist/styles.css';
import React from 'react';
import { GiProgression, GiProfit } from "react-icons/gi";
import { BsFillCartCheckFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { CircularProgressbar } from 'react-circular-progressbar';
import DoughnutChart from '../../charts/DoughuntChart';
import VarticalBarChart from '../../charts/VarticalBarChart'
import Customers from "../../features/Customers/Customers";
import GeoChart from "../../charts/GeoChart/GeoChart";
import LineChart from "../../charts/LineChart/LineChart";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../../features/Card/Card';




const cardText = ["Sales", "Customers", "Profit", "Orders"]
const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
        <div className="squre">
        <div>
          <div className="box">

            <div className="box-icon" style={{backgroundColor:"blue"}} >
              <GiProgression/>
            </div>
            <div className="box-data">
              <span>Sales</span>
              <h1>+28%</h1>
            </div>

          </div>

          <div className="box">

            <div className="box-icon">
              <HiUsers />
            </div>
            <div className="box-data">
              <span>Customers</span>
              <h1>+24</h1>
            </div>

          </div>
        </div>
        <div>
          <div className="box">

            <div className="box-icon" style={{backgroundColor:"#04d4bc"}}>
              <GiProfit />
            </div>
            <div className="box-data">
              <span>Profit</span>
              <h1>+56%</h1>
            </div>

          </div>
          <div className="box">

            <div className="box-icon" style={{backgroundColor:"#1daf19"}}>
              <BsFillCartCheckFill />
            </div>
            <div className="box-data">
              <span>Orders</span>
              <h1>+26</h1>
            </div>
          </div>
        </div>
      </div>
        </Col>

        <Col className="Graph card mt-5">
          <LineChart />
        </Col>

      </Row>

      <Row className="section2">
        <Col xs={5}><GeoChart /></Col>
        <Col xs={2}></Col>
        <Col xs={5}>
          <DoughnutChart />
        </Col>
      </Row>
      <Row className="section3">
        <Col className="VarticalBarChart" xs={6}>
          <Col className="Vartical card">
            <VarticalBarChart />
          </Col>
          <Col>
            <div style={{ width: 190, height: 190 }}>
              <CircularProgressbar value={66} circleRatio={0.75} maxValue={100} text={`75%`}
                styles={{
                  trail: {
                    transform: 'rotate(-135deg)',
                    transformOrigin: 'center center',
                    strokeWidth: 3,
                  },

                  path: {
                    transform: 'rotate(-135deg)',
                    transformOrigin: 'center center',
                    stroke: "#34ccfc",
                    strokeWidth: 4.5,
                  }
                }}
              />
            </div>
            <DoughnutChart />
          </Col>

        </Col>
        <Col xs={6}>
          <Customers />
        </Col>
      </Row>
    </Container>
  )
}



export default Dashboard;
