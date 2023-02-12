import './App.css';
import AllUser from './component/AllUser';
import UserForm from './component/UserForm';
function App() {
  return (
    <div className="App">
      <header className="App-header">
             <UserForm />
             <AllUser />
      </header>
    </div>
  );
}

export default App;
