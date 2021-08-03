import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from './router/AppRouter';



import './styles/styles.scss';


const divRoot = document.querySelector('#root');

console.log(process.env)

ReactDOM.render(<AppRouter/>, divRoot);

