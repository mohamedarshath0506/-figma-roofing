import '../component/traffic.css'

function Traffic(props) {
    return (
        <div className="progress ">
            <div>
                <h1 className="number">{props.number}</h1>
                <h3 className="inspection">{props.title}</h3>
            </div>
            <div className="image-inProgress">
                <img src={props.image} width="48" height="48" />
            </div>
        </div>
    )
}

export default Traffic