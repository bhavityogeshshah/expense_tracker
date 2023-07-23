import React from "react";
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const year = props.date.toLocaleString('en-US', { year: 'numeric' });
    const day = props.date.toLocaleString('en-US', {day: 'numeric'});

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">
                    ${props.amount}
                </div>
            </div>
        </Card>
    );
}

export default ExpenseItem;