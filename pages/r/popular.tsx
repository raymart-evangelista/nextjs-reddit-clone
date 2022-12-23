import Header from "../../components/header"
import Aside from "../../components/aside"
import MainArea from '../../components/main-area'
import { PostsListProps } from "../../types/types"

export default function Popular({ posts }: PostsListProps) {
  return (
    <div className="h-full">
      <Header />
      <div className="fixed top-12 h-full flex overflow-hidden">
        <Aside />
        <MainArea posts={posts} />
      </div>
    </div>
  )

}