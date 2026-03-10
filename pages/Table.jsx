import axios from 'axios'
import React, { useEffect, useState } from 'react'
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const Table = () => {
 const [data , setdata]=useState([])
  // const [page, setPage] = useState(0);


  const limit = 10;
  // useEffect(()=>{




  // const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
   const [start, setStart] = useState(0);


  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let res = await axios.get("http://localhost:3000/map");
    setdata(res.data);
    console.log(res.data)
  };

   const nextTen = () => {
    setStart(start + 10);
  };

    const currentData = data.slice(start, start + 10);


  
  


  const exportToExcel = () => {

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array"
    });

    const file = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"
    });

    saveAs(file, "users.xlsx");
  };
  return (
   
  


  <div className="flex h-screen bg-gray-100">


      {/* Sidebar */}
      <div className="w-64 bg-white border-r">

        <div className="p-4 font-bold text-lg border-b">
          Dashboard
        </div>

        <nav className="p-3 space-y-2 text-sm">

          <div className="text-gray-600">Account</div>

          <a className="block px-3 py-2 rounded bg-blue-100 text-blue-600">
            Accounts
          </a>

          <a className="block px-3 py-2 rounded hover:bg-gray-100">
            Account Report
          </a>

          <a className="block px-3 py-2 rounded hover:bg-gray-100">
            Account Upload
          </a>

          <div className="pt-4 text-gray-600">Contact</div>

          <a className="block px-3 py-2 rounded hover:bg-gray-100">
            Lead
          </a>

          <a className="block px-3 py-2 rounded hover:bg-gray-100">
            Deal
          </a>

          <a className="block px-3 py-2 rounded hover:bg-gray-100">
            Feedback
          </a>

        </nav>
      </div>


      {/* Main Content */}
      <div className="flex-1 p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">

          <div>
            <h1 className="text-xl font-semibold">
              Account Lists
            </h1>
            <p className="text-gray-500 text-sm">
              Here's a list of your accounts.
            </p>
          </div>

          <div className="flex gap-3">

            <button className="px-4 py-2 bg-green-500 text-white rounded">
              View
            </button>
             <button
        onClick={exportToExcel}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        Export Excel
      </button>
      

            <input
              type="text"
              placeholder="Search here..."
              className="border px-3 py-2 rounded"
            />

          </div>

        </div>


        {/* Table */}
        <div className="bg-white shadow rounded-lg overflow-hidden">

          <table className="w-full text-sm">

            <thead className="bg-blue-100 text-left">

              <tr>
                <th className="p-3">FirstName</th>
                <th className='p-3'>MiddleName</th>
                <th className='p-3'>lastName</th>
                <th className="p-3">Email</th>
                <th className="p-3">Phone No</th>
                <th className="p-3">Website</th>
                <th className="p-3">Industry</th>
                <th className="p-3">Account Status</th>
                <th className="p-3">state</th>
                <th className="p-3">City</th>
              </tr>

            </thead>

            <tbody>

              {data.map((acc, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="p-3">{acc.firstName}</td>
                  <td className="p-3">{acc.MiddleName}</td>
                  <td className="p-3">{acc.lastName}</td>
                  <td className="p-3">{acc.Email}</td>
                  <td className="p-3">{acc.Phone}</td>
                  <td className="p-3">{acc.Address}</td>
                  <td className="p-3">{acc.Pincode}</td>
                  <td className="p-3">{acc.Country}</td>
                  <td className="p-3">{acc.state}</td>
                  <td className="p-3">{acc.City}</td>



                  <td className="p-3">
                    <button className="text-gray-600 hover:text-black">
                      ⋮
                    </button>
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>
        <button
        onClick={nextTen}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Next 10 Data
      </button>


      </div>

    </div>
  )}

export default Table


  