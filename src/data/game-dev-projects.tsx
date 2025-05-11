import { Project } from '@/data/project';

const GameDevProjects: Project[] = [
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
    {
        title: "2D Platformer Game",
        description: "A 2D platformer game built with Unity, featuring custom physics and animations.",
        tags: ['Unity', 'C#', 'Game Dev', 'Physics'],
        images: [
            { src: '/images/projects/ss4.png', caption: 'Level design' },
            { src: '/images/projects/ss5.png', caption: 'Character animations' },
            { src: '/images/projects/ss6.png', caption: 'Gameplay mechanics' },
        ],
        repoLink: ""
    },
];

export default GameDevProjects;