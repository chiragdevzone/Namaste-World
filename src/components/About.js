import { Component } from "react";
import { LOGO_URL } from "../utils/constants";

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
      <div className="w-8/12 m-auto flex justify-between mt-4">
        <div className="w-3/12">
          <img src={LOGO_URL} />
        </div>
        <div className="w-9/12 p-4 text-sm">
          <p>
            Welcome to The Flavor Junction, where every meal is a celebration of
            taste, quality, and passion. Our mission is to bring the world of
            flavors to your plate, offering a diverse menu that caters to every
            palate. At The Flavor Junction, we believe that food is more than
            sustenance—it's an experience. From comforting classics to
            adventurous new dishes, our chefs are dedicated to crafting meals
            that delight your senses. We source fresh, high-quality ingredients
            to ensure every bite is as delightful as the last. Whether you're
            here for a casual meal, a special occasion, or just to explore new
            tastes, our goal is to make your dining experience unforgettable.
            Thank you for choosing The Flavor Junction—let’s create delicious
            memories together!
          </p>
        </div>
      </div>
    );
  }
}

export default About;
