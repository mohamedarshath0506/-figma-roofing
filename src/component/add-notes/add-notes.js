import "./add-notes.css"

// import { Link } from "react-router-dom"

// import path from "../../image/Path.png"
// import InspectionPropertyInformation from "../../inspection-property-information/inspection-property-information"
// import { useState } from "react"

function AddNotes(props) {

    // const [inspectionPropertyInformation, setInspectionPropertyInformation] = useState(false)

    // function handleClickBackOpen() {
    //     setInspectionPropertyInformation(true)
    // }
    return(
        <div className='create-inspection-add'>


            <div className='create-content-add'> 
            <textarea placeholder="Add Note">
            
            </textarea>
            </div>

            <div className="save-next-btn-add">
                {/* <Link to="/inspectionPropertyInformation"> */}
                <button className="back-btn-add" onClick={props.handleBack}>Back</button>
                {/* </Link> */}
                <button className="next-btn-add">Save & Next</button>
              
            </div>
        </div>
    )
}

export default AddNotes