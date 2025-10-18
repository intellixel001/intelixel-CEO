import { useState, useEffect } from "react";

export default function Counter({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const incrementTime = duration / end;
    const step = () => {
      start += 1;
      setCount(start);
      if (start < end) {
        setTimeout(step, incrementTime);
      }
    };
    step();
  }, [target, duration]);

  return (
    <span>
      {Number.isInteger(target) ? count : count.toFixed(1)}
      {suffix}
    </span>
  );
}