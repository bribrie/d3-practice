import { useState, useRef, useEffect } from "react";
import { select } from "d3";

export default function Circle() {
  const [data, setData] = useState([5, 20, 25, 30, 40]);
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    svg
      .selectAll("circle") //circle태그 모두 선택
      .data(data) //데이터 바인딩(연결)
      .join(
        (enter) => enter.append("circle"),
        (update) => update.attr("class", "updated"),
        (exit) => exit.remove()
      )
      .attr("r", (value) => value)
      .attr("cx", (value) => value * 2)
      .attr("cy", (value) => value * 2)
      .attr("stroke", "red")
      .attr("fill", "coral");
  }, [data]);

  const increaseData = () => {
    setData(data.map((value) => value + 5));
  };

  const decreaseData = () => {
    setData(data.map((value) => value - 5));
  };

  return (
    <>
      <svg ref={svgRef}>
        <circle />
      </svg>
      <button onClick={increaseData}>+5</button>
      <button onClick={decreaseData}>-5</button>
    </>
  );
}
