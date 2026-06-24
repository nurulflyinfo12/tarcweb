import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { useCallback } from "react";

import {
    setApplicationStart,
    setApplicationSuccess,
    setApplicationFailure,
} from "../slice/applicationSlice";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useApplication = () => {
    const dispatch = useAppDispatch();

    const { application, loading, error } = useAppSelector(
        (state) => state.application
    );

    const fetchApplication = useCallback(async () => {
        // console.log("fetchApplication running");

        try {
            dispatch(setApplicationStart());

            const response = await fetch(
                "https://api.rrfguesthouse.com/Dev/dev_api/api/Common/GetApplicationDetails"
            );

            const data = await response.json();

            dispatch(setApplicationSuccess(data));
        } catch (err) {
            console.error(err);
        }
    }, [dispatch]);
    return {
        application,
        loading,
        error,
        fetchApplication,
        refetch: fetchApplication,
    };
};