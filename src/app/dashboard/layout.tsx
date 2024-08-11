import SideBar from "./_components/side-bar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center py-10 bg-[#f5f5f5]">
      <div className="flex flex-col max-w-7xl w-[90%] mb-10">
        <div className="flex gap-3">
          {/* Sidebar */}
          <div className=" w-full hidden lg:block flex-[0.2]">
            <SideBar />
          </div>
          {/* All Books */}
          <div className="w-full lg:flex-[0.8] ">{children}</div>
        </div>
      </div>
    </div>
  );
}
