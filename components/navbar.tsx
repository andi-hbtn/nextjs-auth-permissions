import Link from "next/link"
import { Button } from "./ui/button";
import { getAuthUser } from "@/lib/currentUser";
import LogoutButton from "./Logout";

export default async function Navbar() {

    const user = await getAuthUser();
    return (
        <nav className="w-full border-b bg-white">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="text-lg font-bold">
                    TaskFlow
                </Link>
                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-6 text-sm">
                    <Link href="/tasks" className="hover:text-black/70">
                        Tasks
                    </Link>
                </div>
                {/* Auth Buttons */}
                <div className="hidden md:flex items-center gap-2">
                    {user ?
                        <>
                            <span className="text-sm text-gray-600">
                                Hi, {user.firstname}
                            </span>
                            <LogoutButton />
                        </> :
                        <>
                            <Link href="/login">
                                <Button variant="ghost">Login</Button>
                            </Link>
                            <Link href="/register">
                                <Button>Register</Button>
                            </Link>
                        </>
                    }

                </div>
            </div>
        </nav>
    )
}