'use client'
import Form from "@/components/Form";
import { useAuth } from "@/context/userAuthContext";
import { locale } from "@/lib/appwriteConfig";
import { sendFormDataToDB } from "@/lib/crudOperations";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'

export default function Page() {
  const [formData, setFormData] = useState({
    tag: "",
    prompt: "",
  })
  const router = useRouter()
  const [userLocation, setuserLocation] = useState("")
  const { user } = useAuth();

  const handelChange = (e) => {
    const { name } = e.target;
    // Handle other input changes
    const { value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  // Function to get user location.
  const getLocation = async () => {
    const promise = await locale.get();
    setuserLocation(promise)
  }
  useEffect(() => {
    getLocation()
  }, [user])
  return (
    <Form button="Post" formData={formData} handelSubmit={(e) => { sendFormDataToDB(e, user?.$id, user?.name, formData.tag, formData.prompt, new Date().toISOString(), userLocation?.country, setFormData); router.push('/') }} handelChange={handelChange} />
  )
}
