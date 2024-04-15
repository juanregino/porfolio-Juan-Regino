
import SpanHeader from "./SpanHeader";


const NavProjects = ({ handleSelect }) => {
  const text = ["Todos", "FullStack", "FrontEnd", "BackEnd"];

  return (
    <>
      <nav className="rounded-full  border border-white/10 flex justify-center items-center lg:gap-x-4 md:px-4 py-2 px-2 bg-white/5 cursor-pointer ">
        {text.map((e) => (
          <SpanHeader
            key={e}
            onClick={() => {
              handleSelect(e);
            }}
          >
            {e}
          </SpanHeader>
        ))}
      </nav>
    </>
  );
};

export default NavProjects;
