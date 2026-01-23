import Input from "../layouts/input";
import Button from "../layouts/button";
import {
  faWineBottle,
  faGlobe,
  faCommentDots,
  faStopwatch,
  faSearchMinus,
} from "@fortawesome/free-solid-svg-icons";
import Top_title_backicon from "../layouts/top_title_backicon";
import Select from "../layouts/select";
import TextArea from "../layouts/textarea";
import PopupBox from "../ui/popup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Editplan() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  // ✅ Dummy default values
  const [protocol, setProtocol] = useState("Client1");
  const [library, setLibrary] = useState("Client2");
  const [sessions, setSessions] = useState("Client3");
  const [sessionName, setSessionName] = useState("Morning Yoga");
  const [duration, setDuration] = useState(2);
  const [details, setDetails] = useState(
    "This session focuses on flexibility and breathing."
  );
  const [notes, setNotes] = useState(
    "Client prefers slow pace and calm music."
  );

  return (
    <>
      <Top_title_backicon title="Edit  Plan" />

      <div id="formadd" className="mt-10">
        {/* Protocol */}
        <Select
          label="Protocol"
          id="User_Protocol_Client"
          fieldicon={faGlobe}
          required
          value={protocol}
          onChange={setProtocol}
          options={[
            { label: "Client1", value: "Client1" },
            { label: "Client2", value: "Client2" },
            { label: "Client3", value: "Client3" },
          ]}
        />

        {/* Library */}
        <Select
          label="Library"
          id="User_Library"
          fieldicon={faGlobe}
          required
          value={library}
          onChange={setLibrary}
          options={[
            { label: "Client1", value: "Client1" },
            { label: "Client2", value: "Client2" },
            { label: "Client3", value: "Client3" },
          ]}
        />

        {/* Sessions */}
        <Select
          label="Sessions"
          id="User_Sessions"
          fieldicon={faSearchMinus}
          required
          value={sessions}
          onChange={setSessions}
          options={[
            { label: "Client1", value: "Client1" },
            { label: "Client2", value: "Client2" },
            { label: "Client3", value: "Client3" },
          ]}
        />

        {/* Session Name */}
        <Input
          label="Session Name"
          type="text"
          id="session_name"
          placeholder="Enter Session Name"
          fieldicon={faWineBottle}
          required
          value={sessionName}
          onChange={(e: any) => setSessionName(e.target.value)}
        />

        {/* Session Details */}
        <TextArea
          label="Session Details"
          id="session_details"
          fieldicon={faCommentDots}
          rows={5}
          required
          value={details}
          onChange={setDetails}
        />

        {/* Session Notes */}
        <TextArea
          label="Session Notes"
          id="session_notes"
          fieldicon={faCommentDots}
          rows={5}
          required
          value={notes}
          onChange={setNotes}
        />

        {/* Duration */}
        <Input
          label="Duration (minutes)"
          type="number"
          id="duration"
          placeholder="eg 2"
          fieldicon={faStopwatch}
          required
          value={duration.toString()}
          onChange={(e: any) => setDuration(Number(e.target.value))}
        />

        <Button text="Update Plan" onClick={() => setOpen(true)} />

        <PopupBox
          type="success"
          title="Successfully"
          message="Plan has been Updated successfully."
          buttonText="OK"
          buttonFunction={() => navigate("../clientdetails2")}
          isOpen={open}
          onClose={() => setOpen(false)}
        />
      </div>
    </>
  );
};

