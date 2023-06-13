'use client'
import Form from "@/components/Form";
import { getPromptsById, updatePrompt } from "@/lib/crudOperations";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
    const searchParams = useSearchParams();
    const promptId = searchParams.get("id");
    const router = useRouter()
    const [formData, setFormData] = useState({
        tag: "",
        prompt: "",
    })

    // Function to fetch prompts from serverside.
    const getPromptById = async () => {
        const result = await getPromptsById(promptId);
        setFormData({
            tag: result.tag,
            prompt: result.prompt,
        });
    }

    useEffect(() => {
        getPromptById()
    }, [promptId])

    const handelChange = (e) => {
        const { name } = e.target;
        // Handle other input changes
        const { value } = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }));
    };

    return (
        <Form button="Update" formData={formData} handelSubmit={(e) => {
            updatePrompt(e, promptId, formData.tag, formData.prompt, setFormData);
            router.push('/');
        }} handelChange={handelChange} />
    )
}