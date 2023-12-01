import './App.scss'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Budget from './components/Budget/Budget'
import Depenses from './components/Depenses/Depenses'
import Modal from './components/Modals/Modal'
import AddForm from './components/Forms/AddForm';
import EditForm from './components/Forms/EditForm';

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
        filteredDepenses = {filteredDepenses}
        setFilteredDepenses = {setFilteredDepenses}
      />
      <Depenses 
        setIsAddDepenseOpen = {setIsAddDepenseOpen} 
        setIsEditDepenseOpen = {setIsEditDepenseOpen}
        filteredDepenses = {filteredDepenses} 
      />

      <Modal isOpen = {isAddDepenseOpen}> 
          <AddForm setIsAddDepenseOpen={setIsAddDepenseOpen} depenses={depenses} setDepenses={setDepenses} />
      </Modal>
      <Modal isOpen = {isEditDepenseOpen}>
        <EditForm setIsEditDepenseOpen={setIsEditDepenseOpen} depenses={depenses} setDepenses={setDepenses} />
      </Modal>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>
    </main>
  )
}

export default App
