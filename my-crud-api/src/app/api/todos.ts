// pages/api/todos.ts
import { NextApiRequest, NextApiResponse } from 'next';

interface Todo {
  id: number;
  title: string;
  description: string;
}

let todos: Todo[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      res.status(200).json(todos);
      break;

    case 'POST':
      const { title, description } = req.body;
      const newTodo = {
        id: todos.length + 1,
        title,
        description,
      };
      todos.push(newTodo);
      res.status(201).json(newTodo);
      break;

    case 'PUT':
      const { id, newTitle, newDescription } = req.body;
      const todoIndex = todos.findIndex(todo => todo.id === id);
      if (todoIndex > -1) {
        todos[todoIndex] = {
          id,
          title: newTitle,
          description: newDescription,
        };
        res.status(200).json(todos[todoIndex]);
      } else {
        res.status(404).json({ message: 'Todo not found' });
      }
      break;

    case 'DELETE':
      const { deleteId } = req.body;
      todos = todos.filter(todo => todo.id !== deleteId);
      res.status(200).json({ message: 'Todo deleted' });
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}
