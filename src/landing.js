import { Container, Row, Col, Image } from "react-bootstrap";
import Photo from "./photo.jpg";
import html from "./html1.png";
import css from "./css.png";
import js from "./js.png";
import react from "./react.png";
export default function Landing() {
  return (
    <>
      <Container
        fluid
        className=" p-4 d-flex justify-content-center"
        style={{ backgroundColor: "#0c0c0c" }}
      >
        <Row>
          <Col sm="12" className="d-flex justify-content-center">
            <Image
              className="rounded-circle img-thumbnail"
              src={Photo}
              style={{ height: "300px" }}
            />
          </Col>
          <Col sm="12" className="text-center text-white pt-3">
            <h1 className="display-1 hello fw-bolder">Hello World!</h1>
            <h3>
              I am <b>BHARGAVI</b>
            </h3>
            <p className="fs-4 pt-2">An intermediate Front-End developer. </p>
          </Col>
          <Col className="text-white text-center ">
            <a
              href="/"
              className="btn btn-lg rounded-pill m-2 btn-outline-info"
            >
              Contact
            </a>
            <a
              href="/"
              className="btn btn-lg rounded-pill m-2 btn-outline-info"
            >
              Download Resume
            </a>
          </Col>
          <Col sm="12" className="text-white text-center p-5">
            <h2 className=" fw-bolder Experience">EXPERIENCE WITH</h2>
            <Row className="p-5 opacity-50">
              <Col>
                <Image src={html} style={{ height: "70px" }} />
              </Col>
              <Col>
                <Image src={css} style={{ height: "70px" }} />
              </Col>
              <Col>
                <Image src={js} style={{ height: "70px" }} />
              </Col>
              <Col>
                <Image src={react} style={{ height: "70px" }} />
              </Col>
            </Row>
          </Col>
          <Col sm="12" className="text-white text-center p-4">
            <h1 className="experience fw-bold p-5">EXPERIENCES</h1>
            <Row>
              <Col md="6" className="text-start p-4">
                <ul>
                  <li>
                    <h3> Society of Automotive Engineers , UIET , PU</h3>
                    <i>Front End Developer</i>
                  </li>
                  <li>
                    <h3> PhD Portal </h3>
                    <i> Trainee</i>
                  </li>
                  <li>
                    <h3> Goonj Website 2024</h3>
                    <i>Front End Developer</i>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col sm="12" className="text-white text-center p-4">
            <Row>
              <Col xl="6">
                <h3 className="skill fw-bold p-5"> TECHNICAL SKILL</h3>
                <Row>
                  <Col xs="12">
                    <h5>
                      {" "}
                      <b style={{ color: "#929091" }}>WEB DEVELOPMENT</b> : CSS
                      , Tailwind CSS , JQuery , ReactJS , HTML{" "}
                    </h5>
                  </Col>
                  <Col xs="12">
                    <h5>
                      {" "}
                      <b style={{ color: "#929091" }}>SOFTWARE </b> : Github ,
                      VsCode , MSOffice , Canva{" "}
                    </h5>
                  </Col>
                  <Col xs="12">
                    <h5>
                      {" "}
                      <b style={{ color: "#929091" }}>
                        PROGRAMMING LANGUAGES
                      </b>{" "}
                      : C\C++ , Javascript{" "}
                    </h5>
                  </Col>
                </Row>
              </Col>
              <Col xl="6">
                <h3 className="skill fw-bold p-5">
                  {" "}
                  POSITIONS OF RESPONSIBILITY
                </h3>
                <Row>
                  <Col xs="12">
                    <h5>
                      {" "}
                      <b style={{ color: "#929091" }}> Logistics Head </b>{" "}
                      Google Developer Student Club{" "}
                    </h5>
                  </Col>
                  <Col xs="12">
                    <h5>
                      {" "}
                      <b style={{ color: "#929091" }}>Co-Head</b> : Database
                      management , Alumni cell , UIET{" "}
                    </h5>
                  </Col>
                  <Col xs="12">
                    <h5>
                      {" "}
                      <b style={{ color: "#929091" }}>Member</b> : Portal
                      Engagement, Alumni Cell , UIET{" "}
                    </h5>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col sm="12" className="text-white text-center p-4">
            <h1 className="projects fw-bold p-5">PROJECTS</h1>
            <Row>
              <Col md="6" className="text-start p-4">
                <ul>
                  <li>
                    <h3> Official SAE website</h3>
                    <i>
                      made the landing page and contributed in responsiveness
                      and UI/UX
                    </i>
                  </li>
                  <li>
                    <h3> IMusic</h3>
                    <i> Comparable to online mp3 player websites</i>
                  </li>
                  <li>
                    <h3> Goonj Website 2024</h3>
                    <i>made sponser page </i>
                  </li>
                  <li>
                    <h3> Portfolio</h3>
                    <i>made with reactjs and bootstrap </i>
                  </li>
                  <li>
                    <h3> Form </h3>
                    <i> Forms with Validation using JQuery </i>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col sm="12" className="text-white text-start p-4">
          <h1 className="opacity-50 fw-bold p-5">MISCELLANEOUS</h1>
          <ul>
            <li> Participated in Group Dance competition at IIT Ropar</li>
            <li> Winner Of Group Dance Competition At Goonj UIET 2023 .</li>
            <li>Organizing Commitee member of Technovate (Hackathon) 2024 .</li>
            <li>Organizing Commitee of Ideathon 2024.</li>
            <li>Organizing commitee of Kotlin Conference 2023</li>
          </ul>
          </Col>
        </Row>
        
      </Container>
      <Container fluid className="text-white p-5" style={{backgroundColor:'#000000'}} >
        <h4 className="">
          Contact 
        </h4>
        <p> EMAIL : bhargavigoyal2004@gmail.com</p>
        <p> Phone : 9517851432</p>
        
      </Container>
    </>
  );
}
