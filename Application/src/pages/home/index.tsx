import { FC, useEffect, useState } from "react"
import styles from './styles.module.scss'
import PoolCard from "../../components/poolCard"
import { Pool } from "../../types"
import Header from "../../components/header"

const Home: FC = () => {
  const [pools, setPools] = useState<Pool[]>()

  useEffect(() => {
    setPools([
      {
        network: "Ethereum",
        pairs: ["WETH", "ZENIQ"],
        tvl: '8600',
        apy: '110'
      },
      {
        network: "Polygon",
        pairs: ["WETH", "ZENIQ"],
        tvl: '1500',
        apy: '85'
      },
      {
        network: "Ethereum",
        pairs: ["WETH", "ZENIQ"],
        tvl: '120.000',
        apy: '45'
      },
      {
        network: "Ethereum",
        pairs: ["WETH", "ZENIQ"],
        tvl: '672.762',
        apy: '45'
      }
    ])
  }, [])

  return (
    <div className={styles.home}>
      <Header />

      <div className={styles.title}>
        <h1>Pools</h1>
        <p>Stake ZENIQ to earn rewards</p>
      </div>

      <div className={styles.divider}/>

      <div className={styles.content}>
        {
          pools && pools.map((pool) => <PoolCard data={pool} />)
        }
      </div>
    </div>
  )
}

export default Home