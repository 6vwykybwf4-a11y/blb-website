import "./globals.css";
export const metadata = {
  title: 'BLB Website',
  description: 'Brothers Legacy Blueprint',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
