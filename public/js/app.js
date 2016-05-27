import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
    render() {
      // return React.createElement("h3", null, 'Hello Webpack!!');
      return <h3>Hello ES6!!</h3>
    }
};

// ReactDOM.render(React.createElement(Hello),document.getElementById('react'));
ReactDOM.render(<Hello/>,document.getElementById('react'));
