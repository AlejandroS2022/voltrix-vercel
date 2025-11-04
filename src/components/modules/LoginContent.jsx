import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import api from '../../api/axiosInstance';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../store/authSlice';
import InputBase from '../ui/inputs/InputBase';
import ButtonColor from '../../components/ui/buttons/ButtonColor';
import { toast } from 'react-toastify';

const schema = yup.object({
  email: yup.string().email().required('Email is required'),
  password: yup.string().required('Password is required'),
});

const LoginContent = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const res = await api.post('/auth/login', data);
      dispatch(setCredentials(res.data));
      toast.success('Logged in successfully!');
    } catch (err) {
      toast.error(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-container__right__create-account-form">
      <InputBase label='Email Address' {...register('email')} />
      {errors.email &&
        (<p className="login-container__right__create-account-input-error">{errors.email?.message}</p>)
      }

      <InputBase type="password" label='Password' {...register('password')} />
      {errors.password &&
        (<p className="login-container__right__create-account-input-error">{errors.password?.message}</p>)
      }

      <ButtonColor type="submit" content='Login' src="#" />
    </form>
  );
};

export default LoginContent;
