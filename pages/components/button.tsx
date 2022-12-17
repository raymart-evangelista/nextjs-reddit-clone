type ButtonProps = {
  text: string
  bgColor: string
  textColor: string
  width?: string
  height?: string
  handleClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({ text, bgColor, textColor, width, height, handleClick }: ButtonProps) {

  if (width && height) {
    return (
      <button onClick={handleClick} className={`rounded-full ${bgColor} ${textColor} ${width} ${height} text-center font-bold text-sm`}>
        {text}
      </button>
    )
  } else {
    return (
      <button onClick={handleClick} className={`rounded-full ${bgColor} ${textColor} px-[40px] py-[8px] text-center font-bold text-sm`}>
        {text}
      </button>
    )
  }
}