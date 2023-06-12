import Link from "next/link";

export default function PromptCard({ index, $id, uid, tag, prompt, username, timestamp, }) {
    return (
        <article className="flex max-w-xl flex-col items-start justify-between bg-white rounded-lg shadow-md border border-gray-200 p-4">
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime="2020-03-16" className="text-gray-500 font-medium">{timestamp}</time>
            <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{tag}</a>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur flex justify-center items-center cursor-pointer">
            <img
              src="https://chat.openai.com/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAAcHTtfrP64vPbcohE8hWzmlFoEJrcjfUSUsaFcvvus%3Ds96-c&w=48&q=75"
              alt="copy_icon"
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
      </article>
      
    )
}
