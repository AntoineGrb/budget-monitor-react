import './Budget.scss'
import PropTypes from 'prop-types'
import { useState , useEffect } from 'react'
import {months , years } from '../../data/time-units'

const Budget = ({depenses , filteredDepenses, setFilteredDepenses}) => {

    //Déclaration des states locaux 
    const [month , setMonth] = useState('01');
    const [year , setYear] = useState('2023');
    const [salary , setSalary] = useState(2300);
    const [otherIncomes, setOtherIncomes] = useState(0)

    //Déclenchement du filtrage des données
    useEffect(() => {
        const filterOnDepenses = () => {

            //Formater la date choisie
            const formattedDate = `${year}-${month}`
    
            //Filtrer sur les dates sélectionnées
            const depensesToDisplay = depenses.filter(depense => depense.date.substring(0,7) === formattedDate);
            setFilteredDepenses([...depensesToDisplay])
        }
        filterOnDepenses()

    },[year, month, depenses, setFilteredDepenses]) //Les données sont mises à jour à chaque changement de mois/année et d'ajout de dépense

    //Gérer la progress bar des dépenses
    const calculateFilteredAmount = () => {
        //Sommer toutes les dépenses filtrées
        let amount = 0;
        filteredDepenses.forEach(el => {
            amount += el.amount
        })
        return amount
    }

    //Gérer l'affichage du mois en toute lettre
    const displayMonthInLetter = () => {
        const monthToDisplay = months[parseInt(month) - 1] //month est le state du mois sélectionné format '01' et le mois JS commence à partir de 0
        return monthToDisplay.name
    }
    
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
                        <input value={salary} onChange={e => setSalary(parseInt(e.target.value))} className="input" type="number" name="salary" id="salary"/>
                        <label> Autres revenus (€) </label>
                        <input value={otherIncomes} onChange={e => setOtherIncomes(parseInt(e.target.value))} className="input" type="number" name="other-incomes" id="other-incomes"/> 
                </div>
                </div>

                <div className="display">
                    <h2 className="current-month"> <span>{displayMonthInLetter()}</span> <span>{year}</span> </h2>
                    <p className="current-budget"> 
                        <span>{filteredDepenses ? calculateFilteredAmount() : 0}€</span> / 
                        <span>{salary + otherIncomes}€</span> 
                    </p>
                    <progress className="progress is-primary is-large" value={calculateFilteredAmount()} max={salary + otherIncomes}></progress>
                </div>
            </section>
        </>
    )
}

Budget.propTypes = {
    depenses: PropTypes.array,
    filteredDepenses: PropTypes.array,
    setFilteredDepenses: PropTypes.func
}

export default Budget