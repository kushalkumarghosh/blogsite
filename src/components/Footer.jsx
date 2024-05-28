import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6"

const Footer = () => {
    return (
        <div className='bg-gray-900'>
            <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
                <div className='grid mb-8 lg:grid-cols-6'>
                    <div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4'>

                        <div>
                            <p className='font-medium tracking-wide text-gray-300 '>
                                Category
                            </p>
                            <ul className='mt-2 space-y-2'>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300
                                hover:text-zinc-400'>News</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300
                                hover:text-zinc-400'>World</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300
                                hover:text-zinc-400'>Games</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300
                                hover:text-zinc-400'>References</a>
                                </li>
                            </ul>
                        </div>

                        {/* category 2 */}
                        <div>
                            <p className='font-medium tracking-wide text-gray-300 '>
                                Apples
                            </p>
                            <ul className='mt-2 space-y-2'>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300
                                hover:text-zinc-400'>Web</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300
                                hover:text-zinc-400'>Ecommerce</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300
                                hover:text-zinc-400'>Business</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300
                                hover:text-zinc-400'>Entertainment</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300
                                hover:text-zinc-400'>Portfolio</a>
                                </li>
                            </ul>
                        </div>

                        {/* category 3 */}
                        <div>
                            <p className='font-medium tracking-wide text-gray-300 '>
                                Cherry
                            </p>
                            <ul className='mt-2 space-y-2'>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300
                                hover:text-zinc-400'>Media</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300
                                hover:text-zinc-400'>Brochure</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300
                                hover:text-zinc-400'>Nonprofit</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300
                                hover:text-zinc-400'>Education</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300
                                hover:text-zinc-400'>Projects</a>
                                </li>
                            </ul>
                        </div>

                        {/* category 4 */}
                        <div>
                            <p className='font-medium tracking-wide text-gray-300 '>
                                Business
                            </p>
                            <ul className='mt-2 space-y-2'>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300
                                hover:text-zinc-400'>Infopreneur</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300
                                hover:text-zinc-400'>Personal</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300
                                hover:text-zinc-400'>Wiki</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300
                                hover:text-zinc-400'>Forum</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300
                                hover:text-zinc-400'>Projects</a>
                                </li>
                            </ul>
                        </div>


                    </div>
                    {/* subscription */}
                    <div className='md:max-w-md lg:col-span-2 lg:mt-0 mt-5'>
                        <p className='font-medium tracking-wide text-gray-300 '>
                            Subscribe for updates
                        </p>
                        <form className='mt-4 flex flex-col md:flex-row'>
                            <input type="email" name='email' id='email' className='flex-grow w-full h-12 px-4 mb-3
                            transition duration-200 bg-white border border-gray-300 rounded shadow-sm aspect-auto
                            md:mr-2 md:mb-0 focus:text-zinc-500 focus:outline-none' />

                            <button type='submit' className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-white
                            text-white transition duration-200 rounded shadow-md hover:text-zinc-400 focus:outline-none border'>
                                Subscribe
                            </button>
                        </form>
                        <p className='mt-4 text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum exercitationem assumenda libero nobis consequuntur minus, impedit hic. A nostrum libero velit iste doloribus animi iusto itaque labore quas. Ea quos culpa, quia rerum cumque alias sequi odit officiis architecto ipsum placeat totam minus perferendis id corporis? Officiis recusandae illo hic?</p>
                    </div>
                </div>

                <div className='flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row'>
                    <p className='text-sm text-gray-500'>© Digital Talk </p>
                    <div className='flex items-center mt-4 space-x-4 sm:mt-0'>
                        <a href="" className='text-gray-500 transition-all duration-300
                    hover:text-zinc-400'><FaTwitter className='h-6 w-6' /></a>
                        <a href="" className='text-gray-500 transition-all duration-300
                    hover:text-zinc-400'><FaInstagram className='h-6 w-6' /></a>
                        <a href="" className='text-gray-500 transition-all duration-300
                    hover:text-zinc-400'><FaFacebook className='h-6 w-6' /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer