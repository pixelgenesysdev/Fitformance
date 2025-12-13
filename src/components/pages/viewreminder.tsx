import Input from "../layouts/input"
import Button from "../layouts/button"
import { faWineBottle,faGlobe,faCommentDots, faTrash } from "@fortawesome/free-solid-svg-icons";
import Toptitle from "../layouts/top_title"
import Select from "../layouts/select"
import TextArea from "../layouts/textarea"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import PopupBox from "../ui/popup"
import { useNavigate } from "react-router-dom";
function Viewreminder() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  return (
<>

        <div className="flex justify-between items-center">
              <Toptitle title="View Reminders" />
              <FontAwesomeIcon icon={faTrash} className="text-2xl text-red-500 cursor-pointer" onClick={()=>setOpen2(true)}/>
        </div>

          <div id="formadd" className="mt-10">
            <Input 
              label="Reminder Title" 
              type="text" 
              id="titletext" 
              placeholder="Write title here"
              fieldicon={faWineBottle}
              required={true}
            />
            <Select
              label="Select User Type"
              id="User_Client"
              fieldicon={faGlobe}
              placeholder="User Client"
              required={true}
              options={[
                { label: "Client1", value: "Client1" },
                { label: "Client2", value: "Client2" },
                { label: "Client3", value: "Client3" }
              ]}
            />

          <TextArea
            label="Reminder Message"
            id="message"
            fieldicon={faCommentDots}
            placeholder="Write message here"
            rows={5}
            required
          />


            <Button text="Updated" onClick={() => setOpen(true)} />
            
                    <PopupBox
                      type="success"
                      title="Successfully"
                      message="Reminders has been updated"
                      buttonText="OK"
                      buttonFunction={() => navigate("../reminders")}
                      isOpen={open}
                      onClose={() => setOpen(false)}
                    />

                    <PopupBox
                      type="error"               // This will show the X icon
                      title="Are you sure?"
                      message="Do you really want to delete this item?"
                      buttonText="Yes"
                      buttonFunction={() => navigate("../reminders")}
                      double={true}              // Enables second button
                      secondButtonText="No"
                      secondButtonFunction={() => setOpen2(false)}
                      isOpen={open2}
                      onClose={() => setOpen2(false)}
                    />
          </div>

</>
  )
}

export default Viewreminder
