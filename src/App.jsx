import './App.scss'
import Budget from './components/Budget/Budget'
import Depenses from './components/Depenses/Depenses'
import AddDepense from './components/Modals/AddDepense'

function App() {

  return (
    <main>
      <Budget />
      <Depenses />
      <AddDepense />
    </main>
  )
}

export default App
