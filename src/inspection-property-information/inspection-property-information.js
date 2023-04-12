import "./inspection-property-information.css"

// import { Link } from "react-router-dom"

// import path from "../image/Path.png"
// import AddNotes from "../component/add-notes/add-notes"
// import SaveNext from "../component/save-next/save-next"
// import { useState } from "react"


function InspectionPropertyInformation(props) {

    // const [addNotes, setAddNotes] = useState(false)
    // const [saveNext, setSaveNext] = useState(false)

    // function handleClickOpen() {
    //     setAddNotes(true)
    // }

    // function handleClickBackOpen() {
    //     setSaveNext(true)
    // }
        return (
            <div className='create-inspection'>
           
           <div className='new-customer-1'>
                <h3>Create new Customer</h3>
            </div>

            <div> 
                <div className='customer-page-1'>
                    <div>
                        <p>Manuel Cooper</p>
                        <p className="number-email">(512)588-7852 munual@gmail.com</p>
                    </div>
                    <div className='customer-page-2'>
                        <p>Change Inspector</p>
                    </div>
                </div>

                <div className='customer-page-3'>
                   <p>Add Sale person</p>
                </div>

                <div className='customer-page-3'>
                   <p>Add Supervisor</p>
                </div>
            </div>
            

           <div className="save-next-btn">
            {/* <Link to="/saveNext"> */}
               <button className="back-btn" onClick={props.handleBack}>Back</button>
               {/* </Link> */}
               {/* <Link to="/addNotes"> */}
               <button className="next-btn" onClick={props.handleNext}>Save & Next</button>
               {/* </Link> */}
           </div>
         {/* {addNotes ? (<AddNotes/>): null} */}
         {/* {saveNext ? (<SaveNext/>): null} */}
       </div>
   )
    }
export default InspectionPropertyInformation