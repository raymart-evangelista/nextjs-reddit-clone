type ButtonProps = {
  text: string
  bgColor: string
  textColor: string
  width?: string
  height?: string
}

export default function Button({ text, bgColor, textColor, width, height }: ButtonProps) {

  if (width && height) {
    return (
      <button className={`rounded-full ${bgColor} ${textColor} ${width} ${height} text-center font-bold text-sm`}>
        {text}
      </button>
    )
  } else {
    return (
      <button className={`rounded-full ${bgColor} ${textColor} px-[40px] py-[8px] text-center font-bold text-sm`}>
        {text}
      </button>
    )
  }
}