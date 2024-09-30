// import './App.css';
import ArticleDisplay from './component/ArticleDisplay';
import Header from './component/Header';
import Hero from './component/Hero';
import Spacing from './component/Spacing';
import Login from './component/Login';  // Import the Login component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>  {/* Wrap everything in the Router */}
      <div className="App">
        <Header />  {/* Header will always be displayed */}
        <Spacing />

        <Routes>
          {/* Home Route */}
          <Route path="/" element={
            <>
              <Hero />
              <ArticleDisplay />
            </>
          } />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
