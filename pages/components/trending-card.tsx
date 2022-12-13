import { useEffect, useState } from "react"

type TrendingCardProps = {
  title: string
  desc: string
  subreddit: string
  url: string
  background?: string
}

export default function TrendingCard({ title, desc, subreddit, url, background }: TrendingCardProps) {

  const [bg, setBg] = useState(background)
  const [bgImageStyle, setBgImageStyle] = useState<string>()

  function handleBackground() {
    if (bg) {
      setBgImageStyle(`background-image: url(${bg})`)
    } else {
      setBgImageStyle('')
    }
  }

  useEffect(() => {
    handleBackground()
  }, [bgImageStyle])

  return (    
    // <a href={url}>
    //   <div className="bg-fixed" style={{ backgroundImage: bgImageStyle }}>
    //     <h1>{title}</h1>
    //     <h2>{desc}</h2>
    //     <p>{subreddit}</p>
    //   </div>
    // </a>
    <a href={url}>
      <div className="p-2 flex flex-col justify-end gap-2 bg-cover bg-center bg-orangered w-64 h-48 rounded-lg" style={{ backgroundImage: `url(${background})` }}>
        <h1 className="text-white font-semibold">{title}</h1>
        <h2 className="text-white text-sm">{desc}</h2>
        <p className="text-white text-xs">{subreddit}</p>
      </div>
    </a>
  )
}