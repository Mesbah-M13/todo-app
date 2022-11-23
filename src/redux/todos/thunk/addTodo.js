import { added } from "../actions";

const addTodo = (todoText) => {
    return async (dispatch) => {
        const response = await fetch("https://enchanting-bison.cyclic.app/todos", {
            method: "POST",
            body: JSON.stringify({
                text: todoText,
                completed: false,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const todo = await response.json();

        dispatch(added(todo.text));
    };
};

export default addTodo;
