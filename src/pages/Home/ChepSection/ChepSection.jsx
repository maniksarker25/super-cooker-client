import React, { useEffect, useState } from "react";
import ChepList from "./ChepList";

const ChepSection = () => {
  const [cheps, setCheps] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/cheps")
      .then((res) => res.json())
      .then((data) => setCheps(data));
  }, []);
  return (
    <div>
        <h3 className="text-4xl font-semibold text-center my-12 ">Our Some Best Cheps</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cheps.map((chep) => (
          <ChepList key={chep.id} chep={chep}></ChepList>
        ))}
      </div>
    </div>
  );
};

export default ChepSection;
