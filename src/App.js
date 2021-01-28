import React from 'react';
import './App.css';
import Profilecomponent from './Profile/Profilecomponent';
import img1 from './Profile/img1.png';

const App = () => {
  function handleName() {
    return (alert('Safa Ben Jemaa'));

  }
  return (
    <div className="App"> 
    <img style={{width:250,borderRadius:100}} src={img1} alt='photoprofile' />
      <Profilecomponent fullname='Safa Ben Jemaa' bio='Student' profession='Model' Name={handleName} >

       
      </Profilecomponent>

</div>
  );
}

export default App;
