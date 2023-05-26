import React, { useEffect, useState } from "react";
import Pdf from "react-to-pdf";
import LoadingSpiner from "../LoadingSpiner/LoadingSpiner";
const ref = React.createRef();

const Blog = () => {
    const [questionAnswer,SetQuestionAnswer] = useState([]);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
      setLoading(true)
        fetch('https://chep-recipe-hunter-server-maniksarker25.vercel.app/blog')
        .then(res=>res.json())
        .then(data => {
          SetQuestionAnswer(data)
          setLoading(false)
        })
    },[])
    // console.log(questionAnswer)
    // show loader when data is loading statee
    if(loading){
      return <LoadingSpiner></LoadingSpiner>
    }
  return (
    <>
     <div className="text-center mt-24">
     <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className="bg-orange-600 px-6 py-2 text-white rounded-md font-semibold " onClick={toPdf}>Download To Pdf</button>}
      </Pdf>
     </div>
      <div ref={ref} className="my-6 ">
        <h1 className="my-12  text-center font-bold text-4xl">
          Some Important Questions And Answers
        </h1>
        <div className="grid lg:grid-cols-2 gap-4 ps-8 lg:ps-0">
          {
            questionAnswer?.map((p,i)=><div key={p.id} className="card w-full bg-base-100 shadow-xl p-4">
            <h2 className="text-3xl font-bold">
             {i + 1}. {p.question}
            </h2>
            <p className="mt-6 text-xl">
             {p.answer}
            </p>
          </div>)
          }
        </div>
      </div>
    </>
  );
};

export default Blog;
