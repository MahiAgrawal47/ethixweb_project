const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const TOKEN_KEY = 'ethixweb_admin_token';
export const ADMIN_KEY = 'ethixweb_admin_user';

export const getAuthToken = () => localStorage.getItem(TOKEN_KEY);
export const setAuthToken = (token) => localStorage.setItem(TOKEN_KEY, token);
export const removeAuthToken = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(ADMIN_KEY);
};
export const isAuthenticated = () => Boolean(getAuthToken());

export const getAdminUser = () => {
  try {
    const raw = localStorage.getItem(ADMIN_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export const setAdminUser = (user) => {
  localStorage.setItem(ADMIN_KEY, JSON.stringify(user));
};

const defaultHeaders = () => {
  const headers = {
    'Content-Type': 'application/json'
  };
  const token = getAuthToken();
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return headers;
};

// Helper for standardized API fetch calls
async function request(endpoint, options = {}) {
  const url = `${API_URL}${endpoint}`;
  const config = {
    ...options,
    headers: {
      ...defaultHeaders(),
      ...options.headers
    }
  };

  try {
    const res = await fetch(url, config);
    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      const errorMsg = data.message || `Request failed with status ${res.status}`;
      return { success: false, status: res.status, message: errorMsg, data: null };
    }

    return { success: true, status: res.status, ...data };
  } catch (err) {
    return {
      success: false,
      status: 0,
      message: 'Unable to connect to the server. Please check your network or backend connection.'
    };
  }
}

// Public API
export const submitLead = async (leadData) => {
  return request('/api/leads', {
    method: 'POST',
    body: JSON.stringify(leadData)
  });
};

// Auth API
export const adminLogin = async (credentials) => {
  return request('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials)
  });
};

export const verifyAdminSession = async () => {
  return request('/api/auth/me', {
    method: 'GET'
  });
};

// Admin Leads API (Protected)
export const getLeads = async () => {
  return request('/api/leads', {
    method: 'GET'
  });
};

export const getLead = async (id) => {
  return request(`/api/leads/${id}`, {
    method: 'GET'
  });
};

export const updateLeadStatus = async (id, status) => {
  return request(`/api/leads/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ status })
  });
};

export const deleteLead = async (id) => {
  return request(`/api/leads/${id}`, {
    method: 'DELETE'
  });
};
