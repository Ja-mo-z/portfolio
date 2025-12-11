import { useEffect, useState } from "react";
import moment from "moment-timezone";

export default function Greetings() {
  const [currentTime, setCurrentTime] = useState(
    moment().tz("America/New_York")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().tz("America/New_York"));
    }, 1000); // update every 1 second

    return () => clearInterval(interval); // cleanup
  }, []);

  const easternTime = currentTime.format("LLLL");
  const [day, date, timeYear] = easternTime.split(", ");
  const [year, time, pm_am] = timeYear.split(" ");

  return (
    <div className="text-center fixed top-10 left-0 w-full p-4 text-white">
      <div
        style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "0.5rem" }}
      >
        Welcome to Jamie galaxZ
      </div>

      <h1>
        {time}
        {pm_am.toLowerCase()}
      </h1>
      <p style={{ fontSize: "1rem" }}>EST, {date}</p>
    </div>
  );
}
