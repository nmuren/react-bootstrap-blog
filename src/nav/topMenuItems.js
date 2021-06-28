const topMenuItems = () => {
  const menuItems = [
    {
      title: "HOME",
      path: "home",
    },
    {
      title: "FEATURES",
      path: "features",
      children: [
        {
          title: "Feature 1",
          path: "feature1",
        },
        {
          title: "Feature 2",
          path: "feature2",
        },
        {
          title: "Feature 3",
          path: "feature3",
        },
      ],
    },
    {
      title: "BLOG",
      path: "blog",
    },
    {
      title: "CATEGORIES",
      path: "categories",
      children: [
        {
          title: "Category 1",
          path: "category1",
        },
        {
          title: "Category 2",
          path: "category2",
        },
        {
          title: "Category 3",
          path: "category3",
        },
      ],
    },
    {
      title: "ABOUT",
      path: "about/55",
    },
    {
      title: "CONTACT",
      path: "contact",
    },
  ];

  return menuItems;
};

export default topMenuItems;
