import './Depenses.scss'

const Depenses = () => {
    return (
        <>
            <header className="depenses-header">
                <h1> Mes dépenses </h1>
                <button className="button"> <i className="fa-regular fa-square-plus"></i> Ajouter une dépense </button>
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

                    <div className="board__row content">
                        <div className="cell actions">
                            <i className="fa-regular fa-pen-to-square"></i> 
                            <i className="fa-regular fa-trash-can"></i>
                        </div>
                        <div className="cell date">22/3</div>
                        <div className="cell libelle">Starbucks</div>
                        <div className="cell etiquette"><div className="tag is-black"> Food </div></div>
                        <div className="cell amount">20€</div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Depenses