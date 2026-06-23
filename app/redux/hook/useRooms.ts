import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../store';
import { useEffect, useCallback } from 'react';
import { 
  setRoomsStart, 
  setRoomsSuccess, 
  setRoomsFailure 
} from '../slice/roomsSlice';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useRooms = () => {
  const dispatch = useAppDispatch();
  
  const { rooms, loading, error } = useAppSelector((state) => state.rooms);

  const fetchRooms = useCallback(async () => {
    try {
      dispatch(setRoomsStart());

      const response = await fetch(
        'https://api.rrfguesthouse.com/Dev/dev_api/public/get-all-rooms'
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch rooms: ${response.status}`);
      }

      const data = await response.json();
      dispatch(setRoomsSuccess(data));

    } catch (err: any) {
      dispatch(setRoomsFailure(err.message || 'Something went wrong'));
    }
  }, [dispatch]);

  // Auto fetch when hook is used
  useEffect(() => {
    if (rooms.length === 0) {
      fetchRooms();
    }
  }, [fetchRooms, rooms.length]);

  return { 
    rooms, 
    loading, 
    error, 
    fetchRooms,    
    refetch: fetchRooms 
  };
};