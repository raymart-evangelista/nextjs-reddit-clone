## Resources
- [React SVGR](https://react-svgr.com/playground/?icon=true)
- icons:
  - [ionicons](https://ionic.io/ionicons)
  - [feathericons](https://feathericons.com/)
  - [bootstrap icons](https://icons.getbootstrap.com/)
- [Extending TailwindCSS classes](https://stackoverflow.com/questions/65491795/how-can-i-specify-exactly-600px-width-in-tailwind-css)
- [Using calc() in tailwindCSS](https://stackoverflow.com/questions/65976223/how-to-use-calc-in-tailwind-css)
- [headless UI](https://headlessui.com/)
- [Force reloading Next.js page--in my project, after post submission, reload page](https://www.youtube.com/watch?v=ouEPm91TlTI)

- Typescript
  - [Component Prop](https://www.youtube.com/watch?v=qvdnTfyv7y8)
  - [Property 'username' does not exist on type 'User | AdapterUser'. Property 'username' does not exist on type 'User'.ts(2339)](https://stackoverflow.com/a/73259096/20161671)
    - [module augmentation](https://next-auth.js.org/getting-started/typescript#module-augmentation)

- PostgreSQL
  - [Set up local PostgreSQL Database on macOS](https://www.youtube.com/watch?v=wTqosS71Dc4)

- Prisma
  - [How to build a fullstack app with Next.js, Prisma, and PostgreSQL](https://vercel.com/guides/nextjs-prisma-postgres#step-5.-set-up-github-authentication-with-nextauth)
  - [Sam Meech-Ward: Youtube guide](https://www.youtube.com/watch?v=8DiT-LdYXC0)
  - [Sam Meech-Ward: Text guide](https://www.sammeechward.com/prisma-and-nextjs)
  - [Web Dev Simplified: Learn Prisma in 60 Minutes](https://www.youtube.com/watch?v=RebA5J-rlwg)
  - [splicing object from prisma model array](https://stackoverflow.com/questions/69364443/prisma-splice-item-from-array)

- NextAuth
  - [Code Commerce: Sign In With Google](https://www.youtube.com/watch?v=A5ZN--P9vXM&list=LL&index=2)
  - [prisma next-auth](https://github.com/hexrcs/prisma-next-auth)
  - [Youtube Walkthrough](https://www.youtube.com/watch?v=zB7u1r0tc6o)
  - [Official docs](https://next-auth.js.org/adapters/prisma)
  - [Production deployment with Vercel](https://next-auth.js.org/deployment#vercel)
  - [Configuration options](https://next-auth.js.org/configuration/options)
  - [Extending user object in session](https://blog.skorp.io/nextauth-and-prisma-extend-the-user-object-in-the-session)

- Choosing a backend
  - ended up using Postgres with Prisma ORM, database hosted on Supabase
  - [reddit post](https://www.reddit.com/r/reactjs/comments/sb8r9m/comment/htylso4/?utm_source=share&utm_medium=web2x&context=3)
  - [reddit post](https://www.reddit.com/r/nextjs/comments/uhz3gu/im_trying_to_choose_between_supabase_and/)

- Issues
  - unique usernames are case sensitive, meaning that `"MyUsername" !== "myusername"`
    - possible solutions:
      - don't allow uppercase usernames
      - have two columns in the database (one column serialized to a lowercase only or uppercase only format, the other column being the actual username)
    - similar issue with subreddit names
  - prop drilling posts from `index.tsx` to sub levels (so many middleware components to get to where it needs to be)

## Getting Started
First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
