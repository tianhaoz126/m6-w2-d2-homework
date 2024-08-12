
import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  };

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  };

  reset = () => {
    this.props.dispatch({ type: 'RESET' });
  };

  render() {
    return (
      <div className="text-center">
        <h2>{this.props.count}</h2>
        <button className="btn btn-danger mx-1" onClick={this.decrement}>-</button>
        <button className="btn btn-success mx-1" onClick={this.increment}>+</button>
        <button className="btn btn-secondary mx-1" onClick={this.reset}>reset</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count,
});

export default connect(mapStateToProps)(Counter);
