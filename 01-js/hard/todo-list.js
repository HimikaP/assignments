/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo{

  constructor(){
    this.todos = []
  }

   add(todo){
    this.todos.push(todo)
  }

   remove(indexOfTodo){
    // if(typeof arr[indexOfTodo]! = undefined)

    if(this.todos.hasOwnProperty(indexOfTodo) == true)
    // this.todos.remove(indexOfTodo) - there is no in built remove function in arrays in js
    this.todos.splice(indexOfTodo,1);
  }

   update(index, updatedTodo){
    if(this.todos.hasOwnProperty(index) == true){
    // if(typeof this.todos[index] != undefined)  {
    this.todos[index] = updatedTodo
    }
  }

   getAll(){
      return this.todos;
    }

  

   get(indexOfTodo){
    if(this.todos.hasOwnProperty(indexOfTodo) == true)
    return this.todos[indexOfTodo];

    return null;
  }

  clear() {
    this.todos = []
    return this.todos;
  }
}


module.exports = Todo;
