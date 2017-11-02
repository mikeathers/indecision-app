class IndecisionApp extends React.Component {    
    render() {
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer";
        const options = ["Thing one", "Thing two", "Thing three"];

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert("Handle pick");
    }
    render() {
        return (
          <div>
            <button onClick={this.handlePick}>What should i do?</button>
          </div>  
        );
    }
}

class Options extends React.Component {
    handleRemoveAll() {
        alert("remove all");
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {this.props.options.map((option) => <Option key={option} optionText={option} />)}
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        const input = e.target.elements.input.value.trim();
        const output = input ? input : "No option was added";
        alert(output);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input type="text" name="input" />
                <button>Submit</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));