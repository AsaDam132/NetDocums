import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import MyRegister from './register.png';
import Search from "../components/Search";


function Company() {
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
                                            Understanding NetApps Company and Business
                                        </h1>
                                    </div>
                                    <div className="mylist">

                                        <li>
                                            Register Company and Business
                                        </li>

                                        <ol>
                                            A merchant can creates a business and A merchant can also create multiple businesses for the same
                                            company based on the
                                            merchant decision
                                        </ol>
                                        
                                            <ol>
                                                if you want your company name and business name the same,
                                                choosing yes will give the company and business the same
                                                details,All business names must be different for multiple business

                                            </ol>

                                        


                                        <li>Uploads Company and Personal documents</li>

                                        <li>Add Bank Details</li>
                                        <img src={MyRegister} alt="horse" />

                                    </div>
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

export default Company;
