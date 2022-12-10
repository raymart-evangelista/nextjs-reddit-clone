export default function Search({width}) {

  return (
  <form>
    <div className={width}>
      <div className="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg width="20px" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><title id="title">Search Icon</title><desc id="desc">A magnifying glass icon.</desc><g class="search-path" fill="none" stroke="#848F91"><path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4"/><circle cx="8" cy="8" r="7"/></g></svg>
        </div>
        <input type="text" id="first_name" class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-full hover:border-blue-500 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-10" placeholder="Search Reddit" required />
      </div>
    </div>
  </form>
  )
}