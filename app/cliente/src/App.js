import './App.css';
import React from 'react';
import { Route, Link } from 'react-router-dom';

export default class App1 extends React.Component {

  render() {
 
      return (
        <Route>
        <div className="App">
          <header className="App-header">
              TOTVS - Test FullStack
          </header>

          <header className="App-header-cliente">
              Cadastro de Clientes Inadimplentes
          </header>
         
            <span>Identifique-se para acessar o controle de inadimplentes</span>
            <div><Link to='/cliente'>SOU ANALISTA FINANCEIRO</Link></div>
            <div><Link to='#'>SOU ANALISTA DE NEGÓCIOS</Link></div>
          
        </div>
        </Route>
    );
   }

  }
