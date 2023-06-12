import Navbar from "@/components/Navbar";
import "/styles/globals.css";
import Providers from "@/context/Providers";
export const metadata = {
  title: "AiPromptMaster",
  description: "Discover & Share AI Prompts",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
      <div className='main'>
          <div className='gradient' />
        </div>

        <main className='relative'>
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </main>
      </body>
    </html>
  )
}
