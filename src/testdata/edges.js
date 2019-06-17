const edges = [
  {
    from: 37,
    to: 29,
    id: '06bf9a07-8246-47c2-8619-68dc0ff2781b',
  },
  {
    from: 14,
    to: 48,
    id: '98a3dc00-09f8-4e08-9522-e01490c229d2',
  },
  {
    from: 29,
    to: 14,
    id: 'e0a97c4b-74f5-4123-9636-cdfa4b98619a',
  },
  {
    from: 20,
    to: 36,
    id: '5b9b7db4-6732-4e91-bec3-9c181514d23c',
  },
  {
    from: 36,
    to: 54,
    id: 'e9e99b89-6a48-4291-9c18-780ebdef4dc4',
  },
];

const modifiedEdges = edges.map((edge) => ({
  edgeGraphData: {
    id: edge.id,
    from: edge.from,
    to: edge.to,
  },
}));

export default modifiedEdges;
