import React, { Component } from 'react';
import Menu from '../dist';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      options: [
        {
          label: 'Man',
          value: '0'
        },
        {
          label: 'Woman',
          value: '1'
        }
      ]
    }
  }

  onClick = (option) => {
    console.log(option);
    this.onToggle();
  }

  onToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
      <div>
        <div onClick={this.onToggle}>Demo</div>
        <Menu
          open={this.state.open}
          options={this.state.options}
          onClick={this.onClick}
        />
      </div>
    );
  }
}
export default App;
