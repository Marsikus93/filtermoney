import React, {useState} from 'react';
import './App.css';
import { NewComponent } from './NewComponent';

export type FilterType = "all" | "Rubls" | "Dollars"
export type SetMoneyType= Array<MoneyType>
type MoneyType={
    banknots: string,
    value: number,
    number:string
}

function App() {
    const [money, setMoney] = useState<SetMoneyType>([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
    const [filter, setFilter] = useState<FilterType>("all")
    // let currentMoney=money.filter((filteredMoney)=>filteredMoney.banknots==="RUBLS")
    let currentMoney = money;
    if (filter === "Rubls") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === "RUBLS")
    }
    if (filter === "Dollars") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === "Dollars")
    }


    const onClickFilterHandler = (nameButton: FilterType) => {
        // console.log(nameButton)
        setFilter(nameButton)   //teper name button=filter i mojno menyat v if
    }
    return (<>
        <NewComponent currentMoney1={currentMoney} onClickFilterHandler1={onClickFilterHandler}/>
        </>
    );
}

export default App;
