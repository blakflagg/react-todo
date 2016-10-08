import $ from 'jquery';


const setTodos = (todos) => {
    if($.isArray(todos)){
        localStorage.setItem('todos', JSON.stringify(todos));
        return todos;
    }
};

const getTodos = () =>{
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try{
        todos = JSON.parse(stringTodos);
    }catch(e){

    }

    return $.isArray(todos) ? todos :  [];

};

const filterTodos = (todos, showCompleted, searchText) =>{
    var filteredTodos = todos;

    //filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
           return !todo.completed || showCompleted;
        });
    //filter by searchText

    //Sort todos with non-completed first
        filteredTodos.sort((a,b) => {
           if(a.completed  && b.completed){
               return -1;
           } else if(a.completed && !b.completed){
               return 1;
           }else{
               return 0;
           }
        });
    return filteredTodos;
}
export { setTodos, getTodos, filterTodos};


