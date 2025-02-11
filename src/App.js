import logo from './logo.svg';
import './App.css';


/*
Info:
1. Components are js functions that return jsx (html in js). References like <Sample/>.
2. JSX: <button class="btn">Click Me</button> -> <button className="btn">Click Me</button>.
3. Curl braces {} are used to write js code in jsx, i.e. <h1>{var}</h1> or <img src={logo}/>.
4. Fragments: To return multiple elements without adding extra div, use <></>.
5. Props: To pass data to components, pass it with `<Sample name="John"/>`
and take it with `function Sample(props) {return <h1>Hello {props.name}</h1>}`.
6. Children prop: pass them with `<Parent> <Child/> </Parent>` and take them with
`function Parent(props) {return props.children[0]}`.
7. Key prop: To uniquely identify elements in a list, use key={id} in the list element, i.e.
`<ul>{items.map(item => (<Component key={item.id} item={item}/>))}</ul>`.
8. Event handling: `<button onClick={handleClick}>Click Me</button>`,
`function handleClick() {alert('Clicked')}`.
9. `useState` hook: To store data that can change, use `useState` hook, i.e.
`const [count, setCount] = useState(0)`, where `useState(0)` is the initial value.
10. Controlled component: `function ControlledComponent() {const [value, setValue] = useState('')
return <input value={value} onChange={(e) => setValue(e.target.value)}/>`.
11. Pure components: components should not change anything outside of it, i.e. `useState`
in a child component.
12. useEffect hook: To run code after render, use `useEffect(() => {console.log('Rendered')}, [])`,
`[]` is the dependency array, if empty, it will run only once after the first render, if not empty,
it will run after every render if the values in the array change.
13. useRef hook: To reference a dom element, use `const inputRef = useRef()`, and use it with
`<input ref={inputRef}/>`.
14. Context: To pass data to lower level components without passing it through props, create the
context with `const AppContext = createContext()`, wrap the parent component with
`<AppContext.Provider> <App/> </AppContext.Provider>`, put the data in the provider with
`<AppContext.Provider value={"123"}>`, and use it in the child component with
`const text = useContext(AppContext) return <h1>{text}</h1>`.
15. Suspense: To show a fallback component while waiting for data to load, use
`<Suspense fallback={<Loading/>}> <Component/> </Suspense>`, i.e. we wrap the component that
is fetching data with `Suspense`.
16. Error boundaries: To catch errors in a component and display a fallback UI, use
`<ErrorBoundary FallbackComponent={ErrorFallback}> <Component/> </ErrorBoundary>`.
 */


function Sample() {
    return (
        <>
            <div className="Sample">
                <h1>Hello World</h1>
            </div>
        </>
    );
}


function Sample2() {
    return (
        <>
            <div className="Sample">
                <h1>Hello World 2</h1>
            </div>
        </>
    );
}


function App() {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
                <div>
                    <Sample/>
                    <Sample2/>
                </div>
            </div>
        </>
    );
}

export default App;
