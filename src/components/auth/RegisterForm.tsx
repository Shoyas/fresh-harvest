"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSignupMutation } from "@/redux/services/userApi";
import { setAuthStatus } from "@/redux/slices/appSlice";
import { extractErrorMessage } from "@/utils/error";
import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";
import Button from "../shared/Button";
import Heading from "../shared/Heading";
import AuthSocial from "./AuthSocial";


interface RegisterForm {
    onSwitchToLogin: () => void;
}

export default function RegisterForm({ onSwitchToLogin }: RegisterForm) {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [signup, { isLoading, error }] = useSignupMutation();
    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signup({
                fullName: formData.fullName,
                email: formData.email,
                password: formData.password,
            }).unwrap();
            dispatch(setAuthStatus("unauthenticated"));
        } catch (err) {
            console.error("Signup error:", err);
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
                Register
            </Heading>
            <TextInput
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
            />
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
            <Button className="w-full" type="submit">
                {isLoading ? "Registering..." : "Register"}
            </Button>
            {error && <p className="text-red-500">{extractErrorMessage(error)}</p>}

            <AuthSocial variant="signup" />

            <p className="mt-8 text-center text-sm text-gray-600">
                <span className="font-rubik font-medium">Already have an account?</span>{" "}
                <Button
                    type="button"
                    onClick={onSwitchToLogin}
                    tone="link"
                    className="px-0!"
                >
                    Log in
                </Button>
            </p>
        </form>
    );
}
