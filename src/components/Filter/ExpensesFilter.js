import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const def = props.default
    // console.log(`from filter ${def}`)

    const dropDownHandler = (event) => {
        const year = event.target.value
        props.onGetSelectedYear(year)
    }

    return (
    <div className='expenses-filter'>
        <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={def} onChange={dropDownHandler}>
            <option value='2022'>2023</option>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
            <option value='2018'>2018</option>
        </select>
        </div>
    </div>
    );
};

export default ExpensesFilter;