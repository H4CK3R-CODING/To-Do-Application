import React, { createElement, useEffect, useState } from "react";
import axios from "axios";
import Messages from "../components/Messages";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [todo, setTodo] = useState("");
  const [discription, setDiscription] = useState("");
  const [alltodo, setAlltodo] = useState([]);
  const [editable, setEditable] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleDiscriptionChange = (event) => {
    setDiscription(event.target.value);
  };

  const hadleEditBtn = (data) => {
    setTodo(data.title);
    setDiscription(data.msg)
    const btn = document.querySelector("#todo_btn");
    btn.style.display = "none";
    const editBtn = document.querySelector("#editBtn");
    editBtn.style.display = "block";
    setEditable(data);
  };

  const handleEdit = (event) => {
    event.preventDefault();
    if (editable) {
      const editData = async () => {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const data = {
          title: todo,
          msg: discription,
        };
        const result = await axios.post(
          `/api/msg/edit/${editable._id}`,
          data,
          config
        );
      };
      editData();

      // empty the input
      setTodo("");
      setDiscription("")
      setEditable("");

      // remove edit btn and displat todo btn
      const btn = document.querySelector("#todo_btn");
      btn.style.display = "block";
      const editBtn = document.querySelector("#editBtn");
      editBtn.style.display = "none";
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (todo.length == 0) {
      alert("Title Can't Empty");
      return;
    }
    if (discription.length == 0) {
      alert("Discription Can't Empty");
      return;
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const data = {
      title: todo,
      msg: discription,
    };

    const result = await axios.post("/api/msg/sendMessage", data, config);

    setTodo((curr) => {
      return "";
    });
    setDiscription((curr) => {
      return "";
    });
  };

  const hadleDel = (data) => {
    const del = axios.delete(`/api/msg/del/${data._id}`);
    // console.log(del);
  };

  const hadleView = (data) => {
    // console.log(data)
    navigate("/view", { state: { data: data } });
  };

  useEffect(() => {
    try {
      setLoading(true);
      const getdata = async () => {
        const data = await axios.get("/api/msg/getTodo");
        // console.log(data.data);
        return data.data;
      };
      getdata()
        .then((data) => {
          return setAlltodo((curr) => {
            return [...data];
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error)
    }
    finally{
      setLoading(false)
    }
    // console.log(data);
    // setAlltodo((curr) => {
    //   return [...data];
    // });
  }, [alltodo]);

  return (
    <>
      <div className="flex items-center flex-col">
        <h1 className="font-[Poppins] text-2xl p-2 m-2 font-semibold text-center sm:text-4xl">
          To Do Application using React.js
        </h1>
        <form
          className="flex justify-center items-center mt-2 flex-col sm:flex-row"
          onSubmit={handleSubmit}
        >
          <input
            className="w-full font-[Poppins] font-[400] bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg p-2 m-1 focus:ring-blue-500 focus:border-blue-500 block"
            type="text"
            name="todo"
            id="todo"
            onChange={handleChange}
            value={todo}
            placeholder="Title"
          />
          <input
            className="w-full font-[Poppins] font-[400] bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg p-2 m-1 focus:ring-blue-500 focus:border-blue-500 block"
            type="text"
            name="discription"
            id="discription"
            onChange={handleDiscriptionChange}
            value={discription}
            placeholder="Discription"
          />
          <button
            type="submit"
            className="min-w-fit drop-shadow-2xl bg-black brightness-90 text-white border-2 border-black p-2 font-semibold m-1 rounded-lg cursor-pointer"
            id="todo_btn"
          >
            Add TO DO
          </button>
          <button
            className="min-w-fit drop-shadow-2xl bg-black brightness-90 text-white border-2 border-black p-2 font-semibold m-1 rounded-lg cursor-pointer hidden"
            id="editBtn"
            onClick={handleEdit}
          >
            Edit
          </button>
        </form>
        {loading ? <img src="./loadingIcon.gif" alt="Loading..." /> : <div className="flex">
          <Messages
            alltodo={alltodo}
            hadleView={hadleView}
            hadleEditBtn={hadleEditBtn}
            hadleDel={hadleDel}
          />
        </div>}
      </div>
    </>
  );
};

export default Home;
