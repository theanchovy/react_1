//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main'
import Footer from './components/Footer';
import Factorial from './components/Factorial';
import Power from './components/Power';
import Fibonacci from './components/Fibonacci';

function App() {
    let menu =
    {
        "Главная"    : "/index",
        "Магазин"    : "/shop",
        "Новости"    : "/new",
        "О компании" : "/about",
        "Контакты"   : "/contacts"    
    }

  return (
    <div className="App">
          <Header />
          <Nav menu = { menu } />
          <Main />
          <Factorial />
          <Power />
          <Fibonacci />
          <Footer />
    </div>
  );
}

export default App;
