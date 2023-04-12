import './create-a-new-inspection.css'

import {Link, Route} from "react-router-dom"
import { useState } from 'react';
import CreateNewCustomer from '../creatre-new-customer/creatre-new-customer'
import ChooseCustomer from '../choose-customer/choose-customer';
import SaveNext from '../save-next/save-next';
import InspectionPropertyInformation from '../../inspection-property-information/inspection-property-information';
import AddNotes from '../add-notes/add-notes';

function CreateNewInspection() {

    const [createNewCustomer, setCreateNewCustomer] = useState(false);
    const [chooseCustomer, setChooseCustomer] = useState(false);
    const [counter, setCounter] = useState(1)
  
    const handleNext = () => {
      setCounter(counter + 1)
    }
    
    const handleBack = () => {
      setCounter(counter - 1)
    }


    function handleClickOpen() {
        setCreateNewCustomer(true);
      }

    function handleClickOpen1() {
        setChooseCustomer(true)
    }

    return(
        <div className='create-inspection'>
            <div className='heading'>
                <h1>CREATE A NEW INSPECTION</h1>
            </div>
            <div className='create'>
                <div className="round"></div>
                <div className='line'></div>
                <div className="round-1"></div>
                <div className='line'></div>
                <div className="round-1"></div>
                <div className='line'></div>
                <div className="round-1"></div>
            </div>

            {counter === 1 ? (
                <>

            {createNewCustomer ? (<CreateNewCustomer handleNext={handleNext} handleBack={handleBack}/>) : chooseCustomer ? <ChooseCustomer handleNext={handleNext} handleBack={handleBack}/>: <>
            <div className='title-information'>
                <h4 className='customer-title'>Customer information</h4>
                <h4 className='property-title'>Inspection property information</h4>
                <h4 className='inspection-team'>Inspection team</h4>
                <h4 className='note'>Note</h4>
            </div>
            
            <div className='create-content'>
                {/* <Link to="/CreateNewCustomer">  */}
                    <div className='customer-page' onClick={handleClickOpen} >
                        <h3>Create new Customer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eius</p>
                    </div>
                {/* </Link> */}
                {/* <Link to="/ChooseCustomer"> */}
                    <div className='customer-page' onClick={handleClickOpen1}>
                        <h3>Choose Customer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eius</p>
                    </div>
                {/* </Link> */}
            </div></>}
                </>
            ): counter === 2 ? <SaveNext handleBack={handleBack}handleNext={handleNext} /> : counter === 3 ? <InspectionPropertyInformation handleNext={handleNext} handleBack={handleBack}/>: <AddNotes handleBack={handleBack}/>}
           
        </div>
    )
}

export default CreateNewInspection