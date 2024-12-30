function Head() {
  return (
    <div className="flex justify-between bg-black text-white py-2">
      <div className="pt-5px box-border pl-8">
        <img
          src="./logo.png"
          alt="logo"
          className="size-11 ml-5 rounded-full"
        />
      </div>
      <div className="pt-7px box-border mr-6">
        <ul className="flex gap-10 justify-start mt-2 text-base font-bold">
          <li className="hover:text-orange-300 cursor-pointer">HOME</li>
          <li className="hover:text-orange-300 cursor-pointer">RESUME</li>
          <li className="hover:text-orange-300 cursor-pointer">ABOUT ME</li>
          <li className="hover:text-orange-300 cursor-pointer">CONTACT</li>
        </ul>
      </div>
    </div>
  );
}
export default Head;
