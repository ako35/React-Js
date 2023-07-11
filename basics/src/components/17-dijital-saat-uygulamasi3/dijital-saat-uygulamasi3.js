import React, { useEffect, useState } from "react";
import "./dijital-saat-uygulamasi3.scss";
import moment from "moment";

const DijitalSaatUygulamasi3 = (props) => {
  const [dateTime, setDateTime] = useState(moment());

  const dateStr = dateTime.format("LL");
  const dayStr = dateTime.format("dddd");

  const hour = moment().format("HH");
  const minute = moment().format("mm");
  const second = moment().format("ss");

  let message = "";

  if (hour >= 6 && hour < 11) {
    message = "MORNING";
  } else if (hour >= 11 && hour < 14) {
    message = "NOON";
  } else if (hour >= 14 && hour < 17) {
    message = "AFTERNOON";
  } else if (hour >= 17 && hour < 22) {
    message = "EVENING";
  } else {
    message = "NIGHT";
  }

  const saatStili = {
    color: props.textColor,
    backgroundColor: props.bgColor,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(moment());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={saatStili} className="dijital-saat-uygulamasi3">
      <div className="time">
        {hour}
        <span style={{ opacity: second % 2 === 0 ? 0 : 1 }}>:</span>
        {minute}
      </div>
      <div>
        <div className="date">{dateStr}</div>
        <div className="day">
          {dayStr} {message}
        </div>
      </div>
    </div>
  );
};

export default DijitalSaatUygulamasi3;
