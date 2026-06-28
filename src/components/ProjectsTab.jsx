export default function ProjectsTab() {
  return (
    <div>
      <span className="bios-section">Open Source</span>

      <div className="bios-project">
        <div className="bios-project-title">
          SeedSigner — Summer of Bitcoin 2025
        </div>
        <div className="bios-project-date">May 2025 — Aug 2025 | Remote</div>
        <ul className="bios-project-desc">
          <li>Added warning screens and non-English wordlist support to firmware (Python)</li>
          <li>Implemented accented character support for BIP-39 with NFKD normalization</li>
          <li>Configured IP forwarding and NAT masquerading for USB device routing</li>
          <li>4th top contributor at python-bitcoin-utils</li>
        </ul>
      </div>

      <br />

      <span className="bios-section">Projects</span>

      <div className="bios-project">
        <div className="bios-project-title">
          <a href="https://lancermarket-frontend.onrender.com" target="_blank" rel="noopener noreferrer">
            lancermarketAI
          </a>
        </div>
        <div className="bios-project-date">Jun 2026</div>
        <ul className="bios-project-desc">
          <li>Multi-agent orchestration platform using LangGraph with Gemini 2.5 Flash</li>
          <li>Two-way WebSocket communication to Control Plane, RTT &lt; 100ms</li>
          <li>Automated Docker system provisioning sandboxes for AI agents, boot &lt; 1.5s</li>
          <li>Remote Terminal Execution Tool with base64 payload wrappers</li>
        </ul>
      </div>

      <div className="bios-project">
        <div className="bios-project-title">
          <a href="https://github.com/abhigit-saha/mnnit-go" target="_blank" rel="noopener noreferrer">
            MNNIT GO
          </a>
        </div>
        <div className="bios-project-date">Nov 2024</div>
        <ul className="bios-project-desc">
          <li>Real-time treasure hunt platform with React.js, Node.js, MongoDB</li>
          <li>Leaderboard using Redis sorted sets and Socket.IO with EventEmitter</li>
          <li>Atomic Redis operations with multi for coupon validation</li>
          <li>CI/CD pipeline for automated deployment to AWS EC2</li>
        </ul>
      </div>

      <div className="bios-project">
        <div className="bios-project-title">
          <a href="https://victorious-rock-0a4ad4800.2.azurestaticapps.net/" target="_blank" rel="noopener noreferrer">
            Legal AI
          </a>
        </div>
        <div className="bios-project-date">Jun 2025</div>
        <ul className="bios-project-desc">
          <li>AI helper for legal/contractual needs using Next.js, Express.js</li>
          <li>Contract search using SerpApi and Gemini via MCP with FastMCP library</li>
          <li>Separate service for web search MCP Server</li>
        </ul>
      </div>
    </div>
  );
}
