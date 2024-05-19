

import { Inter } from 'next/font/google'
// import {sofia} from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import Footer from '@/components/Footer'
import localFont from '@next/font/local'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Invictus',
  description: "Empower your digital presence with Invictus – a creation sparked by innovation. Invictus is a gateway to a dynamic and impactful digital experience. Dive into a world where your brand's potential is unleashed, guided by a commitment to excellence and a vision for the future. Join us, and let Invictus redefine your online journey."
}

const grotesk = localFont({
  src: [
    {
      path: '../public/fonts/cabinet-grotesk/CabinetGrotesk-Thin.otf',
      weight: '400'
    },
    {
      path: '../public/fonts/cabinet-grotesk/CabinetGrotesk-Regular.otf',
      weight: '500'
    },
    {
      path: '../public/fonts/cabinet-grotesk/CabinetGrotesk-Medium.otf',
      weight: '600'
    },
    {
      path: '../public/fonts/cabinet-grotesk/CabinetGrotesk-Bold.otf',
      weight: '700'
    },
    {
      path: '../public/fonts/cabinet-grotesk/CabinetGrotesk-Extrabold.otf',
      weight: '800'
    },
    
  ],
  variable: '--font-grotesk'
})

const sofia = localFont({
  src:[
    {
      path:'../public/fonts/sofia-pro/sofia.otf',
      weight:'500'
    }
  ],
  variable: '--font-sofia'
})


export default function RootLayout({ children }) {

  return (
    <html lang="en" className={`${grotesk.variable} ${sofia.variable}`} >
      <head>
      <script src="https://p.usestyle.ai" defer></script>
      </head>
      <body className='w-full flex flex-col justify-center items-center ' >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
