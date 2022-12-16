import Header from "../components/header"
import Aside from "../components/aside"
import MainArea from '../components/main-area'

export default function Popular({ posts }) {

  return (
    <div className="h-full">
      <Header>
      </Header>
      <div className="fixed top-12 h-full flex overflow-hidden">
        <Aside />
        <MainArea posts={posts} />
      </div>
    </div>
  )

}