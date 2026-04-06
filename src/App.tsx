import "./App.css";
import TodoList from "./components/TodoList";

function App() {
	return (
		<div className="App">
			<div className="App-header">
				<h1>React Todo List</h1>
				<TodoList />
			</div>
		</div>
	);
}

export default App;
