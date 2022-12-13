export default function MainArea() {
  return (
    <div className="fixed left-[270px] h-full w-full bg-reddit-bg-blue">
      <div className="">
        <div className="flex flex-col border border-red-500">
          <h1>trending today</h1>
          <div className="flex flex-row">
            <div>card 1</div>
            <div>card 2</div>
            <div>card 3</div>
            <div>card 4</div>
          </div>
        </div>
        <div className="flex flex-col justify-center border border-red-500">
          <h1>popular posts</h1>
        </div>
      </div>
      
    </div>
  )
}