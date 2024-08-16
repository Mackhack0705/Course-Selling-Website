

const BannerSection = () => {
  
  return (
   <div className="w-full h-[650px]">
      <div className='flex justify-around items-center h-full'>
        <div className='text-left py-40 px-5 w-[500px]'>
          <div className='text-5xl font-bold text-[#01c8b5]'>Full stack Development</div>
          <div className='text-lg font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa a blanditiis voluptas numquam possimus commodi iste dolorum nostrum architecto debitis laboriosam fugiat, officia pariatur quaerat aliquam. Aperiam qui asperiores obcaecati veniam at!</div>
        </div>
        <div className="bg-background-texture bg-cover bg-center rounded-lg">
          <img className="absolute w-[200px] h-[200px] right-[550px] top-[250px]" src="/images/ipad.png" alt="" />
          <img src="/images/img1.png" alt="" />
          <img className="absolute top-[400px] right-[50px] w-[200px] h-[100px]" src="/images/book.png" alt="" />
        </div>
      </div>
   </div>
  )
}

export default BannerSection
