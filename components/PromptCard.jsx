import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function PromptCard({ index, $id, uid, tag, prompt, username, timestamp, handleTagClick, deletePrompt }) {
  const [copied, setCopied] = useState("");
  const pathName = usePathname();
  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(prompt);
    setTimeout(() => setCopied(""), 3000);
  };

  return (
    <article className="flex max-w-xl flex-col items-start justify-between bg-white rounded-lg shadow-md border border-gray-200 p-4">
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime="2020-03-16" className="text-gray-500 font-medium">{timestamp}</time>
          <p onClick={(e) => { handleTagClick(tag) }} className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 cursor-pointer">{tag}</p>
        </div>
        <div onClick={handleCopy} className="w-10 h-10 rounded-full bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur flex justify-center items-center cursor-pointer">
          <img
            src={
              copied === prompt
                ? "/tick.svg"
                : "/copy.svg"
            }
            alt={copied === prompt ? "tick_icon" : "copy_icon"}
            width={18}
            height={18}
          />
        </div>
      </div>
      <p className="mt-5 line-clamp-3 text-sm font-medium leading-6 text-gray-700">{prompt}</p>
      <Link href={`/profile/${username}?uid=${uid}`} className="relative mt-8 flex items-center gap-x-4">
        <div className="text-sm font-medium leading-6">
          <p className="text-gray-700">{username}</p>
        </div>
      </Link>
      {pathName === "/my-profile" && (
        <div className='mt-5 justify-between flex gap-4'>
          <button 
            className='text-sm bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent cursor-pointer'
          >
            Edit
          </button>
          <button onClick={()=>{deletePrompt($id)}}
            className='text-sm  bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent cursor-pointer'
          >
            Delete
          </button>
        </div>
      )}
    </article>
  )
}
