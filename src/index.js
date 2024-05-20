import home from './home';
import homeCards from './homeCards';
import'./style.css';

const con = document.getElementById("content")

con.appendChild(home())
con.appendChild(homeCards())
