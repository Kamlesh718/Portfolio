import "./LivePreview.css";

const projects = [
  {
    name: "VirtueVerses",
    url: "https://virtueverses.vercel.app/login",
  },
  {
    name: "ChitraMitra",
    url: "https://chitramitra.vercel.app/",
  },
  {
    name: "Pizza Restaurant",
    url: "https://pizza-restaurant-teal.vercel.app/",
  },
  {
    name: "The Wild Oasis",
    url: "https://the-wild-oasis-website-three.vercel.app/",
  },
  {
    name: "React Code Editor",
    url: "https://react-code-editor-rust.vercel.app/",
  },
  {
    name: "Solar System",
    url: "https://solor-syystem.netlify.app/",
  },
  {
    name: "Space Explorer Game",
    url: "https://space-explorer-8c42e.web.app/",
  },
];

function LivePreview() {
  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Projects Live Preview
      </h1>
      <div className="live-preview-grid">
        {projects.map((project, index) => (
          <div key={index} className="mini-browser-frame">
            <div className="mini-browser-bar">
              <div style={{ display: "flex", gap: "8px" }}>
                <span
                  className="mini-browser-dot"
                  style={{ background: "#ff5f57" }}
                ></span>
                <span
                  className="mini-browser-dot"
                  style={{ background: "#ffbd2e" }}
                ></span>
                <span
                  className="mini-browser-dot"
                  style={{ background: "#28c840" }}
                ></span>
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="live-demo-button"
              >
                <span className="live-demo-text">Live Demo</span>
                <span className="live-demo-icon" role="img" aria-label="link">
                  🔗
                </span>
              </a>

              <div className="mini-browser-title">{project.name}</div>
              {/* <div style={{ width: "52px" }} /> */}
            </div>

            <iframe
              src={project.url}
              title={project.name}
              width="100%"
              height="100%"
              style={{ border: "none" }}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default LivePreview;
