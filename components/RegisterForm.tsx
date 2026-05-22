"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import { useActionState } from "react";
import { RegisterAction } from "@/actions/auth.action";
export default function RegisterForm() {

    const initialState = {
        message: "",
        status: Boolean
    }

    const [status, dispatchAction, pending] = useActionState(RegisterAction, initialState);

    return (
        <main className="min-h-screen bg-white flex items-center justify-center px-4">
            <Card className="w-full max-w-md border shadow-sm rounded-2xl">
                <CardHeader className="space-y-2 text-center">
                    <CardTitle className="text-3xl font-bold tracking-tight">
                        Create account
                    </CardTitle>

                    <CardDescription className="text-black/60">
                        Start organizing your work and productivity with TaskFlow.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form className="space-y-5" action={dispatchAction}>
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>

                            <Input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="John Doe"
                            />
                        </div>

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
                            <Label htmlFor="password">Password</Label>

                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Create a strong password"
                            />
                        </div>

                        <Button className="w-full" size="lg">
                            Create account
                        </Button>
                    </form>

                    <div className="mt-6 text-center text-sm text-black/60">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="font-medium text-black hover:underline"
                        >
                            Login
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </main>
    );
}