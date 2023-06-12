'use client'
import PromptCard from "@/components/PromptCard";
import { useAuth } from "@/context/userAuthContext";
import { fetchPromptsByUserId } from "@/lib/crudOperations";
import { useEffect, useState } from "react";

export default function page() {
  const { user } = useAuth();

  const [prompts, setPrompts] = useState([])

  // Function to fetch prompts from serverside.
  const getFetchTodos = async () => {
    const result = await fetchPromptsByUserId(user?.$id);
    setPrompts(result)
  }
  useEffect(() => {
    getFetchTodos()
  }, [])
  return (
    <section className='mx-auto max-w-6xl py-16 px-6 md:px-0'>
      <h1 className='mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-left'>
        <span className='bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'>{user?.name} Profile</span>
      </h1>
      <p className='mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl text-left'>welcome to your personalized profile.</p>

      <div class="mx-auto max-w-6xl py-16 px-6 md:px-0">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-3">
          {prompts?.documents?.map((e, index) => {
            return <PromptCard
              index={index}
              $id={e.$id}
              uid={e.uid}
              tag={e.tag}
              prompt={e.prompt}
              username={e.username}
              timestamp={e.timestamp}
            />
          })}
        </div>
      </div>
    </section>
  )
}
