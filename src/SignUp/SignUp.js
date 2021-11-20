import { useRef, useContext } from "react";
import { UserAuthContext } from "../context/UserAuthContext";
import { useHistory } from "react-router";
import { Link } from "react"


const Signup = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const confPasswordRef = useRef();

    const { signup } = useContext(UserAuthContext);
    const { push } = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        signup(emailRef.current.value,
            passwordRef.current.value,
            confPasswordRef.current.value);
        push('/');
    };

    return (
        <div
            className='container d-flex align-items-center justify-content-space'
            style={{ minHeight: '80vh' }}
        >
            <div className='row d-flex align-items-center justify-content-space'>
                <div className='col' style={{ width: '500px' }}>
                    <h2 className='text-center mb-4 font-weight-bold'>Login</h2>
                    <form className='p-0' onSubmit={handleSubmit}>
                        <div className='form-group mb-2'>
                            <label>Email</label>
                            <input
                                type='email'
                                className='form-control'
                                placeholder='Ingrese su email'
                                name='email'
                                ref={emailRef}
                            />
                        </div>
                        <div className='form-group mb-2'>
                            <label>Password</label>
                            <input
                                type='password'
                                className='form-control'
                                placeholder='Ingrese su password'
                                name='password'
                                ref={passwordRef}
                            />
                        </div>
                        <div className='form-group mb-2'>
                            <label>Repet Password</label>
                            <input
                                type='Confirm password'
                                className='form-control'
                                placeholder='Repet password'
                                name='password'
                                ref={confPasswordRef}
                            />
                        </div>
                        <button
                            type='submit'
                            className='btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-4'
                        >
                            Login
                        </button>
                    </form>

                    <small className='text-center mt-3'>Ya tenes cuenta?<Link to='../signup'> Login</Link></small>
                </div>
            </div>
        </div>

    );
}
export default Signup;  
