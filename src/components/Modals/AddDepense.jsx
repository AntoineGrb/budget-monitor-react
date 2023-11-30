import './AddDepense.scss'

const AddDepense = () => {
    return (
            <div className="modal"> 
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title"> Ajouter une dépense </p>
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
                        <button className="button"> Annuler </button>
                    </footer>
                </div>
                <button className="modal-close"></button>
            </div>
    )
}

export default AddDepense