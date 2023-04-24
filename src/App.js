import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/LandingPage/landingPage'
import Cadastro from './components/pages/Cadastro'
import Login from './components/pages/Entrar'
import Principal from './components/pages/Principal'
import Footer from './components/layout/Footer'


function App() {
  return (
    <Router>
      
     
      <Routes>
      
        <Route path="/" element={ <Home/> } />
        
        <Route path="/cadastro" element={ <Cadastro/> } />
        
        <Route path="/entrar" element={ <Login/> } />

        <Route path="/principal" element={<Principal /> } />
    
        </Routes>
       <Footer />
    </Router>
  );
}

export default App;
