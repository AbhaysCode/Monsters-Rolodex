import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import {CardList} from './componenets/card-list/card-list.component.jsx';
import {Search} from './componenets/search-box/search-box.component.jsx';

class App extends Component {
  constructor(){
    super();
    this.state={
      "monsters":[],
      "searchField":''
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/Users").then(res=>{
      res.json().then(res=>{this.setState({"monsters":res})})
    })
  }
  handleChange = (e) =>{
      this.setState({"searchField":e.target.value},()=>{
        console.log(this.state.searchField);
      })
  }
  render(){
    const {monsters,searchField} = this.state;
    const filteredMonster = monsters.filter(monster=>{
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return(
      <div className="App">
      <header className="App-header">
      <h1>Monsters Rolodex</h1>
      <Search placeholder="Search Monster" handleChange={this.handleChange}/>
      <CardList monster={filteredMonster} ></CardList>       
      </header>
    </div>
    );
  }
}

export default App;
