import React from 'react';
import InputWidget from './InputWidget';
import Person from './Person';

class View1 extends React.Component {

  constructor(){
    super();
    this.state = {
      txt: "",
      cat: 0,
      items: [],
    }
  }

  componentWillMount(){
    fetch( 'http://swapi.co/api/people/?format=json')
      .then(response => response.json())
      .then( ({results: items})=> this.setState({items}))
  }

  update( e ){
    this.setState({txt: e.target.value})
  }

  filter(e){
    this.setState({filter: e.target.value})
  }

  render(){
    let items = this.state.items;
    if(this.state.filter){
      items = items.filter( item =>
        item.name.toLocaleLowerCase()
          .includes(this.state.filter.toLowerCase())
      )
    }

    return (
      <div>
        <h1>Practice Area</h1>
        <h2>{this.state.txt} - {this.state.cat}</h2>
        <InputWidget update={this.update.bind(this)}/>
        <input type="text"
        onChange={this.filter.bind(this)}
        />
        <div>
          {items.map(item =>
            <Person key={item.name} person={item} />
          )}
        </div>
      </div>
    )
  }
}


export default View1;
