
let visibility = false;

const onShowDetails = () => {
    visibility = !visibility;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onShowDetails}>
                {visibility ? "Hide details" : "Show details"}
            </button>
            {visibility && <p>hello</p>}
        </div>
    )
    const appRoot = document.getElementById("app");
    ReactDOM.render(template, appRoot);
}

render();
