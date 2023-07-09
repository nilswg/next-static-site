import React from 'react'

const DEV_API = 'http://localhost:5000/api'

const getHero = async () => {
  const data = await fetch(`${DEV_API}/hero`).then((res) => res.json())
  return data
}

export default async function HeroPage(): Promise<React.ReactElement> {
  const { hero } = await getHero()
  return (
    <div>
      <h1>Hero</h1>
      <h2>{hero.name}</h2>
    </div>
  )
}