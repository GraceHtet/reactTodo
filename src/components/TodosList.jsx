import TodoItem from './TodoItem';

const TodoList = ({ todosProps, handleChange, delTodo }) =>

// const {todosProps} = props;
  (

    <ul>
      {todosProps.map((todo) => (
        <TodoItem key={todo.id} itemProp={todo} handleChange={handleChange} delTodo={delTodo} />
      ))}
    </ul>
  );

export default TodoList;
