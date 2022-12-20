import { useRouter } from "next/router"

export default function Subreddit() {
  const router = useRouter()
  const subredditName = router.query.subredditName
  return (
    <>
    {subredditName}
    </>
  )
}