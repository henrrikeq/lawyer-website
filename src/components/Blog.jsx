

const Blog = () => {
  return (
    <div className='h-[150vh] bg-[#F8F9FA]'>
      <div className='flex flex-col justify-center items-center pt-24'>
        <p className='text-[#AFA939] text-[18px] font-extrabold'>Our Blog</p>
        <p className='text-[2rem] text-[#494949] font-bold mb-12'>Recent Blog</p>
        <div className='flex gap-8'>
          
          <div className='w-[20rem] '>
            <p className='flex h-24 justify-center items-center pt-4 pl-6 text-[18px] font-semibold pb-5 border-2 bg-[#FFFFFF] border-[#FFFFFF]'>All you want to know about industrial laws</p>
            <img src="./src/assets/images/image_1.jpg" alt="" className='h-[15rem] w-[20rem] object-cover'/>
            <div className="border-2 bg-[#FFFFFF] border-[#FFFFFF]">
            <p className='flex justify-center text-gray-500 mt-5 ml-5 mr-5 '>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <button className='border-2 px-3 py-1 rounded-sm bg-[#AFA939] border-[#AFA939] text-white font-semibold mt-5 mb-10 ml-5'>Read more</button>
            </div>
          </div>
          <div className='w-[20rem] '>
            <p className='flex h-24 justify-center items-center pt-4 pl-6 text-[18px] font-semibold pb-5 border-2 bg-[#FFFFFF] border-[#FFFFFF]'>All you want to know about industrial laws</p>
            <img src="./src/assets/images/image_2.jpg" alt="" className='h-[15rem] w-[20rem] object-cover'/>
            <div className="border-2 bg-[#FFFFFF] border-[#FFFFFF]">
            <p className='flex justify-center text-gray-500 mt-5 ml-5 mr-5 '>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <button className='border-2 px-3 py-1 rounded-sm bg-[#AFA939] border-[#AFA939] text-white font-semibold mt-5 mb-10 ml-5'>Read more</button>
            </div>
          </div>
          <div className='w-[20rem] '>
            <p className='flex h-24 justify-center items-center pt-4 pl-6 text-[18px] font-semibold pb-5 border-2 bg-[#FFFFFF] border-[#FFFFFF]'>All you want to know about industrial laws</p>
            <img src="./src/assets/images/image_3.jpg" alt="" className='h-[15rem] w-[20rem] object-cover'/>
            <div className="border-2 bg-[#FFFFFF] border-[#FFFFFF]">
            <p className='flex justify-center text-gray-500 mt-5 ml-5 mr-5 '>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <button className='border-2 px-3 py-1 rounded-sm bg-[#AFA939] border-[#AFA939] text-white font-semibold mt-5 mb-10 ml-5'>Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog;