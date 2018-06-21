let initialState = {
	todos: [
		{
			text: "Take out the trash",
			isComplete: false
		}
	]
};


// This reducer isn't pure! Fix it plz
const reducer = (state = initialState, action) => {
	let stateCopy = {
	...state,
	todos: state.todos.map((todo)=>{
		return {...todo}
	})
};
	if (action.type == "ADD_TODO") {
		stateCopy.todos.push({
			text: action.todoText,
			isComplete: false
		});
		return stateCopy;
	/*return {
			todos: stateCopy.todos.concat({
				text: action.todoText,
				isComplete: false
			})
		}*/
	} else if (action.type == "TOGGLE_TODO") {
		let todoToToggle = stateCopy.todos[action.todoIndex];
		todoToToggle.isComplete = !todoToToggle.isComplete;
		return stateCopy;
	} else {
		return stateCopy;
	}
}
