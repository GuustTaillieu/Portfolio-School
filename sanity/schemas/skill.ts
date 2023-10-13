import { defineField, defineType } from "sanity";

export default defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    defineField({
      name: "skillTitle",
      title: "SkillTitle",
      type: "string",
    }),
    defineField({
      name: "skillImage",
      title: "SkillImage",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "progress",
      title: "Progress",
      type: "number",
      description: "Progress in percentage",
      validation: (Rule) => Rule.min(0).max(100),
    }),
  ],
});
