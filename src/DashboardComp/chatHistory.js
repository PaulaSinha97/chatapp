import React from "react";

const ChatHistory = () => {
  return (
    <div style={{ width: 300, border: "1px solid #5f1201", height: "100vh", overflowY: "auto" }}>
      <h3 style={{ padding: "16px" }}>Chats</h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {/* {chats.map((chat) => (
          <li
            key={chat.id}
            onClick={() => onSelectChat(chat.id)}
            style={{
              padding: "12px 16px",
              background: chat.id === selectedChatId ? "#f0f0f0" : "white",
              cursor: "pointer",
              borderBottom: "1px solid #eee",
            }}
          >
            <strong>{chat.name}</strong>
            <div style={{ fontSize: 12, color: "#888" }}>{chat.lastMessage}</div>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default ChatHistory;