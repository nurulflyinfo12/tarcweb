import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../store';
import { useCallback } from 'react';
import {
  setRoomsStart,
  setRoomsSuccess,
  setRoomsFailure,
} from '../slice/roomsSlice';

// Type for the booking payload
export interface BookingRequestPayload {
  BookingRequest: {
    BookingRequestId: number;
    CheckInDate: string;
    CheckOutDate: string;
    NumberOfRooms: number;
    NumberOfAdults: number;
    NumberOfChildren: number;
    SpecialRequests: string;
    Status: string;
    CompanyId: string;
    CreatedAt: string;
    UpdatedAt: string;
  };
  BookingRequestGuest: {
    GuestId: number;
    BookingRequestId: number;
    FullName: string;
    Email: string;
    Phone: string;
    Age: number;
    IsPrimary: boolean;
    Nationality: string;
    PassportOrID: string;
  };
  BookingRequestRooms: Array<{
    RoomRequestId: number;
    BookingRequestId: number;
    RoomType: string;
    NumberOfGuests: number;
    ExtraBedNeeded: boolean;
    SmokingPreference: boolean;
  }>;
}

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useRooms = () => {
  const dispatch = useAppDispatch();
  const { rooms, loading, error } = useAppSelector((state) => state.rooms);

  // Booking confirmation – Removed alert(), now throws error on failure
  const createConfirmRoom = async (finalPayload: BookingRequestPayload): Promise<void> => {
    try {
      const response = await fetch(
        'https://api.rrfguesthouse.com/Dev/dev_api/public/create-booking-request',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(finalPayload),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Server error: ${response.status}`);
      }

      const data = await response.json();
      console.log('Booking response:', data);
      
      // Success - No alert here (handled in component)
      return data; // Optional: you can return data if needed
    } catch (err: any) {
      console.error('Booking error:', err);
      // No alert() - error will be caught in BookingStepper
      throw err;
    }
  };

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

  return {
    rooms,
    loading,
    error,
    fetchRooms,
    createConfirmRoom,
    refetch: fetchRooms,
  };
};