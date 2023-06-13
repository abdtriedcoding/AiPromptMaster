'use client'
import { fetchPrompts } from "@/lib/crudOperations";
import { useEffect, useState } from "react";
import PromptCard from "./PromptCard";
import HeroSection from "./HeroSection";

export default function Feed() {
    const [prompts, setPrompts] = useState([])
    const [search, setSearch] = useState("");
    // Function to fetch prompts from serverside.
    const getFetchTodos = async () => {
        const result = await fetchPrompts();
        setPrompts(result)
    }

    useEffect(() => {
        getFetchTodos()
    }, [])
    console.log(prompts)

    const handelSearchInput = (e) => {
        setSearch(e.target.value)
    }

    const handleSearch = () => {
        if (!search) return prompts?.documents;

        const filteredPrompts = prompts?.documents?.filter(
            (prompt) =>
                prompt.username.toLowerCase().includes(search.toLowerCase().trim()) ||
                prompt.tag.toLowerCase().includes(search.toLowerCase().trim()) ||
                prompt.prompt.toLowerCase().includes(search.toLowerCase().trim())
        );

        return filteredPrompts;
    };
    
    const handleTagClick = (tagName) => {
        setSearch(tagName);
      };

    return (
        <>
            <HeroSection handelSearchInput={handelSearchInput} search={search} setSearch={setSearch} />
            <div className="mx-auto max-w-6xl py-16 px-6 md:px-0">
                {handleSearch()?.length === 0 ? (
                    <p className="text-gray-500 text-3xl font-bold text-center">No results found.</p>
                ) : (
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-3">
                        {handleSearch()?.map((e, index) => (
                            <PromptCard
                                key={e.$id}
                                index={index}
                                $id={e.$id}
                                uid={e.uid}
                                tag={e.tag}
                                prompt={e.prompt}
                                username={e.username}
                                timestamp={e.timestamp}
                                handleTagClick={handleTagClick}
                            />
                        ))}
                    </div>
                )}
            </div>
        </>
    );

}
