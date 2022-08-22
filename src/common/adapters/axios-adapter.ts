import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { HttpAdapter } from '../interfaces/http-adapter.interface';

@Injectable()
export class AxiosAdapter implements HttpAdapter {
  private axios: AxiosInstance = axios;

  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await this.axios.get<T>(url);
      return data;
    } catch (error) {
      throw new Error('this is an error -Check Logs');
    }
  }

  async post(url: string, data: any): Promise<any> {
    return this.axios.post(url, data);
  }
  async patch(url: string, data: any): Promise<any> {
    return this.axios.patch(url, data);
  }
  async delete(url: string): Promise<any> {
    return this.axios.delete(url);
  }
}
