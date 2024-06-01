import genres from '@/data/genres';
import Genre from '@/entities/Genre';
import APIClient from '@/services/apiClient';
import {useQuery} from '@tanstack/react-query';
import ms from 'ms';

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () =>
	useQuery({
		queryKey: ['genres'],
		queryFn: apiClient.getAll,
		staleTime: ms('24h'),
		placeholderData: genres,
	});

export default useGenres;
