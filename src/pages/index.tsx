import Link from 'next/link'
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <section className="intro">
      <div>
        <a href="http://opentable.com/" target="_blank">
          <img src="/opentable-logo.png" className="logo" alt="Opentable logo" />
        </a>
      </div>
      <h1>
        <Typewriter
          options={{
            strings: ['Samadhan', "Hackathon"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <Link href="/protest">
        <button className='glowing-btn'>
          <span className='glowing-txt'>De
            <span className='faulty-letter'>m
            </span>
          o</span>
        </button>
      </Link>
      
    </section>
  )
}
