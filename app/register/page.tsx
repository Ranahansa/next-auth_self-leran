import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"


const Register = async () => {

    return (
        <div className="mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212] dark:bg-black">
            <h1 className="text-3xl font-bold">
                Welcome To NextAuth
            </h1>
            <p className="text-muted-foreground mt-2 text-sm">
                Please provide all the necessary information
            </p>
            <form className="mt-6 space-y-6">
                <Label htmlFor="firstName">
                    <span>First Name</span>
                    <Input id="firstName" type="text" name="firstName" placeholder="John" required/>
                </Label>
                <Label htmlFor="lastName">
                    <span>Last Name</span>
                    <Input id="lastName" type="text" name="lastName" placeholder="Doe" required/>
                </Label>
                <Label htmlFor="email">
                    <span>Email</span>
                    <Input id="email" name="email" type="email" placeholder="jWQpN@example.com" />
                </Label>
                <Label htmlFor="password">
                    <span>Password</span>
                    <Input id="password" name="password" type="password" placeholder="********" />
                </Label>
                <button type="submit" className="w-1/2 bg-[#121212] hover:bg-[#121212]/90 text-white font-bold py-2 px-4 rounded mx-auto block">Register &rarr;</button>
                <p>
                    <span className="text-sm">Already have an account?</span>
                    <Link href="/login" className="text-sm ml-2 text-blue-500 hover:text-blue-700">Login</Link>
                </p>
            </form>
        </div>
    )
}

export default Register