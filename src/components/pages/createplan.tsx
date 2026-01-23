import Input from "../layouts/input"
import Button from "../layouts/button"
import { faWineBottle,faGlobe,faCommentDots, faStopwatch, faSearchMinus } from "@fortawesome/free-solid-svg-icons";
import Top_title_backicon from "../layouts/top_title_backicon"
import Select from "../layouts/select"
import TextArea from "../layouts/textarea"
import PopupBox from "../ui/popup"
import { useState } from "react";

import { useNavigate } from "react-router-dom";


const Createplan = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
<>

            <Top_title_backicon title="Create Plan" />
          <div id="formadd" className="mt-10">

            {/* add and delete button */}
            <Select
              label="Protocol"
              id="User_Protocol_Client"
              fieldicon={faGlobe}
              placeholder="Add Protocol"
              required={true}
              options={[
                { label: "Client1", value: "Client1" },
                { label: "Client2", value: "Client2" },
                { label: "Client3", value: "Client3" }
              ]}
            />  
            {/* <div className="gap-4 flex items-center justify-end p-4 ">
                <FontAwesomeIcon icon={faTrash} className="text-3xl text-red-500 cursor-pointer"/>
                <FontAwesomeIcon icon={faEdit} className="text-3xl text-white cursor-pointer" />
            </div> */}


            <Select
              label="Library"
              id="User_Client"
              fieldicon={faGlobe}
              placeholder="Add Library"
              required={true}
              options={[
                { label: "Client1", value: "Client1" },
                { label: "Client2", value: "Client2" },
                { label: "Client3", value: "Client3" }
              ]}
            />

            <Select
              label="Sessions"
              id="User_Client"
              fieldicon={faSearchMinus}
              placeholder="Add Sessions"
              required={true}
              options={[
                { label: "Client1", value: "Client1" },
                { label: "Client2", value: "Client2" },
                { label: "Client3", value: "Client3" }
              ]}
            />

            <Input 
              label="Session Name" 
              type="text" 
              id="titletext" 
              placeholder="Enter Session Name"
              fieldicon={faWineBottle}
              required={true}
            />

          <TextArea
            label="Session Details"
            id="message"
            fieldicon={faCommentDots}
            placeholder="Write details here"
            rows={5}
            required
          />
          <TextArea
            label="Session Notes"
            id="message"
            fieldicon={faCommentDots}
            placeholder="Write details here"
            rows={5}
            required
          />

            <Input 
              label="Duration" 
              type="number" 
              id="titletext" 
              placeholder="Select duration (eg 2 mins)"
              fieldicon={faStopwatch}
              required={true}
            />




            <Button text="Create Plan" onClick={() => setOpen(true)} />
            
                                <PopupBox
                                  type="success"
                                  title="Successfully"
                                  message="Plan has been created successfully."
                                  buttonText="OK"
                                  buttonFunction={() => {navigate("../clientdetails2")}}
                                  isOpen={open}
                                  onClose={() => setOpen(false)}
                                />


          </div>

</>
  )
}

export default Createplan