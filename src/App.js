import { useState } from 'react'
import CostumesPage from './components/CostumesPage/CostumesPage'
import Navbar from './components/Navbar/Navbar'
import './App.scss'

function App() {

  const [currentPage, setCurrentPage] = useState('costumes')

  return (
    <div className="App">
      <Navbar setCurrentPage={setCurrentPage} />
      { currentPage === 'costumes' && (
        <CostumesPage />
      )}
      { currentPage === 'books' && (
        <p>Insert book page here</p>
      )}
      
    </div>
  );
}

export default App;
