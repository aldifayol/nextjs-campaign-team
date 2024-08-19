import Link from "next/link";
import Image from "next/image";
import { Chat } from "@/types/chat";

const chatData: Chat[] = [
  {
    avatar: "/images/porto-ai.jpg",
    name: "Buds",
    text: "I love you!!",
    time: 12,
    textCount: 3,
    dot: 3,
  },
  {
    avatar: "/images/user/lisa.jpeg",
    name: "Raymond Winokan",
    text: "I love MEN",
    time: 12,
    textCount: 0,
    dot: 1,
  },
  {
    avatar: "/images/user/lisa.jpeg",
    name: "Ivan Pheles",
    text: "I am Gay",
    time: 32,
    textCount: 0,
    dot: 3,
  },
  {
    avatar: "/images/user/lisa.jpeg",
    name: "Olly",
    text: "byebye",
    time: 32,
    textCount: 2,
    dot: 6,
  },
  {
    avatar: "/images/user/lisa.jpeg",
    name: "Gibran",
    text: "biasa aja",
    time: 32,
    textCount: 0,
    dot: 3,
  },
  {
    avatar: "/images/user/lisa.jpeg",
    name: "Rocky Gerung",
    text: "KAMU DUNGU!",
    time: 32,
    textCount: 3,
    dot: 6,
  },
];

const ChatCard = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <h4 className="mb-6 px-7.5 text-xl font-semibold text-black dark:text-white">
        Chats
      </h4>

      <div>
        {chatData.map((chat, key) => (
          <Link
            href="/"
            className="flex items-center gap-5 px-7.5 py-3 hover:bg-gray-3 dark:hover:bg-meta-4"
            key={key}
          >
            <div className="relative h-14 w-14 rounded-full">
              <Image
                width={56}
                height={56}
                src={chat.avatar}
                alt="User"
                style={{
                  width: "auto",
                  height: "auto",
                  borderRadius: "50%",
                }}
              />
              <span
                className={`absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white ${
                  chat.dot === 6 ? "bg-meta-6" : `bg-meta-${chat.dot}`
                } `}
              ></span>
            </div>

            <div className="flex flex-1 items-center justify-between">
              <div>
                <h5 className="font-medium text-black dark:text-white">
                  {chat.name}
                </h5>
                <p>
                  <span className="text-sm text-black dark:text-white">
                    {chat.text}
                  </span>
                  <span className="text-xs"> . {chat.time} min</span>
                </p>
              </div>
              {chat.textCount !== 0 && (
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                  <span className="text-sm font-medium text-white">
                    {" "}
                    {chat.textCount}
                  </span>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChatCard;
