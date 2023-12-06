import './App.scss'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { DepensesProvider } from './context/DepensesContext'
import { IncomesProvider } from './context/IncomesContext';
import Budget from './components/Budget/Budget'
import Depenses from './components/Depenses/Depenses'
import Modal from './components/Modals/Modal'
import AddForm from './components/Forms/AddForm';
import EditForm from './components/Forms/EditForm';

function App() {
  
  //Gestion des modales
  const [isAddDepenseOpen , setIsAddDepenseOpen] = useState(false);
  const [isEditDepenseOpen , setIsEditDepenseOpen] = useState(false);
  //! Modale editSalary

  return (
    <main>
      <IncomesProvider>
        <DepensesProvider>

            <Budget/>
            <Depenses setIsAddDepenseOpen = {setIsAddDepenseOpen} setIsEditDepenseOpen = {setIsEditDepenseOpen}/>

            <Modal isOpen = {isAddDepenseOpen}> 
              <AddForm setIsAddDepenseOpen={setIsAddDepenseOpen} />
            </Modal>
            <Modal isOpen = {isEditDepenseOpen}>
              <EditForm setIsEditDepenseOpen={setIsEditDepenseOpen} />
            </Modal>
            
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>
            
        </DepensesProvider>
      </IncomesProvider> 
    </main>
  )
}

export default App
