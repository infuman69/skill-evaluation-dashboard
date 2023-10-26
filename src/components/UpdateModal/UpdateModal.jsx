import test from "../../assets/test.png";
import "./UpdateModal.css";
import arrowright from "../../assets/arrowright.png";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSkill } from "../../context/SkillContext";

const UpdateModal = ({ onClose }) => {
  const [formRank, setRank] = useState("");
  const [formPercentile, setPercentile] = useState("");
  const [formScore, setScore] = useState("");
  const { dispatch, rank, percentile, score } = useSkill();
  const handleRank = (e) => {
    setRank(e.target.value);
  };

  const handlePercentile = (e) => {
    setPercentile(e.target.value);
  };

  const handleScore = (e) => {
    setScore(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_RANK", payload: formRank });
    dispatch({ type: "SET_PERCENTILE", payload: formPercentile });
    dispatch({ type: "SET_SCORE", payload: formScore });
    onClose();
  };
  console.log(rank, percentile, score);
  useEffect(() => {
    if (rank === "" && percentile === "" && score === "") return;
    setRank(rank);
    setPercentile(percentile);
    setScore(score);
  }, []);
  return (
    <div className="modal">
      <div className="modal-header">
        <h1>Update Scores</h1>
        <img src={test} alt={"testicon"} />
      </div>
      <div className="modal-form">
        <form className="update-form" onSubmit={handleSubmit}>
          <div className="form-input-container">
            <div className="form-input">
              <div className="label-input">
                <span className="serial-number">1</span>
                <label className="input-label ">
                  Update your <span>rank</span>
                </label>
              </div>
              <div className="form-input-criteria">
                <input
                  placeholder={"Rank"}
                  value={formRank}
                  onChange={handleRank}
                />
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
                <input
                  placeholder={"Percentile"}
                  value={formPercentile}
                  onChange={handlePercentile}
                />
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
                <input
                  placeholder={"Score"}
                  value={formScore}
                  onChange={handleScore}
                />
              </div>
            </div>
          </div>
          <div className="form-btns-container">
            <div className="form-btns">
              <button className="cancel-btn" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="save-btn">
                <p>Save</p>
                <img src={arrowright} alt={"arrowright"} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

UpdateModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default UpdateModal;
