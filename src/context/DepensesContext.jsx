import {useState, useEffect, createContext} from 'react'

export const DepensesContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const DepensesProvider = ({children}) => {

    //STATES DU CONTEXTE DEPENSES
    //Les dépenses
    const [depenses, setDepenses] = useState(() => { //L'état par défaut de dépenses est recupéré dans le local storage, sinon c'est un tableau vide.
    const savedDepenses = localStorage.getItem('depenses');
    return savedDepenses ? JSON.parse(savedDepenses) : [];
    });

    //Les dépenses filtrées par mois et affichées
    const [filteredDepenses , setFilteredDepenses] = useState([]);

    //L'ID de la dépense à modifier (passé dans le EditForm)
    const [editedDepenseId, setEditedDepenseId] = useState(1); 

    //Sauvegarde dans le local storage à chaque modif du tableau depenses
    useEffect(() => {
        localStorage.setItem('depenses', JSON.stringify(depenses));
    }, [depenses])


    return (
        <DepensesContext.Provider value={{depenses, setDepenses, filteredDepenses, setFilteredDepenses, editedDepenseId, setEditedDepenseId}}>
            {children}
        </DepensesContext.Provider>
    )
}