import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
// import Home from './screens/home';
// import Home from './src/screens/Home';
import HomeScreen from './src/screens/mainHome';

const App = () => {
  return (
    <Provider store={store}>
      {/* <Home/> */}
      <HomeScreen />
    </Provider>
  );
};

export default App;
