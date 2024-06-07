import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from 'next/link'
import { IconBrandGithub, IconBrandGoogle } from '@tabler/icons-react'
import { login } from '@/action/user'

const Login = () => {
    return (
        <div className=" mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212] dark:bg-black">
            <h1 className="text-3xl font-bold">
                Welcome To Login
            </h1>
            <form className="mt-6 space-y-6" action = {login}>
                <Label htmlFor="email">
                    <span>Email</span>
                    <Input id="email" name="email" type="email" placeholder="jWQpN@example.com" />
                </Label>
                <Label htmlFor="password">
                    <span>Password</span>
                    <Input id="password" name="password" type="password" placeholder="********" />
                </Label>
                <button type="submit" className="w-1/2 bg-[#121212] hover:bg-[#121212]/90 text-white font-bold py-2 px-4 rounded mx-auto block">Sign In 👊</button>

                <p>
                    <span className="text-sm">If you don't have an account?</span>
                    <Link href="/register" className="text-sm ml-2 text-blue-500 hover:text-blue-700">Register</Link>
                </p>
                <section className="mt-6">
                    <form>
                        <button type="submit" className="w-full flex justify-center items-center gap-2 py-2 px-4 border border-[#121212] hover:bg-[#121212]/90 hover:text-white font-bold rounded mx-auto mb-3">
                            <IconBrandGithub className="w-6 h-6" />
                            <p className="text-sm text-center">Sign in with GitHub</p>
                        </button>
                    </form>
                    <form>
                        <button type="submit" className="w-full flex justify-center items-center gap-2 py-2 px-4 border border-[#121212] hover:bg-[#121212]/90 hover:text-white font-bold rounded mx-auto">
                            <IconBrandGoogle className="w-6 h-6" />
                            <p className="text-sm text-center">Sign in with Google</p>
                        </button>
                    </form>
                </section>
            </form>
        </div>
    )
}

export default Login