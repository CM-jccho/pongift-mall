export const metadata = {
  title: "PonGift Mall",
  description: "Welcome to PonGift Mall",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
