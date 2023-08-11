import WebSocketChart from "@/components/websocket_chat";
import React from "react";

const WebSocketChartPage = () => {
  return (
    <div className="w-[900px] m-auto">
      <h1 className="bg-gradient-to-r from-purple-100 to-gray-200 p-16 text-4xl font-bold">
        웹소켓을 이용한 실시간 채팅 : 0.0.5
      </h1>

      <div className="p-16 space-y-8">
        <div className="bg-gray-100 p-2">채팅목록</div>
        <form className="space-x-4 flex">
          <input
            className="border-gray-400 p-4 rounded flex-1"
            placeholder="채팅을 입력해 보세요."
          />
          <button className="bg-blue-600 text-white p-2 rounded">보내기</button>
        </form>
      </div>

      <WebSocketChart />
    </div>
  );
};

export default WebSocketChartPage;
