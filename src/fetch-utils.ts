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

const getProjectByID = async (id: string) => {
  const response = await fetch(`http://localhost:8000/projects/${id}`);
  const result = response.json();
  return result;
};

const getAllProjectsByHomeownerId = async (id: number) => {
  const response = await fetch(
    `http://localhost:8000/projects/homeowners/${id}`
  );
  const result = await response.json();
  return result;
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
  return result;
};

const updateHomeowner = async (id: number, data: object) => {
  const response = await fetch(`http://localhost:8000/homeowners/${id}`, {
    method: "Put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
};

const createProject = async (data: object) => {
  const response = await fetch("http://localhost:8000/projects", {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
};

const getHomeownerById = async (id: string) => {
  const response = await fetch(`http://localhost:8000/homeowners/${id}`);
  const result = await response.json();
  return result;
};

const updateProject = async (id: number, data: object) => {
  const response = await fetch(`http://localhost:8000/projects/${id}`, {
    method: "Put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
};

const getAllReadOnlyPhases = async () => {
  const response = await fetch("http://localhost:8000/seedPhases");
  const result = await response.json();
  return result;
};

const getAllReadOnlyTasksByMilestoneId = async (id: number) => {
  const response = await fetch(`http://localhost:8000/seedPhases/${id}`);
  const result = await response.json();
  return result;
};

const getAllReadOnlyMilestones = async () => {
  const response = await fetch(
    "http://localhost:8000/seedPhases/all/milestones"
  );
  const result = await response.json();
  return result;
};

const getMilestoneByPhaseId = async (id: number) => {
  const response = await fetch(
    `http://localhost:8000/seedPhases/milestone/${id}`
  );
  const result = await response.json();
  return result;
};

export {
  getAllProjects,
  getAllHomeowners,
  createHomeowner,
  updateHomeowner,
  createProject,
  getAllProjectsByHomeownerId,
  getHomeownerById,
  updateProject,
  getProjectByID,
  getAllReadOnlyPhases,
  getAllReadOnlyTasksByMilestoneId,
  getAllReadOnlyMilestones,
  getMilestoneByPhaseId,
};
