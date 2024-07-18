import type { EventItem } from '@/type'
import axios, { Axios, type AxiosResponse } from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/thanyasiriisnotavailable/331-intro-to-vite/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get<EventItem[]>('/events')
  },
  getEventById(id: number): Promise<AxiosResponse<EventItem>>{
    return apiClient.get<EventItem>('events/' + id.toString())
  }
}
