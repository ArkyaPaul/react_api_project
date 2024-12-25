import React from "react";
function Elements(props) {
    return (
    <div className="container">
        <div className="card">
            <img src={props.image} alt={props.name} onError={() => props.onError(props.id)}/>
            <div className="properties">
                <h3>{props.name}</h3>
                <p>{props.price}</p>
            </div>
        </div>
    </div>
    )
}
export default Elements;