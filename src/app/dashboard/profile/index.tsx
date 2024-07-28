const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center font-semibold text-4xl my-20">
        Hi, Symon Alex
      </h1>

      <div className="w-[600px] grid gap-4">
        <div className="grid grid-cols-12">
          <div className="col-span-3 font-semibold">First Name</div>
          <div className="col-span-2">:</div>
          <div className="col-span-7">Symon</div>
        </div>

        <div className="grid grid-cols-12">
          <div className="col-span-3 font-semibold">Lase Name</div>
          <div className="col-span-2">:</div>
          <div className="col-span-7">Alex</div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-3 font-semibold">Email</div>
          <div className="col-span-2">:</div>
          <div className="col-span-7">symonalex@gmail.com</div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-3 font-semibold">Description</div>
          <div className="col-span-2">:</div>
          <div className="col-span-7 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            consequuntur voluptates nobis nosdivum corporis tempora excepturi
            animi aperiam fugiat ex.
          </div>
        </div>
      </div>
      <button className="py-1 px-5  rounded-md border border-peace-400 text-peace-400 my-8">
        Update Profile
      </button>
    </div>
  );
};

export default Profile;
