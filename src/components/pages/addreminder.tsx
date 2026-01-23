import Input from "../layouts/input"
import Button from "../layouts/button"
import { faWineBottle,faGlobe,faCommentDots } from "@fortawesome/free-solid-svg-icons";
import Top_title_backicon from "../layouts/top_title_backicon"
import Select from "../layouts/select"
import TextArea from "../layouts/textarea"
import PopupBox from "../ui/popup"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function AddReminder() {
const [open, setOpen] = useState(false);
const navigate = useNavigate();

  return (
<>

           <Top_title_backicon title="Create Reminder" />

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


            <Button text="Create" onClick={() => setOpen(true)} />

                    <PopupBox
                      type="success"
                      title="Successfully"
                      message="Reminder has been created successfully."
                      buttonText="OK"
                      buttonFunction={() => {navigate("../reminders")}}
                      isOpen={open}
                      onClose={() => setOpen(false)}
                    />
          </div>



</>
  )
}

export default AddReminder
