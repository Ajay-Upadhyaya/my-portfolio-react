// eslint-disable-next-line react/prop-types
function Box(props) {
  const { icon, heading, para } = props.services;
  return (
    <div className=" bg-neutral-700 w-96 h-64 my-8 ml-3 rounded-md py-9 mx-10">
      <div>
        <p className=" flex items-center justify-center py-1">{icon}</p>
        <h2 className="text-center font-bold text-xl mt-2 py-2">{heading}</h2>
        <p className=" text-zinc-400 text-center max-w-[80%] m-auto">{para}</p>
      </div>
    </div>
  );
}

export default Box;
