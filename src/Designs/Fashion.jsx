import React from "react";
import fashion from "../assets/fashion/f.png";
import "./fashion.css";

function Fashion() {
  return (
    <div className="fashion pt-4">
      <div className="fashion_bg">
        <section className="fashion_box py-4 ">
          <div className="fashion_box_border">
            <h1
              style={{ fontFamily: "revert", position: "absolute" }}
              className="pt-2"
            >
              New <br /> Fahsion <br /> Sale
            </h1>

            <img src={fashion} alt="" className="fashion_img" />
            <br />
            <br />
            <p style={{ fontSize: "6px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Fashion;
