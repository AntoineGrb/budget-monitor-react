import PropTypes from 'prop-types'
import { useState } from 'react'
import { toast } from 'react-toastify'
import SubmitButton from '../Buttons/SubmitButton'
import CancelButton from '../Buttons/CancelButton'

const EditSalaryForm = ({month, year, setIsEditSalaryDepenseOpen, incomes, setIncomes}) => {

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
            salary:salary,
            otherIncomes:otherIncomes
        }

        //Mettre à jour le tableau dépenses 
        const incomesUpdated = incomes.map(income => income.month === newIncome.month && income.year === newIncome.year ? newIncome : income) //On récupère la dépense à éditer via le state editedDepenseId
        setIncomes([...incomesUpdated]);

        //Toast succes de la demande
        const notify = () => toast.success("Revenus mensuels modifiés !" , {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
        });
        notify()

        //Rénitialiser et fermer le formulaire
        closeModal()
    }

    //Fermeture de la modale après soumission
    const closeModal = () => {
        setIsEditSalaryDepenseOpen(false);
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
    setIsEditSalaryDepenseOpen: PropTypes.func,
    incomes : PropTypes.array,
    setIncomes: PropTypes.func
}

export default EditSalaryForm