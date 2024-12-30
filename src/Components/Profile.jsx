function Profile() {
  return (
    <div className="bg-neutral-950 text-white flex box-border py-9 ">
      <div className="ml-10 box-border p-5 max-w-[50%]">
        <h2 className="text-red-500 font-medium ">Hello, My name is</h2>
        <h1 className="text-3xl font-semibold text-white mt-3">
          Ajay Upadhyaya
        </h1>
        <p className="mt-4 text-zinc-400 max-w-[70%]">
          A passionate and dedicated junior web-developer, driven by the
          ever-evolving world of technology and its limitless possibilities.
        </p>
        <button className="box-border py-1 px-6 bg-red-600 text-white rounded-md font-medium mt-5 hover:bg-orange-500">
          Contact Me
        </button>
      </div>
      <div>
        <img
          src="./pic2.jpg"
          alt="Profile picture"
          className=" size-72 rounded-sm hover:opacity-90 shadow-lg-slate-300"
        />
      </div>
    </div>
  );
}

export default Profile;
