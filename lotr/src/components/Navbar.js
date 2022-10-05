
import t from '../images/t.png';
import eye from '../images/eye.png';
import fellowship from '../images/fellowship.gif';
const Navbar = () => {
    return (
        <nav className="w-full flex justify-between p-4  bg-gradient-to-r from-slate-500 to-blue-900">
            <div className="md:flex-[0.5] justify-center">
                <img src={t}  alt="" className="w-32 cursor-pointer"/>
            </div>
            <div class="relative  basis-1/2 p-5 w-20 h-22">
                <img src={fellowship}  alt="" className="object-cover h-60 w-85 cursor-pointer"/>
            </div>
            <div class="relative h-32 w-32 ...">
                <img src={eye}  alt="" className="w-32 cursor-pointer"/>
            </div>
        </nav>
    );
}


export default Navbar;