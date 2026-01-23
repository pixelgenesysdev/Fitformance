import Input from "../layouts/input"
import { faWineBottle,faGlobe,faCommentDots, faTrash } from "@fortawesome/free-solid-svg-icons";
import Top_title_backicon from "../layouts/top_title_backicon"
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
              <Top_title_backicon title="View Reminder" />
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
              value="Reminder Title"
              disabled
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
              value="Client1"
              disabled
              
              
            />

          <TextArea
            label="Reminder Message"
            id="message"
            fieldicon={faCommentDots}
            placeholder="Write message here"
            rows={5}
            required
            value="This is a reminder message."
            disabled
          />


            {/* <Button text="Updated" onClick={() => setOpen(true)} /> */}
            
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
                      message="You Want To Delete This Reminder"
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
