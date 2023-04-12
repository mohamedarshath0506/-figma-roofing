import "./traffic-by-site.css"
import Traffic from "../../component/traffic"
import RoofingTraffic from "../../component/roofing-traffic"
import TrafficTwo from "../../component/traffic-two"

import inProgress from "../../image/in_progress.png"
import upcoming from "../../image/upcoming.png"
import totalInspection from "../../image/total-inspection.png"
import keyboard from "../../image/keyboard-arrow-down.png"

function TrafficBySite () {

    return (
     <div className="progress-container1">
        <section className="progress-container">

            <Traffic number={71} title="Inspection In Progress" image={inProgress} />

            <Traffic number={36} title="Upcoming Inspections" image={upcoming} />

            <Traffic number="526k" title="Total Inspection" image={totalInspection} />
           
            
        </section>

        <section className="main-container">
            <div className="traffic-content"> 
                <div className="title">
                    <div className="traffic-title" >
                        <h1>Traffic by Site</h1>
                    </div>
                    <div className="yearly"> 
                        <p>Yearly</p>
                        <img src={keyboard}  width="18" height="12"/>
                    </div>
                </div>

                <div className="traffic-type-content">
                    
                    <RoofingTraffic number={86} title="Assigned" style={{borderTop:"10px solid #166693"}} />
                    <RoofingTraffic number={125} title="In Progress" style={{borderTop:"10px solid #38E1F9"}} /> 
                </div> 
                


                <div className="traffic-site-container">

                    <TrafficTwo number={32} title="In Review" style={{borderTop:"10px solid #FFC107"}}  />
                    <TrafficTwo number="02" title="Cancelled" style={{borderTop:"10px solid #FF0000"}}  />
                    <TrafficTwo number={146} title="Completed" style={{borderTop:"10px solid #54D62C"}}  />

                   
                </div>
            </div>

            <div className="traffic-percentsge">
                <div className="traffic-days">
                    <h1>Wednesday, 16 November 2022</h1>
                </div>
                <div>
                    <div className="border-one">
                        <div className="line-one"></div>
                    </div>

                    <div className="border-two">
                        <div className="line-two"></div>
                    </div>

                    <div className="border-three">
                        <div className="line-three"></div>
                    </div>

                    <div className="border-four">
                        <div className="line-four"></div>
                    </div>

                    <div className="border-five">
                        <div className="line-five"></div>
                    </div>
                </div>

                <div className="total-roles">
                    <div>
                        <div className="role-one">
                            <hr/>
                            <h4>Assigned</h4>
                        </div>
                        <div className="role-number">
                            <h1>324</h1>
                        </div>
                    </div>

                    <div>
                        <div className="role-two">
                            <hr/>
                            <h4>In progress</h4>
                        </div>
                        <div className="role-number">
                            <h1>56</h1>
                        </div>
                    </div>

                    <div>
                        <div className="role-three">
                            <hr/>
                            <h4>In Review</h4>
                        </div>
                        <div className="role-number">
                            <h1>120</h1>
                        </div>
                    </div>
                </div>

                <div className="total-role">
                    <div>
                        <div className="role-four">
                            <hr/>
                            <h4>Cancelled</h4>
                        </div>
                        <div className="role-number">
                            <h1>9</h1>
                        </div>
                    </div>

                    <div>
                        <div className="role-five">
                            <hr/>
                            <h4>Completed</h4>
                        </div>
                        <div className="role-number">
                            <h1>210</h1>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    </div>)
}

export default TrafficBySite