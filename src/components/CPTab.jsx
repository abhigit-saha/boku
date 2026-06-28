export default function CPTab() {
  return (
    <div>
      <span className="bios-section">Competitive Programming</span>

      <div className="cp-stats">
        <div className="cp-card">
          <div className="cp-card-title">Leetcode</div>
          <div className="bios-row">
            <span className="bios-key">Handle:</span>
            <span className="bios-val">
              <a href="https://leetcode.com/ostavi_trag" target="_blank" rel="noopener noreferrer">
                ostavi_trag
              </a>
            </span>
          </div>
          <div className="cp-card-stat">Max Rating: 1873</div>
          <div className="cp-card-rank">Knight</div>
        </div>

        <div className="cp-card">
          <div className="cp-card-title">Codeforces</div>
          <div className="bios-row">
            <span className="bios-key">Handle:</span>
            <span className="bios-val">
              <a href="https://codeforces.com/profile/ostavi_trag" target="_blank" rel="noopener noreferrer">
                ostavi_trag
              </a>
            </span>
          </div>
          <div className="cp-card-stat">Max Rating: 1414</div>
          <div className="cp-card-rank">Specialist</div>
        </div>
      </div>
    </div>
  );
}
