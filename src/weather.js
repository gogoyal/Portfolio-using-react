import {
  Container,
  Card,
  InputGroup,
  Form,
  Button,
  Image,
  Row,
  Col,
} from "react-bootstrap";
import Search from "./images/search.png";
import wind from "./images/wind.png";
import humidity from "./images/humidity.png";
import { useEffect, useRef, useState } from "react";
import clear_icon from "./images/clear.png";
import cloud_icon from "./images/clouds.png";
import drizzle_icon from "./images/drizzle.png";
import rain_icon from "./images/rain.png";
import snow_icon from "./images/snow.png";



// import { useEffect } from "react";
export default function Weather() {
  const inputRef = useRef();

  const allIcons ={
   "01d": clear_icon,
   "01n": clear_icon,
   "02d": cloud_icon,
   "02n": cloud_icon,
   "03d": cloud_icon,
   "04d": drizzle_icon,
   "04n": drizzle_icon,
   "09d": rain_icon,
   "09n": rain_icon,
   "10d": rain_icon,
   "10n": rain_icon,
   "13d": snow_icon,
   "13n": snow_icon

  }
  const [weatherData, setWeatherdata] = useState(false);

  async function Check (city){
      const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7bf00b90d9f373da320723fe608a60f1&units=metric`
    const response =await fetch(apiurl);
    var data = await response.json();
    console.log(data);
    const icon = allIcons[data.weather[0].icon] || clear_icon ;
    setWeatherdata({
      humidity: data.main.humidity,
      windSpeed: Math.floor(data.wind.speed),
      temprature: Math.floor(data.main.temp) ,
      location:data.name,
      icon: icon
    })
  }

  useEffect(()=>{
    Check("chandigarh")
  },[])
  
  // const mkmk= async (city) => {
  //   try {
  //     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7bf00b90d9f373da320723fe608a60f1&units=metric`;
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     console.log(data);
  //   } catch {}
  // }

  // useEffect(()=>{
  //   Search("london");
  // },[])
  return (
    <>
      <Container
        fluid
        className="bg-dark d-flex justify-content-center align-items-center"
        style={{ height: "695px" }}
      >
        <Card
          className="p-5 cardbody text-center rounded-4"
          style={{ width: "550px", height: "650px" }}
        >
          <InputGroup className="mb-3">
            <Form.Control
              className="rounded-pill p-3 "
              placeholder="Enter City Name"
              ref={inputRef}
            />
            <Button
              variant=""
              id="button-addon2"
              className="rounded-circle m-1"
              style={{ backgroundColor: "white" }}
              onClick={()=>Check(inputRef.current.value)}
            >
              <Image src={Search} style={{ height: "30px" }} />
            </Button>
          </InputGroup>
          <Container className="text-white">
            <Image src={weatherData.icon} style={{ height: "250px" }} />
            <h1 className="display-2">{weatherData.temprature} &#8451; </h1>
            <h4>{weatherData.location}</h4>
            <Row>
              <Col className="p-4" xs="6">
                <Row>
                  <Col sm="6">
                    <Image src={humidity} style={{ height: "60px" }} />
                  </Col>
                  <Col sm="6">
                    <h5>{weatherData.humidity}%</h5>
                    <h6>Humidity</h6>
                  </Col>
                </Row>
              </Col>
              <Col className="mt-4" xs="6">
                {" "}
                <Row>
                  <Col sm="6">
                    <Image src={wind} style={{ height: "60px" }} />
                  </Col>
                  <Col sm="6">
                    <h5>{weatherData.windSpeed}km/hr</h5>
                    <h6>Wind Speed</h6>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Card>
      </Container>
    </>
  );
}
