import type { NextPage } from 'next'
import { PlayList } from '../components/PlayList'

const Index: NextPage = () => {
  return (
    <div className="w-screen h-screen bg-peanuts1">
      <h1>Youtube</h1>
      <PlayList />
    </div>
  )
}

export default Index
