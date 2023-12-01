import PropTypes from 'prop-types'
import { useState } from 'react'
import {tags} from '../../data/tags'
import { toast } from 'react-toastify'
import SubmitButton from '../Buttons/SubmitButton'
import CancelButton from '../Buttons/CancelButton'

const EditForm = ({setIsEditDepenseOpen , depenses, setDepenses}) => {

    //Déclaration des states des inputs du formulaire
    const [depenseLibelle , setDepenseLibelle] = useState('');
    const [depenseTag , setDepenseTag] = useState('Autres');
    const [depenseAmount , setDepenseAmount] = useState(1);

    const submitForm = (e) => {
        e.preventDefault();

        //Modifier la  dépense 
        console.lot(depenses)

        //Générer un nouveau tableau à jour
        console.log(setDepenses)


        //Toast succes de la demande
        const notify = () => toast.success("Dépense modifiée !" , {
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
        setDepenseLibelle('');
        setDepenseTag('Autres');
        setDepenseAmount(1);
        setIsEditDepenseOpen(false);
    }

    return (
        <form onSubmit={(e) => submitForm(e)}>
            <header className="modal-card-head">
                <p className="modal-card-title"> Editer la dépense </p>
                <button onClick={closeModal} className="delete"></button>
            </header>
            <section className="modal-card-body">
                <label> Modifier le libellé : </label>
                <input value={depenseLibelle} onChange={(e) => setDepenseLibelle(e.target.value)} className="input" type="text" name="libelle" id="libelle" required />
                <label> Modifier le tag : </label>
                <select value={depenseTag} onChange={(e) => setDepenseTag(e.target.value)} className="select" name="tag" id="tag">
                    {tags.map((tag , index)=> (
                        <option key={index} value={tag.name}> {tag.name} </option>
                    ))}
                </select>
                <label> Modifier le montant (€) : </label>
                <input value={depenseAmount} onChange={(e) => setDepenseAmount(e.target.value)} className="input" type="number" name="amount" id="amount" min="1" required />
            </section>
            <footer className="modal-card-foot">
                <SubmitButton />
                <CancelButton closeModal={closeModal}/>
            </footer>
        </form>
    )
}

EditForm.propTypes = {
    setIsEditDepenseOpen: PropTypes.func,
    setDepenses: PropTypes.func,
    depenses : PropTypes.array,
}

export default EditForm