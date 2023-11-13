import { Routing } from './components/Routing';
import { useBaseQueries } from './hooks/useBaseQueries';

function App() {
  useBaseQueries();
  return <Routing />;
}

export default App;
