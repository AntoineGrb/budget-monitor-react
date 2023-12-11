import './Depenses.scss'
import PropTypes from 'prop-types'
import { useContext, useEffect, useState } from 'react'
import { DepensesContext } from '../../context/DepensesContext'
import { notifyInfo } from '../../utils/toastNotifications'
import {tags} from '../../data/tags'

const Depenses = ({setIsAddDepenseOpen , setIsEditDepenseOpen}) => {

    //Récupérer les states du context
    const {depenses, setDepenses, filteredDepenses, setEditedDepenseId} = useContext(DepensesContext)

    //Ouvrir la modale contenant EditForm avec la bonne dépense
    const openEditForm = (depenseId) => {
        setIsEditDepenseOpen(true);
        setEditedDepenseId(parseInt(depenseId))
    }

    //Supprimer une ligne de dépense
    const removeDepense = (depenseId) => {
        const depensesUpdated = depenses.filter(depense => depense.id !== depenseId);
        setDepenses([...depensesUpdated]);
        notifyInfo('Dépense supprimée !')

    }

    //Gestion de la couleur des tags
    const displayTagColor = (tagName) => {
        const tag = tags.find(tag => tag.name === tagName);
        return tag.color
    }

    //Gérer la dimension de l'écran pour afficher le tableau en mode mobile
    const [windowWitdh , setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize' , handleResize);

        return () => window.removeEventListener('resize' , handleResize)
    }, []);

    const isMobile = windowWitdh < 1000;


    return (
        <>
            <header className="depenses-header">
                <h1> Mes dépenses </h1>
                <button onClick={() => setIsAddDepenseOpen(true)} className="button"> <i className="fa-regular fa-square-plus"></i> <p> Ajouter une dépense </p> </button>
            </header>
            <section className="depenses-panel">
                <div className="board ">
                    <div className="board__row head is-primary">
                        <div className="header actions is-primary"><p>Actions</p></div>
                        <div className="header date"><p>Date</p></div>
                        <div className="header libelle"><p>Libellé</p></div>
                        { !isMobile && <div className="header etiquette"><p>Tag</p></div>}
                        <div className="header amount"><p>Montant</p></div>
                    </div>

                    {filteredDepenses.length > 0 ? 
                        filteredDepenses.map((depense) => (
                            <div id={depense.id} key={depense.id} className="board__row">
                                <div className="cell actions">
                                    <i onClick={() => openEditForm(depense.id)} className="fa-regular fa-pen-to-square"></i> 
                                    <i onClick={() => removeDepense(depense.id)} className="fa-regular fa-trash-can"></i>
                                </div>
                                <div className="cell date"><p>{depense.date}</p></div>
                                <div className="cell libelle">
                                    <p>{depense.libelle}</p>
                                    { isMobile && <div className={`tag small-tag ${displayTagColor(depense.tag)}`}> <p>{depense.tag} </p></div>}
                                </div>
                                { !isMobile && <div className="cell etiquette"><div className={`tag ${displayTagColor(depense.tag)}`}> <p>{depense.tag} </p></div></div>}
                                <div className="cell amount"><p>{depense.amount}€</p></div>
                            </div>
                        ))
                        : <p className='board_row empty'> Pas de dépenses ce mois ci ! </p>
                    }

                    
                </div>
            </section>
        </>
    )
}

Depenses.propTypes = {
    setIsAddDepenseOpen: PropTypes.func,
    setIsEditDepenseOpen: PropTypes.func,
    depenses: PropTypes.array,
    setDepenses: PropTypes.func,
    filteredDepenses: PropTypes.array,
    setEditedDepenseId: PropTypes.func
}



export default Depenses