import CloseIcon from "../../Icons/CloseIcon"


const Productdetail=()=>{
return(
    <aside className="w-[360px] h-[calc(100vh-80px)] top-[68px] flex flex-col fixed  right-0 border border-black rounded-r-lg bg-white " >
        <div className="flex justify-between items-center p-6">
            <h2 className="font-medium text-xl ">Detail</h2>
            <div ><CloseIcon h='6' w='6'/></div>
        </div>
    </aside>
)
}
export default Productdetail