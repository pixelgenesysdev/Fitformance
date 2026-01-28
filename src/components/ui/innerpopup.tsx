import { IoArrowBack } from "react-icons/io5";



interface PopupBoxProps {
  onClose: () => void;
}



export default function Innerpopup({
  onClose,
  
}: PopupBoxProps ) {



  return (
    <div
      className="flex overflow-y-auto overflow-x-hidden fixed inset-0 z-50 justify-center items-center w-[100%] p-4 h-auto backdrop-blur-sm bg-black/30"
    >
      <div className="relative py-10 px-6 w-full max-w-[800px] max-h-[70vh] overflow-y-scroll text-white bg-black border-[#37B5FF] border-3 rounded-3xl">

            <div className="text-left flex gap-6 mb-6"> 
                <div className="bg-[#0ab4ff] w-[40px] h-[40px] flex items-center justify-center rounded-full">
                    <IoArrowBack  className="cursor-pointer text-2xl" onClick={onClose}/>
                </div>
                <h2 className="title text-3xl capitalize font-[700]">Inner Popup</h2>
            </div>

        <div className="px-3">
          <p className="text-[16px]">
            This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.
            This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.
            This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.
            This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.
            This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.
            This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.
            This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.
            This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.
            This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.This is an inner popup component. You can add your content here.
            This is an inner popup component. You can add your content here.
          </p>
        </div>
      
      </div>
    </div>
  );
}
