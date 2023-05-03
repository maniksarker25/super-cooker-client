import React, { useEffect, useState } from "react";
import ChepList from "./ChepList";
import { Spinner } from "flowbite-react";
import LoadingSpiner from "../../LoadingSpiner/LoadingSpiner";



const ChepSection = () => {
  const [cheps, setCheps] = useState([]);
  const [loading,setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    fetch("https://chep-recipe-hunter-server-maniksarker25.vercel.app/cheps")
      .then((res) => res.json())
      .then((data) =>{
        setCheps(data);
        setLoading(false)
      });
  }, []);
  
  // show loader when data in loading state
  if(loading){
    return <LoadingSpiner></LoadingSpiner>
  }
  
  return (
    <div>
        <h3 className="text-4xl font-semibold text-center my-16 ">Our Some Best Cheps</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cheps?.map((chep) => (
          <ChepList key={chep.id} chep={chep}></ChepList>
        ))}
      </div>
    </div>
  );
};

export default ChepSection;
