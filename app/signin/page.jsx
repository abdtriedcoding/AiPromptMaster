'use client'
import { useAuth } from "@/context/userAuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function page() {
    const router = useRouter()
    const { emailSign } = useAuth()
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    })
    const handelChange = (e) => {
        const { name } = e.target;
        // Handle other input changes
        const { value } = e.target;
        setUserDetails((userDetails) => ({
            ...userDetails,
            [name]: value,
        }));
    };

    return (
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
            </div>

            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    if (userDetails.password !== userDetails.confirmPassword) {
                        alert('Passwords do not match.')
                        return;
                    } else if ((userDetails.password).length < 8) {
                        alert('Password must be at least 8 characters')
                        return;
                    } else {
                        emailSign(e, userDetails.email, userDetails.password)
                        router.push("/")
                    }
                }} class="space-y-6">
                    <div>
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div class="mt-2">
                            <input onChange={handelChange} id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        </div>
                        <div class="mt-2">
                            <input onChange={handelChange} id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
                        </div>
                        <div class="mt-2">
                            <input onChange={handelChange} id="password" name="confirmPassword" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                    </div>
                </form>

                <div class="mt-10 text-center text-sm text-gray-500">
                    <Link href="/login" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Back to log in page.</Link>
                </div>
            </div>
        </div>
    )
}
