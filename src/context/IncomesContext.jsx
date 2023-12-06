import {useState, useEffect, createContext} from 'react'

export const IncomesContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const IncomesProvider = ({children}) => {

    //Obtenir la date du jour pour les valeurs par défaut
    const getTodayDate = () => {
        const today = new Date;
        const currentMonth = String(today.getMonth() + 1).padStart(2, '0');
        const currentYear = today.getFullYear().toString();
        return {currentMonth , currentYear}
    }

    useEffect(() => {
        getTodayDate() //On récupère la date du jour au lancement de l'app
    }, [])

    //STATES DU CONTEXTE DEPENSES
    //Les incomes (tableau qui contiendra des objets avec les revenus enregistrés pour un couple mois/année)
    const [incomes, setIncomes] = useState(() => { //L'état par défaut de incomes est recupéré dans le local storage, sinon c'est un tableau vide.
        const savedIncomes = localStorage.getItem('incomes');
        return savedIncomes ? JSON.parse(savedIncomes) : [];
        })

    //Le mois et l'année sélectionnés
    const [month , setMonth] = useState(getTodayDate().currentMonth); //Date du jour par défaut
    const [year , setYear] = useState(getTodayDate().currentYear); //Date du jour par défaut

    //Sauvegarde dans le local storage à chaque modif du tableau incomes
    useEffect(() => {
        localStorage.setItem('incomes', JSON.stringify(incomes));
    }, [incomes])


    return (
        <IncomesContext.Provider value={{incomes, setIncomes, month, setMonth, year, setYear}}>
            {children}
        </IncomesContext.Provider>
    )
}