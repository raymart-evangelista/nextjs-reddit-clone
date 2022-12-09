// header component will be shared across all pages

export default function Header({ children }) {
  return (
    <div>
      Part of header
      {children}
    </div>
  )
}