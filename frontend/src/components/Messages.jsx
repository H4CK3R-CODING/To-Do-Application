import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiSolidEdit } from "react-icons/bi";
import { RxEyeOpen } from "react-icons/rx";
import handleMarkDone from "../hooks/handleMarkDone";

const Messages = ({ alltodo, hadleView, hadleEditBtn, hadleDel }) => {
  // console.log(alltodo[0]);
  return (
    <div className="mt-6">
      <ul>
        {Array.from(alltodo).map((data, idx) => {
          return (
            <li
              className="flex justify-between items-center font-[Overpass] italic text-xl rounded-md border-2 border-black border-solid m-4 overflow-hidden flex-wrap w-[80vw] lg:w-[50vw]"
              key={idx}
            >
              <p className="p-3 text-wrap font-semibold text-gray-500">
                <input
                  type="checkbox"
                  className="m-1 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  checked={data.done}
                  onChange={() => {
                    handleMarkDone(data);
                  }}
                />

                <span
                  className={`text-black ${data.done ? "line-through" : ""}`}
                >
                  {data.title}
                </span>
              </p>
              <div className="flex justify-center items-center">
                <RxEyeOpen
                  onClick={() => {
                    hadleView(data);
                  }}
                  className="rounded-md cursor-pointer m-2 bg-red-500 p-1 text-white box-content text-2xl"
                />
                <BiSolidEdit
                  onClick={() => {
                    hadleEditBtn(data);
                  }}
                  className="rounded-md cursor-pointer m-2 bg-red-500 p-1 text-white box-content text-2xl"
                />
                <RiDeleteBin6Line
                  onClick={() => {
                    hadleDel(data);
                  }}
                  className="rounded-md cursor-pointer m-2 bg-red-500 p-1 text-white box-content text-2xl"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Messages;
