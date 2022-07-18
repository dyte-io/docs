import useRouteContext from '@docusaurus/useRouteContext';
import { SECTIONS, MULTI_SECTIONS } from '../sections';

export default function useSectionMenu() {
  const routeContext = useRouteContext();

  const id = routeContext.plugin.id;

  let sections = false,
    isMultiSection = false;

  const currentSection = SECTIONS.find((item) => item.id === id)?.section;

  if (typeof currentSection === 'string') {
    for (const multiSection of MULTI_SECTIONS) {
      const sectionsIterator = multiSection.map((section) => section.section);

      if (sectionsIterator.includes(currentSection)) {
        isMultiSection = true;
        sections = {
          currentSection,
          data: {},
        };

        for (const { name, section, description } of multiSection) {
          sections.data[section] = {
            name,
            description,
            items: SECTIONS.filter((item) => item.section === section),
          };
        }
      }
    }

    if (!isMultiSection) {
      sections = SECTIONS.filter((item) => item.section === currentSection);
    }
  }

  return { id, sections, isMultiSection };
}
