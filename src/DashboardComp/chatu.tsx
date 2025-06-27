import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import ChatHistory from "./chatHistory";

const socket = io("http://localhost:3001", {
  transportOptions: {
    polling: {
      extraHeaders: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NWVlM2MxYjZlYzQ0ODIxM2E5MTA1ZiIsImlhdCI6MTc1MTA1MDIzMCwiZXhwIjoxNzUxMDUzODMwfQ.7ImTFZ3FJTk-2XsK0lNRSYxMJrCjzm6hOjyYdFlDBTA", // 'Bearer h93t4293t49jt34j9rferek...'
      },
    },
  },
});


const useStyles = makeStyles({
  root: {
  padding: 0,
  display: "flex",
   flexDirection: "row",
    height: "100vh",
    boxSizing: "border-box",
  },
  chatBox: {
    flex: 1,
    maxHeight: "calc(100vh - 140px)",
    overflowY: "auto",
    border: "1px solid gray",
    padding: 10,
    marginBottom: 10,
  },
  inputArea: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginTop: "auto",
  },
  input: {
    flex: 1,
    padding: 8,
    borderRadius: 20,
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    padding: "8px 16px",
    borderRadius: 20,
    background: "#5f1201",
    color: "#fff",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
  },
    header: {
    display: "flex",
    alignItems: "center",
    background: "#5f1201",
    color: "#fff",
    padding: "12px 20px",
    fontWeight: "bold",
    fontSize: 18,
    height: 60,
    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
    chatContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: 0,
  },
});

export const Chat = () => {
    const classes = useStyles();
  const [messages, setMessages] = useState<any>([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState(
    "User" + Math.floor(Math.random() * 1000)
  );

  useEffect(() => {
    // Load existing messages
    axios.get("http://localhost:3001/chat").then((res: any) => {
      setMessages(res.data?.[0]?.messages);
    });

    // Listen for real-time messages
    socket.on("newMessage", (msg: any) => {
      setMessages((prev: any) => [...prev, msg]);
    });

    return () => {
      socket.off("newMessage");
    };
  }, []);

  const sendMessage = () => {
    if (!input) return;
    socket.emit("sendMessage", {
      receiverId: "123",
      message: input,
    });
    setInput("");
  };

  return (
    // <div style={{ padding: 20 }}>
    //   <h2>Chat App (Real-Time)</h2>
    //   <div
    //     style={{
    //       maxHeight: "300px",
    //       overflowY: "auto",
    //       border: "1px solid gray",
    //       padding: 10,
    //     }}
    //   >
    //     {messages?.map((msg: any, idx: any) => (
    //       <div key={idx}>
    //         <strong>{msg.username}:</strong> {msg.message}
    //       </div>
    //     ))}
    //   </div>
    //   <input
    //     value={input}
    //     onChange={(e) => setInput(e.target.value)}
    //     onKeyDown={(e) => e.key === "Enter" && sendMessage()}
    //     placeholder="Type a message"
    //     style={{ width: "80%", marginTop: 10 }}
    //   />
    //   <button onClick={sendMessage}>Send</button>
    // </div>
<>

    <div className={classes.root}>
      <ChatHistory></ChatHistory>
        <div className={classes.chatContainer}>
      <div className={classes.header}>
        <img
          src=""
          alt="Profile"
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            marginRight: 16,
            background: "#fff",
            padding: 2,
          }}
        />
       Chatapp
      </div>
      {/* <h2>Chat App (Real-Time)</h2> */}
      <div className={classes.chatBox}>
        {messages?.map((msg: any, idx: any) => (
          <div key={idx}>
            <strong>{msg.username}:</strong> {msg.message}
          </div>
        ))}
      </div>
      <div className={classes.inputArea}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type a message"
          className={classes.input}
        />
        <button
          onClick={sendMessage}
          className={classes.button}
        >
          Send
        </button>
      </div>
    </div>
    </div>
    </> 
  );
};

export default Chat;
