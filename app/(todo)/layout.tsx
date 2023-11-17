export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className='mx-auto p-2 w-1/2'>{children}</div>;
}
