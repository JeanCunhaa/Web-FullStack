import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from '../components/pages/LandingPage/landingPage'
import Cadastro from '../components/pages/Signup'
import Login from '../components/pages/Signin'
import Principal from '../components/pages/Principal'
import Footer from '../components/layout/Footer'
import Postagens from '../components/pages/Postagens'
import useAuth from '../hooks/useAuth'


const Private = ({ Item }) => {
    const { signed } = useAuth();
  
    return signed > 0 ? <Item /> : <Cadastro />;
  };
  const RoutesApp = () => {
    return (
        <Router>
        
        
        <Routes>
        
            <Route path="/" element={ <Home/> } />
            
            <Route path="/cadastro" element={ <Cadastro/> } />
            
            <Route path="/entrar" element={ <Login/> } />

            <Route path="/principal" element={<Principal /> } />

            <Route path="/postagens" element={<Postagens /> } />
        
            </Routes>
        <Footer />
        </Router>
    );
}

export default RoutesApp;
