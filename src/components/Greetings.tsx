import moment from "moment-timezone";

const easternTime = moment().tz("America/New_York").format("LLLL");
const [day, date, timeYear] = easternTime.split(", ");
const [year, time, pm_am] = timeYear.split(" ");

export default function Greetings() {
  return (
    <div className="text-center fixed top-16 left-0 w-full p-4 text-white">
      <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
        Welcome to Jamie's galaxZ!
      </div>
      {/* <p>There is much to explore, and many planets to discover.</p> */}
      <p style={{ fontSize: "0.8rem" }}>It is currently {date}, Eastern Time</p>

      <h1>
        {time}
        {pm_am.toLowerCase()}
      </h1>
      {/* <h5>{date} </h5> */}
    </div>
  );
}
