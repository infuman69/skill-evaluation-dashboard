import "./TestSection.css";
import testimage from "../../assets/test.png";
import { useState } from "react";
import Modal from "../Modal/Modal";
import UpdateModal from "../UpdateModal/UpdateModal";

const TestSection = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <>
      <div className="test-section">
        <div className="test-details-section">
          <img src={testimage} alt="testimageicon" />
          <div className="test-details">
            <h3>Hypertext Markup Language</h3>
            <p>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
          </div>
        </div>
        <button className="update-btn" onClick={handleOpen}>Update</button>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <UpdateModal onClose={onClose} />
      </Modal>
    </>
  );
};

export default TestSection;
