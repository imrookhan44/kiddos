import './App.css';
import AppBar from './components/AppBar';
import Blog from './components/Blog';
import Courses from './components/Courses';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Teacher from './components/Teacher';

function App() {
  return (
    <div className="App">
      <Header />
      <AppBar />
      <Home />
      <Teacher />
      <Courses />
      <Pricing />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
