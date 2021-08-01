import React, { Component } from "react";
import { Spring } from "react-spring";

export class Component2 extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 1000 }}
      >
        {(props) => (
          <div style={props}>
            <div style={c2Style}>
              <h1>Component 2</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maiores tenetur, cupiditate repellendus rerum, magnam provident
                ut facere labore minima corporis a eveniet consequatur itaque
                ullam inventore aut, dolore laudantium error.
              </p>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}
const c2Style = {
  background: "slateblue",
  color: "white",
  padding: "1.5rem",
};

export default Component2;
