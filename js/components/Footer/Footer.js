import React from "react";

import "./Footer.scss";

const footer = () => {
  return (
    <div id="footer">
      <p>&#169; 2018 SmogTest</p>
      <div className="splitter"></div>
      <a href="https://www.facebook.com/jakub.hartyniuk">
        <img 
          src="../../../images/facebook.svg"
          alt="Facebook"
          height="30"
          width="30"
        />
      </a>
      <a href="https://plus.google.com/u/0/118221412857504498560">
        <img 
          src="../../../images/google-plus.svg"
          alt="GooglePlus"
          height="30"
          width="30"
        />
      </a>
      <a href="https://www.linkedin.com/in/jakub-hartyniuk-ab9912117/">
        <img 
          src="../../../images/linkedin.svg"
          alt="LinkedIn"
          height="30"
          width="30"
        />
      </a>
      <a href="https://github.com/Kubson91">
        <img 
          src="../../../images/github.svg"
          alt="GitHub"
          height="30"
          width="30"
        />
      </a>
      {/* <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
    </div>
  );
};

export default footer;
