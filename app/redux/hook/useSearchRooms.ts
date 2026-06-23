import { useState, useCallback } from 'react';

interface SearchParams {
    checkIn: string;
    checkOut: string;
    adultCount: number;
    childCount: number;
    childAges: number[];
}

export const useSearchRooms = () => {
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const searchRooms = useCallback(async (params: SearchParams) => {
        setLoading(true);
        setError(null);

        try {
            // Build query strings cleanly using URLSearchParams
            const queryParams = new URLSearchParams({
                checkIn: params.checkIn,
                checkOut: params.checkOut,
                adultCount: params.adultCount.toString(),
                childCount: params.childCount.toString(),
            });

            // Append multiple childAge parameters dynamically
            if (params.childAges && params.childAges.length > 0) {
                params.childAges.forEach((age) => {
                    queryParams.append('childAge', age.toString());
                });
            }

            const response = await fetch(
                `https://api.rrfguesthouse.com/Dev/dev_api/public/rooms-search?${queryParams.toString()}`
            );

            if (!response.ok) {
                throw new Error(`Search failed: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            setResults(data);
        } catch (err: any) {
            setError(err.message || 'Something went wrong during search.');
        } finally {
            setLoading(false);
        }
    }, []);

    return { results, loading, error, searchRooms };
};