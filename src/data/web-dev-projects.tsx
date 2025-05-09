import { Project } from '@/data/project';

const WebDevProjects: Project[] = [
    {
        title: "Dungeon Crawler RPG",
        description: "A retro-inspired Unity game with custom editor tooling and modular components.",
        tags: ['Unity', 'C#', 'Game Dev', 'Custom Tools'],
        images: [
            { src: '/images/projects/ss1.png', caption: 'Main menu mockup' },
            { src: '/images/projects/ss2.png', caption: 'Inventory system' },
            { src: '/images/projects/ss3.png', caption: 'Dungeon generation' },
        ],
        repoLink: "https://github.com/yourrepo",
    },
];

export default WebDevProjects;