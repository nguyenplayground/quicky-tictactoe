import Image from 'next/image'

const metaBoard = [
  ['0', '1', '2'],
  ['3', '4', '5'],
  ['6', '7', '8']
]

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

const Square = (
  content: any
) => {
  return (
    <div className="">
      1
    </div>
  )
}

const Board = () => {
  return (
    <>
      { 
        metaBoard.map(row => {
          row.map(square => {
            return (
              <div key={square} >
               <Square  
                content={square}
               />
              </div>
            )
          })
        }) 
      }
    </>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Board />
    </main>
  )
}
