import React from 'react';

class View1 extends React.Component {

  constructor(){
    super();
    this.state = {
      txt: "",
      cat: 0
    }
  }

  update( e ){
    this.setState({txt: e.target.value})
  }

  render(){
    return (
      <div>
        <input type="text"
        onChange={this.update.bind(this)}
        />
        <h1>
          {this.state.txt} - {this.state.cat}
        </h1>
        Practice
      </div>
    )
  }
}

export default View1;
