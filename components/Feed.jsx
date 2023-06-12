'use client'
import { fetchPrompts } from "@/lib/crudOperations";
import { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

export default function Feed() {
    const [prompts, setPrompts] = useState([])

    // Function to fetch prompts from serverside.
    const getFetchTodos = async () => {
        const result = await fetchPrompts();
        setPrompts(result)
    }

    useEffect(() => {
        getFetchTodos()
    }, [])
    console.log(prompts)
    return (
        <>
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
        </>
    )
}
