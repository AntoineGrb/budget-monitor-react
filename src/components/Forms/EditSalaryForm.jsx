import PropTypes from 'prop-types'
import { useState , useContext } from 'react'
import { notifySuccess } from '../../utils/toastNotifications'
import { IncomesContext } from '../../context/IncomesContext'
import SubmitButton from '../Buttons/SubmitButton'
import CancelButton from '../Buttons/CancelButton'

const EditSalaryForm = ({setIsEditSalaryOpen}) => {

    const {incomes, setIncomes, month, year} = useContext(IncomesContext)

    //Déclaration des states locaux des inputs
    const [salary, setSalary] = useState(2300);
    const [otherIncomes, setOtherIncomes] = useState(0);

    //Gérer le submit du form
    const submitForm = (e) => {
        e.preventDefault();

        //Récupérer les données de l'income
        const newIncome = {
            month: month,
            year: year,
            salary:Number(salary),
            otherIncomes:Number(otherIncomes)
        }

        //Vérifier si le tableau incomes comporte déjà un objet pour ce couple mois/année
        const isIncome = incomes.find(income => income.month === newIncome.month && income.year === newIncome.year);

        let incomesUpdated;
        if (isIncome) {
            //Mettre à jour l'élément existant
            incomesUpdated = incomes.map(income => income.month === newIncome.month && income.year === newIncome.year ? newIncome : income);

        } else {
            //Ajouter l'élément au tableau
            incomesUpdated = [...incomes, newIncome]
        }   
        setIncomes(incomesUpdated)
        
        notifySuccess('Revenus mensuels mis à jour !');
        closeModal()
    }

    //Fermeture de la modale après soumission
    const closeModal = () => {
        //On reset les inputs et on ferme la modale
        setSalary(2300);
        setOtherIncomes(0)
        setIsEditSalaryOpen(false);
    }

    return (
        <form onSubmit={(e) => submitForm(e)}>
            <header className="modal-card-head">
                <p className="modal-card-title"> Mettre à jour les revenus du mois </p>
                <button onClick={closeModal} type='button' className="delete"></button>
            </header>
            <section className="modal-card-body">
                <label> Modifier le salaire (€) : </label>
                <input value={salary} onChange={(e) => setSalary(e.target.value)} className="input" type='number' required/>
                <label > Modifier les autres revenus (€) : </label>
                <input value={otherIncomes} onChange={(e) => setOtherIncomes(e.target.value)} className="input" type='number'/>
            </section>
            <footer className="modal-card-foot">
                <SubmitButton />
                <CancelButton closeModal={closeModal} />
            </footer>
        </form>
    )
}

EditSalaryForm.propTypes = {
    month: PropTypes.string,
    year: PropTypes.string,
    setIsEditSalaryOpen: PropTypes.func,
    incomes : PropTypes.array,
    setIncomes: PropTypes.func
}

export default EditSalaryForm