import { useState, ChangeEvent, KeyboardEvent } from "react"

export default function Demo({count, mainService, setPayload, isSaved}) {
  const [formFields, setFormFields] = useState({
    mongo: "no",
    postgres: "no",
    kafka: "no",
    redis: "no"
  });
  const [service, setService] = useState("");
  const [profile, setProfile] = useState("");
  const [mongoDbName, setMongoDbName] = useState("");
  const [postgresDbName, setPostgresDbName] = useState("");
  const [kafkaDbName, setKafkaDbName] = useState("");
  const [redisDbName, setRedisDbName] = useState("");


  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    setFormFields({
      ...formFields,
      [evt.target.name]: evt.target.value
    });
  }

  function handleServiceInput(e: ChangeEvent<HTMLInputElement>) {
    const serviceName = e.target.value;
    setService(serviceName)
  }

  function handleProfileInput(e: ChangeEvent<HTMLInputElement>) {
    const profileName = e.target.value;
    setProfile(profileName)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  function updateMongoDbName(e) {
    setMongoDbName(e.target.value)
  }

  function updatePostgresDbName(e) {
    setPostgresDbName(e.target.value)
  }

  function updateKafkaDbName(e) {
    setKafkaDbName(e.target.value)
  }

  function updateRedisDbName(e) {
    setRedisDbName(e.target.value)
  }

  const updatePayload = () => {
    const serviceObject = {
      service: service,
      mongo: {
        required: formFields.mongo == "yes",
        name: mongoDbName ? mongoDbName : ""
      },
      postgres: {
        required: formFields.postgres == "yes",
        name: postgresDbName ? postgresDbName : ""
      },
      kafka: {
        required: formFields.kafka == "yes",
        name: kafkaDbName ? kafkaDbName : ""
      },
      redis: {
        required: formFields.redis == "yes",
        name: redisDbName ? redisDbName : ""
      },
      profile: profile,
    }

    setPayload(serviceObject);
  }

  return (
    <section className="demo">
      <form action='' method='get' className='demo-form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='service'>Service Name</label>
          <input 
            id='service' 
            name='service' 
            type='text'
            value={service}
            placeholder="restaurant-menu-service"
            onChange={(e) => handleServiceInput(e)}
          />
        </div>


        <div className='form-row profile'>
          <label htmlFor='service'>Profile Name</label>
          <input 
            id='profile' 
            name='profile' 
            type='text'
            value={profile}
            placeholder="profile"
            onChange={(e) => handleProfileInput(e)}
          />
        </div>

        <fieldset className='radio-form-row'>
          <legend>Is Mongo DB required?</legend>
          <input 
            id={`db-${count}-yes`}
            name='mongo'
            type='radio'
            value='yes'
            checked={formFields.mongo === 'yes'}
            onChange={handleChange}
          />
          <label htmlFor={`db-${count}-yes`} className='radio-label'>Yes</label>
          <input 
            id={`db-${count}-no`}
            name='mongo'
            type='radio'
            value='no'
            checked={formFields.mongo === 'no'}
            onChange={handleChange}
          />
          <label htmlFor={`db-${count}-no`} className='radio-label'>No</label>
        </fieldset>

        {formFields.mongo === "yes" && (
          <div className='form-row db-name'>
            <input 
              id='mongoDbName' 
              name='mongoDbName' 
              type='text'
              value={mongoDbName}
              placeholder="db name"
              onChange={(e) => updateMongoDbName(e)}
            />
          </div>
        )}

        <fieldset className='radio-form-row'>
          <legend>Is Postgres DB required?</legend>
          <input 
            id={`db-${count}-yes`}
            name='postgres'
            type='radio'
            value='yes'
            checked={formFields.postgres === 'yes'}
            onChange={handleChange}
          />
          <label htmlFor={`db-${count}-yes`} className='radio-label'>Yes</label>
          <input 
            id={`db-${count}-no`}
            name='postgres'
            type='radio'
            value='no'
            checked={formFields.postgres === 'no'}
            onChange={handleChange}
          />
          <label htmlFor={`db-${count}-no`} className='radio-label'>No</label>
        </fieldset>

        {formFields.postgres === "yes" && (
          <div className='form-row db-name'>
            <input 
              id='postgresDbName' 
              name='postgresDbName' 
              type='text'
              value={postgresDbName}
              placeholder="db name"
              onChange={(e) => updatePostgresDbName(e)}
            />
          </div>
        )}


        <fieldset className='radio-form-row'>
          <legend>Is kafka required?</legend>
          <input 
            id={`db-${count}-yes`}
            name='kafka'
            type='radio'
            value='yes'
            checked={formFields.kafka === 'yes'}
            onChange={handleChange}
          />
          <label htmlFor={`db-${count}-yes`} className='radio-label'>Yes</label>
          <input 
            id={`db-${count}-no`}
            name='kafka'
            type='radio'
            value='no'
            checked={formFields.kafka === 'no'}
            onChange={handleChange}
          />
          <label htmlFor={`db-${count}-no`} className='radio-label'>No</label>
        </fieldset>

        {formFields.kafka === "yes" && (
          <div className='form-row db-name'>
            <input 
              id='kafkaDbName' 
              name='kafkaDbName' 
              type='text'
              value={kafkaDbName}
              placeholder="db name"
              onChange={(e) => updateKafkaDbName(e)}
            />
          </div>
        )}

        <fieldset className='radio-form-row'>
          <legend>Is Redis required?</legend>
          <input 
            id={`db-${count}-yes`}
            name='redis'
            type='radio'
            value='yes'
            checked={formFields.redis === 'yes'}
            onChange={handleChange}
          />
          <label htmlFor={`db-${count}-yes`} className='radio-label'>Yes</label>
          <input 
            id={`db-${count}-no`}
            name='redis'
            type='radio'
            value='no'
            checked={formFields.redis === 'no'}
            onChange={handleChange}
          />
          <label htmlFor={`db-${count}-no`} className='radio-label'>No</label>
        </fieldset>

        {formFields.redis === "yes" && (
          <div className='form-row db-name'>
            <input 
              id='redisDbName' 
              name='redisDbName' 
              type='text'
              value={redisDbName}
              placeholder="db name"
              onChange={(e) => updateRedisDbName(e)}
            />
          </div>
        )}

          <button className="cta save" onClick={updatePayload}>
            Create Testing Environment
          </button>
      </form>
    </section>
  )
}
