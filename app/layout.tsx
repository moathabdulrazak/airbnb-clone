import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/modals/RegisterModal'
import { Navbar } from './components/navbar/Navbar'
import './globals.css'
import {Nunito} from "next/font/google"
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from './components/modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'
import RentModal from './components/modals/RentModal'


export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({
  subsets: ["latin"]
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body  >
        <ClientOnly>
          <ToasterProvider/>
        <Navbar currentUser={currentUser} />
        <RentModal/>
        <LoginModal/>
        <RegisterModal/>
        </ClientOnly>
        <div className='pb-20 pt-28' >
        {children}
        </div>
        </body>
    </html>
  )
}
