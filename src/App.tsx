import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import RoutesComponent from './routes';

interface Props {
  store: any;
}

const App: React.FC<Props> = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RoutesComponent />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
