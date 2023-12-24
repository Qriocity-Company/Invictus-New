import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import Process from '@/components/Process'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'


export default function Home() {
  return (
    <main className=' w-full flex flex-col justify-center items-center lg:max-w-[1440px]'>
      <Navbar/>
      <Hero/>
      <Services/>
      <Process/>
      <Testimonials/>
      <Footer/>
    </main>
  )
}
