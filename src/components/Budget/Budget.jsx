import './Budget.scss'
import PropTypes from 'prop-types'
import { useState , useEffect } from 'react'
import {months , years } from '../../data/time-units'

const Budget = ({depenses , setFilteredDepenses}) => {

    //Déclaration des states locaux 
    const [month , setMonth] = useState('janvier');
    const [year , setYear] = useState('2023');
    const [salary , setSalary] = useState(2300);

    useEffect(() => {
        const filterOnDepenses = () => {

            //Formater la date choisie
            const formattedDate = `${year}-${month}`
    
            //Filtrer sur les dates sélectionnées
            const depensesToDisplay = depenses.filter(depense => depense.date.substring(0,7) === formattedDate);
            setFilteredDepenses([...depensesToDisplay])
        }
        filterOnDepenses()

    },[year, month, depenses, setFilteredDepenses])

    return (
        <>
            <header className="budget-header">
                <h1> Mon budget </h1>
            </header>
            <section className="budget-panel">
                <div className="inputs">
                    <div className="inputs__date select is-rounded">
                        <select value={month} onChange={e => setMonth(e.target.value)} name="month" id="month">
                            {months.map((month , index) => (
                                <option key={index} value={month.number}> {month.name} </option>
                            ))}
                            
                        </select>
                        <select value={year} onChange={e => setYear(e.target.value)} name="year" id="year">
                            {years.map((year , index) => (
                                <option key={index} value={year}> {year} </option>
                            ))}
                        </select>
                    </div>
                    <div className="inputs__incomes">
                        <label> Salaire (€) </label>
                        <input value={salary} onChange={e => setSalary(e.target.value)} className="input" type="number" name="salary" id="salary"/>
                        <label> Autres revenus (€) </label>
                        <input className="input" type="text" name="other-incomes" id="other-incomes" value="0"/> 
                </div>
                </div>
                <div className="display">
                    <h2 className="current-month"> <span>Janvier</span> <span> 2023</span> </h2>
                    <p className="current-budget"> <span>250€</span> / <span>2300€</span> </p>
                    <progress className="progress is-primary is-large" value="100" max="230"></progress>
                </div>
            </section>
        </>
    )
}

Budget.propTypes = {
    depenses: PropTypes.array,
    setFilteredDepenses: PropTypes.func
}

export default Budget