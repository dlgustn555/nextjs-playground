import Link from "next/link";

export default function Home() {
  return (
    <div className="py-8 w-[900px] m-auto">
      <h1 className="flex justify-center pb-10 font-mono font-extrabold font-size text-6xl">
        🐸🦜Nextjs Playground🍄🥕
      </h1>
      <ul>
        <li>
          <Link href="/websocket-chat">🌳Websocket을 이용한 실시간 채팅창</Link>
        </li>
      </ul>
    </div>
  );
}
