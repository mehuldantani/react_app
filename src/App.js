import axios from 'axios';

import logo from './logo.svg';
import Card from './components/card';
import Counter from './components/Counter';

import './App.css';
import { useEffect, useState } from 'react';


let url1 = "https://images.pexels.com/photos/569390/pexels-photo-569390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
let url2 = "https://images.pexels.com/photos/3532553/pexels-photo-3532553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

function App() {

  const [details, setDetails] = useState({})

  const fetchDetails = async () => {
    const {data} = await axios.get('https://randomuser.me/api/')
    //console.log(data);
    const details = data.results[0]
    setDetails(details)
    console.log(details);
  }
  
  useEffect(() => {
    fetchDetails();
  },[])

  return (
    <div className="App">
    <Card details ={details}/>
    </div>
  );
}

export default App;
