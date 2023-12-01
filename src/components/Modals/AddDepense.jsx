import './AddDepense.scss'
import { toast } from 'react-toastify'
import PropTypes from 'prop-types'
import { useState } from 'react'
import {tags} from '../../data/tags'

const AddDepense = ({isAddDepenseOpen , setIsAddDepenseOpen , depenses, setDepenses}) => {

    //Déclaration des states des inputs de la modale
    const [depenseDate , setDepenseDate] = useState('2023-12-01');
    const [depenseLibelle , setDepenseLibelle] = useState('');
    const [depenseTag , setDepenseTag] = useState('Autres');
    const [depenseAmount , setDepenseAmount] = useState(1);

    const submitForm = (e) => {
        e.preventDefault();

        if (depenseAmount == 0) {
            return
        }

        //Enregistrer la nouvelle dépense
        const newDepense = {
            date:depenseDate,
            libelle:depenseLibelle,
            tag:depenseTag,
            amount:parseInt(depenseAmount)
        }

        //L'ajouter au tableau
        setDepenses([...depenses , newDepense])

        //Toast succes de la demande
        const notify = () => toast.success("Dépense ajoutée !" , {
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

    const closeModal = () => {
        //Rénitialiser et fermer le formulaire
        setDepenseDate('2023-12-01');
        setDepenseLibelle('');
        setDepenseTag('Autres');
        setDepenseAmount(1);
        setIsAddDepenseOpen(false);
    }

    return (
            <div className={`modal ${isAddDepenseOpen && 'is-active'}`}> 
                <div className="modal-background"></div>
                <div className="modal-card">
                    <form onSubmit={(e) => submitForm(e)}>
                        <header className="modal-card-head">
                            <p className="modal-card-title"> Ajouter une dépense </p>
                            <button onClick={closeModal} className="delete"></button>
                        </header>
                        <section className="modal-card-body">
                            <label> Date de la dépense : </label>
                            <input value={depenseDate} onChange={(e) => setDepenseDate(e.target.value)} className="input" type="date" name="date" id="date" required />
                            <label> Libellé de la dépense : </label>
                            <input value={depenseLibelle} onChange={(e) => setDepenseLibelle(e.target.value)} className="input" type="text" name="libelle" id="libelle" required />
                            <label> Type de dépense : </label>
                            <select value={depenseTag} onChange={(e) => setDepenseTag(e.target.value)} className="select" name="tag" id="tag">
                                {tags.map((tag , index)=> (
                                    <option key={index} value={tag.name}> {tag.name} </option>
                                ))}
                            </select>
                            <label> Montant (€) : </label>
                            <input value={depenseAmount} onChange={(e) => setDepenseAmount(e.target.value)} className="input" type="number" name="amount" id="amount" min="1" required />
                        </section>
                        <footer className="modal-card-foot">
                            <button type="submit" className="button"> Valider </button>
                            <button type='button' onClick={closeModal} className="button"> Annuler </button>
                        </footer>
                    </form>
                </div>
            </div>
    )
}

AddDepense.propTypes = {
    isAddDepenseOpen: PropTypes.bool,
    setIsAddDepenseOpen: PropTypes.func,
    setDepenses: PropTypes.func,
    depenses : PropTypes.array,
}

export default AddDepense