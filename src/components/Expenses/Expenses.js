import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";



function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('2023');
    //const [filteredInfoText, setFilteredInfoText] = useState('2019, 2021 & 2022');

    let filteredInfoText = '2019, 2021 & 2022'
    const onSelectHandler = (selectedYearIn) => {
        setSelectedYear(selectedYearIn);

        // if(selectedYearIn === '2019'){
        //     filteredInfoText = '2020, 2021 & 2022';
        // }else if(selectedYearIn === '2020'){
        //     filteredInfoText = '2019, 2021 & 2022';
        // }else if(selectedYearIn === '2021'){
        //     filteredInfoText = '2019, 2020 & 2022';
        // }else{
        //     filteredInfoText = '2019, 2020 & 2021';
        // }
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={selectedYear}
                    onSelect={onSelectHandler} />
                <ExpenseItem
                    title={props.expenses[0].title}
                    amount={props.expenses[0].amount}
                    date={props.expenses[0].date} />
                <ExpenseItem
                    title={props.expenses[1].title}
                    amount={props.expenses[1].amount}
                    date={props.expenses[1].date} />
                <ExpenseItem
                    title={props.expenses[2].title}
                    amount={props.expenses[2].amount}
                    date={props.expenses[2].date} />
                <ExpenseItem
                    title={props.expenses[3].title}
                    amount={props.expenses[3].amount}
                    date={props.expenses[3].date} />
            </Card>
        </div>


    );
}

export default Expenses;