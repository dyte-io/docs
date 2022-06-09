export const getDocId = () => {
  const [, doc] = window.location.pathname.split('/');
  if (['docs', '', 'guides'].includes(doc)) return 'default';
  return doc;
};
