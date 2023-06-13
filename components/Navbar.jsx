'use client'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useAuth } from '@/context/userAuthContext'

const navigation = [
    { name: 'MyProfile', href: '/my-profile' },
    { name: 'Create Prompt', href: '/create-prompt' },
]

export default function Navbar() {
    const { signInWithGoogle, user, userLogout } = useAuth()
    console.log(user)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <>
            <header className="relative inset-x-0 top-0 z-50 max-w-6xl mx-auto px-6">
                {/* Desktop Navigation */}
                <nav className="flex items-center justify-between py-6" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="flex sm:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                  {user && <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                                {item.name}
                            </Link>
                        ))}
                    </div>}
                    <div className="hidden sm:flex sm:flex-1 sm:justify-end">
                        {user ? <div className="flex items-center space-x-2">
                            <span className="text-sm font-semibold leading-6 text-gray-900">{user.name}</span>
                            <span className="text-sm font-semibold leading-6 text-gray-900">{user.email}</span>
                            <button onClick={userLogout} className="text-sm font-semibold leading-6 text-gray-900">
                                Logout
                            </button>
                        </div> : 
                        <Link href="/login"  className="text-sm font-semibold leading-6 text-gray-900">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </Link>
                        }
                    </div>
                </nav>
                {/* Mobile Navigation Dropdown  */}
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link href="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                    alt=""
                                />
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-4 py-16">
                                   {user &&  <div className='space-y-4'>
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="text-center items-center justify-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 bg-gray-50 mx-auto pb-3 flex"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                    </div>}
                                    {user ?
                                        <><p className="text-sm font-semibold leading-6 text-gray-900">{user.name}</p><button onClick={userLogout} className="text-sm font-semibold leading-6 text-gray-900">
                                            Logout
                                        </button></>
                                        : <button
                                            onClick={signInWithGoogle}
                                            className="rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 bg-gray-50 text-center items-center justify-center w-full"
                                        >
                                            Log in
                                        </button>}
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </>
    )
}
