import React, { Component } from 'react';
import Menu from '../dist';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: true,
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

  onClick = (option, identifier) => {
    console.log(option);
    console.log(identifier);
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
          identifier="example"
          open={this.state.open}
          options={this.state.options}
          onClick={this.onClick}
        />
        <div>Demo</div>
      </div>
    );
  }
}
export default App;
