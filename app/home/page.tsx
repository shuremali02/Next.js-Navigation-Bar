import Link from "next/link"
export default function Navbar() {
  return (
    <div className="bg-gray-400 min-h-screen">
      <div className="bg-black flex justify-center space-x-8 ">
        <h1 className="text-white text-2xl flex justify-start font-extrabold italic">Shurem</h1>
<ul className="text-white flex flex-grow justify-center space-x-4">
  <li><Link href="./home"> Home</Link> </li>
  <li><Link href="./about"> About</Link> </li>
  <li><Link href="./contact"> Contact</Link> </li>
</ul>
<div className="flex gap-3 justify-between">
<button className="bg-neutral-700 text-white rounded-3xl p-2"><Link href="./signup">SignUp</Link></button>

<button className="bg-white text-black rounded-3xl p-2"><Link href="./login">Login</Link></button>
</div> 
</div>
<br />
<br />
<br />

</div>
    
  )
} 
