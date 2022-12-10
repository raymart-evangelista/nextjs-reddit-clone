// aside component will be shared across all pages

export default function Aside({ children }) {
  return (
    <div>
      Part of aside
      {children}
    </div>
  )
}