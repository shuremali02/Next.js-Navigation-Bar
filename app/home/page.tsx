import Link from "next/link"
export default function Navbar() {
  return (
    <div className="bg-gray-400 min-h-screen">
      <div className="bg-black flex justify-center space-x-4 ">
        <h1 className="text-white flex justify-start">Shurem</h1>
<ul className="text-white flex flex-grow justify-center space-x-8">
  <li><Link href="./home"> Home</Link> </li>
  <li><Link href="./about"> About</Link> </li>
  <li><Link href="./contact"> Contact</Link> </li>
</ul>
</div>
<br />
<br />
<br />
<div className="flex gap-3 justify-center">
<button className="bg-black text-white p-2"><Link href="./signup">SignUp</Link></button>

<button className="bg-white text-black p-2"><Link href="./login">Login</Link></button>
</div> 
</div>
    
  )
} 
