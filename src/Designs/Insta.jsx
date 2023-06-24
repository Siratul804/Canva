import React from "react";
import "./insta.css";
import { MdOutlineWatchLater } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";
import { BsChat } from "react-icons/bs";
import { LuSend } from "react-icons/lu";
import ins1 from "../assets/insta/2.png";
import ins2 from "../assets/insta/3.png";
import ins3 from "../assets/insta/4.png";
import ins4 from "../assets/insta/5.png";
import save from "../assets/insta/save.svg";
function Instra() {
  return (
    <div className="insta">
      <div className="instra_box">
        {/* ...... instra Nav ........ */}
        <div className="instra_box_p">
          <p>
            <MdOutlineWatchLater />
          </p>
          <p>www.instagram.com</p>
          <p>
            <CiMenuKebab />
          </p>
        </div>
        {/* ...... instra Nav ........ */}
        {/* ...... instra body ........ */}

        <div className="instra_box_body">
          <img src={ins1} style={{ margin: "0.1rem" }} alt="" />
          <img src={ins2} style={{ margin: "0.1rem" }} alt="" />
          <br />
          <img src={ins3} alt="" style={{ margin: "0.1rem" }} />
          <img src={ins4} alt="" style={{ margin: "0.1rem" }} />
        </div>

        {/* ...... instra body ........ */}
        {/* ...... instra footer ........ */}

        <div className="instra_footer p-1 ">
          <div className="instra_footer_left">
            <p>
              <AiOutlineHeart />
            </p>
            <p>
              <BsChat />
            </p>
            <p>
              <LuSend />
            </p>
          </div>
          <div className="instra_footer_right ">
            <p style={{ cursor: "pointer" }}>
              <img src={save} alt="" height="auto" width="20px" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instra;
