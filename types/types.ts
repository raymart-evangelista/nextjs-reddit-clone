export type SvgProps = {
  width?: string
  height?: string
  viewBox?: string
  fill?: string
  stroke?: string
  className?: string
}

export type PostProps = {
  id: number
  title: string
  description: string
  subreddit: SubredditProps
  totalLikes: number
  totalDislikes: number
  totalComments: number
  createdAt: Date
  updatedAt: Date
  author: UserProps
  likedBy: UserProps[]
  dislikedBy: UserProps[]
  comments: CommentProps[]
}

export type CommentProps = {
  id: string
  message: string
  createdAt: Date
  updatedAt: Date
  userId: string
  postId: string
  parentId: string
}

export type Comment = {
  comment: CommentProps
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

export type SubredditProps = {
  id: string
  name: string
  topicId: string
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