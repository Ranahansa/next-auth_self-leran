import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


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
                <Label>
                    <span>First Name</span>
                    <Input id="firstName" type="text" name="firstName" placeholder="John" required/>
                </Label>
                <Label>
                    <span>Last Name</span>
                    <Input id="lastName" type="text" name="lastName" placeholder="Doe" required/>
                </Label>
                <Label>
                    <span>Email</span>
                    <Input type="email" placeholder="jWQpN@example.com" />
                </Label>
            </form>
        </div>
    )
}

export default Register