import Link from 'next/link';
import Head from 'next/head'

function Nav(){
    return(
        <>
              <Head>
        <title>Ashik Mahmud</title>
      </Head>
        <div className="max-w-screen m-5 ">
            <div className="flex flex-row place-content-between">
                <Link href="/">ASHIK MAHMUD</Link>
                <div className="flex flex-row content-center">
                    <div className="mx-8 text-gray-600"><Link className="w-5" href="about">About</Link></div>                    
                    <div className="mx-8 text-gray-600"><Link className="w-5" href="workList">Work</Link></div>                  
                    <div className="mx-8 text-gray-600"><Link className="w-5" href="services">Services</Link></div>
                    <div className="mx-8 text-gray-600"><Link className="w-5" href="contact">Contact</Link></div>
                </div>
                <ul className="flex flex-row">
                    <div className="mx-2 text-gray-600"><Link href="dribble"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
</svg></Link></div>
                    <div className="mx-2 text-gray-600"><Link href="instagram"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  text-gray-600 hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
</svg></Link></div>
                    <div className="mx-2 text-gray-600"><Link href="twitter"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
</svg></Link></div>
                </ul>
            </div>

        </div>
        </>
    )
}

export default Nav;