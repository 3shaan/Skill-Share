import React from 'react';

const BlogsModal = ({ modalOff, open, ans }) => {
    console.log(ans)
  return (
    <div>
      <div className={`modal ${open && "modal-open"}`}>
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="text-lg font-bold">
            <span className='text-xl'>Q :</span> {ans?.questions}
          </h3>
          <p className="py-4">
            <span className="font-bold text-lg">Ans : </span>
            {ans?.ans}
          </p>
          <div className="modal-action">
            <label
              onClick={modalOff}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsModal;