import { useQuery, useMutation } from '@tanstack/react-query';
import axios from '@/lib/axios';

const login = async (credentials: { email: string; password: string }) => {
  const response = await axios.post('/login', credentials);
  return response.data;
};

const register = async (credentials: { email: string; password: string }) => {
  const response = await axios.post('/register', credentials);
  return response.data;
};

const profile = async () => {
  const { data } = await axios.get('/profile');
  return data;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: register,
  });
};

export const useProfile = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: profile,
  });
};
