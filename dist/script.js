import OpenApp from "https://cdn.skypack.dev/react-open-app";

class CheckList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      apps: [] };


  }

  addApp() {
    if (this.state.inputValue !== '') {
      this.setState({
        apps: this.state.apps.concat(this.state.inputValue),
        inputValue: '' });

    }
  }
  removeApp(app) {
    this.setState({
      apps: this.state.apps.filter(apps => apps !== app) });

  }
  updateInputValue(evt) {
    this.setState({ inputValue: evt.target.value });
  }

  render() {
    const apps = this.state.apps;
    const applaunch = apps.map(app => {
      return /*#__PURE__*/(
        React.createElement("li", { key: app }, /*#__PURE__*/
        React.createElement("button", { onClick: () => this.removeApp(app) }, "-"), /*#__PURE__*/
        React.createElement(OpenApp, { href: app }, app)));


    });

    return /*#__PURE__*/(
      React.createElement("div", { classname: "checklist" }, /*#__PURE__*/
      React.createElement("ul", null,
      applaunch, /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/
      React.createElement("button", { onClick: () => this.addApp() }, "+"), /*#__PURE__*/
      React.createElement("input", { value: this.state.inputValue, onChange: evt => this.updateInputValue(evt), placeholder: "app link" })))));




  }}


ReactDOM.render( /*#__PURE__*/React.createElement(CheckList, null), document.getElementById("root"));