import React, {useState} from 'react';
import {FilterType, SetMoneyType} from "./App";

type NewComponentProps = {
    currentMoney1: SetMoneyType
    onClickFilterHandler1:(nameButton: FilterType)=>void
}

export const NewComponent = (props: NewComponentProps) => {
    return (
        <div>
            <ul>
                {props.currentMoney1.map((ObjectFromMoneyArray, index) => {
                    return (
                        <li key={index}>
                            <span>{ObjectFromMoneyArray.banknots}</span>
                            <span>{ObjectFromMoneyArray.value}</span>
                            <span>{ObjectFromMoneyArray.number}</span>
                        </li>
                    )

                })}
            </ul>
            <div style={{marginLeft: "35px"}}>
                <button onClick={() => props.onClickFilterHandler1("all")}>All</button>
                <button onClick={() => props.onClickFilterHandler1("Rubls")}>Rubls</button>
                <button onClick={() => props.onClickFilterHandler1("Dollars")}>Dollars</button>
            </div>
        </div>)
}