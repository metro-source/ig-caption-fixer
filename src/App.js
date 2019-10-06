import React from 'react';
import { FormattedMessage } from "react-intl";
import TextInput from './TextInput';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Caption Fixer</h1>
      </header>

      <main>
        <div className='copy'>
          <FormattedMessage id="copy"  />
        </div>
        <TextInput />
      </main>
    </div>
  );
}

export default App;
