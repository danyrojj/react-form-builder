import React from 'react'
import {createRoot} from 'react-dom/client';
import {Demo} from './components/Demo.tsx';



const root =createRoot(
  document.getElementById('root')
);


root.render(<Demo/>);