import Image from "next/image";
import client from "../.tina/__generated__/client";
import { Project } from "../.tina/__generated__/types";

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="border rounded-md border-white 
          flex flex-col w-1/4 transition hover:scale-105 
          hover:shadow-lg hover:shadow-hotPink"
        >
          {project.image && (
            <div className="h-32 relative overflow-hidden rounded-md">
              <Image
                src={project.image}
                alt={`Image for ${project.title}`}
                width="500"
                height="500"
              />
            </div>
          )}
          <div className="p-6  bg-white">
            <p className="text-3xl mb-6 font-highlight">{project.title}</p>
            <p className="mb-6">{project.desc}</p>
            {project.url && (
              <a href={project.url} className="underline">
                Find it here!
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
export const getStaticProps = async () => {
  const projects = await (
    await client.queries.projectConnection()
  ).data.projectConnection.edges?.map((edge) => ({
    title: edge?.node?.title,
    url: edge?.node?.url,
    desc: edge?.node?.desc,
    image: edge?.node?.image,
    id: edge?.node?.id,
  }));
  return {
    props: { projects },
  };
};
