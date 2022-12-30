import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()


const topicData: Prisma.TopicCreateInput[] = [
  {
    id: 'topic1',
    name: 'gaming',
    subreddits: {
      create: [
        {
          id: 'subreddit1',
          name: 'genshinimpact',
        },
        {
          id: 'subreddit2',
          name: 'valheim'
        },
        {
          id: 'subreddit3',
          name: 'minecraft'
        }
      ]
    }
  },
  {
    id: 'topic2',
    name: 'sports',
    subreddits: {
      create: [
        {
          id: 'subreddit4',
          name: 'nfl'
        },
        {
          id: 'subreddit5',
          name: 'nba'
        },
        {
          id: 'subreddit6',
          name: 'lakers'
        }
      ]
    }
  }, 
  {
    id: 'topic3',
    name: 'finance',
    subreddits: {
      create: [
        {
          id: 'subreddit7',
          name: 'finance'
        },
        {
          id: 'subreddit8',
          name: 'businesshub'
        }
      ]
    }
  },
  {
    id: 'topic4',
    name: 'crypto',
    subreddits: {
      create: [
        {
          id: 'subreddit9',
          name: 'bitcoin'
        },
        {
          id: 'subreddit10',
          name: 'cryptocurrency'
        }
      ]
    }
  },
  {
    id: 'topic5',
    name: 'television',
    subreddits: {
      create: [
        {
          id: 'subreddit11',
          name: 'thebachelor'
        }
      ]
    }
  },
  {
    id: 'topic6',
    name: 'celebrity',
    subreddits: {
      create: [
        {
          id: 'subreddit12',
          name: 'dojacat'
        },
        {
          id: 'subreddit13',
          name: 'popculturechat'
        }
      ]
    }
  },
  {
    id: 'topic7',
    name: 'anime',
    subreddits: {
      create: [
        {
          id: 'subreddit14',
          name: 'goodanimememes'
        },
        {
          id: 'subreddit15',
          name: 'animeirl'
        }
      ]
    }
  },
  {
    id: 'topic8',
    name: 'fashion',
    subreddits: {
      create: [
        {
          id: 'subreddit16',
          name: 'malefashionadvice'
        },
        {
          id: 'subreddit17',
          name: 'streetwear'
        }
      ]
    }
  }
]

const userData: Prisma.UserCreateInput[] = [
  {
    id: 'user1',
    name: 'Raymart Evangelista',
    username: 'raymartevangelista',
    createdPosts: {
      create: [
        {
          id: 1,
          title: 'I am new to Genshin Impact, does anyone know what this is?',
          description: 'It seems to look like a floating circle. Do not touch it!',
          subredditId: 'subreddit1'
        }
      ]
    },
  },
  // {
  //   id: 'user2',
  //   name: 'Doja Cat',
  //   username: 'dojacat',
  //   createdPosts: {
  //     create: [
  //       {
  //         title: 'This is Doja Cat, AMA! Ask me anything related to my music, my current album (Planet Her, out now!)',
  //         description: 'Will be answering questions for about two hours. I will try my best to get to everyone.. Sorry if I do not get to you..',
  //         subredditId: 'subreddit12'
  //       },
  //       {
  //         title: "WDYWT: My outfit from today's concert was pretty fire. What do you guys think?",
  //         description: "Was really feeling it when I performed 'Get Into It (Yuh)'",
  //         subredditId: 'subreddit17'
  //       }
  //     ]
  //   }
  // }
]

async function main() {
  console.log(`***** Deleting previous data... *****`)
  await prisma.topic.deleteMany()
  await prisma.user.deleteMany()

  console.log(`***** Start Seeding... *****`)
  for (const t of topicData) {
    const topic = await prisma.topic.create({
      data: t,
    })
    console.log(`Created topic with id: ${topic.id}`)
  }
  // for (const u of userData) {
  //   const user = await prisma.user.create({
  //     data: u,
  //   })
  //   console.log(`Created user with id: ${user.id}`)
  // }
  const raymart = await prisma.user.create({
    data:  
    {
      name: 'Raymart Evangelista',
      username: 'raymartevangelista',
      createdPosts: {
        create: [
          {
            id: 1,
            title: 'I am new to Genshin Impact, does anyone know what this is?',
            description: 'It seems to look like a floating circle. Do not touch it!',
            subredditId: 'subreddit1'
          }
        ]
      },
    },
  })
  console.log(`Created user with id: ${raymart.id}`)

  const kyle = await prisma.user.create({
    data:  
    {
      name: 'Kyle',
      username: 'kyle',
      createdPosts: {
        create: [
          {
            id: 2,
            title: "WDYWT: My outfit from today's concert was pretty fire. What do you guys think?",
            description: "Was really feeling it when I performed 'Get Into It (Yuh)'",
            subredditId: 'subreddit17'
          }
        ]
      },
    },
  })
  console.log(`Created user with id: ${kyle.id}`)

  const comment1 = await prisma.comment.create({
    data: {
      message: 'I am a root comment',
      userId: raymart.id,
      postId: 1,
    }
  })
  console.log(`Created comment with id: ${comment1.id}`)

  const comment2 = await prisma.comment.create({
    data: {
      parentId: comment1.id,
      message: 'I am a nested comment',
      userId: kyle.id,
      postId: 1,
    }
  })
  console.log(`Created comment with id: ${comment2.id}`)

  const comment3 = await prisma.comment.create({
    data: {
      message: 'I am another root comment',
      userId: kyle.id,
      postId: 1,
    }
  })
  console.log(`Created comment with id: ${comment3.id}`)

  console.log(`***** Seeding Finished... *****`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })