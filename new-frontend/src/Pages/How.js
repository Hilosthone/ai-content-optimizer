import star1 from "../Images/Star1.png";

function How() {
  return (
    <div className="how">
      <div className="howHeading">How it works</div>
      <div className="howList">
        <div className="hl">
          <img src={star1} />
          <li>Paste Content</li>
        </div>
        <div className="hl">
          <img src={star1} />
          <li>Ai OPtimize it</li>
        </div>
        <div className="hl">
          <img src={star1} />
          <li>Schedule And Publish</li>
        </div>
      </div>
      <h2 className="use">Use Cases</h2>
      <div className="use-list">
        <li>Content Creators</li>
        <li>Social Media Managers</li>
        <li>Freelancer</li>
        <li>Brands</li>
      </div>
    </div>
  );
}
export default How;
