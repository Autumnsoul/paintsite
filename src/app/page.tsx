import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="text-3xl font-semibold mb-6">Ricky's Painting</header>
        <h1 className="text-4xl font-semibold mb-6">Welcome to Our House Painting Business</h1>
      
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <p className="mb-4 max-w-[30ch] text-sm opacity-70">
          At our house painting business, we provide high-quality painting services to transform your space. Whether you're looking to freshen up your home's exterior or update your interior, our team of skilled painters is here to bring your vision to life.
        </p>
      
      </div>
    </main>
  )
}
