import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Login = () => {
    return (
        <div className=" mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212] dark:bg-black">
            <h1 className="text-3xl font-bold">
                Welcome To Login
            </h1>
            <form className="mt-6 space-y-6">
                <Label htmlFor="email">
                    <span>Email</span>
                    <Input id="email" name="email" type="email" placeholder="jWQpN@example.com" />
                </Label>
                <Label htmlFor="password">
                    <span>Password</span>
                    <Input id="password" name="password" type="password" placeholder="********" />
                </Label>
                <button type="submit" className="w-1/2 bg-[#121212] hover:bg-[#121212]/90 text-white font-bold py-2 px-4 rounded mx-auto block">Sign In 👊</button>
            </form>
        </div>
    )
}

export default Login