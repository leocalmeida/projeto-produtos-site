import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import 'bulma/css/bulma.min.css';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
