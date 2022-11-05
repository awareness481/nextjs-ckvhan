export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <h1>Next 13.0.2 App Dir</h1>
        <div>{children}</div>
      </body>
    </html>
  );
}
