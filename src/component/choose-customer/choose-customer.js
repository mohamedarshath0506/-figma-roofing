import "./choose-customer.css"

import leftSide from '../../image/left-side.png'
import { Link } from "react-router-dom"

function ChooseCustomer(props) {
    return (
        <div className='create-inspection-1'>
            <div className='new-customer-1'>
                <Link to="/createNewInspection">
                    <img src={leftSide} width="15" height="15" />
                </Link>
                <h3>Create new Customer</h3>
            </div>
            <div className='create-content-1'> 
                <div>
                    <input type="text" />
                </div>
                <div className='customer-page-1'>
                    <h4>Mike Fankalin</h4>
                    <p>ID 8585   rondey.connon@gmail.com</p>
                </div>
            </div>
            <div className="save-next-btn">
                <button className="next-btn" onClick={props.handleNext}>Save & Next</button>
            </div>
        </div>
    )
}

export default ChooseCustomer