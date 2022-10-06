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
            
            <div>
            <div  className=" flex w-full justify-center items-center relative bg-gradient-to-r from-slate-500 to-blue-900">
            <img src={gandalf}  alt="" className="w-13 object-top cursor-pointer"/>
                    <h1 className="italic text-3xl sm:text-3xl text-white text-gradient">
                    Hello {userDetails}! 
                    </h1>
            </div>
            <Footer />
            </div>
        )
};

export default Moria;