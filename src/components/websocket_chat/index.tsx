'use client'

import React, { Fragment, useEffect, useState, useMemo } from 'react'

const nicknames = ['🌺하나', '🐸현수', '🐢승수', '🦉순명', '🐧태균', '🐲용용']

const getNicknames = () => {
  const index = Math.floor(Math.random() * nicknames.length)
  return nicknames[index]
}

interface Message {
  type?: 'intro' | 'sync' | 'chat'
  nickname: string
  message: string
}

interface Chat {
  type: 'intro' | 'sync' | 'chat'
  payload: Message[]
}

const WebSocketChat: React.FC = () => {
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const [message, setMessage] = useState('')
  const [chats, setChats] = useState<Chat[]>([])
  const [myNickname, setMyNickname] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  const handleButtonClick = () => {
    if (message.trim() === '') {
      return
    }

    socket?.send(
      JSON.stringify({ type: 'chat', payload: [{ nickname: myNickname, message }] })
    )
    setMessage('')
  }

  useEffect(() => {
    setSocket(new WebSocket(`ws://localhost:4000/ws`))
    setMyNickname(getNicknames())
  }, [])

  useEffect(() => {
    if (!socket) {
      return
    }
    socket.addEventListener('open', () => {
      socket.send(
        JSON.stringify({
          type: 'intro',
          payload: [{ nickname: myNickname, message: '' }],
        })
      )
    })

    socket.addEventListener('message', (event) => {
      if (typeof event.data === 'string') {
        setChats((prev) => [...prev, JSON.parse(event.data)])
      }
    })

    return () => {
      socket?.close()
    }
  }, [myNickname, socket])

  return (
    <div className="p-16 space-y-8">
      <div>
        나는 <span className="text-lg font-bold">{myNickname}</span> 입니다.
      </div>
      <div className="bg-gray-100 p-2">
        <ul>
          {chats.map(({ type, payload }, index) => (
            <Fragment key={`${type}-${index}`}>
              {type === 'sync' &&
                payload.map(({ type: prevType, nickname, message }, mIndex) => (
                  <li key={`${type}-${index}-${mIndex}`} className="py-2">
                    <span className="text-lg font-bold">{nickname}</span>
                    <span> 님</span>
                    {prevType === 'intro' ? ' 입장했습니다.' : ` ${message}`}
                  </li>
                ))}

              {type !== 'sync' && (
                <li className="py-2">
                  <span className="text-lg font-bold">{payload[0].nickname}</span>
                  <span> 님</span>
                  {type === 'chat' ? ` ${payload[0].message}` : ' 입장했습니다.'}
                </li>
              )}
            </Fragment>
          ))}
        </ul>
      </div>

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
    </div>
  )
}

export default WebSocketChat
