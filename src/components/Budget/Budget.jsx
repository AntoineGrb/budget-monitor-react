import './Budget.scss'

const Budget = () => {
    return (
        <>
            <header className="budget-header">
                <h1> Mon budget </h1>
            </header>
            <section className="budget-panel">
                <div className="inputs">
                    <div className="inputs__date select is-rounded">
                        <select name="month" id="month">
                            <option value="Mois"> Mois à boucler </option>
                        </select>
                        <select name="year" id="year">
                            <option value="2023"> 2023 </option>
                            <option value="2024"> 2024 </option>
                        </select>
                    </div>
                    <div className="inputs__incomes">
                        <label> Salaire (€) </label>
                        <input className="input" type="text" name="salary" id="salary" value="2300" />
                        <label> Autres revenus (€) </label>
                        <input className="input" type="text" name="other-incomes" id="other-incomes" value="0"/> 
                </div>
                </div>
                <div className="display">
                    <h2 className="current-month"> <span>Janvier</span> <span> 2023</span> </h2>
                    <p className="current-budget"> <span>250€</span> / <span>2300€</span> </p>
                    <progress className="progress is-primary is-large" value="100" max="230"></progress>
                </div>
            </section>
        </>
    )
}

export default Budget