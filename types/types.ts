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

export type Post = {
  post: PostProps
}

export type PostsListProps = {
  posts: PostProps[],
}
export type UserProps = {
  id: string
  name: string
  username: string
  email: string
  image: string
}

export type User = {
  user: UserProps
}

// export type PostPropsRefactored = {
//   post: {
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