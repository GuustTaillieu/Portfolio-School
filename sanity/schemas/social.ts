import { defineField, defineType } from "sanity";

export default defineType({
  name: "social",
  title: "Social",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of social media",
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
    }),
  ],
});
