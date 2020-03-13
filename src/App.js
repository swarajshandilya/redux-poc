import React from 'react';
import { connect } from 'react-redux';
import { INCREMENT, DECREMENT } from './actions';

class Counter extends React.Component {
  state = { count: 0 }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.props.decrement}>-</button>
          <span>{this.props.ctr}</span>
          <button onClick={this.props.increment}>+</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.count
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: INCREMENT }),
    decrement:() => dispatch({ type: DECREMENT })
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);