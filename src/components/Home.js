import React from "react";
import Footer from "../components/Footer";
import Search from "../components/Search";
import Navbar from "../components/Navbar";
import ApiIcon from "@mui/icons-material/Api";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import PaymentsIcon from "@mui/icons-material/Payments";
import RocketIcon from "@mui/icons-material/Rocket";
import { Routes, Route, Link, Redirect } from "react-router-dom";

function Home() {

  const handleRedirect = (e, name) => {
    e.preventDefault()
    // navigate(`${name}`)
    // <Redirect to=`${name}` />
    window.location.href = `${name}`
  }
  return (
    <React.Fragment>
      <div className="quickSectionActive">
        <div className="bodyWrap">
          <Navbar />
          <div className="contentArea">
            <div classme="contentAreaInner clearfix no-pad-left no-pad-right">
              <div className="wrap" id="wrap">
                <div className="totalCS">
                  <div className="search-input">

                  </div>
                  <Search />
                  <div className="mymain">
                    <div className="header-text">
                      <h1 style={{ color: "#021c35" }}>
                        {""}
                        Welcome to Netapps Developer Documentation
                      </h1>
                    </div>

                    <div>
                      <div className="grid">
                        <div className="grid-item">
                          <div
                            className="cardDataText myCard"


                        
                            style={{ cursor: "pointer" }}  
                            onClick={(e) => handleRedirect(e, "/quick")}
                        
                          // onClick="toggles()"
                          >
                            <div>
                              <i
                                className="material-icons"



                                style={{ fontSize: "60px", color: "#2263b3" }}
                              >
                                <RocketIcon sx={{ color: "#2263b3", fontSize: "60px" }} />
                              </i>
                             
                                <h2>Quick Start</h2>
                              
                              <hr />
                              <small>
                                <b>
                                  <h6>
                                    Account registration and business
                                    onboarding.
                                  </h6>
                                </b>
                              </small>
                            </div>
                          </div>

                          <div className="cardDataText myCard">
                            <div
                              className=""
                              style={{ cursor: "pointer" }}  
                          onClick={(e) => handleRedirect(e, "/invite")}
                      
                            // onClick="netApps()"
                            >
                              <i

                              >
                                <WorkspacesIcon sx={{ color: "#2263b3", fontSize: "60px" }} />
                              </i>
                              
                                <h2>Team members invitation</h2>
                              

                              <hr />
                              <h6>
                                Invitations of new team members to projects.
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="grid-item">
                          <div
                            className="cardDataText myCard"
                            style={{ cursor: "pointer" }}
                            onClick={(e) => handleRedirect(e, "/live")}
                          >
                            <div className="">
                              <i
                                className="material-icons"
                                style={{ fontSize: "60px", color: "#2263b3" }}
                              >
                                <ApiIcon sx={{ color: "#2263b3", fontSize: "60px" }} />
                              </i>

                              <h2>Api keys and Webhook</h2>
                              <hr />
                              <h6>
                                Easily integrate with our api keys for
                                developers.
                              </h6>
                            </div>
                          </div>
                          <div
                            className="cardDataText myCard"
                           
                          style={{ cursor: "pointer" }}
                          onClick={(e) => handleRedirect(e, "/settlement")}
                          >
                            <div className="">
                              <i
                                className="material-icons"
                                style={{ fontSize: "60px", color: "#2263b3" }}
                              >
                                <PaymentsIcon sx={{ color: "#2263b3", fontSize: "60px" }} />
                              </i>
                              
                                <h2>Settlement</h2>
                              
                              <hr />
                              <h6>
                                Merchant Settlements and Transaction Settlements
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Footer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
