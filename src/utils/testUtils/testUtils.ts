export const createTestContainer = () => {
  const container = document.createElement("div");
  document.body.appendChild(container);

  return container;
};
