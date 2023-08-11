"use client";

import React, { useEffect, useState } from "react";

const WebSocketChart = () => {
  const [messages, setMessages] = useState<string[]>([]);
  useEffect(() => {
    const socket = new WebSocket(`ws://192.168.56.101:4000/ws`);

    socket.addEventListener("open", () => {
      socket.send("Hello~!! I Connect!!");
    });

    socket.addEventListener("message", (event) => {
      setMessages((prev) => [...prev, event.data]);
      socket.close();
    });
  }, []);

  return (
    <ul>
      {messages.map((message, index) => (
        <li key={index}>{message}</li>
      ))}
    </ul>
  );
};

export default WebSocketChart;
