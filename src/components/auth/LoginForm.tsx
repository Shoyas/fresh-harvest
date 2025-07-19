"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "@/redux/services/userApi";
import { setAuthStatus } from "@/redux/slices/appSlice";
import { extractErrorMessage } from "@/utils/error";
import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";
import Button from "../shared/Button";
import Heading from "../shared/Heading";
import AuthSocial from "./AuthSocial";

interface LoginForm {
    onSwitchToRegister: () => void;
}

export default function LoginForm({ onSwitchToRegister }: LoginForm) {
    const dispatch = useDispatch();
    const [login, { isLoading, error, data }] = useLoginMutation();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login({
                email: formData.email,
                password: formData.password,
            }).unwrap();

            if (data) {
                dispatch(setAuthStatus("authenticated"));
            }
        } catch (err) {
            console.error("Login error:", err);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-8 relative space-y-6"
        >
            <Heading
                as="h2"
                size="h2"
                className="text-center text-color-black!"
                weight="medium"
            >
                Login
            </Heading>

            <TextInput
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
            />

            <PasswordInput
                label="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                showPassword={showPassword}
                toggleShowPassword={() => setShowPassword((v) => !v)}
                placeholder="Enter your password"
                required
            />

            <div className="flex items-center justify-between mt-4">
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-4 h-4 text-orange-600 border-color-gray-50 rounded focus:ring-color-primary"
                    />
                    <span className="ml-2 text-sm text-gray-700">Remember me</span>
                </label>

                <button
                    type="button"
                    className="text-sm text-gray-600 hover:text-gray-900 underline transition-colors"
                >
                    Forgot Password
                </button>
            </div>

            <Button className="w-full" type="submit">
                {isLoading ? "Logging in..." : "Login"}
            </Button>

            {error && (
                <p className="text-red-600 text-center">{extractErrorMessage(error)}</p>
            )}

            <AuthSocial variant="login" />

            <p className="mt-8 text-center text-sm text-gray-600">
                <span className="font-rubik font-medium">Don&apos;t have an account?</span>{" "}
                <Button
                    type="button"
                    onClick={onSwitchToRegister}
                    tone="link"
                    className="px-0!"
                >
                    Sign up
                </Button>
            </p>
        </form>
    );
}
