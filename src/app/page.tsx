import Image from 'next/image'
import PocketBase from 'pocketbase'

export default async function Home() {

  const pb = new PocketBase('https://vienna-sausage-gang.pockethost.io');

  const resultList = await pb.collection('users').getList(1, 50, {});

  console.log(resultList);

  return (
    <div className="bg-orange-50">
      <Image src="../../public/patterns/pattern.svg" height={100} width={100} alt={''} />
      <div className="h-screen grid content-between">
        <div className='p-8 flex flex-row justify-between'>
          <p>René Schultheis</p>
          <nav>
            <ul className='flex flex-row space-x-8'>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/projects/dasschaltwerk">Projects</a>
              </li>
              <li>
                <a href="/interests">Interests</a>
              </li>
              <li>
                <a href="/agfa-photo">Agfa Photo</a>
              </li>
              <li>
                <a href="https://vienna-sausage-guide.vercel.app">Vienna Sausage Guide</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='p-8 flex flex-grow justify-between'>
          <div className='flex flex-grow flex-1'>
            <div className='my-auto'>
              <h1 className='text-4xl pb-4'>{"Hey you, I'm René Schultheis"}</h1>
              <p className='text-2xl py-2'>{"Nope, I don't live in Berlin, but still I'm a full grown Software Engineer."}</p>
              <p className='text-2xl'>{"Vienna, Austria"}</p>
            </div>
          </div>
          <div className="">
            <Image
              src="/profile_picture.png"
              alt="Picture of the author"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className='flex justify-start align-top columns-2'>
          <div>
            <p className='text-4xl pb-4'>René Schultheis</p>
          </div>
          <div>
            <p className='text-4xl text-blue-400 '>+ Software Developer</p>
            <p className='text-4xl text-blue-400'>   Based in Vienna</p>
          </div>
        </div>
        <div className='p-8 gap-4 flex flex-row'>
          <a href="/agfa-photo">
            <Image src="/svg/instagram.svg" height={30} width={30} alt={''} />
          </a>
          <a href="/agfa-photo">
            <Image src="/svg/linkedin.svg" height={24} width={24} alt={''} />
          </a>
        </div>
      </div>
      <div className="h-screen grid content-center">
        <div className='p-8 flex flex-row justify-between'>
          <p>René Schultheis</p>
          <nav>
            <ul className='flex flex-row space-x-8'>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/projects/dasschaltwerk">Projects</a>
              </li>
              <li>
                <a href="/interests">Interests</a>
              </li>
              <li>
                <a href="/agfa-photo">Agfa Photo</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div >
  )
}
