import { XMarkIcon } from "@heroicons/react/24/outline";

export default function HeroSection({ handelSearchInput, search, setSearch}) {
    return (
        <div className="relative isolate px-6 md:px-0 pt-14 pb-1.5">
            {/* Color Transition */}
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{
                    clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                }} />
            </div>
            {/* Content */}
            <div className="mx-auto max-w-2xl py-20">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        Go give it a star on github.{' '}
                        <a href="#" className="font-semibold text-indigo-600">
                            <span className="absolute inset-0" aria-hidden="true" />
                            Gituhb <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl">
                        Discover & Share
                        <br />
                        <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
                            AI-Powered Prompts
                        </span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        AiPromptMaster is an open-source AI prompting tool for modern world to discover, create and share creative prompts.
                    </p>
                    {/* Searchbar */}
                    <form className="relative w-full flex items-center">
  <input
    type="text"
    value={search}
    onChange={handelSearchInput}
    placeholder="Search for a tag or a username"
    required
    className="block w-full rounded-md border border-gray-200 bg-white py-2.5 pr-10 pl-5 text-sm shadow-lg font-medium focus:border-black focus:outline-none focus:ring-0"
  />
  {search && (
    <button
      type="button"
      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
      onClick={() =>{setSearch("")}}
    >
      <XMarkIcon className="w-6 h-6" />
    </button>
  )}
</form>


                </div>
            </div>
            {/* Color Transition */}
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true">
                <div className="relative left-[calc(50%+13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }} />
            </div>
        </div>
    )
}