import test from "../../assets/test.png";
import "./UpdateModal.css";
import arrowright from "../../assets/arrowright.png";
import PropTypes from 'prop-types';

const UpdateModal = ({onClose }) => {
  return (
    <div className="modal">
      <div className="modal-header">
        <h1>Update Scores</h1>
        <img src={test} alt={"testicon"} />
      </div>
      <div className="modal-form">
        <form className="update-form">
          <div className="form-input">
            <div className="label-input">
              <span className="serial-number">1</span>
              <label className="input-label ">
                Update your <span>rank</span>
              </label>
            </div>
            <div className="form-input-criteria">
              <input placeholder={"Rank"} />
            </div>
          </div>
          <div className="form-input">
            <div className="label-input">
              <span className="serial-number">2</span>
              <label className="input-label ">
                Update your <span>percentile</span>
              </label>
            </div>
            <div className="form-input-criteria">
              <input placeholder={"Percentile"} />
            </div>
          </div>
          <div className="form-input">
            <div className="label-input">
              <span className="serial-number">3</span>
              <label className="input-label ">
                Update your <span>current score (out of 15)</span>
              </label>
            </div>
            <div className="form-input-criteria">
              <input placeholder={"Score"} />
            </div>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <div className="form-btns">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="save-btn">
            <p>Save</p>
            <img src={arrowright} alt={"arrowright"} />
          </button>
        </div>
      </div>
    </div>
  );
};

UpdateModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default UpdateModal;
