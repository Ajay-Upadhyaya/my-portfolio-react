function Foot() {
  return (
    <div className="bg-black box-border py-5 flex">
      <div className="ml-24 py-3 px-1">
        <h1 className="text-white font-bold text-4xl leading-15">
          Lets work together on your <br /> next project
        </h1>
        <p className="text-zinc-400 text-justify box-border pt-5 max-w-[70%]">
          Collaboration is key! Lets join forces and combine our skills to
          tackle your next project with a powerful synergy that guarantees
          success.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <button className="box-border py-1 px-6 bg-red-600 text-white rounded-md font-medium mt-16 hover:bg-orange-500">
          Contact
        </button>
      </div>
    </div>
  );
}

export default Foot;
