import Image from 'next/image'
import testImage from 'public/images/paintEx.jpg'
import Navbar from '../app/Navbar'

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col justify-center p-24">
      <header className="text-3xl font-semibold mb-6 text-left">Ricky's Painting</header>
    <Navbar/>
    <div className="flex items-center justify-center flex-col">
    <h1 className="text-4xl font-montserrat-bold mb-6 animate-fade-in border-4 border-customGreen p-4 mt-6">
      Quality|Reliable|Affordable
    </h1>
    <div className="mb-32 grid lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4">
        <div className="lg:col-span-3">
          <p className="mb-4 max-w-[40ch] border-4 border-solo border-customGreen text-center opacity-70 p-10 py-20 " >
            At our house painting business, we provide high-quality painting services to transform your space. Whether you're looking to freshen up your home's exterior or update your interior, our team of skilled painters is here to bring your vision to life.
          </p>
        </div>
        <div className="lg:col-span-1 flex justify-center items-center" style={{ width: '500px', height: '350px' }}>
          <Image src={testImage} alt="Your Image"  className='w-90 mr-20'/>
        </div>
      </div>
      </div>
    </main>
    </>
  )
}
