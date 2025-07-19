"use client";
import React from "react";

interface TextInput {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    placeholder?: string;
    required?: boolean;
}

export default function TextInput({
    label,
    name,
    value,
    onChange,
    type = "text",
    placeholder,
    required = false,
}: TextInput) {
    return (
        <div>
            <label className="block text-body-2 font-medium text-color-black mb-2">
                {label}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="w-full px-4 py-3 border border-color-gray-50 rounded-lg
          focus:ring-2 focus:ring-color-primary focus:border-color-primary
          outline-none transition-colors placeholder-gray-400 h-14 text-base"
            />
        </div>
    );
}
