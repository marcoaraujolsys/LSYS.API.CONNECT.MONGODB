
import './App.css';
import React from 'react';
import { Input , Button } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'nome', headerName: 'NOME DO CLIENTE', width: 250, sortable: true },
  { field: 'valor', headerName: 'VALOR', width: 250, sortable: true },
  { field: 'data', headerName: 'DESDE', width: 250,  sortable: true }
];

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filtro: '',
      error: null,
      isLoaded: false,
      rowsDB: [],
      rows:[],
      busca: '',
	temp: 'xx'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({busca: event.target.value});
  }


  componentDidMount() {

    //Carrega dados do banco MongoDB
    fetch("http://localhost:3001/cliente")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
              isLoaded: true,
              rowsDB: this.formatarDados(result),
              rows: this.formatarDados(result)
            } );
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  //Altera o nome da chave "_id" do mongoDB para "id" para datagrid
  formatarDados(rec) {
    return rec.map(({_id, ...rest}) => ({...rest, id: _id}));
  }

  RecarregarTabela() {

    if (this.state.busca === '') { 
      this.setState({rows: this.state.rowsDB});

    } else {

      const recFiltro = this.state.rowsDB.filter( ( rec ) => {
        return  rec.nome.toLowerCase().includes(this.state.busca.toLowerCase()) ;
      });

      this.setState({rows: recFiltro});

    }
  }

  render() {
    //Se ainda não carregou os dados do banco, nao monta tela.
    if (!this.state.isLoaded) {
      return null;
    } else {

      return (
        <div className="App">
          <header className="App-header">
              NODE - MONGODB
          </header>

          <span>Filtrar Cliente: <Input value={this.state.value} onChange={this.handleChange}/></span>
          <Button onClick={this.RecarregarTabela.bind(this)}>Buscar</Button>
          
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={this.state.rows} columns={columns} />
          </div>
        </div>
    );
   }

  }
}


