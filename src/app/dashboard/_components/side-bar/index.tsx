import SidebarLinks from "../sidebar-links";

const menuItems = [
  {
    title: "My Profile",
    path: "/dashboard",
  },
  {
    title: "Favourite",
    path: "/dashboard/favourite-books",
  },
  {
    title: "My Books",
    path: "/dashboard/my-books",
  },
  {
    title: "Add a book",
    path: "/dashboard/add-book",
  },
];

const SideBar = () => {
  return (
    <div className=" p-5 rounded-md border border-gray-300  bg-white">
      {/* Popular Cateogry */}
      <div className="">
        <h1 className="text-center text-sm font-semibold">Hi, Symon Alex</h1>
        <hr className="bg-gray-400 h-[1px] my-3" />
      </div>
      <div className="flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <SidebarLinks key={index} title={item.title} path={item.path} />
        ))}
        <button className="text-center rounded-md py-[0.3rem] w-full bg-peace-400 text-white hover:border-[1px] hover:bg-white hover:text-peace-400 border-peace-400 ">
          Logout
        </button>
      </div>
    </div>
  );
};

export default SideBar;
