import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { CustomLayout } from "@components";
import { Poppins } from "next/font/google";

// const geistSans = localFont({
//     src: "./fonts/GeistVF.woff",
//     variable: "--font-geist-sans",
//     weight: "100 900",
// });
// const geistMono = localFont({
//     src: "./fonts/GeistMonoVF.woff",
//     variable: "--font-geist-mono",
//     weight: "100 900",
// });

const poppins = Poppins({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "ACM PESMCOE",
    description:
        "The Association for Computing Machinery is an international learned society for computing. It was founded in 1947, and is the world's largest scientific and educational computing society. The ACM is a non-profit professional membership group, claiming nearly 100,000 student and professional members as of 2019.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={poppins.className}>
            <body className={`min-h-screen antialiased`}>
                {/* <Navbar /> */}
                <CustomLayout>{children}</CustomLayout>
            </body>
        </html>
    );
}
