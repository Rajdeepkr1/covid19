import React, { useEffect, useState } from 'react'
import './covid.css'

const Covid = () => {
    const [cData, setCData] = useState([])

    const covidStatus = async() =>{
        try{
            const res = await fetch('https://api.covid19india.org/data.json')
         const covidData = await res.json()
         setCData(covidData.statewise[0])
         console.log(covidData.statewise[0]);
        }catch{

        }
    }

    useEffect(() => {
        covidStatus();
    }, [])
    return (
        <div className="covid">
            <h2 className="covid__text">
            COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization. 
            </h2>
            <div className="covid__updated"><h2>Last Updated Time :-{cData.lastupdatedtime}</h2></div>
            <div className="covid__box">
                <div className="box"><span>Deaths :-{cData.deaths}</span></div>
                <div className="box"><span>Active :-{cData.active}</span></div>
                <div className="box"><span>Confirmed :-{cData.confirmed}</span></div>
                <div className="box"><span>Recovered :-{cData.recovered}</span></div>
                
            </div>
            <h2 className="covid__text">
            Serious symptoms:
difficulty breathing or shortness of breath
chest pain or pressure
loss of speech or movement
Seek immediate medical attention if you have serious symptoms. Always call before visiting your doctor or health facility.
People with mild symptoms who are otherwise healthy should manage their symptoms at home.
On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days.
            </h2>
        </div>
    )
}

export default Covid
