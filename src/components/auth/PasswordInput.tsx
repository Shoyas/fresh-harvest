"use client";
import { Eye, EyeOff } from "lucide-react";
import React, { useEffect, useRef } from "react";

interface PasswordInput {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    showPassword: boolean;
    toggleShowPassword: () => void;
    placeholder?: string;
    required?: boolean;
}

export default function PasswordInput({
    label,
    name,
    value,
    onChange,
    showPassword,
    toggleShowPassword,
    placeholder,
    required = false,
}: PasswordInput) {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
            const len = inputRef.current.value.length;
            inputRef.current.setSelectionRange(len, len);
        }
    }, [showPassword]);

    return (
        <div>
            <label className="block text-body-2 font-medium text-color-black mb-2">
                {label}
            </label>
            <div className="relative">
                <input
                    ref={inputRef}
                    type={showPassword ? "text" : "password"}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    className="w-full px-4 py-3 pr-12 border border-color-gray-50 rounded-lg
            focus:ring-2 focus:ring-color-primary focus:border-color-primary
            outline-none transition-colors placeholder-gray-400 h-14 text-base"
                />
                <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
            </div>
        </div>
    );
}
