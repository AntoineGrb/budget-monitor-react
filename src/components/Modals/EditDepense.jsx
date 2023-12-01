import './EditDepense.scss'
import PropTypes from 'prop-types'

const EditDepense = ({isEditDepenseOpen , setIsEditDepenseOpen}) => {
    return (
            <div className={`modal ${isEditDepenseOpen && 'is-active'}`}> 
                <div onClick={() => setIsEditDepenseOpen(false)} className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title"> Editer la dépense </p>
                        <button onClick={() => setIsEditDepenseOpen(false)} className="delete"></button>
                    </header>
                    <section className="modal-card-body">
                        <label> Modifier le libellé </label>
                        <input className="input" type="text" name="libelle" id="libelle" />
                        <label> Modifier le tag : </label>
                        <select className="select" name="tag" id="tag">
                            <option value="food"> Food </option>
                            <option value="out"> Sortie </option>
                        </select>
                        <label> Modifier le montant (€) : </label>
                        <input className="input" type="number" name="amount" id="amount" />
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button"> Valider </button>
                        <button onClick={() => setIsEditDepenseOpen(false)} className="button"> Annuler </button>
                    </footer>
                </div>
                <button className="modal-close"></button>
            </div>
    )
}

EditDepense.propTypes = {
    isEditDepenseOpen: PropTypes.bool,
    setIsEditDepenseOpen: PropTypes.func
}

export default EditDepense