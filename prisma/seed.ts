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
          title: 'I am new to Genshin Impact, does anyone know what this is?',
          description: 'It seems to look like a floating circle. Do not touch it!',
          subredditId: 'subreddit1'
        }
      ]
    },
  }
]

async function main() {
  console.log(`***** Start Seeding... *****`)
  for (const t of topicData) {
    const topic = await prisma.topic.create({
      data: t,
    })
    console.log(`Created topic with id: ${topic.id}`)
  }
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
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