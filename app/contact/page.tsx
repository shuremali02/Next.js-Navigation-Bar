import Link from "next/link"

export default function Contact() {
  return (
    <div className="bg-zinc-400 min-h-screen justify center text-center ">
   <div className="flex justify-center "> 
  <img className="mt-4 h-[250px] w-[200px]  rounded-full" src="dp.jpg" alt="this is me" />
  </div>  
<h1>SYED SHUREM ALI</h1>
<h1>email:shuremsyed41@gmail.com</h1>
<button className="bg-black text-white"><Link href="/">GoBAck</Link></button>
</div>
  )
  
}