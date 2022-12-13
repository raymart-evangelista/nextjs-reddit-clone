export default function PostCard({}) {
  return (
    <>
      <div className="arrows-area">
        <div className="up arrow"></div>
        <p>21.9K</p>
        <div className="down arrow"></div>
      </div>
      <div className="main-content">
        <div className="top-area justify between">
          <div>
            <div className="subreddit name"></div>
            <div className="posted by ___ hours ago"></div>
          </div>
          <div className="join button"></div>
        </div>
        <div className="bottom content of main area">
          <div className="title"></div>
          <div className="photo if photo"></div>
          <div className="bottom content of bottom content">
            <div className="comments">
              <div className="icon"></div>
              <div className="comment stats"></div>
            </div>
            <div className="share">
              <div className="icon"></div>
              <div className="share text"></div>
            </div>
            <div className="save">
              <div className="icon"></div>
              <div className="save text"></div>
            </div>
            <div className="three dots"></div>

          </div>
        </div>
      </div>
    </>
  )
}