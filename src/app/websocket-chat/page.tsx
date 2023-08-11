import WebSocketChat from "@/components/websocket_chat/index"
import React from "react"

const WebSocketChartPage = () => {
  return (
    <div className="w-[900px] m-auto">
      <h1 className="bg-gradient-to-r from-purple-100 to-gray-200 p-16 text-4xl font-bold">
        웹소켓을 이용한 실시간 채팅 : 0.0.5
      </h1>

      <WebSocketChat />
    </div>
  )
}

export default WebSocketChartPage
