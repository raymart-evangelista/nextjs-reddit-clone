export default function Button({ text, bgColor, textColor }) {
  return (
    <button className={`rounded-full ${bgColor} ${textColor} px-[40px] py-[8px] text-center font-bold text-sm`}>
      {text}
    </button>
  )
}