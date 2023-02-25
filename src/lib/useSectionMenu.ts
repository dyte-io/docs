import useRouteContext from '@docusaurus/useRouteContext';
import { SECTIONS, SECTION_GROUPS } from '../sections';

export function useSectionMenu() {
  const routeContext = useRouteContext();
  const docId = routeContext.plugin.id;

  const currentSection = SECTIONS.find((item) => item.docId === docId)?.section;

  if (currentSection) {
    for (const sections of SECTION_GROUPS) {
      if (sections.some((section) => section.section === currentSection)) {
        return {
          docId,
          currentSection,
          groups: sections.map((section) => {
            return {
              ...section,
              docs: SECTIONS.filter((item) => item.section === section.section),
            };
          }),
        };
      }
    }

    return {
      docId,
      currentSection,
      sections: SECTIONS.filter(
        (section) => section.section === currentSection
      ),
    };
  }

  return { docId };
}
