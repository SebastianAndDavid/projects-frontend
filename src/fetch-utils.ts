const getAllProjects = async () => {
  const response = await fetch("http://localhost:8000/projects/all");
  const data = await response.json();
  return data;
};
const getAllHomeowners = async () => {
  const response = await fetch("http://localhost:8000/homeowners/all");
  const data = await response.json();
  return data;
};

const createHomeowner = async (data: object) => {
  const response = await fetch("http://localhost:8000/homeowners", {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  console.log("result", result);
  return result;
};
export { getAllProjects, getAllHomeowners, createHomeowner };
