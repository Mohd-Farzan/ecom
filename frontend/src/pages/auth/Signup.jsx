import Commonform from '@/componant/common/form';
import { registerFormControls } from '@/config';
import { SignupUser } from '@/store/auth-slice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const initialState = {
  email: '',
  userName:'',
  password: '',
  role:'user',
};

function AuthSignup() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();
    // console.log("Form data being sent:", formData);
    dispatch(SignupUser(formData)).then((data) => {
      if (data?.payload?.success) {
        alert('successfully signup')
        setTimeout(() => navigate('/login'), 1000);
      } else {
        alert(data.payload?.message || "Signup failed!");
      }
    });
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6 shadow-lg border rounded-lg p-2">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground text-slate-200">Sign Up</h1>
      </div>
      <Commonform
        formControls={registerFormControls}
        buttonText={'Sign Up'}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
      <p className='text-slate-200'>
        Already have an account?{' '}
        <Link className="font-extrabold text-slate-300 text-primary hover:underline" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
}

export default AuthSignup;
