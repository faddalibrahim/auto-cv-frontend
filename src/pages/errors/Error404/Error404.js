import E404 from "./Error404Svg";

const Error404 = (props) => {
  const page = props.match.url.split("/").pop();
  return (
    <div>
      <E404 />
      opps! we don't have a <span style={{ color: "#ef5350" }}>
        {page}
      </span>{" "}
      page
    </div>
  );
};

export default Error404;
