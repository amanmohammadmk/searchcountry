import { Button } from 'react-bootstrap';
import './search.css';
import { useState } from 'react';






function App() {
  const [countryname, setCountryname] = useState("")
  const [countryData, setCountryData] = useState();

  console.log(countryname);
  const searchCountry = async () => {

    if (countryname) {
      let response = await fetch(`https://restcountries.com/v3.1/name/${countryname}?fullText=true`)
      response.json().then((res) => {
        console.log(res);
        setCountryData(res);
      })

    }
    else {
      alert("Please fill the form ")
    }





  }




  return (
    <>
      <div className='text-center mb-5' >
        <h1 className='text-center mt-5'>ENTER YOUR COUNTRY NAME</h1>
        <div className='align-center'>
          <input onChange={e => setCountryname(e.target.value)} style={{width:"600px", height:"40px"}} className="rounded mt-5" type="text" placeholder='Enter Country Name' /> 
           <Button onClick={searchCountry} className='btn btn-success ms-3'>SEARCH</Button>

        </div>
      </div>

      <div style={{width:"93%",backgroundColor:"black"}} className='output d-flex justify-content-center m-5 rounded'>

        { countryData &&(

          <div className='text-center d-flex justify-content-center flex-column p-5 rounded m-3' style={{ width: "450px", boxShadow: "2px 2px 2px 2px ",backgroundColor:"white",animationName:"mymove",animationDuration:"2s" }}>
            <div>
              <h2>{countryData[0]?.name.common}</h2>
              <h3>Capital : <span className='text-danger'>{countryData[0]?.capital}</span></h3>
              <h3 >Population :<span className='text-info'> {countryData[0]?.population}</span></h3>
              <h3>continents : {countryData[0]?.continents}</h3>
             
              <img src={countryData[0]?.flags.png} width={250} height={200} style={{boxShadow:"2px 2px 2px 2px"}} className='rounded'/>
            </div>
          </div>
        )
        }

      </div>
    </>
  );
}

export default App;