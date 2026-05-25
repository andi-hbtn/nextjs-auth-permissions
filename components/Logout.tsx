"use client";
import { useActionState } from "react";
import { LogoutUserAction } from "@/actions/auth.action";

export default function LogoutButton() {

    const initialState = {
        status: false,
        message: ""
    };

    const [state, dispatchAction, isPending] = useActionState(LogoutUserAction, initialState);

    return (
        <form action={dispatchAction}>
            <button
                type="submit"
                disabled={isPending}
                className="w-full text-left"
            >
                {isPending ? "Logging out..." : "Logout"}
            </button>
        </form>
    );
}