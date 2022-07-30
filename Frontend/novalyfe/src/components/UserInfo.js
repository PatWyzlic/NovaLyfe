import { useState, useEffect } from "react";
import axios from "axios";

function UserInfo({ user }) {

  const [profile, setProfile] = useState([])
  
  function getData(){
      const url = 'http://127.0.0.1:8000/api/profile/'
      axios.get(url)
      .then(response => 
        setProfile(response.data));
  }
  
  useEffect(() => {
      getData();
  }, []);


    return (
      <div>
        <h1>Hello: {user.username}</h1>
        {console.log(profile)}
      </div>
    );
  }
  
  export default UserInfo;
