import { create } from 'apisauce';

const api = create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: { 'Content-Type': 'application/json' }
});

export function fetchProjects() {
    return api.get('/projects/?ordering=pk');
}

export function getProjectDetail(id) {
    return api.get(`/projects/${id}`);
}

export function getSkills() {
    return api.get('/skills/');
}

export function getWorks() {
    return api.get('/works/?ordering=-from_date');
}

export function getWorkDetail(id) {
    return api.get(`/works/${id} `);
}
