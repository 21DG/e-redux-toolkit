export const ToDoListService = async (lastRowNumber) => {
    return await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => json.slice(0, lastRowNumber))
}