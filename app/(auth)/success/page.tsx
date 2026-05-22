import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card,CardContent, CardDescription, CardHeader,CardTitle} from "@/components/ui/card";

export default function AuthSuccessPage() {
    return (
        <main className="min-h-screen bg-white flex items-center justify-center px-4">
            <Card className="w-full max-w-md border shadow-sm rounded-2xl">
                <CardHeader className="items-center text-center space-y-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border bg-black text-white">
                        <CheckCircle2 className="h-8 w-8" />
                    </div>

                    <div className="space-y-2">
                        <CardTitle className="text-3xl font-bold tracking-tight">
                            Success!
                        </CardTitle>

                        <CardDescription className="text-black/60">
                            You have successfully logged in or created your account.
                        </CardDescription>
                    </div>
                </CardHeader>

                <CardContent className="space-y-4">
                    <Link href="/dashboard" className="block">
                        <Button className="w-full" size="lg">
                            Go to Dashboard
                        </Button>
                    </Link>

                    <Link href="/" className="block">
                        <Button variant="outline" className="w-full">
                            Back to Home
                        </Button>
                    </Link>

                    <p className="text-center text-sm text-black/60">
                        Welcome to <span className="font-medium text-black">TaskFlow</span>
                    </p>
                </CardContent>
            </Card>
        </main>
    )
}