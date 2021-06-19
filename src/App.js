import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes';
import { ListOfCardsProvider } from './controllers/ListOfCardsController';

function App() {
  return (
    <ListOfCardsProvider>
          <Routes/>
    </ListOfCardsProvider>
  );
}

export default App;
