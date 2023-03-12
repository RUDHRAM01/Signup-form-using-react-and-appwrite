import React from 'react'
import { useHistory } from 'react-router-dom'
const Home = () => {
  const history = useHistory()
    return (
      <>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100vh',
          color: 'ButtonHighlight',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <h6 style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80%', height: '15vh', backgroundColor: 'black',
            maxWidth:'300px'
          }}>
            Signup form using Appwrite & React
          </h6>
          <button onClick={()=>history.push("/signup")} style={{ color: 'white', backgroundColor: 'rgb(24, 119, 242)', width : '100px',height:'5vh',border:'2px solid white'}}>
            Signup
          </button>
         </div>
      </>
    )
}

export default Home
