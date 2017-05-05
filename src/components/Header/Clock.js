import React from 'react';
import Rx from 'rxjs/Rx';

export class Clock extends React.Component {

  constructor(){
    super();
    this.state = {
      date: "",
    }
  }
  componentWillMount(){
    const sauce = Rx.Observable
        .interval(1000 /* ms */)


    const subscription = sauce.subscribe(
       ()=> {
            let newDate = new Date().toString();
            this.setState({date: newDate})
        },

        (err)=> {
            console.log('Error: ' + err);
        },

        ()=> {
            console.log('TIME IS OVER! NOW DOOM!');
        }
    );

  }

  render(){

    return  <div>{this.state.date}</div>;

    }
};
