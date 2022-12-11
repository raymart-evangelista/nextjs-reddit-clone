// aside component will be shared across all pages

export default function Aside({ children }) {

  const topicsClass = 'text-gray-500 font-bold text-sm'

  return (
    <div className="border border-red-500 w-270">
      <div className="border border-green-500 w-fit">
        <div className="flex flex-col">
          <h1 className={topicsClass}>FEEDS</h1>
          <h1>Home</h1>
          <h1>Popular</h1>
          <h1 className={topicsClass}>Recent</h1>
          <h1>r/svg</h1>
          <h1>r/rails</h1>
          <h1>r/nextjs</h1>
          <h1 className={topicsClass}>topics</h1>
          <h1>Gaming</h1>
          <h1>Sports</h1>
          <h1>Business, Economics, and Finance</h1>
          <h1>Crypto</h1>
          <h1>Television</h1>
          <h1>Celebrity</h1>
          <h1>More topics</h1>
        </div>
        <div className="flex flex-col">
          <h1></h1>
        </div>
      </div>
      {children}
    </div>
  )
}