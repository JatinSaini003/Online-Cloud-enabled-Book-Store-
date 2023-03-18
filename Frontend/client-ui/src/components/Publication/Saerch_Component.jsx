import React, { useState } from "react";
import "./Search-style.css";
import { HiSearch } from "react-icons/hi";
import { Dropdown } from "rsuite";
const Saerch_Component = () => {
    const[search,setSearch] = useState('')

    const handleSubmit=()=>{
        console.log(`Search: ${search}`)
        setSearch('')
    }

  return (
    <div className="search">
      <div className="search-conatiner">
        <div className="search-dropdown">
          <Dropdown title="All">
            <Dropdown.Item>New File</Dropdown.Item>
            <Dropdown.Item>New File with Current Profile</Dropdown.Item>
            <Dropdown.Item>Download As...</Dropdown.Item>
            <Dropdown.Item>Export PDF</Dropdown.Item>
            <Dropdown.Item>Export HTML</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>About</Dropdown.Item>
          </Dropdown>
        </div>
        <div className="search-input">
          <input type="text" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)} onKeyDown={(event)=>{if(event.key==="Enter"){handleSubmit()}}}/>
        </div>
        <button className="search-logo" type="submit" onClick={handleSubmit}>
          <HiSearch />
        </button>
      </div>
    </div>
  );
};

export default Saerch_Component;
