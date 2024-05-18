import "./cardLoading.css"

const CardLoading = () => {


    return (

        <div className=' cursor-pointer w-56 h-60 rounded-lg '>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className=' loadingBackground absolute bottom-0 left-0 rounded-lg m-1 w-16 h-3' ></span>
                <div className=' loadingBackground w-full h-full rounded-lg' ></div>

                <div className='loadingBackground absolute top-0 right-0  w-5 h-5 rounded-full p-0 m-1'>
                </div>
            </figure>

            <p className='flex justify-between items-center'>
                <span className='loadingBackground mr-2 w-6 h-4 rounded-lg'></span>
                <span className='loadingBackground w-6 h-4 rounded-lg'></span>
            </p>
        </div>
    )
}
export default CardLoading