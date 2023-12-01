import './App.scss'
import { useState } from 'react'
import Budget from './components/Budget/Budget'
import Depenses from './components/Depenses/Depenses'
import AddDepense from './components/Modals/AddDepense'
import EditDepense from './components/Modals/EditDepense'

function App() {

  //Déclaration des states
  //Objet Dépense
  const [depenses, setDepenses] = useState([])

  //Gestion des modales
  const [isAddDepenseOpen , setIsAddDepenseOpen] = useState(false);
  const [isEditDepenseOpen , setIsEditDepenseOpen] = useState(false);

  return (
    <main>
      <Budget />
      <Depenses 
      setIsAddDepenseOpen = {setIsAddDepenseOpen} 
      setIsEditDepenseOpen = {setIsEditDepenseOpen}
      depenses = {depenses} 
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
