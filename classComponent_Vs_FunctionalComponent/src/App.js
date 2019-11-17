import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import UserComponent from '../src/component/user/userComponent';

class App extends React.Component {
  render() {
    return <div>
      <h1 className="title_header">React, Class Component Vs Functional Component (ES6), Passing value to the parent->child->subChild</h1>
      <UserComponent className="user_component_section"></UserComponent>
    </div>

  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
