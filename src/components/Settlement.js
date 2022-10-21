import Footer from "./Footer";
import Navbar from "./Navbar";
import Search from "../components/Search";
import MySettles from './settlementOne.png';


import React from "react";

function Settlement() {
  return (
    <div className="quickSectionActive">
      <div className="bodyWrap">
        <Navbar />
        <div className="contentArea">
          <div classme="contentAreaInner clearfix no-pad-left no-pad-right">
            <div className="wrap" id="wrap">
              <div className="totalCS">
                <div className="search-input"></div>
                <Search/>

                <div className="mymain">
                  <div className="header-text">
                    <h1 style={{ color: "#021c35" }}>
                      {""}
                      Settlement
                    </h1>
                  </div>

                  <ol>
                    <li>
                      Netapps settlements are completed in batches, and a
                      merchant must filter the results by a date range to obtain
                      all of the batches for that time period. This directs you
                      to all settlements made at that time.
                      

                      <img src={MySettles} alt="horse" />
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        
      
      <Footer />
    </div>
    </div>
    </div>
  );
}

export default Settlement;
