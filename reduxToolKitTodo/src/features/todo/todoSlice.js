import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
	todos: [
		{
			id: 1,
			text: "Hello, world!",
		},
	],
};

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		// always given access to state and action by reducers
		// state = state like initial state
		// action = data
		addTodo: (state, action) => {
			const todo = {
				id: nanoid(),
				text: action.payload,
			};
			state.todos.push(todo);
		},
		removeTodo: (state, action) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},

		// TODO: complete the update todo
		// updateTodo:(state, action)=>{
		//     state.todos = state.todos.map((todo)=> )
		// }
	},
});

export const { addTodo, removeTodo } = todoSlice.actions;

const todoReducer = todoSlice.reducer;
export default todoReducer;
