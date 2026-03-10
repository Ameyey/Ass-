import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
const From = () => {

   let  Navigate = useNavigate()

  const [ data ,setdata]=useState({firstName:'',MiddleName:'',lastName:'',Email:'',Phone:'',Address:'',Pincode:'',Country:'',state:'',City:''})
  const handing = (e)=>{
      setdata({...data,[e.target.name]:e.target.value})
  }

  const SaveFrom = async(e)=>{
    e.preventDefault()

   try {
     console.log(data);   
     await axios.post('http://localhost:3000/map',data) 
     console.log("Database in Save")
     Navigate('/table')
  
   } catch (error) {
    console.log(error)
   }

  }

  

  useEffect(()=>{
     (async()=>{
       let data= await axios.get('http://localhost:3000/map')
       console.log(data)     
     })()
  })


  


  return (    

    <div>
      <form  onSubmit={(e)=>SaveFrom(e)}>    


    
     
      <div className="flex h-screen bg-gray-100">

      <div className="w-64 bg-white border-r">

        <div className="p-4 font-bold text-lg border-b">
          Dashboard
        </div>

        <nav className="p-4 space-y-2">

          <div className="bg-blue-100 text-blue-600 px-3 py-2 rounded">
            Profile
          </div>

          <div className="px-3 py-2 hover:bg-gray-100 rounded">
            Inbox
          </div>

          <div className="px-3 py-2 hover:bg-gray-100 rounded">
            My Jobs
          </div>

          <div className="px-3 py-2 hover:bg-gray-100 rounded">
            Test Results
          </div>

        </nav>

      </div>

      <div className="flex-1 p-6">

        <div className="flex gap-3 mb-4">
          <button className="px-4 py-2 bg-gray-200 rounded">Personal</button>
          <button className="px-4 py-2 bg-gray-100 rounded">Education</button>
          <button className="px-4 py-2 bg-gray-100 rounded">Experience</button>
          <button className="px-4 py-2 bg-gray-100 rounded">Other</button>
        </div>

        {/* Card */}
        <div className="bg-white rounded-lg shadow">

          {/* Gradient Header */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-t-lg">

            <h2 className="text-lg font-semibold">
              Personal Details
            </h2>

            <p className="text-sm">
              Make changes to your Profile Account here.
              <span className="bg-red-500 text-white px-2 py-1 ml-2 rounded text-xs">
                Click save when you're done.
              </span>
            </p>

          </div>

          {/* Form */}
          <div className="p-6 grid grid-cols-3  gap-2">

            <div className='col-span-2'>
              <label className="text-sm">First Name *</label>
              <input
                name='firstName' value={data.firstName} onChange={(e)=>handing(e)} 
                className="w-full border rounded px-2 py-2"
                placeholder='firstName '
              />
            </div>

            <div>
              <label className="text-sm">Middle Name</label>
              <input
                className="w-full border rounded px-3 py-2"
                 name='MiddleName' value={data.MiddleName} onChange={(e)=>handing(e)}
                  placeholder='MiddleName'
              />
            </div>

            <div>
              <label className="text-sm">Last Name *</label>
              <input
                className="w-full border rounded px-3 py-2"
                name='lastName' value={data.lastName}  onChange={(e)=>handing(e)} placeholder='lastName'
              />
            </div>

            <div className="col-span-3">
              <label className="text-sm">Email *</label>
              <input
                className="w-full border rounded px-3 py-2"
                placeholder="ashish@gmail.com"
                type="email" name='Email' value={data.Email}  onChange={(e)=>handing(e)} 
              />
            </div>

            <div >
              <label className="text-sm">Phone *</label>
              <input
                className="w-full border rounded px-3 py-2"
                placeholder="0987654321"
                type="number" name='Phone' value={data.Phone}  onChange={(e)=>handing(e)}
              />
            </div>

            <div className="col-span-4">
              <label className="text-sm">Address *</label>
              <textarea
              name='Address' value={data.Address}  onChange={(e)=>handing(e)} 
                className="w-full border rounded px-3 py-2"
                placeholder="Type your address here..."
              ></textarea>
            </div>

            <div className=''>
              <label className="text-sm">Pin Code *</label>
              <input className="w-full border rounded px-3 py-2"
              type="number" name='Pincode' value={data.Pincode}  onChange={(e)=>handing(e)} placeholder='Pincode'
               />
            </div>

            <div>
              <label className="text-sm">Country *</label>
              <input className="w-full border rounded px-3 py-2" 
              name='Country' value={data.Country}  onChange={(e)=>handing(e)} placeholder='Country'
               />
            </div>

            <div>
              <label className="text-sm">State *</label>
              <input className="w-full border rounded px-3 py-2" 
              name='state' value={data.state}  onChange={(e)=>handing(e)} placeholder='state'
              />
            </div>

            <div >
              <label className="text-sm">City *</label>
              <input
              name='City' value={data.City}  onChange={(e)=>handing(e)} placeholder='City'
               className="w-full border rounded px-3 py-2" />

            </div>
            <div>
            
               <button
  type="submit"  value="Save"
  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
>
  Save
</button>

            </div>

          </div>

        </div>

      </div>

    </div>
           

      </form>
    
    </div>
  )
}


export default From

