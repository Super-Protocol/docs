export const onRouteDidUpdate = ({ location, previousLocation }) => {
  if (location.pathname === previousLocation?.pathname) return;

  const sections = Array.from(document.querySelectorAll("h2,h3"));
  const scrollHandler = (entries) => {
    entries.forEach((entry) => {
      const section = entry.target;
      const sectionId = section.id;
      const sectionLink = document.querySelector(`a[href="#${sectionId}"]`);

      if (sectionLink) {
        if (entry.intersectionRatio > 0) {
          sectionLink.classList?.add("highlight");
        } else {
          sectionLink.classList?.remove("highlight");
        }
      }
    });
  };

  const observer = new IntersectionObserver(scrollHandler);

  sections.forEach((section) => observer.observe(section));
};
