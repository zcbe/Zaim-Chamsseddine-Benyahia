import React from "react";

const WorkCard = ({ img, name, description,tech, onClick }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
      onClick={onClick}
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "600px" }}
      >
        <img
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
        ></img>
      </div>
      <h3 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h3>
      <h4 className="text-xl">
        {description ? description : "Description"}
      </h4>
      <h4 className="font-bold border border-blue-300 p-2 flex items-center justify-center rounded-md rounded-lg text-center whitespace-normal">
        {tech ? tech : "Technlogies"}
      </h4>
    </div>
  );
};

const WorkCardWithPreload = ({ img, name, description, tech, onClick }) => {
  return (
    <>
      <link rel="preload" href={img} as="image" />
      <WorkCard img={img} name={name} description={description} tech={tech} onClick={onClick} />
    </>
  );
};

export default WorkCardWithPreload;
