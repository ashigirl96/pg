import type { NextPage } from 'next'
import { PlayList } from '../components/PlayList'

const Index: NextPage = () => {
  return (
    <div>
      <h1>Youtube</h1>
      <PlayList />
    </div>
  )
}

export default Index
