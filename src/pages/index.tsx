import Navbar from '@/components/navbar/navbar';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col  justify-between  ${inter.className}`}>
        <Navbar/>
    </main>
  )
}
