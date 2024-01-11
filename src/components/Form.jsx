import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LocalStorage = () => {

     const [initialInfo] = useState({ fname: "", email: "", psw: "", add: "", mno: "" });
     const [array, setArray] = useState(JSON.parse(localStorage.getItem("Array")) || []);
     const [info, setInfo] = useState(initialInfo);
     const [editMode, setEditMode] = useState(false);
     const [editIndex, setEditIndex] = useState(null);

     const navigate = useNavigate();
     const Handlechange = (e) => {
          console.log(e.target);
          setInfo({ ...info, [e.target.name]: e.target.value });
     }

     const HandleSubmit = (e) => {
          if (editMode) {
               const updatedArray = [...array];
               updatedArray[editIndex] = info;
               setArray(updatedArray);
               setEditMode(false);
               setEditIndex(null);
          } else {
               setArray([...array, info]);
          }

          localStorage.setItem("Array", JSON.stringify(array));
          setInfo(initialInfo);
          navigate('/Table')


          localStorage.setItem("Array", JSON.stringify([...array, info]));
          if (!info.fname || !info.email || !info.psw || !info.add || !info.mno === 0) {
               alert("Please fill in all fields");
               return false;
          }
     }

     return (
          <>
               <div>
                    <form method="post" action="#" className="text-center">
                         <label htmlFor="fname" className="pe-3 fw-bold">Name : </label>
                         <input type="text" name="fname" id="fname" placeholder="Enter Your Name" className="fw-bold" required
                              value={info.fname} onChange={Handlechange} />
                         <br /><br />
                         <label htmlFor="email" className="pe-3 fw-bold">Email :</label>
                         <input type="email" name="email" id="email" placeholder="Enter your Email Id" className="fw-bold"
                              required value={info.email} onChange={Handlechange} />
                         <br /><br />
                         <label htmlFor="psw" className="pe-3 fw-bold ">Password :</label>
                         <input type="password" name="psw" id="psw" placeholder=" Enter your Password" className=" fw-bold"
                              required value={info.psw} onChange={Handlechange} />
                         <br /><br />
                         <label htmlFor="add" className="pe-3 fw-bold" >Address : </label>
                         <input type="text" id="add" name="add" required className="fw-bold" value={info.add} onChange=
                              {Handlechange} placeholder="Enter your Address" />
                         <br /><br />
                         <label htmlFor="mno" className="pe-3 fw-bold" >Mobile Number : </label>
                         <input type="number" id="mno" name="mno" className="fw-bold" required value={info.mno} onChange=
                              {Handlechange} placeholder="Enter your Mobile" />
                         <br /><br />
                         <button type="submit" onClick={HandleSubmit} className="p-2 px-5 text-center bg-primary fw-bold text-dark 
                          rounded border-0 ">Submit</button>
                    </form >
               </div>
          </>
     )
}

export default LocalStorage;