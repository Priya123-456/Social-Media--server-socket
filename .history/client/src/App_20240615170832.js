//import Messanger from "./components/Messanger";
//import AccountProvider from "./components/Context/AccountProvider"

//import { GoogleOAuthProvider } from "@react-oauth/google";

//function App() {

 // const clientId='323892853590-jsb3e1ldvf31m4cav69lhrrh8h5ibb0n.apps.googleusercontent.com';
  //return (
    //<GoogleOAuthProvider clientId={clientId}>
      //<AccountProvider>
     //<Messanger/>
    // </AccountProvider>
    //</GoogleOAuthProvider>
    
 // );
//}

//export default App;
import React, { useState } from 'react';
import axios from 'axios';
//import './App.css';

const App = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchOffers = async () => {
    setLoading(true);
    setError(null);

    let data = JSON.stringify({
      "data": {
        "slices": [
          {
            "origin": "NYC",
            "destination": "ATL",
            "departure_date": "2024-06-21"
          },
          {
            "origin": "ATL",
            "destination": "NYC",
            "departure_date": "2024-07-21"
          }
        ],
        "passengers": [
          {
            "type": "adult"
          }
        ],
        "cabin_class": "business"
      }
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://api.duffel.com/air/offer_requests',
      headers: { 
        'Accept-Encoding': 'gzip', 
        'Accept': 'application/json', 
        'Duffel-Version': 'v1', 
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer duffel_test_1EmVBdf6vPTYidyfaaKUZKcCIcKP8fKAy0Gxup_TN0f'
      },
      data: data
    };

    try {
      const response = await axios.request(config);
      setOffers(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Flight Offer Requests</h1>
      <button onClick={fetchOffers}>Fetch Offers</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div id="offer-results">
        {offers.length > 0 && (
          <pre>{JSON.stringify(offers, null, 2)}</pre>
        )}
      </div>
    </div>
  );
};

export default App;
