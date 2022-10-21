import React from 'react'
import Footer from "./Footer";
import Navbar from "./Navbar";
import Search from "../components/Search";


function Quick() {

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
                                      Quick Start
                                  </h1>
                              </div>

                              <ol>
                              <li>
                                <a href="https://netapps.ng/netapps" target="_blank">
                                Create a netapps account</a>, if you haven't
                                already
                              </li>
                              
                              <li>
                                
                                  You are required to register your company with us and create
                                  your business
                                <a href="https://netapps.ng/netapps/dashboard/overview" target="_blank">
                                click here to do so if you haven't</a>
                              </li>
                              
                              <li>
                                <a href="netcompany.html" target="_blank"><big>Understanding NetApps Company and Business.</big></a>
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

export default Quick;
