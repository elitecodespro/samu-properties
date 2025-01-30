import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

const SignUpPage = () => {
    return (
        <div className="flex flex-col items-start max-w-sm mx-auto h-dvh pt-4 md:pt-4">
            <div className="flex items-center w-full py-8 border-b border-border/80">
                <Link href="/home" className="flex items-center gap-x-2">
                    <img src={'/logos/lg-1.png'} alt='Samu Properties Logo' className="h-16" />
                </Link>
            </div>

            <SignUp />
            
        </div>
    )
};

export default SignUpPage
