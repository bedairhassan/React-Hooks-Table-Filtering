import React, { useState, useEffect } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import Table from './components/Table'
import {ColorDynamic,ShapeDynamic,FilterColor,FilterShape} from './components/tools'

function App() {

  const data = [{ shape: `Rectangle`, color: `Red` },{ shape: `Circle`, color: `Red` }, { shape: `Rectangle`, color: `Orange` }, { shape: `Rectangle`, color: `Green` }, { shape: `Rectangle`, color: `Blue` }, { shape: `Square`, color: `Green` }, { shape: `Square`, color: `Red` }, { shape: `Square`, color: `Orange` }, { shape: `Square`, color: `Red` }]

  const [filteredData,setFilteredData]=useState([])

  // obj = {...obj,name:`ali`}

  const [select,setSelect]=useState({
    color:`-`,
    shape:`-`
  })

  useEffect(()=>{console.log(select)},[select])

  useEffect(()=>{

    const {color,shape}=select

    // base condition
    if(color===`-` && shape===`-`){
      console.log(`yes both -`)
      // filteredData=[...data]
      setFilteredData([...data])
      // console.log(filteredData)
    }

    var tmpFilter = FilterColor(data,color)
    tmpFilter = FilterShape(tmpFilter,shape)

    setFilteredData([...tmpFilter])

  },[select])

  

  return (

    <React.Fragment>

      <h2 className={`center`}>Table Filtering</h2>

      <Dropdown
        selected={shape => setSelect({...select,shape})}
        data={ShapeDynamic(data)}
      />

      <Dropdown
        selected={color => setSelect({...select,color})}
        data={ColorDynamic(data)}
      />

      

      <Table

        headers={[`Shape`, `Color`]}
        data={filteredData}
      />

    </React.Fragment>
  );
}

export default App;
