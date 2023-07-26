import React, { useEffect, useState } from 'react'
import Header from '../../components/shared/Layout/Header'
import API from '../../services/API'

const Analytics = () => {
    const [data,setData]=useState([])
    const colors = [
        "#884A39",
        "#C38154",
        "#FFC26F",
        "#4F709C",
        "#4942E4",
        "#0079FF",
        "#FF0060",
        "#22A699",
      ];
    const getBloodGroupsData=async ()=>{
        try {
            const {data}= await API.get('/analytics/bloodGroups-data ')
            if(data?.success){
                setData(data?.bloodGroupData)
                //console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getBloodGroupsData()
    },[])
  return (
    <>
    <Header/>
    <div className="d-flex flex-row flex-wrap">
        {data?.map((record,i)=>(
            <div className="card m-2 p-1" key ={i} style={{width: '18rem',backgroundColor:`${colors[i]}`}}>
  
  <div className="card-body">
    <h1 className="card-title bg-light text-dark text-center mb-3">{record.bloodGroup}</h1>
    <p className="card-text">
        Total in: <b> {record.totalIn}</b>(ml)
    </p>
    <p className="card-text">
        Total out:{record.totalOut}(ml)
    </p>
    <div className="card-footer text-light bg-dark text-center">
        Total Available: <b>{record.availabeBlood}</b>(ml)
    </div>
  </div>

</div>

        ))}
    </div>
    </>
  )
}

export default Analytics