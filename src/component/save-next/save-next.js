import "./save-next.css"

// import { Link } from "react-router-dom"

// import path from "../../image/Path.png"
// import CreateNewCustomer from "../creatre-new-customer/creatre-new-customer"
// import InspectionPropertyInformation from "../../inspection-property-information/inspection-property-information"
// import { useState } from "react"

function SaveNext(props) {
    // const [inspectionPropertyInformation, setInspectionPropertyInformation] = useState(false)
    // const [backCreateNewCustomer, setBackCreateNewInspection] = useState(false)

    // function handleClickOpen() {
    //     setInspectionPropertyInformation(true)
    // }
    // function handleClickBackOpen() {
    //     setBackCreateNewInspection(true)
    // }

    return (
        <div className='create-inspection'>

           
            <div className='new-customer'>
                <h3>Create new Customer</h3>
            </div>

            <div className="customer-detail">
                <div className="text-area">
                    <input type="text" placeholder="Inspection address" />
                </div>
                <div className="text-area">
                    <input type="text" placeholder="Location ID" />
                    <input type="text" placeholder="Site Contact" />
                </div>

                <div className="text-area">
                    <input type="text" placeholder="Type of building" />
                    <input type="text" placeholder="Date of Inspection" />
                </div>

                <div className="text-area">
                    <input type="text" placeholder="Name" />
                    <input type="number" placeholder="Cell Phone" />
                </div>

                <div className="text-area">
                    <input type="text" placeholder="Building TYpe (Optional)" />
                    <input type="text" placeholder="Stories (Optional)" />
                </div>
            </div>

            <div className="save-next-btn">
                {/* <Link to="/createNewCustomer"> */}
                <button className="back-btn" onClick={props.handleBack}>Back</button>
                {/* </Link> */}
                {/* <Link to="/inspectionPropertyInformation"> */}
                <button className="next-btn"onClick={props.handleNext}>Save & Next</button>
                {/* </Link> */}
            </div>
            {/* {inspectionPropertyInformation ? (<InspectionPropertyInformation/>): null}
            {backCreateNewCustomer ? (<CreateNewCustomer/>): null} */}
        </div>
    )
}

export default SaveNext