import Link from "next/link"

Link
export default function Sign() {
  return (
    <div className="bg-black min-h-screen flex justify-center">
      <div className="text-white mt-6"><label htmlFor="">UserName : </label>
<input type="text" />

        <div className="text-white mt-6"><label htmlFor="">Email : </label>
<input type="text" />


<div className="text-white mt-6"><label htmlFor="">Password : </label>
<input type="text" />
<br />
<br />
</div>



<div className="flex justify-center">
  <button className="bg-yellow-400 text-black text-center"><Link href="./about">Enter</Link></button>
  </div>
</div>
<div/>
</div>
</div>
  )
}
