import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const onSubmit = (e) => {
        alert('click');
        //history.pushState('/about');
    }
    return (
        <div className="login-container">
            <h2 style={{ color: '#fc9403' }}>Login</h2>
            <form className='add-form' onSubmit={onSubmit} >
                <div className='form-control'>
                    <label>User Name</label>
                    <input type='text' placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className='form-control'>
                    <label>Password</label>
                    <input type='password' placeholder='***********' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <input type='submit' value='Login' className='btn btn-block' />
            </form>
        </div>
    )
}

export default Login
