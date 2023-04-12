import './in-progress.css'

import calendar from "../../image/calendar.svg" 
import search from "../../image/search.svg"
import file from "../../image/file.svg"
import { Link } from 'react-router-dom'
import RoofSections from '../roof-sections/roof-sections'
import { useState } from 'react'

function InProgress() {

    const [roofSections, setRoofSections] = useState(false);

function handleClickOpen() {
    setRoofSections(true);
}
   
    return(
        <div className="inprogress-container-1">
           
            
           {roofSections ? (
        <RoofSections
        />) : (
            <>
            <div className='inprogress-header-container-1'>
                <div className="latest-1">
                    <h2>IN Progress</h2>
                </div>
                <div className="calendar-1">
                    <p className="day-1">Day</p>
                    <p>Week</p>
                    <p>Month</p>
                    <div className="calender-image-1">
                        <img src={calendar} alt="calender-1" />
                    </div>
                    <div className="calender-image-1">
                        <img src={search} alt="search-1" />
                    </div>
                        <p className="calender-image-1">Status : all</p>
                        <p className="calender-image-1">Location ID</p>
                </div> 
            </div>

            <table>

            <tr className="title-content-1">
                    <td className="workorder-1">WORKORDER #</td>
                    <td className="customer-details-1">CUSTOMER NAME & CUSTOMER ID/EMAIL</td>
                    <td>LOCATION ID</td>
                    <td>ADDRESS</td>
                    <td>SERVICE TYPE</td>
                    <td>INSPECTOP</td>
                    <td>Status</td>
                </tr>
                
            <tr className="text-item-1">
                    <th className="item-2"> <img src={file} />  ID 10-3865-625</th>
                    <th>Mike Fankalin<br/>
                        ID 8564758
                    </th>
                    <th>LC ID 856</th>
                    <th>City name <br/>
                        196 Cole plain subte 695,52563
                    </th>
                    <th>full condition report</th>
                    <th>Inspector Name</th>
                    <th className='inspection-1'><td>Inspection</td></th>
                    
                </tr>
                <tr className="text-item-1">
                    <th className="item-2"> <img src={file} />  ID 10-3865-625</th>
                    <th>Mike Fankalin<br/>
                        ID 8564758
                    </th>
                    <th>LC ID 856</th>
                    <th>City name <br/>
                        196 Cole plain subte 695,52563
                    </th>
                    <th>full condition report</th>
                    <th>Inspector Name</th>
                    <Link to="/roofSections">
                    <th className='in-review-1' ><td>In Review</td></th>
                    </Link>
                </tr>
                <tr className="text-item-1">
                    <th className="item-2"> <img src={file} />  ID 10-3865-625</th>
                    <th>Mike Fankalin<br/>
                        ID 8564758
                    </th>
                    <th>LC ID 856</th>
                    <th>City name <br/>
                        196 Cole plain subte 695,52563
                    </th>
                    <th>full condition report</th>
                    <th>Inspector Name</th>
                    <th className='cancelled-1'><td>Cancelled</td></th>
                   
                </tr>
            </table>
            </>
        )
        }
        </div>
    )
}

export default InProgress