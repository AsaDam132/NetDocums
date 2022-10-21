import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Search from "../components/Search";
import Invites from './invites.png';

function Invite() {
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
                                            Team Invitations
                                        </h1>
                                    </div>

                                    <ol>
                                        <li>
                                            To invite a team member, you need their email address,
                                            first name, and the role they should only be allowed to
                                            play in that business as shown below.
                                            <hr />
                                            
                                            <img src={Invites} alt="horse" />
                                        </li>
                                        <li>
                                            To view the list of invited members to your business,
                                            <a href="https://netapps.ng/netapps/team/members">
                                                <b>view here</b>
                                            </a>
                                        </li>
                                        <li>
                                            To view the list of business' you've been invited to join,
                                            <a href="https://netapps.ng/netapps/requests/team">
                                                <b>view here</b>
                                            </a>
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

export default Invite;
