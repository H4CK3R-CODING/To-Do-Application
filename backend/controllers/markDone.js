import TodoModel from "../models/Todo.model.js";

const markDone = async (req,res) => {
  
    const {id} = req.params;
    const {done} = req.body;
    const data = await TodoModel.findByIdAndUpdate({
        _id: id
    },{
        $set: {
            done: !done
        }
    },{
        new: true
    })

    res.status(200).json(data)

}

export default markDone
