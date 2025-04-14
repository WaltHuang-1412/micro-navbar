import axios from '../axios'
import { ProfileResponse } from './type'

export * from './type'

export const getProfile = (): Promise<ProfileResponse> => {
  return axios.get('/profile')
}
