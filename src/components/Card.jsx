import React from "react";
import "../style/Card.css"
function Card({users}){
    const{name, job, hobby} = users;
    return(
        <div className="card-container">
            <p className="card-name">Name: {users.name}</p>
            <p className="card-job">Job: {users.job}</p>
            <p className="card-hobby">Hobby: {users.hobby}</p>
        </div>
    );
}
export default Card;