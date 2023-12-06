import {useState, useEffect, createContext} from 'react'

export const IncomesContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const IncomesProvider = ({children}) => {

    //STATES DU CONTEXTE DEPENSES
    //Les incomes (tableau qui contiendra des objets avec les revenus enregistrés pour un couple mois/année)
    const [incomes, setIncomes] = useState([{month:'11' , year:'2023', salary:4600, otherIncomes:1000 }])

    //Sauvegarde dans le local storage à chaque modif du tableau depenses


    return (
        <IncomesContext.Provider value={{incomes, setIncomes}}>
            {children}
        </IncomesContext.Provider>
    )
}