import './App.scss'
import { useState , useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Budget from './components/Budget/Budget'
import Depenses from './components/Depenses/Depenses'
import Modal from './components/Modals/Modal'
import AddForm from './components/Forms/AddForm';
import EditForm from './components/Forms/EditForm';

function App() {

  //!LES STATES DE L'APPLICATION ==> A PASSER EN CONTEXTE
  //Les dépenses
  const [depenses, setDepenses] = useState(() => { //L'état par défaut de dépenses est recupéré dans le local storage, sinon c'est un tableau vide.
    const savedDepenses = localStorage.getItem('depenses');
    return savedDepenses ? JSON.parse(savedDepenses) : [];
  });
  const [filteredDepenses , setFilteredDepenses] = useState([]);
  const [editedDepenseId, setEditedDepenseId] = useState(1); //ID de la dépense à éditer, à passer dans la modale contenant EditForm

  //Gestion des modales
  const [isAddDepenseOpen , setIsAddDepenseOpen] = useState(false);
  const [isEditDepenseOpen , setIsEditDepenseOpen] = useState(false);

  //Sauvegarde dans le local storage
  useEffect(() => {
    localStorage.setItem('depenses', JSON.stringify(depenses));
  }, [depenses])

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
        depenses = {depenses}
        setDepenses = {setDepenses}
        filteredDepenses = {filteredDepenses}
        setEditedDepenseId = {setEditedDepenseId}
      />

      <Modal isOpen = {isAddDepenseOpen}> 
          <AddForm 
            setIsAddDepenseOpen={setIsAddDepenseOpen} 
            depenses={depenses} 
            setDepenses={setDepenses} 
          />
      </Modal>
      <Modal isOpen = {isEditDepenseOpen}>
        <EditForm 
          setIsEditDepenseOpen={setIsEditDepenseOpen} 
          depenses={depenses} 
          setDepenses={setDepenses} 
          editedDepenseId = {editedDepenseId}
        />
      </Modal>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>
    </main>
  )
}

export default App
