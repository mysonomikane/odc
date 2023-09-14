import hero from './hero.png';

export default function SignUp() {

    return (
        <div className='m-10'>
            <div className="container">
                <div class="grid grid-cols-2 gap-4 content-center justify-items-stretch items-center">
                    <div>
                        <h1 className='text-6xl text-white'>A Thought-Provoking Headline</h1>
                        <p className='my-6 text-xl text-white'>A quick value proposition that will make your visitors want to click on or sign up for your offer.</p>
                        <div className='flex'>
                            <input type="text" placeholder="Insert email address"  className="w-full md:w-2/4 px-3 py-2 bg-white border border-slate-300 
                            rounded-md text-base shadow-sm placeholder-black text-black"/>
                            <button className='w-full md:w-1/5 bg-lime-400 hover:bg-lime-700 text-black hover:text-white font-bold border border-lime-700 rounded-md ml-0 md:ml-4 text-black px-3 py-2 font-medium text-center'>Sign Up</button>
                        </div>

                    </div>
                    <div>
                        <img src={hero} alt="" className='h-1/2'/>
                    </div>
                </div>
            </div>

        </div>
    )
  }
