import React from 'react';
const ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class AutoComplete extends React.Component {

  constructor(props) {
    super(props);
    this.state = { names: props.names, inputVal: ""};
  }

  render() {
    let userlis = this.state.names;
    userlis = userlis.filter((name)=>{return name.slice(0,this.state.inputVal.length).toLowerCase()===this.state.inputVal.toLowerCase();});
    userlis = userlis.map((name, i) => {
      return <li onClick={this.handleClick.bind(this)} className="name" key={i}>{name}</li>;
    });
    return (
      <div className="autocomplete">
        <h1>Autocomplete</h1>
        <div className="autocomplete-container">
          <input onInput={this.handleChange.bind(this)} value={this.state.inputVal} type="text" className="name-input"></input>
          <ul className="namelist">
            <ReactCSSTransitionGroup transitionName="auto" transitionEnterTimeout={500} transitionLeaveTimeout={500} >
              {userlis.length ? userlis : <li>no result found!</li> }
            </ReactCSSTransitionGroup>
          </ul>
        </div>
      </div>
    );
  }


  handleChange(e) {
    this.setState({inputVal: e.target.value});
  }

  handleClick(e) {
    this.setState({inputVal: e.target.innerHTML});
  }

}


  export default AutoComplete;
