import './App.scss'
import { useState } from 'react'
import Budget from './components/Budget/Budget'
import Depenses from './components/Depenses/Depenses'
import AddDepense from './components/Modals/AddDepense'
import EditDepense from './components/Modals/EditDepense'

function App() {

  //Déclaration des states
  //Les dépenses
  const [depenses, setDepenses] = useState([]);
  const [filteredDepenses , setFilteredDepenses] = useState([]);

  //Gestion des modales
  const [isAddDepenseOpen , setIsAddDepenseOpen] = useState(false);
  const [isEditDepenseOpen , setIsEditDepenseOpen] = useState(false);

  return (
    <main>
      <Budget 
        depenses = {depenses}
        setFilteredDepenses = {setFilteredDepenses}
      />
      <Depenses 
        setIsAddDepenseOpen = {setIsAddDepenseOpen} 
        setIsEditDepenseOpen = {setIsEditDepenseOpen}
        depenses = {depenses}
        filteredDepenses = {filteredDepenses} 
      />
      <AddDepense 
        isAddDepenseOpen = {isAddDepenseOpen} 
        setIsAddDepenseOpen = {setIsAddDepenseOpen}
        depenses = {depenses}
        setDepenses = {setDepenses} 
      />
      <EditDepense 
        isEditDepenseOpen = {isEditDepenseOpen} 
        setIsEditDepenseOpen = {setIsEditDepenseOpen} 
      />
    </main>
  )
}

export default App