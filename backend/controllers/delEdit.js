import Todo from "../models/Todo.model.js";

const delEdit = async (req, res) => {
  try {
    const { id } = req.params;
    const del = await Todo.findByIdAndDelete(id);
  } catch (error) {
    console.log("Some Error has accure", error);
  }
  res.send("HI");
};

export default delEdit;
