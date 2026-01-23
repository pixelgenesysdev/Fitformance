import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, type MouseEventHandler } from "react";

export default function Termscondition(props: { onClose: MouseEventHandler<SVGSVGElement> , isOpen: boolean}) {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = props.isOpen ? "hidden" : "auto";
  }, [props.isOpen]);

  if (!props.isOpen) return null;

  return (
    <div
      className="flex overflow-y-auto overflow-x-hidden fixed inset-0 z-50 justify-center items-center w-full p-4 h-full backdrop-blur-sm bg-black/30"
    >
        <div className="relative p-6 w-full max-w-3xl text-white bg-black border-[#37B5FF] border-3 rounded-3xl">
            <FontAwesomeIcon
            icon={faXmark}
            className="text-2xl cursor-pointer"
            style={{ position: "absolute", top: "20px", right: "20px" }}
            onClick={props.onClose}
            />
            <div className="text-center py-10 px-3">

        
                <h3 className="text-4xl mb-2">Terms & Conditions</h3>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa atque expedita eum, odio quod est, laudantium reprehenderit iusto asperiores neque minima placeat, voluptatem impedit maiores. Atque reprehenderit officiis sed?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nemo deserunt distinctio. Fuga ex vel quaerat eveniet ad? Obcaecati natus soluta commodi fugiat deleniti, veniam doloribus velit iste voluptatibus repellat.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, exercitationem consequatur delectus quam molestias dignissimos accusantium velit possimus sit saepe voluptatibus inventore quod suscipit laboriosam perspiciatis voluptas reiciendis esse! Cum.
                    </p>
            </div>
        </div>
    </div>
  )
}
