"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userApi } from "@/redux/services/userApi";
import type { AppDispatch } from "@/redux";
import { hydrateCartFromStorage } from "@/redux/slices/appSlice";

export default function AppInitializer() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const storedCart = localStorage.getItem("cart");
    if (token) {
      dispatch(
        userApi.endpoints.getMe.initiate(undefined, { forceRefetch: true })
      );
    }
    if (storedCart) {
      dispatch(hydrateCartFromStorage(JSON.parse(storedCart)));
    }
  }, [dispatch]);

  return null;
}
