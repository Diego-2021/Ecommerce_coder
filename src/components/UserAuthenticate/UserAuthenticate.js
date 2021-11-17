import { useContext, useState } from "react";
import { UserAuthContext } from "../../context/UserAuthContext";
import { useHistory } from "react-router";

export const UserAuthenticate = () => {

    const { login } = useContext(UserAuthContext);
    const [values, setValues] = useState({
        email:'',
        password:''
    });
    
  const{ email, password}= values;
  const {push} = useHistory()


    const handleChange = (e) => {
        e.preventDefault();
        setValues({
            ...values,/*Aca lo que hace es realizar una copia del value para poder pasarle los parametros*/
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password)
        .then((res)=> push('/'))
        .catch((err)=> console.log(err))

    }




    return (
        <div
            className='container d-flex align-items-center justify-content-space'
            style={{ minHeight: '80vh' }}
        >
            <div className='row d-flex align-items-center justify-content-space'>
                {/* <div className='col'>
                <Animation />
              </div> */}
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
                                value={email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group mb-2'>
                            <label>Password</label>
                            <input
                                type='password'
                                className='form-control'
                                placeholder='Ingrese su password'
                                name='password'
                                value={password}
                                onChange={handleChange}
                            />
                        </div>
                        <button
                            type='submit'
                            className='btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-4'
                        >
                            Login
                        </button>
                    </form>
                    <button
                        type='submit'
                        className='btn btn-secondary  font-weight-bold text-uppercase d-block w-100  mt-4'
                    >
                        Login with Google
                    </button>
                    <small className='text-center mt-3'>No tenes cuenta? Sign up</small>
                </div>
            </div>
        </div>
    );
}