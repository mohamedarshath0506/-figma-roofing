import '../component/roofing-traffic.css'

import React from "react"

function RoofingTraffic(props) {

    // let color = "";
    // if (props.title === "Assignment") {
    //     color = "#166693"
    // } else if (props.title === "In Progress") {
    //     color = "#38E1F9"
    // }
    return (
        <div className="traffic-type-content" >
            <div className="assigned" style={props.style}>
                <h1>{props.number}</h1>
                <p>{props.title}</p>
            </div>
        </div> 
    )
}

export default RoofingTraffic