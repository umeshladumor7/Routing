
import React, { useState } from "react";

export default function Table() {

     const [initialInfo] = useState({ fname: "", email: "", psw: "", add: "", mno: "" });
     const [array, setArray] = useState(JSON.parse(localStorage.getItem("Array")) || []);
     const [empdata, setEmpdata] = useState([]);
     const [info, setInfo] = useState(initialInfo);
     const [editMode, setEditMode] = useState(false);
     const [editIndex, setEditIndex] = useState(null);
     const fildata1 = JSON.parse(localStorage.getItem('Array'));


     const HandleDelete = (index) => {
          const newArray = [...array];
          newArray.splice(index, 1);
          setArray(newArray);
          localStorage.setItem("Array", JSON.stringify(newArray));
     }

     const HandleEdit = (index) => {
          setEditMode(true);
          setEditIndex(index);
          setInfo(array[index]);

     }

     const searchdata = (v) => {
          if (v !== "") {
               let data = array.filter((i) => {
                    if (i.fname.includes(v)) {
                         return i;
                    }
               });
               setArray(data);

          } else {
               setArray(JSON.parse(localStorage.getItem('Array')))
          }
     }

     const FilterUser = (val) => {
          const fildata = JSON.parse(localStorage.getItem('Array'))
          if (val !== "") {
               let abc = fildata.filter((i) => {
                    return i.fname == val;
               })
               setArray(abc);
          }
     }

     const sortData = (val) => {
          let data;
          if (val == 'desc') {
               data = [...array].sort((a, b) => {
                    return b.name > a.name ? 1 : -1;
               })
          }
          else if (val == 'asc') {
               data = [...array].sort((a, b) => {
                    return b.name > a.name ? 1 : -1;
               })
          }
          setArray(data);
     }


     return (
          <div>
               <div className="d-flex ms-5 mt-5">
                    <input type="search" name="srame" id="srame" className="mt-2 ms-2 px-2 fw-bold fs-5"
                         placeholder="Enter your search" onChange={(i) => searchdata(i.target.value)} /><br />

                    <select name="fname" onChange={(e) => FilterUser(e.target.value)} className="ms-5 px-2 fw-bold fs-5">
                         <option value="">-----Select Name-----</option>{
                              fildata1.map((e) => {
                                   return <option value={e.fname}> {e.fname}</option>
                              })
                         }
                    </select>

                    <select name="srNo" className="ml-2 ms-5 px-2 fw-bold fs-5" onChange={(e) => { sortData(e.target.value) }} >
                         <option value="asc">Ascending Order</option>
                         <option value="desc" className="">Descending Order</option>
                    </select>
               </div>
               <table className="table table-bordered border-dark w-75 mt-5 ms-5">
                    <thead>
                         <th className="ps-5 border border-dark">Name</th>
                         <th className="ps-5 border border-dark">Email</th>
                         <th className="ps-5 border border-dark">Password</th>
                         <th className="ps-5 border border-dark">Address</th>
                         <th className="ps-5 border border-dark">Mobile Number</th>
                         <th className="ps-5 border border-dark">Action</th>
                    </thead>
                    <tbody >
                         {array.map((item, index) => {
                              return (
                                   <tr key={index}>
                                        <td className=" fw-bold">{item.fname}</td>
                                        <td className=" fw-bold">{item.email}</td>
                                        <td className=" fw-bold pe-2">{item.psw}</td>
                                        <td className=" fw-bold">{item.add}</td>
                                        <td className=" fw-bold">{item.mno}</td>
                                        <td className=" fw-bold"><button onClick={() => HandleDelete(index)} className="btn 
                                        btn-danger fw-bold">Delete</button>
                                             <button onClick={() => HandleEdit(index)} className="btn btn-info ms-1 
                                             fw-bold">Edit</button>
                                        </td>
                                   </tr>
                              )
                         })}
                    </tbody>
               </table>
          </div>
     )
}
