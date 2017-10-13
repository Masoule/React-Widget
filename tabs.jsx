import React from 'react';

class Tabs extends React.Component {

  constructor(props){
    super(props);
    this.state = {tabs: props.tabs, selectedTab: 0};
  }

  render() {
    const tabTitles = this.state.tabs
      .map((tab,i) =>{
        const selected = i === this.state.selectedTab;

        return <li key={i} id={i} className={selected ? 'tab selected' : 'tab unselected'} onClick={this.handleClick.bind(this)}><h2>{tab.title}</h2></li>;

    });

    return (
      <div className="tabs">
        <h1>Tabs</h1>
        <div className="tab-container">
          <ul className="tab-header">
            {tabTitles}
          </ul>
          <div className="content">
            <p>{this.state.tabs[this.state.selectedTab].content}</p>
          </div>
        </div>
      </div>
    );
  }

  handleClick(e) {
    // debugger
    this.setState({selectedTab: parseInt(e.currentTarget.id)});
    // e.currentTarget
  }

}


export default Tabs;
