import React, { useEffect, useState } from "react";
import ChepList from "./ChepList";
import { Spinner } from "flowbite-react";



const ChepSection = () => {
  const [cheps, setCheps] = useState([]);
  const [loading,setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    fetch("http://localhost:4000/cheps")
      .then((res) => res.json())
      .then((data) =>{
        setCheps(data);
        setLoading(false)
      });
  }, []);
  
  if(loading){
    return <div className='flex justify-center items-center h-[calc(100vh-68px)]'>
    <p className='text-7xl font-thin'>L</p>
    <div className='w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-blue-400'></div>
    <p className='text-7xl font-thin'>ading....</p>
  </div>
  }
  
  return (
    <div>
        <h3 className="text-4xl font-semibold text-center my-16 ">Our Some Best Cheps</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cheps.map((chep) => (
          <ChepList key={chep.id} chep={chep}></ChepList>
        ))}
      </div>
    </div>
  );
};

export default ChepSection;
