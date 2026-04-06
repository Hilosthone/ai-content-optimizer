<<<<<<< HEAD
import { useState, useEffect } from "react";

function Paste() {
  const [content, setContent] = useState("");
  const [platforms, setPlatforms] = useState([]);
  const [platform, setPlatform] = useState("twitter");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const BACKEND_URL = "https://ai-content-optimizer.onrender.com"; // updated link

  // Fetch available platforms from backend
  useEffect(() => {
    fetch(`${BACKEND_URL}/platforms`)
      .then((res) => res.json())
      .then((data) => {
        setPlatforms(data.platforms || []);
        if (data.platforms?.length) setPlatform(data.platforms[0]);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleOptimize = async () => {
    if (!content.trim()) {
      alert("Please paste some content first.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch(`${BACKEND_URL}/optimize`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content, platform }),
      });

      if (!response.ok) throw new Error("Failed to optimize content");

      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="paste">
      <h1>Paste your Content</h1>
      <textarea
        placeholder="Paste your caption, tweet, blog content here"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>

      <p className="q">Select Platform</p>

      <div className="platform-container">
        {platforms.map((p) => (
          <div
            key={p}
            className={`platform-card ${
              platform === p ? "active-platform" : ""
            }`}
            onClick={() => setPlatform(p)}
          >
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </div>
        ))}
      </div>

      <div>
        <button className="b3" onClick={handleOptimize}>
          {loading ? "Optimizing..." : "Optimize & Schedule"}
        </button>
      </div>

      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      {result && (
        <div className="output" style={{ marginTop: "20px" }}>
          <h2>SEO Optimized Content</h2>
          <p>{result.seo.optimized_content}</p>
          <strong>Keywords:</strong> {result.seo.keywords.join(", ")}
          <p>
            <strong>Meta Description:</strong> {result.seo.meta_description}
          </p>
          <h2>Engagement</h2>
          <p>{result.engagement.hook}</p>
          <ul>
            {result.engagement.suggestions.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
          <h2>Readability</h2>
          <p>Score: {result.readability.score}</p>
          <ul>
            {result.readability.improvements.map((i, idx) => (
              <li key={idx}>{i}</li>
            ))}
          </ul>
          <h2>Posting Schedule</h2>
          <p>Platform: {result.posting_schedule.platform}</p>
          <p>Best Times: {result.posting_schedule.best_times.join(", ")}</p>
          <p>Reasoning: {result.posting_schedule.reasoning}</p>
        </div>
      )}
    </div>
  );
}

=======
function Paste() {
  return (
    <div className="paste">
      <h1>Paste your Content</h1>
      <textarea placeholder="Paste your caption, tweet, blog or blog content here"></textarea>
      <p className="q">Select Tone</p>
      <div className="dropdown-container">
        <select>
          <option>Professional</option>
          <option>Friendly</option>
          <option>Formal</option>
          <option>Assertive</option>
        </select>

        <select>
          <option>Platform</option>
          <option>Short</option>
          <option>Meduim</option>
          <option>Detailed</option>
        </select>

        <select>
          <option>Audience</option>
          <option>Accept</option>
          <option>Decline</option>
          <option>Request clarification</option>
          <option>Follow Up</option>
        </select>
      </div>
      <div>
        <button className="b3">Optimize & Schedule</button>
      </div>
    </div>
  );
}
>>>>>>> 31d2cf07e73648f515fcbeb3daad6dbf3323dede
export default Paste;
