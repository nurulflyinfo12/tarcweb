import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../store';
import { useCallback } from 'react';
import {
  setRoomsStart,
  setRoomsSuccess,
  setRoomsFailure,
} from '../slice/roomsSlice';
import api from '@/services/apiClient';

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

  // Booking confirmation 
  const createConfirmRoom = async (
    finalPayload: BookingRequestPayload
  ) => {
    try {
      const response = await api.post(
        "/create-booking-request",
        finalPayload
      );

      // console.log(response.data);

      return response.data;
    } catch (err: any) {
      console.error(err);

      throw new Error(
        err.response?.data?.message ||
        err.message ||
        "Something went wrong"
      );
    }
  };
  
  const fetchRooms = useCallback(async () => {
  try {
    dispatch(setRoomsStart());

    const response = await api.get("/get-all-rooms");

    dispatch(setRoomsSuccess(response.data));
  } catch (err: any) {
    dispatch(
      setRoomsFailure(
        err.response?.data?.message || err.message || "Something went wrong"
      )
    );
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