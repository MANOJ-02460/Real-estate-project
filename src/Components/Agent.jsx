import React from "react";
import Agentbox from "./Agentbox";
import agentImage1 from "../Images/Image1.png";
import agentImage2 from "../Images/Image2.png";
import agentImage3 from "../Images/Image3.png";
import Navbar from "./Navbar";

const Agent = () => {
  return (
    <div>
      <Navbar/>
      <div className="agent" id="agents">
        <div className="a-heading">
          <h1>Agent</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="b-container">
          <Agentbox image={agentImage1} name="Developer" />
          <Agentbox image={agentImage2} name="Developer" />
          <Agentbox image={agentImage3} name="Developer" />
        </div>
      </div>
    </div>
  );
};

export default Agent;
