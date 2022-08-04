import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Byte 42</title>
        <meta name="description" content="Byte 42" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 style={{paddingLeft: '2rem', paddingTop: '1rem'}}>
          Byte42
        </h1>

        <p style={{paddingLeft: '2rem', fontSize: '1.25rem', paddingTop: '1rem'}}>
          Making the world a better place through open source.
        </p>

        <p style={{paddingLeft: '2rem', paddingTop: '0.25rem', color: '#555'}}>
          All source code released under the MIT license.
        </p>

        <p style={{paddingLeft: '2rem', paddingTop: '2rem'}}>
          <span style={{color: 'blue'}}>
            <a href="https://github.com/byte-42/kgraph" rel="noreferrer target="_blank">kgraph</a>
          </span> - yet another graph based note taking app
        </p>

        <p style={{paddingLeft: '2rem', paddingTop: '0.25rem'}}>
          <span style={{color: 'blue'}}>
            <a href="https://github.com/byte-42/redis-explorer" rel="noreferrer target="_blank">redis explorer</a>
          </span> - a lightweight redis gui to quickly search through keys
        </p>

        <p style={{paddingLeft: '2rem', paddingTop: '3rem'}}>
          Made by 
          <span style={{color: 'blue'}}>
            <a href="https://www.linkedin.com/in/anoop-m-d-868099100/" rel="noreferrer target="_blank">&nbsp;&nbsp;anoop</a>
          </span>
        </p>
      </main>
    </div>
  )
}
