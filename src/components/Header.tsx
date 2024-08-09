type HeaderProps = { title: string }

export function Header({ title }: HeaderProps) {
  return <h1 className="text-5xl">{title}</h1>
}
