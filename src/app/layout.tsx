// src/app/layout.tsx

export const metadata = {
  title: 'My App',
  description: 'A layout showcase app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  


  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
      </head>
      <body>{children}</body>
    </html>
  );
}
