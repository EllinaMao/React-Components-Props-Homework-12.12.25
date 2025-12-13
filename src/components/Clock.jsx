/**Создайте компонент Clock, который показывает текущее время и обновляется каждую секунду */

import React from "react";

class Clock extends React.Component {
  state = {
    time: new Date(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000); //every second
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div>
        <h2>Current Time: {this.state.time.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
