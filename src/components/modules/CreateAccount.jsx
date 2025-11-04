import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import api from '../../api/axiosInstance';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../store/authSlice';
import { useNavigate } from 'react-router-dom';
import InputBase from '../ui/inputs/InputBase';
import ButtonColor from '../../components/ui/buttons/ButtonColor';
import { toast } from 'react-toastify';

const schema = yup.object({
  first_name: yup.string().required('First name is required'),
  last_name: yup.string().required('Last name is required'),
  email: yup.string().email().required('Email is required'),
  password: yup.string().min(8).required('Password is required'),
});

const CreateAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const res = await api.post('/auth/register', data);
      dispatch(setCredentials(res.data));
      toast.success('Account created successfully!');

      navigate('/');
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-container__right__create-account-form">
      <div className='login-container__right__create-account'>
        <div className='login-container__right__create-account-input-group'>
          <InputBase label='First Name' {...register('first_name')} />
          {errors.first_name && 
            (<p className="login-container__right__create-account-input-error">{errors.first_name?.message}</p>)
          }
        </div>

        <div className='login-container__right__create-account-input-group'>
          <InputBase label='Last Name' {...register('last_name')} />
          {errors.last_name &&
            (<p className="login-container__right__create-account-input-error">{errors.last_name?.message}</p>)
          }
        </div>
      </div>

      <InputBase label='Email Address' {...register('email')} />
      {errors.email &&
        (<p className="login-container__right__create-account-input-error">{errors.email?.message}</p>)
      }

      <InputBase type="password" label='Password' {...register('password')} />
      {errors.password &&
        (<p className="login-container__right__create-account-input-error">{errors.password?.message}</p>)
      }

      <ButtonColor type="submit" content='Create Account' src="#" />
    </form>
  );
};

export default CreateAccount;
