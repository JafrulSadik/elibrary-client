import Link from "next/link";

const TopWriters = () => {
  return (
    <div className="text-sm">
      <div>
        <div className="flex items-center px-3 gap-2 py-1">
          <input type="checkbox" className="accent-peace-400 " />
          <Link href="">Symon Alex</Link>
        </div>
        <hr className="bg-gray-300 h-[0.5px] my-1" />
      </div>
      <div>
        <div className="flex items-center px-3 gap-2 py-1">
          <input type="checkbox" className="accent-peace-400 " />
          <Link href="">Nitesh Rahman</Link>
        </div>
        <hr className="bg-gray-300 h-[0.5px] my-1" />
      </div>
      <div>
        <div className="flex items-center px-3 gap-2 py-1">
          <input type="checkbox" className="accent-peace-400 " />
          <Link href="">Tanvir Mahmood</Link>
        </div>
        <hr className="bg-gray-300 h-[0.5px] my-1" />
      </div>
      <div>
        <div className="flex items-center px-3 gap-2 py-1">
          <input type="checkbox" className="accent-peace-400 " />
          <Link href="">Humayun Ahmed</Link>
        </div>
        <hr className="bg-gray-300 h-[0.5px] my-1" />
      </div>
      <div>
        <div className="flex items-center px-3 gap-2 py-1">
          <input type="checkbox" className="accent-peace-400 " />
          <Link href="">Arif Azad</Link>
        </div>
        <hr className="bg-gray-300 h-[0.5px] my-1" />
      </div>
    </div>
  );
};

export default TopWriters;
