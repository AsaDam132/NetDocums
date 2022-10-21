import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Search from "../components/Search";
// 👇️ import the image
import MyImage from './fill.png';

function Live() {
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
                                            NetApps Keys and Webhooks
                                        </h1>
                                    </div>

                                    <ol>
                                        <li>
                                            Netapps only uses test keys when the company and business
                                            have not yet been verified; once verified,Netapps
                                            automatically switches to live keys and live transactions.
                                            <hr />
                                            {/* 👇️ local image */}
                                            <img src={MyImage} alt="horse" />
                                          

                                        </li>
                                        <li>
                                            To generate <b>new keys </b>click on the button above and
                                            click yes.
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

export default Live;
