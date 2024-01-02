import React, { useEffect, useState } from "react";
import HourlyCard from "../hourlyCard/HourlyCard";
import Content from "../content/Content";
import axios from "axios";

const ParentContent = () => {
  const [params, setParams] = useState([]);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const response = await axios.get("http://localhost:8800/tbl_tracker");
        setParams(response.data);
      } catch (err) {
        console.log(err);
      }
    }, 3000); // gọi lại sau mỗi 3s

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <HourlyCard params={params} />
      <Content params={params} />
    </>
  );
};

export default ParentContent;
