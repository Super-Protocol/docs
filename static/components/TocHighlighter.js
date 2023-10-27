export const onRouteDidUpdate = ({ location, previousLocation }) => {
  if (location.pathname === previousLocation?.pathname) return;

  const sections = Array.from(document.querySelectorAll("h2,h3"));
  const items = Array.from(
    document.querySelectorAll("a.table-of-contents__link")
  );

  const scrollHandler = (entries) => {
    const firsSection = entries.filter(
      (entry) => entry.intersectionRatio > 0
    )[0];

    if (firsSection) {
      items.forEach((item) => {
        item.classList?.remove("highlight");
      });

      const sectionId = firsSection.target.id;
      const sectionLink = document.querySelector(`a[href="#${sectionId}"]`);

      sectionLink.classList?.add("highlight");
    }
  };

  const observer = new IntersectionObserver(scrollHandler);

  sections.forEach((section) => observer.observe(section));
};
