import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Body from "./components/Body";
import Header from "./components/Header";
import All from "./components/MailType/All";
import Bin from "./components/MailType/Bin";
import MailContent from "./components/MailType/MailContent";
import SentMail from "./components/MailType/SentMail";
// import WriteEmail from "./components/MailType/WriteEmail";
import SideBar from "./components/SideBar";
import WriteFullMail from "./components/MailType/WriteFullMail";
import Spam from "./components/MailType/Spam";

function App() {
  return (
    <>
      <Header />
      <div className="flex">
        <SideBar />
        <div className="absolute top-[55px] left-[251px] w-[full] py-[14px] justify-between text-[14px]">
          <Routes>
            <Route path="/" element={<All />} />
            <Route path="/spam" element={<Spam />} />
            {/* <Route path="/write" element={<WriteEmail />} /> */}
            <Route path="/write" element={<WriteFullMail />} />
            <Route path="/sent" element={<SentMail />} />
            <Route path="/bin" element={<Bin />} />
            <Route path="/mail/:id" element={<MailContent />} />
            {/* <Body /> */}
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
