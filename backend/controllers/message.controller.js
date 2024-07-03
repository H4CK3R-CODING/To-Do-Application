import TodoModel from "../models/Todo.model.js";

const sendMessage = (req, res) => {
  const { title, msg } = req.body;
  if (!title.length > 0) {
    res.status(201).json({
      msg: "title can't empty",
    });
    return
  }
  if (!msg.length > 0) {
    res.status(201).json({
      msg: "discription can't empty",
    });
    return
  }
  const savi = new TodoModel({
    title: title,
    msg: msg,
  });
  savi.save();
  res.send({
    title: title,
    msg: msg
  });
};

export default sendMessage;
