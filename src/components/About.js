import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor called");
  }

  componentDidMount() {
    console.log("parent component did mount called");
  }

  render() {
    console.log("parent render called");

    return (
      <div>
        <h1>This is About us page</h1>

        <UserContext.Consumer>
          {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>

        <h2>This is Namaste React Webseries</h2>
        <User name="chirag sankhla" location="Kotputli ( Function )" />
        <UserClass name="first (Class)" location="kotputli ( Class )" />
      </div>
    );
  }
}

export default About;
