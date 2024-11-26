import Link from "next/link"

export default function RootLayout({
    children,
}:{
    children: React.ReactNode
}) {
    return<html lang="en">
        <body>
            <ul>
                <li><Link href="/" >Home</Link></li>
                <li><Link href="/dashboard">Dashboard</Link> </li>
                <li><Link href="/dashboard/indicators">Indicators</Link></li>
                <li><Link href="/dashboard/settings">Settings</Link></li>
            </ul>
            {children}
        </body>
    </html>
}