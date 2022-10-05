import React, {useState} from 'react';
import PropTypes from 'prop-types';
import loginUser from '../services/loginUser';
import { Footer, Navbar } from '.';
import { useNavigate } from "react-router-dom";


const Login = ({setToken}) => {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [message,setMessage] = useState();
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        console.log(username,password)
        const token = await loginUser({
          username,
          password
        });
        if (token['accessToken']) {
            setToken(token);
            navigate('/moria');
        } else if (token['message']){
            setMessage(token['message']);
            navigate('/');
        }
      }
    return (
        <>
        <Navbar />
            <div className="flex w-full justify-center items-center  bg-gradient-to-r from-slate-500 to-blue-900">
                <div className="flex md:flew-row flex-col items-start justify-between md:p-20 py-12 px-4 ">
                    <div className="flex flex-1 justify-start flex-col md:mr-10">
                        <h1 className="italic text-2xl sm:text-5xl text-white text-gradient  py-3">
                            Speak Friend and Enter! 🧙‍♂️
                        </h1>

            <form onSubmit={handleSubmit} >
                <div class="mt-10">
                    <div>
                        <label class="block" for="email"><h1 className=" text-white">Name</h1></label>
                                <input 
                                    type="text"
                                    placeholder="Name"
                                    class="w-full px-4 py-2 mt-10 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    name="username"
                                    onChange={e => setUserName(e.target.value)}
                                />
                    </div>
                    <div class="mt-10">
                        <label class="block"><h1 className="text-white">Password</h1></label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    class="mt-10 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    name="password"
                                    onChange={e => setPassword(e.target.value)}
                                />
                    </div>
                    <div class="flex items-baseline justify-center">
                        <button class="px-6 py-2 mt-10 text-white bg-blue-600 rounded-lg hover:bg-blue-900" type="submit">

                            <span>Login</span>
                        </button>
                    </div>
                    <div class="flex items-baseline justify-center">
                        {message ? (
                        <>  
                            <p class="text-red-700 font-mono text-xl"> {message}.  I said Friend, Gandalf. </p>
                        </>
                        ) : (<></>)
                        }
</div>
                </div>
            </form>
                    </div>
                </div>
            </div>
        <Footer />    
        </>    
        );
    
};

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;