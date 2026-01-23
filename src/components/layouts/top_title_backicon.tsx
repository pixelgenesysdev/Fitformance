
import { IoArrowBack } from "react-icons/io5";



function Top_title_backicon({ title }: { title: string }) {
  return (
    <div className="cursor-pointer gap-2 flex items-center" onClick={()=>{history.back()}}> 
        <div className="bg-[#0ab4ff] w-[40px] h-[40px] flex items-center justify-center rounded-full">
            <IoArrowBack  className=" text-2xl"/>
        </div>
        <h2 className="title text-3xl capitalize font-[700]">{title}</h2>
    </div>
  )
}

export default Top_title_backicon
