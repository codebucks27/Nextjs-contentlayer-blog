import Link from 'next/link'

import Image from 'next/image'
import profileImg from "@/public/logo-2.png"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark">
        <div className='w-16 rounded- overflow-hidden border border-solid border-dark mr-4'>
            <Image src ={profileImg} alt="Abhinav" className="w-full h-auto rounded-full"/>
            </div>
            <span className='font-bold text-xl'>SkinPluance</span>
        
    </Link>
  )
}

export default Logo