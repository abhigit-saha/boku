export default function MainTab() {
  return (
    <div>
      <p className="intro-text">
        Hey there, Abhijit here. I like to learn stuff, and love to explain them.
        This place is just for me to write a few things about tech in general,
        ranging from technical blogs, to my experiences in tech, and other things.
      </p>

      <div className="intro-links">
        <a href="https://github.com/abhigit-saha" target="_blank" rel="noopener noreferrer">
          github
        </a>
        <a href="https://linkedin.com/in/abhijit--saha" target="_blank" rel="noopener noreferrer">
          linkedin
        </a>
        <a href="mailto:abhijitsaha2205@gmail.com">
          email
        </a>
      </div>

      <br />

      <span className="bios-section">Education</span>
      <div className="bios-row">
        <span className="bios-val">Motilal Nehru National Institute of Technology, Prayagraj</span>
      </div>

      <br />

      <span className="bios-section">Work Experience</span>
      <div className="bios-row">
        <span className="bios-key">Role:</span>
        <span className="bios-val">Open Source Developer Intern</span>
      </div>
      <div className="bios-row">
        <span className="bios-key">Organization:</span>
        <span className="bios-val">SeedSigner — Summer of Bitcoin 2025</span>
      </div>
      <div className="bios-row">
        <span className="bios-key">Duration:</span>
        <span className="bios-val">May 2025 — August 2025 (Remote)</span>
      </div>
      <ul className="bios-list">
        <li>Added warning screens and non-English wordlist support to SeedSigner firmware using Python</li>
        <li>Implemented accented character support for BIP-39 passphrase with NFKD unicode normalization</li>
        <li>Configured IP forwarding and NAT masquerading for USB-connected device network routing</li>
        <li>4th top contributor at python-bitcoin-utils — added mining block examples and fixed witness representation</li>
      </ul>

      <br />

      <span className="bios-section">Achievements</span>
      <ul className="bios-list">
        <li>
          <span className="highlight">Selected for Summer of Bitcoin</span> from 5000+ applications across 9 countries (68 developers chosen)
        </li>
        <li>
          <span className="highlight">Onsite Finalist</span> in SynthQuest Hackathon by IIT Delhi (200+ teams)
        </li>
        <li>
          <span className="highlight">2nd position</span> in Webster Hackathon by Computer Coding Club, MNNIT (200+ teams)
        </li>
        <li>
          <span className="highlight">6th position</span> in Hack36, flagship 36-hour hackathon by CCC, MNNIT
        </li>
      </ul>

      <br />

      <span className="bios-section">Skills</span>
      <div className="bios-row">
        <span className="bios-key">Languages:</span>
        <span className="bios-val">Python, C++, JavaScript, TypeScript</span>
      </div>
      <div className="bios-row">
        <span className="bios-key">Web:</span>
        <span className="bios-val">HTML5, CSS, Next.js, React.js, Node.js, Express.js</span>
      </div>
      <div className="bios-row">
        <span className="bios-key">Databases/Cloud:</span>
        <span className="bios-val">MongoDB, Redis, MySQL, AWS (EC2)</span>
      </div>
      <div className="bios-row">
        <span className="bios-key">AI Engineering:</span>
        <span className="bios-val">LangChain, LangGraph</span>
      </div>
    </div>
  );
}
