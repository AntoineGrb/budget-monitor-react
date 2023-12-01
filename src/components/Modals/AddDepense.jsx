import './AddDepense.scss'
import PropTypes from 'prop-types'


const AddDepense = ({isAddDepenseOpen , setIsAddDepenseOpen}) => {
    return (
            <div className={`modal ${isAddDepenseOpen && 'is-active'}`}> 
                <div onClick={() => setIsAddDepenseOpen(false)} className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title"> Ajouter une dépense </p>
                        <button onClick={() => setIsAddDepenseOpen(false)} className="delete"></button>
                    </header>
                    <section className="modal-card-body">
                        <label> Date de la dépense : </label>
                        <input className="input" type="date" name="date" id="date" />
                        <label> Libellé de la dépense : </label>
                        <input className="input" type="text" name="libelle" id="libelle" />
                        <label> Type de dépense : </label>
                        <select className="select" name="tag" id="tag">
                            <option value="food"> Food </option>
                            <option value="out"> Sortie </option>
                        </select>
                        <label> Montant (€) : </label>
                        <input className="input" type="number" name="amount" id="amount" />
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button"> Valider </button>
                        <button onClick={() => setIsAddDepenseOpen(false)} className="button"> Annuler </button>
                    </footer>
                </div>
            </div>
    )
}

AddDepense.propTypes = {
    isAddDepenseOpen: PropTypes.bool,
    setIsAddDepenseOpen: PropTypes.func
}

export default AddDepense