//import logo from '../logo.svg';
//import '../App.css';
import { Component } from 'react';
import Header from './Header';
import CounterList from './CounterList';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counters: 5
    };
  }

  increaseCounters = () => {
    let addCounters = this.state.counters + 1

    this.setState({
      counters: addCounters,
    });
  }

  decreaseCounters = () => {
    let minusCounters = this.state.counters - 1

    this.setState({
      counters: minusCounters,
    });
  }

  render() {
      return (
        <div className="App">
          <Header addCounters={this.increaseCounters} minusCounters={this.decreaseCounters}/>
          <CounterList counter={this.state.counters} />
        </div>
    );
  }
}

export default App;
