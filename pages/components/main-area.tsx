import TrendingCard from "./trending-card"
import PostCard from "./post-card"

export default function MainArea() {
  return (
    // <div className="fixed left-[270px] h-full w-[calc(100vw-270px)]  bg-reddit-bg-blue">
    <div className="fixed left-[270px] h-[calc(100vh-48px)] w-[calc(100vw-270px)] overflow-x-hidden overflow-y-scroll bg-reddit-bg-blue">
      <div className="">
        <div className="flex flex-col items-center mt-2 gap-2">
          <h1 className="font-semibold text-sm">Trending today</h1>
          <div className="flex flex-row gap-3 justify-center">
            <TrendingCard 
              title="Hedge Fund Housing Bill" desc="Senator Merkley Introduces Legislation to Ban Hedge Fund Ownership of Residential Housing"
              subreddit="r/politics" 
              url="https://www.merkley.senate.gov/news/in-the-news/senator-merkley-introduces-legislation-to-ban-hedge-fund-ownership-of-residential-housing"
              background="" />
            <TrendingCard 
              title="Ticketmaster" 
              desc="Ticketmaster is in hot water — again — and facing a fine after an 'unprecedented' number of people were sold fake tickets to a Bad Bunny concert" 
              subreddit="r/technology" 
              url="https://www.businessinsider.com/ticketmaster-under-fire-faces-fine-selling-fake-bad-bunny-tickets-2022-12"
              background="https://i.insider.com/638511f98ac94b0019bab40b?width=1000&format=jpeg&auto=webp" />
            <TrendingCard 
              title="Elon Musk" 
              desc="Elon Musk booed by crowd after Dave Chappelle brings him on stage at comedy gig"
              subreddit="r/news" 
              url="https://www.cnbc.com/2022/12/12/elon-musk-booed-by-crowd-at-dave-chapelle-comedy-gig.html"
              background="https://image.cnbcfm.com/api/v1/image/107143907-1667302703959-gettyimages-1438052951-5b2a3796_7c33302a-75fd-4299-b827-54c5f14c0449.jpeg?v=1670848478&w=630&h=354&ffmt=webp&vtcrop=y" />
            <TrendingCard 
              title="Golden Globe Nominations" 
              desc="Paddy Considine's Golden Globes Snub For 'House Of The Dragon' Is A Crime" 
              subreddit="r/television" 
              url="https://www.dexerto.com/tv-movies/house-of-the-dragon-fans-say-paddy-considine-golden-globes-snub-is-a-crime-2008889/"
              background="https://www.dexerto.com/_next/image/?url=https%3A%2F%2Feditors.dexerto.com%2Fwp-content%2Fuploads%2F2022%2F12%2F12%2Fhouse-of-the-dragon-paddy-considine.jpg&w=640&q=75" />
          </div>
        </div>
        <div className="flex flex-col items-center mt-4">
          <h1 className="font-semibold text-sm">Popular posts</h1>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center mt-4 mb-8">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
      
    </div>
  )
}