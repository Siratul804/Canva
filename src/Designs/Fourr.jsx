import React from "react";
import "./four.css";

// ......Images Import.........//
import one from "../assets/four/1.png";
import two from "../assets/four/2.png";

// ......Boot-Strap.........//
import Card from "react-bootstrap/Card";

function fourr() {
  return (
    <div className="four pt-2">
      <Card className="text-white four_card ">
        <Card.Img src={one} alt="Card image" className="four_bg_img" />
        <Card.ImgOverlay>
          <Card.Text className="four_body ">
            <h4>REMINDER</h4>
            <img src={two} alt="" className="four_inside_img" />
            <p style={{ textAlign: "center" }}>
              Many things will happen but <br />
              they will not define who you are
            </p>
            <div className="four_body_hr"></div>
            <h6>Close</h6>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default fourr;
