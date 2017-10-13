import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock.jsx';
import Weather from './weather.jsx';
import AutoComplete from './autocomplete.jsx';
import Tabs from './tabs.jsx';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("main");
  ReactDOM.render(<Root/>, root);
});

const Names = ["Abba", "Barney", "Barbara", "Jeff", "Jenny"];
const tabs = [
  {title: "1", content: "i am 1"},
  {title: "2", content: "i am 2"},
  {title: "3", content: "i am 3"},

];

class Root extends React.Component {
  render() {
    return (
      <div>
        <Clock/>
        <Weather/>
        <AutoComplete names= {Names}/>
        <Tabs tabs={tabs}/>
      </div>
    );
  }
}
