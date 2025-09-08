import './Css/App.css';
import './Css/NavigationCss.css';
import './Css/FooterCss.css';
import NavigationBar from './Components/NavigationBar';
import FooterWeb from './Components/FooterWeb';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <FooterWeb/>
    </div>
  );
}

export default App;
