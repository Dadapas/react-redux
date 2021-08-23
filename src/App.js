import React from 'react';
import Users  from './features/users/Users';
//import { Counter }  from './features/counter/Counter';
import { Cart, CartAjax } from './features/cart';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <CartAjax />
      </header>
      <div>
          <Cart />
          <Users />
          {/*<Counter />*/}
      </div>
    </div>
  );
}

export default App;
