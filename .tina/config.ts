import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "f866d4fb-2652-4915-8ef4-d38482adc9b7", // Get this from tina.io
  token: "022a092f9dd5cd1d41d0d68c1434b8f19fd2e7ab", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "home_page",
        label: "Home Page",
        path: "content/home-page",
        format: "json",
        fields: [
          {
            type: "image",
            name: "first_image",
            label: "First Image",
          },
          {
            type: "string",
            name: "first_image_desc",
            label: "First Image Description",
          },
          {
            type: "image",
            name: "second_image",
            label: "Second Image",
          },
          {
            type: "string",
            name: "second_image_desc",
            label: "Second Image Description",
          },
          { type: "rich-text", name: "body", label: "Body", isBody: true },
        ],
        ui: {
          router: () => "/",
          global: true,
        },
      },
      {
        name: "about_page",
        label: "About Page",
        path: "content/about-page",
        format: "json",
        fields: [
          { type: "rich-text", name: "body", label: "Body", isBody: true },
        ],
        ui: {
          router: () => "/about",
          global: true,
        },
      },
      {
        name: "project",
        label: "Projects",
        format: "json",
        path: "content/projects",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          { type: "image", name: "image", label: "Project Image" },
          {
            type: "string",
            name: "desc",
            label: "Description",
            required: true,
          },
          {
            type: "string",
            name: "url",
            label: "Link to Project",
            ui: {
              validate: (value) => {
                if (!value) return;
                try {
                  new URL(value);
                } catch {
                  return "Must be a valid URL";
                }
              },
            },
          },
        ],
      },
    ],
  },
});
