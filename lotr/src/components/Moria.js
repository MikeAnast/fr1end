import { useEffect, useState } from "react";
import validate from '../services/validateToken';
import { useNavigate } from "react-router-dom";
import { Footer} from ".";
import gandalf from '../images/gandalf.gif';

const Moria = ({token}) => {

    const [userDetails,setuserDetails] = useState();
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);    
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            if (userToken) {
                const userData = await validate(userToken);
                if (userData){
                    setuserDetails(userData['message']);
                    sessionStorage.setItem('k',JSON.stringify(userData['k']));
                } else {
                    setuserDetails();
                    navigate('/');
                }
            } else {
                setuserDetails();
                navigate('/');
            }


        };
        fetchData();
    }, []);
        return (
            
            <>
                <div  className="pt-12 flex w-full justify-center items-center relative bg-gradient-to-r from-slate-500 to-blue-900">
                    <div className="flex md:flew-row flex-col items-start justify-between md:p-20 ">
                        <div className="flex flex-1 justify-start flex-col md:mr-10 ">
                            <img src={gandalf}  alt="" className="w-13 object-top cursor-pointer"/>
                        </div>
                    </div>
                    <h1 className="italic text-3xl sm:text-3xl text-white text-gradient">
                        Hello {userDetails}! 
                    </h1>
                </div>
                <div className="pt-12 pb-7 flex w-full justify-center items-center relative bg-gradient-to-r from-slate-500 to-blue-900">
                    <Footer />
                    </div >
            </>
        )
};

export default Moria;