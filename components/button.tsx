import Link from "next/link"

type ButtonProps = {
  text: string
  bgColor: string
  textColor: string
  width?: string
  height?: string
  link?: string
}

export default function Button({ text, bgColor, textColor, width, height, link }: ButtonProps) {

  if (link) {
    if (width && height) {
      return (
        <Link href={link}>
          <button className={`rounded-full ${bgColor} ${textColor} ${width} ${height} text-center font-bold text-sm w-full`}>
            {text}
          </button>
        </Link>
      )
    } else {
      return (
        <Link href={link}>
          <button className={`rounded-full ${bgColor} ${textColor} px-[40px] py-[8px] text-center font-bold text-sm w-full`}>
            {text}
          </button>
        </Link>
      )
    }
  } else {
    if (width && height) {
      return (
        <button className={`rounded-full ${bgColor} ${textColor} ${width} ${height} text-center font-bold text-sm w-full`}>
          {text}
        </button>
      )
    } else {
      return (
        <button className={`rounded-full ${bgColor} ${textColor} px-[40px] py-[8px] text-center font-bold text-sm w-full`}>
          {text}
        </button>
      )
    }
  }
}