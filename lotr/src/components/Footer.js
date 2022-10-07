const Footer = () => {
    return (
        <div  className=" flex w-full justify-center items-center  bg-gradient-to-r from-slate-500 to-blue-900">
              <div className="w-full flex md:justify-center justify-between items-center flex-col gradient-bg-footer">

    <div className="sm:w-[90%] w-full h-[0.30px] bg-gray-400 mt-9" />

    <div className="sm:w-[90%] w-full flex justify-between items-center p-2 mt-3">
      <p className="text-white text-left text-xs">Doors of Durin</p>
      <p className="text-white text-right text-xs ">All rights reserved by Dwarves</p>
    </div>
  </div>
        </div>
    );
}


export default Footer;