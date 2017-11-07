class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibilty = this.handleToggleVisibilty.bind(this);
    this.state = {
      visibility: false
    };
  }

  handleToggleVisibilty() {

    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    });
    console.log(this.state.visibility);
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibilty}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
        {this.state.visibility && <p>hello</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// let visibility = false;

// const onShowDetails = () => {
//     visibility = !visibility;
//     render();
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onShowDetails}>
//                 {visibility ? "Hide details" : "Show details"}
//             </button>
//             {visibility && <p>hello</p>}
//         </div>
//     )
//     const appRoot = document.getElementById("app");
//     ReactDOM.render(template, appRoot);
// }

// render();
