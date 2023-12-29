import { defineField, defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({
      name: "jobTitle",
      title: "JobTitle",
      type: "string",
    }),
    defineField({
      name: "companyName",
      title: "CompanyName",
      type: "string",
    }),
    defineField({
      name: "companyLogo",
      title: "CompanyLogo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "experienceType",
      title: "ExperienceType",
      type: "string",
      options: {
        list: [
          { title: "Work", value: "work" },
          { title: "Education", value: "education" },
        ],
      },
    }),
    defineField({
      name: "dateStarted",
      title: "DateStarted",
      type: "date",
    }),
    defineField({
      name: "dateEnded",
      title: "DateEnded",
      type: "date",
    }),
    defineField({
      name: "isCurrentlyWorkingHere",
      title: "IsCurrentlyWorkingHere",
      type: "boolean",
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "skill" }],
        },
      ],
    }),
    defineField({
      name: "jobPoints",
      title: "JobPoints",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    }),
  ],
});
