console.log("app.js is running");

// JSX - JavaScript XML

const app = {
    title: "Indecision App",
    subTitle: "Put your life in the hands of a computer",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    // targets the element the event started on, in this case the form.
    // Then tragets the element with the name option.
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderOptions();
    }    
}

const removeAll = (e) => {
    e.preventDefault();

    app.options = [];
    renderOptions();
}

const appRoot = document.getElementById("app");

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
} 

const renderOptions = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
            <p>{app.options.length}</p>
            <button onClick={removeAll}>Remove All</button>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
            <ol>
                {app.options.map((option) => <li key={option}> {option}</li>)}
            </ol>
    
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderOptions();