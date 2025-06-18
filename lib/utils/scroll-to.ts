export const scrollTo = (id: string) => {
  const spaceBox = document?.querySelector(id) as HTMLElement
  spaceBox?.scrollIntoView({ block: 'center', behavior: 'smooth' })
}
