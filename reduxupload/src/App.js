import './App.css';
import Navbar from './components/Navbar';
import UserDetails from './components/UserDetails';
import store from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
     <Navbar/>
     <UserDetails/>
    </Provider>
  );
}
export default App;
