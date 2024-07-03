import axios from "axios";

const handleMarkDone = async (data) => {
    // console.log(data);
   const id = data._id;
   const done = data.done;
   const config = {
        headers: {
        "Content-Type": "application/json",
        },
    };
    const body = {
        done: done,
    };
    const result = await axios.put(
        `/api/msg/markDone/${id}`,
        body,
        config
    );
    // console.log(result)
}

export default handleMarkDone
