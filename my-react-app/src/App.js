
import './App.css';
import { BrowserRouter as Router, Route, Routes , Navigate } from 'react-router-dom';
import Home from './Home'
import ArbicPage from './ArabicPage'
import { LanguageProvider } from './LanguageContext';






function App() {
  return (
    <div className="App">
<LanguageProvider>
<Router>
<Routes>
        

<Route path="/ar" element={<ArbicPage />} />
          <Route path="/en" element={<Home />} />
          <Route path="/" element={<Navigate replace to="/ar" />} />
        </Routes>
    </Router>
    </LanguageProvider>
    

     
     
    </div>
  );
}

export default App;
