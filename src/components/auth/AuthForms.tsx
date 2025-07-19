"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux";
import { setAuthStatus } from "@/redux/slices/appSlice";
import { useState } from "react";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function AuthForms() {
    const [activeForm, setActiveForm] = useState<"login" | "register">("login");
    const authForm = useSelector((state: RootState) => state.app.auth);
    const dispatch = useDispatch();

    return (
        <Dialog.Root
            open={authForm === "authForm"}
            onOpenChange={(open) => {
                if (!open) {
                    dispatch(setAuthStatus("unauthenticated"));
                }
            }}
        >
            <Dialog.Portal>
                <Dialog.Overlay className="bg-black/30 fixed inset-0 grid place-items-center" />

                <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[32rem] p-4 rounded-lg z-[9000009]">
                    <Dialog.Title className="sr-only">Auth form</Dialog.Title>

                    {activeForm === "login" ? (
                        <LoginForm onSwitchToRegister={() => setActiveForm("register")} />
                    ) : (
                        <RegisterForm onSwitchToLogin={() => setActiveForm("login")} />
                    )}
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
