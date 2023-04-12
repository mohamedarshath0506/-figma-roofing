import "./traffic-two.css"

function TrafficTwo (props) {
    return (
        <div className="traffic-site-container">
            <div className="review" style={props.style}> 
                <h1>{props.number}</h1>
                <p>{props.title}</p>
            </div>
        </div>
    )
}

export default TrafficTwo;