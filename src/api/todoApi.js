// [
//   {
//     listName: name,
//     listId: number,
//     todos: [
//       {
//         name: name,
//         done: false
//       }
//     ]
//   }
// ]

export default {
  checkForSavedTodos () {
    const savedTodoLists = JSON.parse(localStorage.getItem('nateTheDevVueTodo'))
    return savedTodoLists || null
  },
  saveTodoLists (newTodoLists) {
    localStorage.setItem('nateTheDevVueTodo', JSON.stringify(newTodoLists))
  }
}
