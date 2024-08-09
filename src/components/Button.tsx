interface ButtonProps {
  onClick: () => void
  children: React.ReactNode
}

export function Button({ onClick, children }: ButtonProps) {
  return (
    <button className="bg-gray-400 p-1" onClick={onClick}>
      {children}
    </button>
  )
}
