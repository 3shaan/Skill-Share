import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BlogsModal from "./BlogsModal";

const Blogs = () => {
    const blogsData = useLoaderData();
    const [isOpen, setOpen] = useState(false);
    const [answer, setAnswer] = useState([]);

    const modalOpen = (ans, questions) => {
        const post = {
            ans: ans,
            questions: questions
        }
        setAnswer(post);
        setOpen(true);
    }
    const modalOff = () => {
        setOpen(false);
        setAnswer([]);
    }
    

  return (
    <div className="w-10/12 mx-auto mt-10">
      <div className="grid lg:grid-cols-2 gap-y-10">
        {blogsData.map((blog) => {
          return (
            <div key={blog.id}>
              <div className="card lg:w-96 h-[424px] bg-base-100 shadow-xl">
                <figure>
                  <img className="h-56" src={blog.img} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{blog.questions}</h2>
                  <div className="card-actions justify-end">
                    <button
                      onClick={() => modalOpen(blog.ans, blog.questions)}
                      className="btn modal-button"
                    >
                      open modal
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <BlogsModal modalOff={modalOff} open={isOpen} ans={answer}></BlogsModal>
      </div>
    </div>
  );
};

export default Blogs;
