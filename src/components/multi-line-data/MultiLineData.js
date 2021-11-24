const {
  default: BoldOneLineData,
} = require("components/one-line-data/BoldOneLineData");

const MultiLineData = ({ firm, location, duration, position, impacts }) => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
      }}
    >
      <BoldOneLineData left={`${firm} - ${location}`} right={duration} />
      <BoldOneLineData left={position} />
      <div>
        {impacts.map((impact, index) => (
          <div style={{ display: "flex" }}>
            <span style={{ marginRight: "0.2rem" }}>•</span>
            <div>{impact}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiLineData;
