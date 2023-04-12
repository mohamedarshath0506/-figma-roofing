import "./inspections.css"


import calendar from "../../image/calendar.svg" 
import search from "../../image/search.svg"
import file from "../../image/file.svg"
import {Link} from "react-router-dom"
import { useState } from "react"
import CreateNewInspection from "../create-a-new-inspection/create-a-new-inspection"


function Inspections() {

    const [createNewInspection, setCreateNewInspection] = useState(false);

  function handleClickOpen() {
    setCreateNewInspection(true);
  }

    return(
        <section className="section-container-one">
            
            {createNewInspection ? (
        <CreateNewInspection
        />) : (
            <>
            <div className="latest-inspection-container">
                <div className="latest">
                    <h2>LATEST INSPECTIONS</h2>
                </div>
                <div className="calendar">
                    <p className="day ">Day</p>
                    <p>Week</p>
                    <p>Month</p>
                    <div className="calender-image">
                        <img src={calendar} alt="calender" />
                    </div>
                    <div className="calender-image">
                        <img src={search} alt="search" />
                    </div>
                        <p className="calender-image">Location ID</p>
                   
                        <button className="btn-content" onClick={handleClickOpen}>Create a new Inspection</button>
                 
                </div> 
            </div>
            <table>
                <tr className="title-content">
                    <td className="workorder">WORKORDER #</td>
                    <td className="customer-details">CUSTOMER NAME & CUSTOMER ID/EMAIL</td>
                    <td>LOCATION ID</td>
                    <td>ADDRESS</td>
                    <td>SERVICE TYPE</td>
                    <td>SERVICE DATE</td>
                    <td>INSPECTOP</td>
                </tr>
                <tr className="text-item">
                    <th className="item-1"> <img src={file} />  ID 10-3865-625</th>
                    <th>Mike Fankalin<br/>
                        ID 8564758
                    </th>
                    <th>LC ID 856</th>
                    <th>City name <br/>
                        196 Cole plain subte 695,52563
                    </th>
                    <th>full condition report</th>
                    <th>7 7Novermber 2022</th>
                    <th>Inspector Name</th>
                    <th>...</th>
                </tr>
                <tr className="text-item">
                    <th className="item-1"> <img src={file} />  ID 10-3865-625</th>
                    <th>Mike Fankalin<br/>
                        ID 8564758
                    </th>
                    <th>LC ID 856</th>
                    <th>City name <br/>
                        196 Cole plain subte 695,52563
                    </th>
                    <th>full condition report</th>
                    <th>7 7Novermber 2022</th>
                    <th>Inspector Name</th>
                    <th>...</th>
                </tr>
                <tr className="text-item">
                    <th className="item-1"> <img src={file} />  ID 10-3865-625</th>
                    <th>Mike Fankalin<br/>
                        ID 8564758
                    </th>
                    <th>LC ID 856</th>
                    <th>City name <br/>
                        196 Cole plain subte 695,52563
                    </th>
                    <th>full condition report</th>
                    <th>7 7Novermber 2022</th>
                    <th>Inspector Name</th>
                    <th>...</th>
                </tr>
                <tr className="text-item">
                    <th className="item-1"> <img src={file} />  ID 10-3865-625</th>
                    <th>Mike Fankalin<br/>
                        ID 8564758
                    </th>
                    <th>LC ID 856</th>
                    <th>City name <br/>
                        196 Cole plain subte 695,52563
                    </th>
                    <th>full condition report</th>
                    <th>7 7Novermber 2022</th>
                    <th>Inspector Name</th>
                    <th>...</th>
                </tr>
                <tr className="text-item">
                    <th className="item-1"> <img src={file} />  ID 10-3865-625</th>
                    <th>Mike Fankalin<br/>
                        ID 8564758
                    </th>
                    <th>LC ID 856</th>
                    <th>City name <br/>
                        196 Cole plain subte 695,52563
                    </th>
                    <th>full condition report</th>
                    <th>7 7Novermber 2022</th>
                    <th>Inspector Name</th>
                    <th>...</th>
                </tr>
                <tr className="text-item">
                    <th className="item-1"> <img src={file} />  ID 10-3865-625</th>
                    <th>Mike Fankalin<br/>
                        ID 8564758
                    </th>
                    <th>LC ID 856</th>
                    <th>City name <br/>
                        196 Cole plain subte 695,52563
                    </th>
                    <th>full condition report</th>
                    <th>7 7Novermber 2022</th>
                    <th>Inspector Name</th>
                    <th>...</th>
                </tr>
            </table>
            </>
        )
        }
        </section>
        
    )
}

export default Inspections