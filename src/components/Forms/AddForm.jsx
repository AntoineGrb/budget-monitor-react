import PropTypes from 'prop-types'
import { useEffect, useState , useContext } from 'react'
import { DepensesContext } from '../../context/DepensesContext'
import {tags} from '../../data/tags'
import { toast } from 'react-toastify'
import SubmitButton from '../Buttons/SubmitButton'
import CancelButton from '../Buttons/CancelButton'

const AddForm = ({setIsAddDepenseOpen}) => {

    //Récupération des states du context
    const {depenses, setDepenses} = useContext(DepensesContext)

    //Déclaration des states des inputs du formulaire
    const [depenseId, setDepenseId] = useState(1);
    const [depenseDate , setDepenseDate] = useState('2023-12-01'); 
    const [depenseLibelle , setDepenseLibelle] = useState('');
    const [depenseTag , setDepenseTag] = useState('Autres');
    const [depenseAmount , setDepenseAmount] = useState(1);

    useEffect(() => {

        //Récupération de l'ID des nouvelles dépenses ajoutées
        const getCurrentId = () => {
            if (depenses.length === 0) {
                return //Si pas de dépense, l'ID sera la valeur par défaut du state depenseId
            } else {
                const depensesIds = depenses.map(depense => depense.id);
                const currentMaxId = Math.max(...depensesIds) + 1; //On prend l'ID max du tableau et on lui rajoute 1
                setDepenseId(currentMaxId);
            }
        }

        getCurrentId()

    },[depenses])

    //Gestion de la soummission du formulaire
    const submitForm = (e) => {
        e.preventDefault();

        //Enregistrer la nouvelle dépense
        const newDepense = {
            id:depenseId,
            date:depenseDate,
            libelle:depenseLibelle,
            tag:depenseTag,
            amount:parseInt(depenseAmount)
        }

        //L'ajouter au tableau
        setDepenses([...depenses , newDepense]);

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

    //Fermeture de la modale après soumission
    const closeModal = () => {
        //Rénitialiser et fermer le formulaire
        setDepenseDate('2023-12-01'); //! Calcul et mettre la date du jour
        setDepenseLibelle('');
        setDepenseTag('Autres');
        setDepenseAmount(1);
        setIsAddDepenseOpen(false);
    }

    return (
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
                <SubmitButton />
                <CancelButton closeModal={closeModal}/>
            </footer>
        </form>
    )
}

AddForm.propTypes = {
    setIsAddDepenseOpen: PropTypes.func,
    setDepenses: PropTypes.func,
    depenses : PropTypes.array,
}

export default AddForm