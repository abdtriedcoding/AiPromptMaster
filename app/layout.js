import Navbar from "@/components/Navbar";
import "/styles/globals.css";
export const metadata = {
  title: "AiPromptMaster",
  description: "Discover & Share AI Prompts",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div className='main'/>
        <main className='relative'>
          <Navbar/>
          {children}
        </main>
      </body>
    </html>
  )
}
