import { useState, useEffect } from "react";
import Demo from "../../components/demo";
import Success  from "../../components/success";

export default function DemoPage() {
  const [serviceCount, setServiceCount] = useState(1);
  const [payload, setPayload] = useState({});
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if(payload?.service?.length > 0) {

      const body = JSON.parse(JSON.stringify(payload));
      body.dependencies = [];
      var raw = JSON.stringify(body);

      var requestOptions = {
        method: 'POST',
        body: raw,
      };

      fetch("http://localhost:3000/compose", requestOptions)
        .then(response => response.text())
        .then(result => {
          if(result.success) {
            setSuccess(true)
          }
          
        })
        .catch(error => console.log('error', error));
    }
  }, [payload])

  return (
    <section style={{ background: "#22272f"}}>
      {success && <Success />} 
      <h1 className="heading">ProTest</h1>
      <div className="dependency">
        {[...Array(serviceCount)].map( (count, i) => (
          <Demo count={i} mainService={count === 1} setPayload={setPayload} isSaved={payload?.service?.length > 0}/>
        ))}
        <div>
          <button className="cta" onClick={() => setServiceCount(serviceCount + 1)}>
            Add dependency
          </button>
        </div>
      </div>
    </section>
  )
}
