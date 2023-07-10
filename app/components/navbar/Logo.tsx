'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return ( 
    <div className=" relative flex flex-row items-center gap-1 cursor-pointer">
      <Image
        onClick={() => router.push('/')}
        className=" cursor-pointer" 
        src="/images/logo1.png" 
        height="70" 
        width="80" 
        alt="Logo" 
      />
      <p className="absolute -bottom-2 left-3 hidden md:block text-rose-400 text-md font-semibold tracking-wide">staysafe</p>
    </div>
   );
}
 
export default Logo;
