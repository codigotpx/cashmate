import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
                <div className='flex w-full max-w-4xl overflow-hidden rounded-lg shadow-lg'>
                
                    <div className='w-1/2 hidden md:flex flex-col justify-center items-center p-10'>
                        <h1 className='text-black text-2xl font-semibold mb-4'>Iniciar Sesión</h1>
                        <p className='text-gray-700'>Por favor ingrese sus datos</p>
                        
                        {/* Formulario de inicio de sesión */}
                        <form className="w-full flex flex-col gap-4 pt-5">
                            <div>
                                <label className='text-gray-700' htmlFor='email'>Usuario o email</label>
                                <input 
                                    type='text' 
                                    id='email' 
                                    name='email' 
                                    className='w-full p-2 mt-2 border border-gray-300 rounded' 
                                    placeholder='Ingrese su usuario o email' 
                                    required
                                />
                            </div>
                            <div>
                                <label className='text-gray-700' htmlFor='password'>Contraseña</label>
                                <input 
                                    type='password' 
                                    id='password' 
                                    name='password' 
                                    className='w-full p-2 mt-2 border border-gray-300 rounded'
                                    placeholder='Ingrese su contraseña'
                                    required
                                />
                            </div>
                        
                            <button className='w-full pt-4' type='submit'>
                                <span className='bg-blue-600 text-white px-4 py-2 rounded hover:cursor-pointer transition-colors'>Iniciar Sesión</span>
                            </button>

                            <p className='text-gray-700'>Si no tienes cuenta, <a href="#" className='text-blue-600 hover:underline font-medium'>regístrate aquí</a></p>

                        </form>
                    </div>

      
                    <div className='w-full md:w-1/2 flex flex-col justify-center items-center bg-secondary'>
                        <h2 className='text-black text-3xl font-bold'>Welcome Back!</h2>
                        <p className='text-black mt-4'>Section 1 content here.</p>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Login;