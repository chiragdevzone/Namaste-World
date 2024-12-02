import { setIn } from "formik";
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };

    console.log(this.props.name + " constructor called");
  }

  componentDidMount() {
    console.log(this.props.name + "component did mount called");
    this.timer = setInterval(() => {
      console.log("i am setInterval from componentDidMount");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    console.log(this.props.name + " render called");

    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h1>count = {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h1>count2 = {count2}</h1>
        <h2>{name}</h2>
        <h3>{location}</h3>
        <h4>Contact: @chiragsankhla</h4>
      </div>
    );
  }
}

export default UserClass;
