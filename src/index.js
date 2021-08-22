//npx create-react-app . 
//^ npm will create structure and download dependencies for React app for you 
import React from 'react';
import { render } from 'react-dom';
import Router from './components/Router';


render(<Router/>, document.getElementById('main'));
