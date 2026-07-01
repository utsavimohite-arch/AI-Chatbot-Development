<h1 style={{color:"red"}}>
  THIS IS MY CHATBOT
</h1>
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const [message,setMessage] =
  useState("");

  const [chat,setChat] =
  useState([]);

  const [file,setFile] =
  useState(null);

  useEffect(()=>{

    const saved =
      localStorage.getItem("chat");

    if(saved){

      setChat(JSON.parse(saved));

    }

  },[]);

  useEffect(()=>{

    localStorage.setItem(
      "chat",
      JSON.stringify(chat)
    );

  },[chat]);

  async function uploadFile(){

    const formData =
      new FormData();

    formData.append(
      "file",
      file
    );

    await axios.post(
      "http://localhost:5000/upload",
      formData
    );

    alert("Uploaded");
  }

  async function sendMessage(){

    const userMsg = {
      sender:"user",
      text:message
    };

    setChat(prev=>[
      ...prev,
      userMsg
    ]);

    const response =
      await axios.post(
        "http://localhost:5000/chat",
        {
          message
        }
      );

    setChat(prev=>[
      ...prev,
      {
        sender:"bot",
        text:
        response.data.reply
      }
    ]);

    setMessage("");

  }

  return(

    <div className="container">

      <h1>AI Chatbot</h1>

      <input
        type="file"
        onChange={(e)=>
          setFile(
            e.target.files[0]
          )
        }
      />

      <button
        onClick={uploadFile}
      >
        Upload
      </button>

      <div className="chatbox">

        {
          chat.map(
            (item,index)=>(
              <div
                key={index}
                className={
                  item.sender
                }
              >
                {item.text}
              </div>
            )
          )
        }

      </div>

      <input
        value={message}
        onChange={(e)=>
          setMessage(
            e.target.value
          )
        }
      />

      <button
        onClick={sendMessage}
      >
        Send
      </button>

    </div>

  );

}

export default App;