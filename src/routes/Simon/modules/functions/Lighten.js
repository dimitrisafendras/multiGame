
export let lighten = (pad) => {

  switch(pad){
    case 'first':
      first.style.backgroundColor = 'black';
      setTimeout(()=>{first.style.backgroundColor = 'green';}, 300 );
      return
    case 'second':
      second.style.backgroundColor = 'black';
      setTimeout(()=>{second.style.backgroundColor = 'red';}, 300 );
      return
    case 'third':
      third.style.backgroundColor = 'black';
      setTimeout(()=>{third.style.backgroundColor = 'blue';}, 300 );
      return
    case 'fourth':
      fourth.style.backgroundColor = 'black';
      setTimeout(()=>{fourth.style.backgroundColor = 'yellow';}, 300 );
      return
  }

}
