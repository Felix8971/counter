import React, { Component } from 'react'
import PropTypes from 'prop-types' //used to define the type of props bellow, we will see a warning if we don't respect these types


class Counter extends Component {
  constructor(props) {// value, onIncrement et onDecrement sont les 3 props passés à ce component dans le parent index.js
    super(props);
    console.log(props);
    this.incrementAsync = this.incrementAsync.bind(this);// => this.props sera toujours accessible par incrementAsync
    this.incrementIfOdd = this.incrementIfOdd.bind(this);// meme chose
    console.log("this in constructor:",this);
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {// si impair
      this.props.onIncrement()
    }
  }
  
  

  incrementAsync(){
    console.log("this in incrementAsync:",this);
    //ici l'objet this est le meme que celui du consctructeur car on a fait un bind,
    //on a donc acces à l'objet props dans la fonction incrementAsync
    setTimeout(this.props.onIncrement, 1000);
    //sans le bind on aurait une erreur : "Uncaught TypeError: Cannot read property 'props' of undefined"
  }

  render() {

    console.log("this in render:",this);//le meme this que celui du constructeur

    const { value, onIncrement, onDecrement } = this.props; //object destructuring notation,
    // equivalent à: 
    //  const value = thos.props.value; 
    //  const onIncrement = thos.props.onIncrement
    //  const onDecrement = thos.props.onDecrement

    return (
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}> {/* ou onClick={this.props.onIncrement} si on a pas créé la variable onIncrement */}

        {/* 
          onIncrement vaut: () => store.dispatch({ type: 'INCREMENT' }) -> voir component parent
          donc au clic on envoit une action vers le store qui va demander au  reducer (voir ../reducers/index.js)
          de lui retourner un nouveau state et mettre à jourt la vue.
          voir const store = createStore(reducer);  et store.subscribe(render)
        */}
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
        {' '}
        <button onClick={this.incrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button onClick={this.incrementAsync}>
          Increment async
        </button>
      </p>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter
