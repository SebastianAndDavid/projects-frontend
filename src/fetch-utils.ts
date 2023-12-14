const getAllProjects = async () => {
  const response = await fetch("http://localhost:8000/projects/all");
  const data = await response.json();
  console.log("data", data);
  return data;
};
const getAllHomeowners = async () => {
  const response = await fetch("http://localhost:8000/homeowners/all");
  const data = await response.json();
  console.log("data", data);
  return data;
};

export { getAllProjects, getAllHomeowners };
