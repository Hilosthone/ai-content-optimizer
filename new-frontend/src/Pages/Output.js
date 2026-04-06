import access from "../Images/Accessibility.png";

function Output() {
  return (
    <div className="output">
      <h1> Output Preview</h1>
      <div className="output-contain">
        <div className="output-card">
          <div>
            <img src={access} />
            <h3>Optimized Content</h3>
          </div>
          <h4>Improved version of your content</h4>
          <div>
            Your rewritten content appears here with . better clarity,
            engagement and optimized structure for audience
          </div>
        </div>
        <div className="output-card">
          <div>
            <img src={access} />
            <h3>SEO Score</h3>
          </div>
          <h4>Score: 93/100</h4>
          <div>
            <p>Top keywords:</p>
            <li>Content optimization</li>
            <li>Social media growth</li>
            <li>AI writing</li>
          </div>
        </div>
        <div className="output-card">
          <div>
            <img src={access} />
            <h3>Readability</h3>
          </div>
          <h4>Grade level : 8th grade</h4>
          <div>
            <p>Improvements:</p>
            <li>Shorten long sentences</li>
            <li>Replace complex words</li>
            <li>Improve paragraph spacing</li>
          </div>
        </div>
        <div className="output-card">
          <div>
            <img src={access} />
            <h3>Best schedule</h3>
          </div>
          <h4>Best time: 6:20pm</h4>
          <div>
            <p>Suggested days:</p>
            <li>Tue .Thur .Sat</li>
            <p>Tip:</p>
            <p>Post consistently for better enagement</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Output;
