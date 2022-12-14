import SearchSvg from "./svg/search"

export default function Search({width}) {

  return (
  <form>
    <div className={width}>
      <div className="relative">
        <div class="absolute inset-y-0 left-1 flex items-center pl-3 pointer-events-none">
          <SearchSvg className="text-gray-400" />
        </div>
        <input type="text" id="first_name" className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-full hover:border-blue-500 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-10" placeholder="Search Reddit" required />
      </div>
    </div>
  </form>
  )
}