import './Budget.scss'
import PropTypes from 'prop-types'
import { useState , useEffect } from 'react'
import {months , years } from '../../data/time-units'

const Budget = ({depenses , filteredDepenses, setFilteredDepenses}) => {

    //Obtenir la date du jour pour les valeurs par défaut
    const getTodayDate = () => {
        const today = new Date;
        const currentMonth = String(today.getMonth() + 1).padStart(2, '0');
        const currentYear = today.getFullYear().toString();
        return {currentMonth , currentYear}
    }

    useEffect(() => {
        getTodayDate() //On récupère la date du jour au lancement de l'app
    }, [])

    //Déclaration des states locaux 
    const [month , setMonth] = useState(getTodayDate().currentMonth); //Date du jour par défaut
    const [year , setYear] = useState(getTodayDate().currentYear); //Date du jour par défaut
    const [salary , setSalary] = useState(2300);
    const [otherIncomes, setOtherIncomes] = useState(0);

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

    //Gérer le calcul de la progress bar des dépenses
    const calculateFilteredAmount = () => {
        //Sommer toutes les dépenses filtrées
        let amount = 0;
        filteredDepenses.forEach(el => {
            amount += el.amount
        })
        return amount
    }

    //Gérer la couleur de la progress bar des dépenses
    const handleProgressBarColor = () => {
        //Calcul du ratio entre les dépenses du mois et les entrées en argent        
        if ((calculateFilteredAmount() / (salary + otherIncomes)) < 0.7) {
            return 'is-primary'
        }
        else if ((calculateFilteredAmount() / (salary + otherIncomes)) < 0.9) {
            return 'is-warning'
        }
        else {
            return 'is-danger'
        }
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
                    <h2 className='inputs__title'> Sélectionner la période </h2>
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
                    <h2 className='inputs__title'> 
                        Les revenus du mois 
                        <i className="fa-regular fa-pen-to-square" title='Editer les revenus mensuels'></i>  
                    </h2>
                    <div className="inputs__incomes">
                        <label> Salaire (€) </label>
                        <span className='input salary'> 2300 €</span>
                        <label> Autres revenus (€) </label>
                        <span className='input salary'> 0 €</span>
                    </div>
                </div>
                <div className="display">
                    <h2 className="current-month"> Suivi budget de :  <span>{displayMonthInLetter()}</span> <span>{year}</span> </h2>
                    <p className="current-budget"> 
                        <span className='current-budget__depenses'> {filteredDepenses ? calculateFilteredAmount() : 0}€</span> / 
                        <span className='current-budget__salary'> {salary ? salary + otherIncomes : ''}€</span> 
                    </p>
                    <progress className={`progress is-large ${handleProgressBarColor()}`} value={calculateFilteredAmount()} max={salary + otherIncomes}></progress>
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