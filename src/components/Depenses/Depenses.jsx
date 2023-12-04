import './Depenses.scss'
import PropTypes from 'prop-types'
import {tags} from '../../data/tags'

const Depenses = ({setIsAddDepenseOpen , setIsEditDepenseOpen , filteredDepenses}) => {

    //Modifier une ligne de dépense


    //Supprimer une ligne de dépense
    

    //Gestion de la couleur des tags
    const displayTagColor = (tagName) => {
        const tag = tags.find(tag => tag.name === tagName);
        return tag.color
    }

    console.log('filtered depenses : ' , filteredDepenses)

    return (
        <>
            <header className="depenses-header">
                <h1> Mes dépenses </h1>
                <button onClick={() => setIsAddDepenseOpen(true)} className="button"> <i className="fa-regular fa-square-plus"></i> Ajouter une dépense </button>
            </header>
            <section className="depenses-panel">
                <div className="board ">
                    <div className="board__row head is-primary">
                        <div className="header actions is-primary">Actions</div>
                        <div className="header date">Date</div>
                        <div className="header libelle">Libellé</div>
                        <div className="header etiquette">Tag</div>
                        <div className="header amount">Montant</div>
                    </div>

                    {filteredDepenses.length > 0 ? 
                        filteredDepenses.map((depense) => (
                            <div id={depense.id} key={depense.id} className="board__row">
                                <div className="cell actions">
                                    <i onClick={() => setIsEditDepenseOpen(true)} className="fa-regular fa-pen-to-square"></i> 
                                    <i className="fa-regular fa-trash-can"></i>
                                </div>
                                <div className="cell date">{depense.date}</div>
                                <div className="cell libelle">{depense.libelle}</div>
                                <div className="cell etiquette"><div className={`tag ${displayTagColor(depense.tag)}`}> {depense.tag} </div></div>
                                <div className="cell amount">{depense.amount}€</div>
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
    filteredDepenses: PropTypes.array
}



export default Depenses