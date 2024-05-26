import axios, { AxiosRequestConfig } from 'axios';

type FetchResponse<T> = {
	count: number;
	results: T[];
};

const axiosInstance = axios.create({
	baseURL: 'https://game-deck-proxy-server.vercel.app/api/',
});

class APIClient<T> {
	constructor(public endpoint: string) {}

	getAll = async (config?: AxiosRequestConfig) => {
		const res = await axiosInstance.get<FetchResponse<T>>(this.endpoint, config);
		return res.data;
	};
}

export default APIClient;
