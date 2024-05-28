import { useLoaderData } from 'react-router-dom';

const SingleBlog = () => {
  const data = useLoaderData();
  console.log(data)
  const { title, image, category, author, published_date, reading_time, content } = data[0];

  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h1 className="text-5xl lg:text-7xl leading-sung font-bold mb-5">
          Single Blog Page
        </h1>
      </div>

      {/* blog details */}

      {/* <div className='max-w-7xl mx-auto my-12'>
            <div className='lg:w-3/4 mx-auto'>
                <div>
                    <img src={image} alt="" />
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default SingleBlog