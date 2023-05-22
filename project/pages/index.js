import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useSession, signIn, signOut } from "next-auth/react"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const { data: session } = useSession()
    if(!session){
        return(
            <div className='bg-blue-900 h-screen flex items-center'>
              <div className='text-center w-full'>
                  <button onClick={() => signIn('google')} className='bg-white p-2 px-4 rounded-lg'>Đăng nhập bằng google </button>
              </div>
            </div>
           )
    }
    return(
       <h1>login {session.user.email}</h1> 
    )
}
