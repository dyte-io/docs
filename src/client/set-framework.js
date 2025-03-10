export function onRouteUpdate({ location, previousLocation }) {
  if (location.pathname !== previousLocation?.pathname) {
    const searchParams = new URLSearchParams(location.search);
    const frameWorkParam = searchParams.get('framework');
    if (frameWorkParam) {
      localStorage.setItem('docusaurus.tab.framework', frameWorkParam);
    }
  }
  return undefined;
}
