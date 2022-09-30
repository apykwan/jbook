import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './state';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bulmaswatch/superhero/bulmaswatch.min.css';

// import CodeCell from './components/code-cell';
import CellList from './components/cell-list';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <CellList />
      </div>
    </Provider>
  );
};

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(<App />);