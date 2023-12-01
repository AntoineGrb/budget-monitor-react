import './App.scss'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </main>
  )
}

export default App
