import { FC } from 'react'
import { ITodo } from '../types/todo'

interface TodoItemProps {
  todo: ITodo
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <div>
      <strong>
        {todo.id}. {todo.title} - 
          <input type="checkbox" checked={todo.completed} 
        />
      </strong>
    </div>
  )
}

export default TodoItem