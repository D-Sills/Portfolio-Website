import { Project } from '@/data/project';

const GameDevProjects: Project[] = [
    {
        title: "Dungeon Crawler RPG",
        description: "A RoTMG inspired shmup roguelike created with C++ and SFML.",
        tags: ['Unity', 'C#', 'Game Dev', 'Custom Tools'],
        images: [
            { src: '/images/projects/dc1.png', caption: 'Main menu mockup' },
            { src: '/images/projects/dc2.png', caption: 'Inventory system' },
            { src: '/images/projects/dc3.png', caption: 'Dungeon generation' },
        ],
        repoLink: "",
    },
    {
        title: "Echoing Depths",
        description: "King's Field inspired dungeon crawler with a focus on exploration and atmosphere.",
        tags: ['Unity', 'C#', 'Game Dev', 'Physics'],
        images: [
            { src: '/images/projects/ed4.png', caption: 'Level design' },
            { src: '/images/projects/ed1.png', caption: 'Character animations' },
            { src: '/images/projects/ed5.png', caption: 'Gameplay mechanics' },
            { src: '/images/projects/ed6.png', caption: 'Lighting effects' },
        ],
        repoLink: ""
    },
    {
        title: "TicTacToe Ex",
        description: "An extended TicTacToe game created in Lua, with full mod support.",
        tags: ['Unity', 'C#', 'Game Dev', 'Custom Tools'],
        images: [
            { src: '/images/projects/ttt1.png', caption: 'Main menu mockup' },
            { src: '/images/projects/ttt2.png', caption: 'Inventory system' },
            { src: '/images/projects/ttt3.png', caption: 'Dungeon generation' },
        ],
        repoLink: ""
    },
    {
        title: "Synth_Wave",
        description: "A 2D rhythm shmup, created in Defold - targetting mobile - in just 24 hours.",
        tags: ['Unity', 'C#', 'Game Dev', 'Custom Tools'],
        images: [
            { src: '/images/projects/sw1.png', caption: 'Main menu mockup' },
            { src: '/images/projects/sw2.png', caption: 'Inventory system' },
            { src: '/images/projects/sw3.png', caption: 'Dungeon generation' },
        ],
        repoLink: ""
    },
    {
        title: "Demon Within",
        description: "An old-school text-based RPG leveraging twine and unity.",
        tags: ['Unity', 'C#', 'Game Dev', 'Custom Tools'],
        images: [
            { src: '/images/projects/dw3.png', caption: 'Main menu mockup' },
            { src: '/images/projects/dw4.png', caption: 'Inventory system' },
            { src: '/images/projects/dw2.png', caption: 'Dungeon generation' },
        ],
        repoLink: ""
    },
];

export default GameDevProjects;