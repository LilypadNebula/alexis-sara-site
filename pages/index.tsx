import Image from "next/image";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import client from "../.tina/__generated__/client";

export default function Home(
  props: AsyncReturnType<typeof getStaticProps>["props"]
) {
  const {
    data: {
      home_page: {
        body,
        first_image,
        second_image,
        first_image_desc,
        second_image_desc,
      },
    },
  } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <div className="flex justify-between w-full h-full">
      <div className="hidden md:flex flex-wrap w-1/2">
        {first_image && first_image_desc && (
          <div className="w-1/2 p-2 relative">
            <Image src={first_image} alt={first_image_desc} fill />
          </div>
        )}
        {second_image && second_image_desc && (
          <div className="w-1/2 p-2 relative">
            <Image src={second_image} alt={second_image_desc} fill />
          </div>
        )}
      </div>
      <div className="w-2/5 text-xl text-white">
        <TinaMarkdown content={body} />
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const tinaProps = await client.queries.home_page({
    relativePath: "index.json",
  });
  console.log(tinaProps.data);
  return {
    props: {
      data: tinaProps.data,
      query: tinaProps.query,
      variables: tinaProps.variables,
    },
  };
};
