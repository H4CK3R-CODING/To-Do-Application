import Todo from "../models/Todo.model.js"

const getAllTodo = async (req,res) => {
  const allTodo = await Todo.find({});
  res.send(allTodo);
}

export default getAllTodo
