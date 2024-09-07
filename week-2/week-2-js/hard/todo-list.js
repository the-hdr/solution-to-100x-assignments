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

class Todo
{
    constructor()
    {
        this.todoList = [];
    }

    add(newTask)
    {
        this.todoList.push (newTask);
    }

    remove(indexOfTaskToBeDeleted)
    {
        if (indexOfTaskToBeDeleted >= 0 && indexOfTaskToBeDeleted < this.todoList.length)
        {
            this.todoList.splice (indexOfTaskToBeDeleted, 1);
        }
        else
        {
            console.log ("remove(): INDEX OUT OF BOUND!");
            return null;
        }
    }

    update (updationIndex, updatedTodo)
    {
        if (updationIndex >= 0 && updationIndex < this.todoList.length)
        {
            this.todoList[updationIndex] = updatedTodo;
        }
        else
        {
            console.log ("update(): INDEX OUT OF BOUND!");
            return null;
        }
    }

    getAll()
    {
        return this.todoList;
    }

    get(indexOfTodo)
    {
        if (indexOfTodo >= 0 && indexOfTodo < this.todoList.length)
        {
            return this.todoList[indexOfTodo];
        }
        else
        {
            console.log ("get(): INDEX OUT OF BOUND!");
            return null;
        }
    }

    clear()
    {
        this.todoList = [];
    }
}

module.exports = Todo;