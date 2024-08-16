import Link from "next/link"
export default function Login() {
    return (
      <div className="bg-black min-h-screen flex justify-center">
          <div className="text-white mt-10"><label htmlFor="">Email : </label>
  <input type="text" />
  
  <div className="text-white mt-6"><label htmlFor="">Password : </label>
  <input type="text" /> 
  <br />
  <br/>
  </div><div className="flex justify-center">
  <button className="bg-gray-400 text-white text-center"><Link href="./">Enter</Link></button>
  </div>
  </div>
  </div>
    )
  }
  