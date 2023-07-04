import { useTina } from "tinacms/dist/react";
import client from "../.tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaMarkdownContent } from "tinacms/dist/rich-text";

export default function About(
  props: AsyncReturnType<typeof getStaticProps>["props"]
) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const [emailStart, emailEnd] = data.contact_page.email?.split(
    "@"
  ) as string[];
  return (
    <div className="text-white">
      <a href={`https://tumblr.com/${data.contact_page.tumblr}`}> Tumblr </a>
      <p>
        Email: {emailStart}
        <span className="hidden">
          This is to prevent spam bots from copy pasting my email
        </span>
        @{emailEnd}
      </p>
    </div>
  );
}
export const getStaticProps = async () => {
  const tinaProps = await client.queries.contact_page({
    relativePath: "index.json",
  });
  return {
    props: {
      data: tinaProps.data,
      query: tinaProps.query,
      variables: tinaProps.variables,
    },
  };
};
