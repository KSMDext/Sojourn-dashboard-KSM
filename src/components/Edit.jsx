import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import {Editor} from "primereact/editor";
import React from 'react'
import { useState } from "react";

const Edit = () => {
    const [value1,setValue1]= useState("");
  return (
    <div style={{padding:"px", display:"flex", gap:"2rem"}}>
        <div style={{width:""}}>
            <Editor value={value1} onTextChange={(e)=> setValue1(e.htmlValue)} style={{ height:"300px", width:"850px"}}/>
        </div>
    </div>
  )
}

export default Edit