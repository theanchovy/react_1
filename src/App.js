//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main'
import Footer from './components/Footer';

function App() {
    let menu =
    {
        "Главная"    : "/index",
        "Магазин"    : "/shop",
        "Новости"    : "/new",
        "О компании" : "/about",
        "Контакты"   : "/contacts",
            
    }

  return (
    <div className="App">
          <Header />
          <Nav menu = { menu } />
          <Main />
          <Footer />
    </div>
  );
}

export default App;
