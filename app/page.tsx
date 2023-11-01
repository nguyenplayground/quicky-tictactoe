import Image from 'next/image'

const CircleIcon = () => {
  return (      
    <Image
      src="/assets/circle.png"
      alt="Vercel Logo"
      className="dark:invert"
      width={100}
      height={24}
      priority
    />
  )
}

const CrossIcon = () => {
  return (
    <Image
      src="/assets/cross.png"
      alt="Vercel Logo"
      className="dark:invert"
      width={100}
      height={24}
      priority
    />
  )
}

const Board = () => {
  return (
    <div></div>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CircleIcon />
      <CrossIcon />
    </main>
  )
}
