import "../css/CallToAction.css";

import { MdOutlineCreditCard } from "react-icons/md";
import { PiHeadphonesLight } from "react-icons/pi";

export default function CallToAction() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center px-lg-c5 py-lg-c6 px-sm-c2 py-sm-c6 px-c1 py-c4 gap-f2">
      <div className="w-100 d-flex flex-column justify-content-center align-items-sm-center align-items-start py-0 px-sm-c2 px-0">
        <div className="w-100 d-flex flex-column justify-content-center align-items-center gap-c2">
          <div className="d-flex justify-content-center align-items-center py-0 px-lg-25pt px-sm-12d5pt px-0">
            <div className="_title">
              Unlock Limitless Possibilities with Our New Card Solutions
            </div>
          </div>

          <div className="d-flex flex-sm-row flex-column justify-content-center align-items-sm-center align-items-stretch align-self-stretch gap-f2">
            <button className="btn  bg-PriPurple400 text-white" type="button">
              Unlock your card <MdOutlineCreditCard />
            </button>

            <button
              className="btn  bg-Neutral1200 text-Neutral400 "
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
