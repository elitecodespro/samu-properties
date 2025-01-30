import MaxWidthWrapper from "@/components/max-width-wrapper";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import React from 'react';

interface Props {
    children: React.ReactNode
}

const AuthLayout = ({ children }: Props) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <MaxWidthWrapper>
                <Toaster richColors theme="dark" position="top-right" />
                <main className="mx-auto w-full relative">
                    {children}
                </main>
            </MaxWidthWrapper>
        </ThemeProvider>
    );
};

export default AuthLayout
