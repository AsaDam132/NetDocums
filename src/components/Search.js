

import data from "../utils/data.json";
import { BiSearch } from "react-icons/bi";
import { RiCloseCircleFill } from "react-icons/ri";
import React, { useState } from "react";
import Select from "react-select"
import {useHistory} from "react-router-dom"

function Search() {
  const navigate = useHistory()
  const [selectedValue, setSelectedValue] = useState(null)
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  // .log(data)

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.label.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const handleSelect = (selectedValue) => {
    // console.log(selectedValue)
    setSelectedValue(selectedValue)
    navigate.push(`${selectedValue.value}`)
    window.location.reload()
  }

  return (
    <div>
      <Select value={selectedValue} options={data} onChange={handleSelect} />
    </div>
    // <div className="search">
    //   <div className="searchInputs">
    //     <input
    //       type="text"
    //       //   placeholder={placeholder}
    //       value={wordEntered}
    //       onChange={handleFilter}
    //     />
    //     <div className="searchIcon">
    //       {filteredData.length === 0 ? (
    //         <BiSearch />
    //       ) : (
    //         <RiCloseCircleFill id="clearBtn" onClick={clearInput} />
    //       )}
    //     </div>
    //   </div>
    //   {filteredData.length !== 0 && (
    //     <div className="dataResult">
    //       {filteredData.slice(0, 10).map((value, key) => {
    //         return (
    //           <Link className="dataItem" to={value.value}>
    //             <p>{value.label} </p>
    //           </Link>
    //         );
    //       })}
    //     </div>
    //   )}
    // </div>
  )
}

export default Search
