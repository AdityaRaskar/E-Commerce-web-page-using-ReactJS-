import React from 'react'

export default function Category({finalcategory,setcatName}) {
    let cat = finalcategory.map((v, i) => {
        return (
            <ul>
                <li onClick={()=>setcatName(v)} key={i} className='bg-[#ccc] cursor-pointer p-[7px] text-[18px] mb-2 font-serif font-[500px]'>
                    {v}
                    </li>
                {/* {v} */}
            </ul>
        )
    })
    return (
        <div>
            <h3 className='text-[24px] font-[500px] p-[10px]'>Category</h3>
 
            <ul>
                {cat}
            </ul>


        </div>
    )
}
