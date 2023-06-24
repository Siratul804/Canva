import React from "react";
import "./style.css";
import style1 from "../assets/style/3.png";
import style2 from "../assets/style/4.png";
import style3 from "../assets/style/5.png";

import Card from "react-bootstrap/Card";

function Style() {
  return (
    <div className="style pt-3 ">
      <Card className="bg-dark text-white boot_card ">
        <Card.Img src={style1} alt="Card image" className="card_img" />
        <Card.ImgOverlay>
          <Card.Text className="style_body">
            <img src={style2} alt="" />
            <br />

            <img src={style3} alt="" className="pt-1" />
            <br />
            <p className="text-dark style_body_p ">
              <i style={{ fontSize: "25px" }}> New </i>
              <i className="text-warning"> Style </i>
            </p>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default Style;
