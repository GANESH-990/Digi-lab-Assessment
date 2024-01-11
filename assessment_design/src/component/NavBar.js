


export default function NavBar() {
  return (
    <>
      <div className=" py-f4  px-c1 px-sm-c2 px-lg-c5 border-bottom ">
        <div className=" px-lg-c2 px-sm-c2 px-0">
          <div>
            <div className=" d-flex justify-content-between">
              <div className=" py-f2 px-f2 d-flex align-items-center">
                <div className="px-f2 py-lg-f1 py-f1  d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="84"
                    height="16"
                    viewBox="0 0 84 16"
                    fill="none"
                  >
                    <path
                      d="M3.29175 15.7647V7.76471L3.16008 5.29412H3.40148L4.25733 7.76471L7.32963 14.8235H11.3236L14.3959 7.76471L15.2518 5.29412H15.4932L15.3834 7.76471V15.7647H18.6752V0H14.1984L10.8628 7.76471L9.52413 11.4588H9.28274L7.9002 7.76471L4.45484 0H0V15.7647H3.29175ZM26.2613 16C30.0139 16 32.5376 13.6 32.5376 9.88235C32.5376 6.11765 30.0139 3.74118 26.2613 3.74118C22.5087 3.74118 19.985 6.11765 19.985 9.88235C19.985 13.6 22.5087 16 26.2613 16ZM26.2613 12.8706C24.0229 12.8706 23.2549 11.9529 23.2549 9.88235C23.2549 7.81177 24.0229 6.84706 26.2613 6.84706C28.4778 6.84706 29.2678 7.81177 29.2678 9.88235C29.2678 11.9529 28.4778 12.8706 26.2613 12.8706ZM38.7975 16C41.3213 16 42.7697 14.8235 43.1866 12.4941H43.3622V15.7647H46.4345V0H43.1427V7.10588H42.9452C42.5722 5.12941 41.2335 3.74118 38.622 3.74118C35.3522 3.74118 33.4869 6.11765 33.4869 9.88235C33.4869 13.6 35.3742 16 38.7975 16ZM36.8226 9.88235C36.8226 7.71765 37.8101 6.96471 39.9168 6.96471C42.0235 6.96471 43.1427 7.71765 43.1427 9.76471V9.95294C43.1427 12 42.0016 12.7765 39.9168 12.7765C37.8101 12.7765 36.8226 12.0235 36.8226 9.88235ZM54.0135 16C57.5028 16 59.8289 14.2118 59.8289 11.6471V11.3882H56.5372V11.6235C56.5372 12.6353 55.8569 13.1765 53.9038 13.1765C51.7751 13.1765 50.9851 12.4 50.8973 10.5882H59.8509C59.8948 10.1882 59.9387 9.88235 59.9387 9.45882C59.9387 5.76471 57.5467 3.74118 53.9477 3.74118C50.3268 3.74118 47.847 6.11765 47.847 9.88235C47.847 14.0706 50.3487 16 54.0135 16ZM53.8819 6.49412C55.813 6.49412 56.6908 7.17647 56.7786 8.72941H50.9412C51.0948 7.2 51.9287 6.49412 53.8819 6.49412ZM71.8308 16C76.6368 16 79.0507 13.4118 79.0507 9.17647V0H75.759V8.91765C75.759 11.6 74.8373 12.5647 71.8308 12.5647C68.8463 12.5647 67.9026 11.6 67.9026 8.91765V0H64.6109V9.17647C64.6109 13.4118 67.0468 16 71.8308 16ZM84 15.7647V0H80.7083V15.7647H84Z"
                      fill="#121417"
                    />
                  </svg>
                </div>
              </div>

              <div className="d-lg-flex d-none  gap-c1"> 

              <div className=' p-f2 d-flex align-items-center gap-f2'>
                <div className=" text-Neutral200" style={styles._text}>Card access</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
<path d="M5.5 7.5L10.5 12.5L15.5 7.5" stroke="#363C46" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              </div>
              <div className=' p-f2 d-flex align-items-center'>
                <div className=" text-Neutral200" style={styles._text}>Banking</div>
              </div>
              <div className=' p-f2 d-flex align-items-center'>
                <div className=" text-Neutral200" style={styles._text}>Processing</div>
              </div>
              <div className=' p-f2 d-flex align-items-center'>
                <div className=" text-Neutral200" style={styles._text}>About</div>
              </div>
              <div className=' p-f2 d-flex align-items-center'>
                <div className=" text-Neutral200" style={styles._text}>Carrier</div>
              </div>
              <div className=' p-f2 d-flex align-items-center'>
                <div className="text-Neutral200" style={styles._text}>Conteact</div>
              </div>
              
              
              </div>

              <div className=" d-flex align-itmes-center gap-c1">
                <div className=" d-flex align-items-center px-c1 py-f2 border rounded gap-f1 bg-Neutral1200">
                  <span className="text-Neutral400  ">Login</span>
                  <span className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M12.5 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H12.5M8.33333 14.1667L12.5 10M12.5 10L8.33333 5.83333M12.5 10H2.5"
                        stroke="#5A6475"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>

                <div className="d-lg-none d-flex p-f2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3 12H21M3 6H21M3 18H21"
                      stroke="#363C46"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}




const styles = {

    _badge:{
        fontFamily: "Inter",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "16px",

    },
    _text:{
        fontFamily: "Inter",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "20px",

    },

};