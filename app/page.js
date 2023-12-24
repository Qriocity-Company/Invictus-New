import Hero from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import Services from '@/components/Services'


export default function Home() {
  return (
    <main className=' w-full flex flex-col justify-center items-center lg:max-w-[1440px]'>
      <Navbar/>
      <Hero/>
      <Services/>
    </main>
  )
}
