export const activity = {
  name: "activity",
  title: "Activity / News",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required()
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required()
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Plantation", value: "plantation" },
          { title: "Urban Development", value: "urban-development" },
          { title: "Blood Donation", value: "blood-donation" },
          { title: "Health Support", value: "health-support" },
          { title: "Education", value: "education" },
          { title: "Other", value: "other" }
        ]
      }
    },
    {
      name: "date",
      title: "Activity Date",
      type: "date"
    },
    {
      name: "location",
      title: "Location",
      type: "string"
    },
    {
      name: "summary",
      title: "Short Summary",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(240)
    },
    {
      name: "body",
      title: "Full Description",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true }
    },
    {
      name: "galleryImages",
      title: "Gallery Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true }
        }
      ]
    },
    {
      name: "videoUrls",
      title: "Video Links",
      type: "array",
      of: [{ type: "url" }]
    },
    {
      name: "featured",
      title: "Feature on Homepage",
      type: "boolean",
      initialValue: false
    },
    {
      name: "published",
      title: "Published",
      type: "boolean",
      initialValue: true
    }
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "coverImage"
    }
  }
};
