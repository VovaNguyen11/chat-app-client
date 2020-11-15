import axios, {AxiosInstance, AxiosRequestConfig} from "axios"

class NetworkService {
  private static api: AxiosInstance

  public static init() {
    NetworkService.api = axios.create({
      baseURL: "http://localhost:3001",
    })
  }

  private static async requestHandler(callback: () => Promise<any>) {
    const {data, status, statusText} = await callback()

    switch (status) {
      case 200:
        return data
      default:
        const error = statusText
        throw new Error(error)
    }
  }

  public static async get(
    url: string,
    options?: AxiosRequestConfig
  ): Promise<any> {
    const request = () => NetworkService.api.get(url, options)
    const result = await NetworkService.requestHandler(request)
    return result
  }

  public static async post(
    url: string,
    data: any,
    options?: AxiosRequestConfig
  ): Promise<any> {
    const request = () => NetworkService.api.post(url, data, options)
    const result = await NetworkService.requestHandler(request)
    return result
  }

  public static async put(
    url: string,
    data: any,
    options?: AxiosRequestConfig
  ): Promise<any> {
    const request = () => NetworkService.api.put(url, data, options)
    const result = await NetworkService.requestHandler(request)
    return result
  }

  public static async delete(
    url: string,
    options?: AxiosRequestConfig
  ): Promise<any> {
    const request = () => NetworkService.api.delete(url, options)
    const result = await NetworkService.requestHandler(request)
    return result
  }
}

NetworkService.init()

const GET = NetworkService.get
const POST = NetworkService.post
const PUT = NetworkService.put
const DELETE = NetworkService.delete

export {GET, POST, PUT, DELETE}
export default NetworkService
