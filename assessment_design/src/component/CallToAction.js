import "../css/CallToAction.css";

import { MdOutlineCreditCard } from "react-icons/md";
import { PiHeadphonesLight } from "react-icons/pi";



export default function CallToAction() {
  return (
    <div className="_mainDiv border border-3">
      <div className=" _container">
        <div className=" _row">
          <div className="_subtitle">
            <div className="_title">
              Unlock Limitless Possibilities with Our New Card Solutions
            </div>
          </div>

          <div className="_action">
            <button
              className="btn border text-light"
              style={{ backgroundColor: "#582066" }}
              type="button"
            >
              Unlock your card <MdOutlineCreditCard />
            </button>

         
            <button
              className="btn border"
              style={{ backgroundColor: "#EEEFEF", color: "#5A6475" }}
              type="button"
            >
              Custom support <PiHeadphonesLight />
            </button>


          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}
