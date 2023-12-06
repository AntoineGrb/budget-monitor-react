import './Budget.scss'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import { DepensesContext } from '../../context/DepensesContext'
import { IncomesContext } from '../../context/IncomesContext'
import { useEffect } from 'react'
import {months , years } from '../../data/time-units'


const Budget = ({setIsEditSalaryOpen}) => {

    //Récupération des states du context
    const {incomes, month, setMonth, year, setYear} = useContext(IncomesContext)
    const {depenses, filteredDepenses, setFilteredDepenses} = useContext(DepensesContext)

    useEffect(() => {
        //Déclenchement du filtrage des données
        const filterOnDepenses = () => {

            //Formater la date choisie
            const formattedDate = `${year}-${month}`
    
            //Filtrer sur les dates sélectionnées
            const depensesToDisplay = depenses.filter(depense => depense.date.substring(0,7) === formattedDate);
            setFilteredDepenses([...depensesToDisplay])
        }
        filterOnDepenses()

    },[year, month, depenses, setFilteredDepenses]) //Les données sont mises à jour à chaque changement de mois/année et à chaque nouvelle dépense ajoutée

    //Rechercher et afficher les revenus du mois en cours
    const getMonthIncomes = () => {
        //Vérifier s'il y a un revenu enregistré poru le mois/année sélectionné
        const searchedIncome = incomes.find(el => el.month === month && el.year === year);

        if (searchedIncome === undefined) {
            return {
                salary:2300,
                otherIncomes:0
            }
        } else {
            return searchedIncome
        }
    }
    
    //Calculer le montant total des dépenses filtrées
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
        if ((calculateFilteredAmount() / (getMonthIncomes().salary)) < 0.7) {
            return 'is-primary'
        }
        else if ((calculateFilteredAmount() / (getMonthIncomes().salary)) < 0.9) {
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
                        <i onClick={() => setIsEditSalaryOpen(true)} className="fa-regular fa-pen-to-square" title='Editer les revenus mensuels'></i>  
                    </h2>
                    <div className="inputs__incomes">
                        <label> Salaire (€) </label>
                        <span className='input salary'> {getMonthIncomes().salary} €</span>
                        <label> Autres revenus (€) </label>
                        <span className='input salary'> {getMonthIncomes().otherIncomes} €</span>
                    </div>
                </div>
                <div className="display">
                    <h2 className="current-month"> Suivi budget de :  <span>{displayMonthInLetter()}</span> <span>{year}</span> </h2>
                    <p className="current-budget"> 
                        <span className='current-budget__depenses'> {filteredDepenses ? calculateFilteredAmount() : 0}€</span> / 
                        <span className='current-budget__salary'> {getMonthIncomes().salary + getMonthIncomes().otherIncomes}€</span> 
                    </p>
                    <progress className={`progress is-large ${handleProgressBarColor()}`} value={calculateFilteredAmount()} max={getMonthIncomes().salary + getMonthIncomes().otherIncomes}></progress>
                </div>
            </section>
        </>
    )
}

Budget.propTypes = {
    setIsEditSalaryOpen: PropTypes.func,
    depenses: PropTypes.array,
    filteredDepenses: PropTypes.array,
    setFilteredDepenses: PropTypes.func
}

export default Budget