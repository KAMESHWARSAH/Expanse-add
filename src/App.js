import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NewExapnce } from "./components/NewExpance/NewExapnce";
import { Allexpences } from "./components/Allexpences";
import React, {useState} from "react";
let dummay_data = [
  {
    id: "a1",
    title: "School Fee",
    amount: 5000,
    date:"2023-09-26"
  },
  {
    id: "a2",
    title: "Bus Fee",
    amount: 4000,
    date:"2023-09-26"
  },
];
function App() {
  const [expances1, setExpances] = useState(dummay_data);

  const saveexpancedata = (fromchilddata) => {
    // const propertyNames = Object.keys(fromchilddata);
    const newarray =[fromchilddata, ...expances1]
    // const allnewdata = {
    //   ...fromchilddata,
    // };
    console.log(newarray);
    setExpances(newarray);
  };

  return (
    <>
      <h2 className="text-center">Let's Start Coding</h2>
      <div className="main-background">
        <NewExapnce onaddExpance={saveexpancedata} />
        <Allexpences iteam={expances1} />
        
      </div>
    </>
  );
}

export default App;
