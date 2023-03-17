import React from "react";
import "./WriteEmail.css";
// import LowComponent from "./WriteEmail/LowComponent";
// import WriteContent from "./WriteEmail/WriteContent";
// import WriteDetail from "./WriteEmail/WriteDetail";
// import WriteHeader from "./WriteEmail/WriteHeader";

export const writeEmailConText = React.createContext();

function WriteEmail() {
  // const [receiver, setReceiver] = useState("");
  // const [title, setTitle] = useState("");
  // const handleSubmit = (title) => {
  // e.preventDefault();
  // setReceiver(receiver);
  // console.log("first", title);
  // console.log("receiver", receiver);
  // };

  // const highFunction = (text) => {
  //   console.log(text);
  // };

  return (
    <div>
      {/* <writeEmailConText.Provider value={{}}> */}
      {/* <WriteHeader /> */}
      {/* <WriteDetail receiver={receiver} title={title} /> */}
      {/* <WriteContent /> */}
      {/* <LowComponent propFunction={highFunction} /> */}
      {/* </writeEmailConText.Provider> */}
    </div>
  );
}

export default WriteEmail;
