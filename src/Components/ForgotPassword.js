import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { authContext } from '../Context/Context';

const ForgotPassword = ({ open, setOpen }) => {

    const [email, setEmail] = useState([]);
    const { passwordReset } = useContext(authContext);
    
    const resetPassword = () => {
        passwordReset(email)
            .then((result) => {
              console.log(result)
          })
          .catch((error) => console.log(error));
        setOpen(false);
    }

  return (
    <div>
      <div className={`modal ${open && "modal-open"}`}>
        <div className="modal-box">
          <h3 className="font-bold text-xl text-center">Reset Your Password</h3>
          <p className="py-2 text-lg font-semibold">
            Please Provide Your Email Adress:
          </p>
          <div>
            <div className="relative flex items-center">
              <span className="absolute">
                <AiOutlineMail className="text-lg ml-2 text-gray-600"></AiOutlineMail>
              </span>

              <input
                              onBlur={(e) => setEmail(e.target.value)} 
                              name="email"
                type="Email"
                className="block w-full py-3 text-black  border rounded-md px-11 border-gray-600 focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email"
                required
              />
            </div>
            <div className="modal-action gap-3">
              <button
                onClick={() => setOpen(false)}
                className="bg-red-600 text-white p-1 rounded-xl"
              >
                Cancel
              </button>
              <button
                onClick={resetPassword}
                className="bg-blue-700 text-white p-1 rounded-xl"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;