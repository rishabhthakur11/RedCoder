import { firestore } from "@/firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { toast } from "react-toastify";

type Props = {};

const ProblemForm = (props: Props) => {
  const [inputs, setInputs] = useState({
    id: "",
    title: "",
    difficulty: "",
    category: "",
    order: 0,
    videoId: "",
    link: "",
    likes: 0,
    dislikes: 0,
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // convert the order, likes and Dislikes to number
    const newProblem = {
      ...inputs,
      order: Number(inputs.order),
      likes: Number(inputs.likes),
      dislikes: Number(inputs.dislikes),
    };
    await setDoc(doc(firestore, "problems", inputs.id), newProblem);
    setInputs({
      id: "",
      title: "",
      difficulty: "",
      category: "",
      order: 0,
      videoId: "",
      link: "",
      likes: 0,
      dislikes: 0,
    });

    toast.success("Problem Added to Database", {
      position: "top-center",
      autoClose: 500,
      theme: "dark",
    });
  };
  return (
    <form
      className="space-y-6 px-6 pb-4 pt-6 w-1/2 rounded-md mx-auto bg-boxBrown mt-20"
      onSubmit={handleSubmit}
    >
      <h3 className="text-xl font-medium text-white">
        Problem Contibution form
      </h3>
      <div>
        <label
          htmlFor="problemId"
          className="text-sm font-medium block mb-2 text-textGray"
        >
          Problem Id
        </label>
        <input
          onChange={handleInputChange}
          type="text"
          name="id"
          id="id"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-textRed focus:border-textRed block w-full p-2.5 bg-white border-lightBrown placeholder-textGray text-black"
          placeholder="Problem Id"
        />
      </div>
      <div>
        <label
          htmlFor="title"
          className="text-sm font-medium block mb-2 text-textGray"
        >
          title
        </label>
        <input
          onChange={handleInputChange}
          type="text"
          name="title"
          id="title"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-textRed focus:border-textRed block w-full p-2.5 bg-white border-lightBrown placeholder-textGray text-black mb-4"
          placeholder="Title"
        />
      </div>
      <div>
        <label
          htmlFor="difficulty"
          className="text-sm font-medium block mb-2 text-textGray"
        >
          difficulty
        </label>
        <input
          onChange={handleInputChange}
          type="text"
          name="difficulty"
          id="difficulty"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-textRed focus:border-textRed block w-full p-2.5 bg-white border-lightBrown placeholder-textGray text-black mb-4"
          placeholder="Difficulty"
        />
      </div>

      <div>
        <label
          htmlFor="category"
          className="text-sm font-medium block mb-2 text-textGray"
        >
          category
        </label>
        <input
          onChange={handleInputChange}
          type="text"
          name="category"
          id="category"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-textRed focus:border-textRed block w-full p-2.5 bg-white border-lightBrown placeholder-textGray text-black mb-4"
          placeholder="category"
        />
      </div>

      <div>
        <label
          htmlFor="order"
          className="text-sm font-medium block mb-2 text-textGray"
        >
          order
        </label>
        <input
          onChange={handleInputChange}
          type="text"
          name="order"
          id="order"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-textRed focus:border-textRed block w-full p-2.5 bg-white border-lightBrown placeholder-textGray text-black mb-4"
          placeholder="Order"
        />
      </div>

      <div>
        <label
          htmlFor="videoId"
          className="text-sm font-medium block mb-2 text-textGray"
        >
          Video Id
        </label>
        <input
          onChange={handleInputChange}
          type="text"
          name="videoId"
          id="videoId"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-textRed focus:border-textRed block w-full p-2.5 bg-white border-lightBrown placeholder-textGray text-black mb-4"
          placeholder="video Id"
        />
      </div>

      <div>
        <label
          htmlFor="link"
          className="text-sm font-medium block mb-2 text-textGray"
        >
          link
        </label>
        <input
          onChange={handleInputChange}
          type="text"
          name="link"
          id="link"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-textRed focus:border-textRed block w-full p-2.5 bg-white border-lightBrown placeholder-textGray text-black mb-4"
          placeholder="Link"
        />
      </div>
      <div>
        <label
          htmlFor="likes"
          className="text-sm font-medium block mb-2 text-textGray"
        >
          Likes
        </label>
        <input
          onChange={handleInputChange}
          type="text"
          name="likes"
          id="likes"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-textRed focus:border-textRed block w-full p-2.5 bg-white border-lightBrown placeholder-textGray text-black mb-4"
          placeholder="Likes"
        />
      </div>
      <div>
        <label
          htmlFor="dislikes"
          className="text-sm font-medium block mb-2 text-textGray"
        >
          Dislikes
        </label>
        <input
          onChange={handleInputChange}
          type="text"
          name="dislikes"
          id="dislikes"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-textRed focus:border-textRed block w-full p-2.5 bg-white border-lightBrown placeholder-textGray text-black mb-4"
          placeholder="Dislikes"
        />
      </div>

      <button
        type="submit"
        className="w-full text-white font-medium rounded-lg
      text-sm px-5 py-3 text-center bg-textRed"
      >
        submit
      </button>
    </form>
  );
};

export default ProblemForm;
