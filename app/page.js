import FeaturesBox from '@/components/FeaturesBox'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import Process from '@/components/Process'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'


export default function Home() {
  return (
    <main className=' w-full flex flex-col justify-center items-center '>
      
      <Hero/>
      <Services/>
      <Process/>
      <FeaturesBox/>
      <Testimonials/>
      
    </main>
  )
}
