import React from 'react';
import { Route } from 'react-router-dom';
import Chats from '../chat';

import './app.css';

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={Chats}/>
    </main>
  </div>
);

export default App;
