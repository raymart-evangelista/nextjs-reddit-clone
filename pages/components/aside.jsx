// aside component will be shared across all pages

export default function Header({ children }) {
  return (
    <div>
      Part of aside
      {children}
    </div>
  )
}