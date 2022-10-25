import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
export const authContect = createContext();

const Context = ({ children }) => {
    const [courseData, setCourseData] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5000/course").then((res) => {
          setCourseData(res.data);
          
        });
   },[])



    const contextValue = { courseData };

    return (
        <authContect.Provider value={contextValue}>
          {children}  
        </authContect.Provider>
    );
};

export default Context;