import "./creatre-new-customer.css"

//import { Link } from "react-router-dom"
import leftSide from '../../image/left-side.png'
// import { useState } from "react"
// import SaveNext from "../save-next/save-next"
// import CreateNewInspection from "../create-a-new-inspection/create-a-new-inspection"


function CreateNewCustomer(props) {

    // const [createNewCustomer, setCreateNewCustomer] = useState(false)
    // const [backCreateNewInspection, setBackCreateNewInspection] = useState(false)

    // function handleClickOpen() {
    //     setCreateNewCustomer(true)
    // }

    // function handleClickBackOpen() {
    //     setBackCreateNewInspection(true)
    // }

    return (
        <div className='create-inspection'>
           
            <div className='new-customer'>
                {/* <Link to="/createNewInspection"> */}
                    <img src={leftSide} width="15" height="15" onClick={props.handleBack} />
                {/* </Link> */}
                <h3>Create new Customer</h3>
            </div>

            <div className="customer-detail">
                <div className="text-area">
                    <input type="text" placeholder="Company Name" />
                    <input type="text" placeholder="Billing address" />
                </div>

                <div className="text-area">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                </div>

                <div className="text-area">
                    <input type="text" placeholder="Job Title" />
                </div>

                <div className="text-area">
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Cell Phone" />
                </div>
            </div>

            {/* <Link to="/saveNext"> */}
            <div className="save-next-btn" >
                <button className="next-btn"onClick={props.handleNext} >Save & Next</button>
            </div>
           {/* </Link> */}
           {/* {createNewCustomer ? (<SaveNext />):null} */}
           {/* {backCreateNewInspection ? (<CreateNewInspection />): null} */}
        </div>
    )
}

export default CreateNewCustomer