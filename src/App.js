import { useState } from 'react'
import CostumesPage from './components/CostumesPage/CostumesPage'
import './App.scss'

function App() {

  const [currentPage, setCurrentPage] = useState('costumes')

  return (
    <div className="App">
      
      { currentPage === 'costumes' && (
        <CostumesPage />
      )}
    </div>
  );
}

export default App;
