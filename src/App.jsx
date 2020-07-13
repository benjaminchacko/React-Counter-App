import React, {useState, useEffect, useRef, Fragment} from 'react';

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const App = () => {
  const [EScount, setESCount] = useState(0);
  const [EMScount, setEMSCount] = useState(0);
  const [WScount, setWSCount] = useState(0);
  const [WMScount, setWMSCount] = useState(0);

  const addOneES = () => setESCount(EScount + 1);
  const addOneWS = () => setWSCount(WScount + 1);

  const handleEMSChange = (e) => {
    e.preventDefault();
    setEMSCount(e.target.value);
  }

  const handleWMSChange = (e) => {
    e.preventDefault();
    setWMSCount((e.target.value));
  }

  const handleEMSSubmit = (e) => {
    e.preventDefault();
    setESCount(prevCount1 + parseInt(EMScount))
  }

  const handleWMSSubmit = (e) => {
    e.preventDefault();
    setWSCount(prevCount2 + parseInt(WMScount))
  }

  const prevCount1 = usePrevious(EScount)
  const prevCount2 = usePrevious(WScount)

    return (
      <Fragment>
        <h2>Enrolled Students: {EScount}</h2>
          <button onClick={addOneES}>
          Add One Enrolled Student
          </button> 
        <form>
          <h3>Add Multiple Enrolled Students:</h3> 
          <input onChange={handleEMSChange} />
          <button type="submit" onClick={handleEMSSubmit}>Submit</button>
      </form>
      
      <h2>Waitlisted Students: {WScount} </h2>
        <button onClick={addOneWS}>
        Add Waitlisted Student
      </button>
        <form onSubmit={handleWMSSubmit}>
          <h3>Add Multiple Waitlisted Students:</h3> 
          <input onChange={handleWMSChange} />
          <button type="submit">Submit</button>
      </form>
      </Fragment>
    )
}
 

export default App;
