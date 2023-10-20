import 'regenerator-runtime'; 
import '../styles/main.css';
import './pages/listrestaurant'; 
import App from './App';

const menu = document.getElementById('menu');
const drawer = document.getElementById('drawer');
const main = document.querySelector('main');
const content = document.getElementById('content');

// const listRestaurant = document.createElement('list-restaurant')

menu.addEventListener('click', () => {
  drawer.classList.toggle('open');
});


const app = new App({ content });

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

// main.append(listRestaurant);
