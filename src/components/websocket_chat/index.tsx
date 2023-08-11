"use client"

import React, { useEffect, useState } from "react"

const WebSocketChat: React.FC = () => {
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<string[]>([])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  const handleButtonClick = (event: any) => {
    socket?.send(message)
    setMessage("")
  }

  useEffect(() => {
    setSocket(new WebSocket(`ws://localhost:4000/ws`))
  }, [])

  useEffect(() => {
    socket?.addEventListener("open", () => {
      socket.send("Hello~!! I Connect!!")
    })

    socket?.addEventListener("message", (event) => {
      if (typeof event.data === "string") {
        setMessages((prev) => [...prev, event.data as string])
      }
    })

    return () => {
      socket?.close()
    }
  }, [socket])

  return (
    <div className="p-16 space-y-8">
      <div className="bg-gray-100 p-2">채팅목록</div>
      <div className="space-x-4 flex">
        <input
          className="border-gray-400 p-4 rounded flex-1"
          placeholder="채팅을 입력해 보세요."
          value={message}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-600 text-white p-2 rounded"
          onClick={handleButtonClick}
        >
          보내기
        </button>
      </div>

      <ul>
        {messages.map((message, index) => (
          <li key={index} className="py-2">
            {message}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WebSocketChat
