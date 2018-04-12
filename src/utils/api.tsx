import { create } from 'apisauce';

const api = create({
    baseURL: 'https://portfolio-rest-api.herokuapp.com/api',
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
