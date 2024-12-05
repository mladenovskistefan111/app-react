import React from "react";
import "../../../index.css";
import { Link } from "react-router-dom";

const bookTerm = (props) => {
    return (
        <div className="card bg-body">
            <div className="card header bg-info text-center">
                <h5 style={{fontFamily:"Roboto",fontSize:"24px",color:"#FFFFFF" }} className="card-header">
                    {props.currentItem.name}
                </h5>
            </div>
            <div className="card-body bg-light">
                <p className="card-text text-center fw-semibold">
                    Category: <b>{props.currentItem.category}</b>
                </p>
                <p className="card-text text-center fw-semibold">
                    Author:
                    {" " +
                        props.currentItem.author.name +
                        " " +
                        props.currentItem.author.surname}
                </p>
                <p className="card-text text-center fw-semibold">
                    Available copies: <b>{props.currentItem.availableCopies}</b>
                </p>
                <div className="d-flex justify-content-center">
                    <Link
                        className="btn btn btn-dark text-center"
                        to={`/books/edit/${props.currentItem.id}`}
                        onClick={() => props.getCurrentBook(props.currentItem.id)}
                    >Edit

                    </Link>
                    <a
                        title={"Delete"}
                        onClick={() => props.onDeleteCurrentBook(props.currentItem.id)}
                        className="btn btn btn-danger text-center"
                    >Delete

                    </a>
                    <button
                        title={"SetCopies"}
                        onClick={() => props.changeCopiesValue(props.currentItem.id)}
                        className="btn btn btn-success"
                        disabled={props.currentItem.availableCopies === 0}
                    >
                        Mark as taken
                    </button>
                </div>
            </div>
        </div>
    );
};

export default bookTerm;