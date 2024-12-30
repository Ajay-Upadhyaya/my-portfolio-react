function P_language(props) {
  const { icon, lan } = props.language;
  return (
    <div className="flex">
      <div className="bg-neutral-500 flex rounded-sm py-2 px-3 box-border my-3 cursor-pointer hover:bg-orange-400">
        <p>{icon}</p>
        <p className="font-semibold">{lan}</p>
      </div>
    </div>
  );
}

export default P_language;
