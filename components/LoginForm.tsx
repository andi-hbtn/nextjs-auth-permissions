"use client";
import {
    Card,
    CardHeader,
    CardContent,
    CardTitle,
    CardDescription,

} from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";
import { LoginAction } from "@/actions/auth.action";


export default function LoginForm() {

    const initialState = {
        message: "",
        status: false
    }

    const [status, dispatchAction, pending] = useActionState(LoginAction, initialState);
    return (
        <main className="min-h-screen bg-white flex items-center justify-center px-4">
            <Card className="w-full max-w-md border shadow-sm rounded-2xl">
                <CardHeader className="space-y-2 text-center">
                    <CardTitle className="text-3xl font-bold tracking-tight">
                        Welcome back
                    </CardTitle>

                    <CardDescription className="text-black/60">
                        Login to continue managing your tasks with TaskFlow.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form className="space-y-5" action={dispatchAction}>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>

                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Password</Label>

                                <Link
                                    href="/forgot-password"
                                    className="text-sm text-black/60 hover:text-black"
                                >
                                    Forgot password?
                                </Link>
                            </div>

                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="••••••••"
                            />
                            {status?.status === false ? status.message : ""}
                        </div>

                        <Button className="w-full" size="lg">
                            Login
                        </Button>
                    </form>

                    <div className="mt-6 text-center text-sm text-black/60">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/register"
                            className="font-medium text-black hover:underline"
                        >
                            Register
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </main>
    )
}