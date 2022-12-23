export type SvgProps = {
  width?: string
  height?: string
  viewBox?: string
  className?: string
}

export type PostProps = {
  id: number
  title: string
  description: string
  subreddit: string
  totalLikes: number
  totalDislikes: number
  totalComments: number
  createdAt: Date
  updatedAt: Date
  author: UserProps
}

export type UserProps = {
  id: string
  name: string
  username: string
  email: string
  image: string
}

export type PostsListProps = {
  posts: PostProps[],
}


// export type PostsListProps = {
//   posts: {
//     id: number
//     title: string
//     description: string
//     subreddit: string
//     totalLikes: number
//     totalDislikes: number
//     totalComments: number
//     createdAt: Date
//     updatedAt: Date
//     author: UserProps
//   }
// }