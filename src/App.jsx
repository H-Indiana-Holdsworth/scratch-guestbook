import './App.css';
import { EntriesProvider } from './context/EntryContext';
import Home from './view/Home';

function App() {
  return (
    <div className="App">
      <EntriesProvider>
        <Home />
      </EntriesProvider>
    </div>
  );
}

export default App;
