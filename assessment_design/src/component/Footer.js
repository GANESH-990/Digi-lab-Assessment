
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="
      d-flex justify-content-center align-items-center gap-f2 border-top border-3
      px-c1 pt-c3 pb-f8 
      px-sm-c2 pt-sm-c6 pb-sm-f8
      px-lg-c5 pt-lg-c6 pb-lg-ft">
        <div className="w-100 d-flex flex-column align-items-start 
        px-0 gap-c4
        px-sm-c2 
        px-lg-c2 gap-lg-c6 ">


          <div className=" w-100 d-flex flex-column align-items-start align-self-stretch gap-c2 gap-lg-c4">

            <div className="w-100 d-flex flex-column align-items-start align-items-sm-center align-self-stretch gap-c2 px-lg-25pt">
                <div className="w-100 d-flex flex-column align-items-start align-items-sm-center align-self-stretch gap-f2 gap-sm-c1 text-sm-center">
                    <div style={styles._heading1}>Mode UI</div>
                    <div style={styles._text}>Mode UI is a comprehensive design system that empowers designers and developers to create cohesive and visually stunning user interfaces across various platforms and devices</div>

                </div>
            </div>

            <div className="w-100 border border-1" style={{backgroundColor:'#F1F1F2'}}></div>

            <div className="d-flex flex-column flex-lg-row  align-items-start  align-self-stretch gap-c4 gap-sm-c2   px-lg-c2">

              <div className="d-flex flex-column flex-sm-row align-items-start align-self-stretch align-items-stretch gap-c2 col-lg-4">


                <div className="d-flex flex-column align-items-start align-self-stretch gap-f5  col-lg-6 col-sm-5 col-12">
                {/* style={{minWidth:'40%'}}> */}
                  <div style={styles._heading2}>Company</div>
                  <div className="d-flex flex-column align-items-start align-self-stretch gap-c1">
                    <div style={styles._heading3}>About us</div>
                    <div style={styles._heading3}>Pricing</div>
                    <div style={styles._heading3}>Contact us</div>
                    <div style={styles._heading3}>Features</div>
                  </div>
                </div>

                <div className="d-flex flex-column align-items-start align-self-stretch gap-f5  col-lg-6 col-sm-5 col-12">
                {/* style={{minWidth:'40%'}}> */}
                  <div style={styles._heading2}>Product</div>
                  <div className="d-flex flex-column align-items-start align-self-stretch gap-c1">
                    <div style={styles._heading3}>Figna design system</div>
                    <div style={styles._heading3}>Ios kit</div>
                    <div style={styles._heading3}>Android kit us</div>
                    <div style={styles._heading3}>Wireframe</div>
                  </div>
                </div>
              </div>

              {/*  ----------------- */}

              <div className=" d-flex flex-column flex-sm-row justify-content-start flex-wrap align-items-start  align-items-stretch align-self-stretch gap-c2  col-lg-8">
                <div className=" d-flex flex-column align-items-start align-self-stretch gap-f5  col-lg-3 col-sm-5 col-12">
                 {/* style={{minWidth:'40%'}}> */}
                  <div style={styles._heading2}>Resources</div>
                  <div className="d-flex flex-column align-items-start align-self-stretch gap-c1">
                    <div style={styles._heading3}>Templates</div>
                    <div style={styles._heading3}>Landing pages</div>
                    <div style={styles._heading3}>Documentation</div>
                    <div style={styles._heading3}>Comp library</div>
                  </div>
                </div>

                <div className=" d-flex flex-column align-items-start align-self-stretch gap-f5 col-lg-3 col-sm-5 col-12 ">
                {/* // style={{minWidth:'40%'}}> */}
                  <div style={styles._heading2}>Legal</div>
                  <div className="d-flex flex-column align-items-start align-self-stretch gap-c1">
                    <div style={styles._heading3}>Privacy policy</div>
                    <div style={styles._heading3}>Terms & Conditions</div>
                    <div style={styles._heading3}>Disclainmer</div>
                    <div style={styles._heading3}>Affiliate programme</div>
                  </div>
                </div>

                <div className=" d-flex flex-column align-items-start align-self-stretch gap-f5  col-lg-3 col-sm-5 col-12">
                 {/* style={{minWidth:'40%'}}> */}
                  <div style={styles._heading2}>Support</div>
                  <div className="d-flex flex-column align-items-start align-self-stretch gap-c1">
                    <div style={styles._heading3}>Help center</div>
                    <div style={styles._heading3}>Raise ticket</div>
                    <div style={styles._heading3}>Report</div>
                    <div style={styles._heading3}>Refund</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ---------------------------------------------------------symbol below------------------------------------------------------- */}

          <div className="w-100 d-flex flex-column align-items-start align-items-sm-center gap-f5">
            <div className="d-flex gap-f5">
              <FaGithub />
              <FaLinkedin />
              <FaDiscord />
            </div>

            <div
              className="w-75  text-start text-sm-center text-Neutral400"
              style={{
                fontFamily: "Inter",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "20px",
              }}
            >
              © 2023 Mode UI Inc. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {

    _heading1:{
        fontFamily: "Inter",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "bolder",
        lineHeight: "28px",
        color: "##5A6475",

    },
    _text:{
        fontFamily: "Inter",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "28px",
        color: "##5A6475",

    },
  _heading2: {
    fontFamily: "Inter",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "20px",
    color: "#24282F",
  },

  _heading3: {
    fontFamily: "Inter",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "20px",
    color: "#363C46",
  },
};
