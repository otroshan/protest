import { useState, useEffect } from "react";
import Demo from "../../components/demo";
import Success  from "../../components/success";

export default function DemoPage() {
  const [serviceCount, setServiceCount] = useState(1);
  const [payload, setPayload] = useState({});

  useEffect(() => {
    if(payload?.service?.length > 0) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const body = JSON.parse(JSON.stringify(payload));
      body.dependencies = [];
      var raw = JSON.stringify(body);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
        "ngrok-skip-browser-warning": true
      };

      fetch("https://9e8c-45-112-53-194.in.ngrok.io/compose", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

  }, [payload])
  return (
    <section style={{ background: "#22272f"}}>
      <Success />
      <h1 className="heading">ProTest</h1>
      <div className="dependency">
        {[...Array(serviceCount)].map( (count, i) => (
          <Demo count={i} mainService={count === 1} setPayload={setPayload} isSaved={payload?.service?.length > 0}/>
        ))}
        <div>
          <button className="cta" onClick={() => setServiceCount(serviceCount + 1)}>
            Add dependency
          </button>
          <button className="cta" onClick={() => setServiceCount(serviceCount + 1)}>
            Create Testing Environment
          </button>
        </div>
      </div>
    </section>
  )
}
