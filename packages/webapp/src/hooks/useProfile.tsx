//import { useQuery } from '@tanstack/react-query';
import config from '@/utils/config';
import { useQuery } from '@tanstack/react-query';
import {users as User} from "@api/exports";

const useProfile = () => {
  //TODO
  return useQuery({
    queryKey: ['profile'], 
    queryFn: async (): Promise<User[]> => {
      const response = await fetch(`${config.API_URL}/auth/users`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
    }
  });
};
export default useProfile;
