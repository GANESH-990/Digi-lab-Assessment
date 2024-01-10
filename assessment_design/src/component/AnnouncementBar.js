export default function AnnouncementBar(){
    return(
        <>

        <div className=" p-lg-f2 px-sm-c2 py-sm-f2 p-f2 border-bottom border-1">
            <div className="d-flex col-lg-10 mx-auto">


                <div className=" d-flex  mx-auto gap-c1">

                    <span className="px-f2 py-f1 border rounded-pill bg-Neutral1300 d-flex align-items-center">
                    <span className=" text-Neutral200 " style={styles._badge}>Announcement</span>
                    </span>

                    <span className="d-flex align-items-center" style={styles._text}>We are happy to announce that we raise $2 Million in Seed Funding</span>
                </div>
            </div>

        </div>
        
        </>
    )
}


const styles = {

    _badge:{
        fontFamily: "Inter",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "16px",
        color: "##5A6475",

    },
    _text:{
        fontFamily: "Inter",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "16px",
        color: "##121417",

    },

};
