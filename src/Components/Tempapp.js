import React,{useState, useEffect} from 'react';
import './css/style.css';

const Tempapp =()=>{

    const [city, setCity] = useState(null);
    const [search,setSearch] = useState("Surat");

    useEffect(() => {

        const fetchApi= async()=>{
            const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=65c4f2937e1a9bfe2445cc1092327f40`;
            const response =await fetch(url);            
            const resJson =await response.json();
            //console.log(resJson);

            setCity(resJson.main);
        }
        fetchApi();
    },[search])

    return(
        <>
        <div className="box">
            <div className="inputData">
                <input
                    type="search"
                    className="inputField"
                    value={search}
                    onChange={(event)=> {
                        setSearch(event.target.value)
                    }}
                />
            </div>
            {!city ? (
                <p className="errorMsg">No data found</p>
            ) :(
                <div>
                    <div className="info">
                        <h2 className="location">
                            <i className='fas fa-street-view'>{search}</i>
                        </h2> 
                        <h1 className="temp">
                                {city.temp} Cel
                        </h1> 
                        <h3 className="tempmin_max" >min : {city.temp_min} Cel | max:  {city.temp_max} Cel</h3>      
                    </div>

                    <div className="wave -one"></div>
                    <div className="wave -two"></div>
                    <div className="wave -three"></div>
                </div>
                )
            }
        </div>
        
        </>
    )
};

export default Tempapp;
