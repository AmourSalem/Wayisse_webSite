export const api = {
  post: (route, data) => request(route, 'POST', data),
  get: (route) => request(route, 'GET'),
  put: (route, data) => request(route, 'PUT', data),
  delete: (route) => request(route, 'DELETE'),
};

const SERVER_URL = 'http://localhost:3000/api';

const request = async (path, method, data = null) => {
  const options = {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(`${SERVER_URL}${path}`, options);

    if (response.ok) {
      return response.json();
    }
    throw new Error(`Erreur de requête ${method} sur ${path}. Réponse du serveur avec statut ${response.status}`);
  } catch (error) {
    console.error('Erreur lors de la requête:', error.message);
    throw error;
  }
};
