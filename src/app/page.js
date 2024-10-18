import React from "react";
import Image from "next/image";
const TAB_DATA = [
    {
        title: "Compétences",
        content: (
            <ul className="list-disc pl-2">
                <li>Python</li>
                <li>HTML/CSS/Javascript/PHP/TypeScript</li>
                <li>MySQL/SQLite/PostgreSQL</li>
                <li>Java</li>
                <li>C++</li>
                <li>Logiciel CAO SolidWorks</li>
            </ul>
        ),
    },
    {
        title: "Parcours",
        content: (
            <ul className="list-disc pl-2">
                <li>BUT Informatique à l'IUT de Lens</li>
                <li>Baccalauréat STI2D Option ITEC au Lycée Carnot Bruay-la-buissiere</li>
            </ul>
        ),
    },
    {
        title: "Loisirs",
        content: (
            <ul className="list-disc pl-2">
                <li>Mécanique</li>
                <li>Électronique</li>
                <li>Impression 3D</li>
                <li>Jeux Vidéo</li>
                <li>Musique</li>
                <li>Voyage</li>
            </ul>
        ),
    },
];
const projectsData = [
    {
        id: 1,
        title: "Marathon du web",
        description: "Le marathon du web est un evenement organisé par l'IUT de Lens ou des étudiants de MMI et Informatique sont en groupe pendant 2 jours. L'objectif était de faire un site ou on peut créer et lire des histoires où on est le héros.Project 1 description",
        image: "/images/projects/1.webp",
    },
    {
        id: 2,
        title: "Flatcraft",
        description: "Flatcraft est un projet scolaire en java fx. L'objectif est de recréer un minecraft en 2d, avec une base donnée. Il y a les mêmes dimensions que minecraft.",
        image: "/images/projects/2.webp",
    },
    {
        id: 3,
        title: "Amélioration Imprimante 3D",
        description: "Modification afin d'ajouter un palpeur de plateau pour compenser les défauts de planéité du plateau d'impression pour cela soudure sur la carte mère et flash avec un firmware personnalisé",
        image: "/images/projects/3.webp",
    },
    {
        id: 4,
        title: "Voiture RC 3D / Microcontrolleur",
        description: "Conception chassis et electronique d'une voiture de RC completement imprimer en 3D",
        image: "/images/projects/4.webp",
    },
    {
        id: 5,
        title: "Reparation pc portable",
        description: "Suite a une chute d'un ordinateur portable les fixations de la charniere était ireparable j'ai donc tout demonter afin de remplacer les coques de l'ordinateur portable",
        image: "/images/projects/5.jpg",
    },
    {
        id: 6,
        title: "Tirette de bras de fauteuil",
        description: "Modélisation et impression 3D d'une tirette de bras de fauteuil a cassé grâce à la modélisation et impression 3D le fauteuil est de nouveau utilisable.",
        image: "/images/projects/6.webp",
    },
];
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212]">
            <div className="container mt-24 mx-auto px-12 py-4">
                <section className="lg:py-16">
                    <div className="grid grid-cols-1 sm:grid-cols-12">
                        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-red-700">
                                    Bonjour, Je suis Thomas Juet
                                </span>
                            </h1>
                            <p className="text-[#9ED0E6] text-base sm:text-lg mb-6 lg:text-xl">
                                Alternant en 3ème année BUT Informatique à l'IUT de Lens
                            </p>
                            <div>
                                <a
                                    href="mailto:thomas.juet7@gmail.com"
                                    className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-300 to-red-700 hover:bg-slate-200 text-white"
                                >
                                    Contactez-moi
                                </a>
                                <a
                                    href="/Cv.pdf" download
                                    className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-300 to-red-700 hover:bg-slate-800 text-white mt-3"
                                >
                                    <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                        Télécharger mon CV
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
                            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                                <Image
                                    src="/images/profile.webp"
                                    alt="image de profile"
                                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="text-white" id="about">
                    <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                            <h2 className="text-4xl font-bold text-white mb-4">À propos de moi</h2>
                            <p className="text-base lg:text-lg">
                                Je m'appelle Thomas Juet, j'ai 20 ans et je suis étudiant en BUT Informatique à l'IUT de Lens.<br />
                                Je suis passionné par le fait d'apprendre de nouvelles choses en particulier dans le domaine
                                informatique et mécanique.<br />
                                Je me passionne aussi pour l'impression 3D en particulier pour la modification matériel et logiciel des
                                imprimantes 3D.<br />
                                J'apprends aussi plusieurs langues l'Anglais via la communication avec des personnes à l'étranger ainsi
                                que le Coréen.<br />
                            </p>
                        </div>
                        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                            <div className="flex flex-row justify-start mt-8">
                                {TAB_DATA.map((tabData, index) => (
                                    <button key={index} className="mr-3 font-semibold hover:text-white">
                                        {tabData.title}
                                    </button>
                                ))}
                            </div>
                            <div className="mt-8">
                                {TAB_DATA[0].content} {}
                            </div>
                        </div>
                    </div>
                </section>
                <section id="projects">
                    <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                        Mes Projets
                    </h2>
                    <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
                        {projectsData.map((project) => (
                            <li key={project.id}>
                                <div className="project-card">
                                    <div
                                        className="h-52 md:h-72 rounded-t-xl relative group"
                                        style={{ background: `url(${project.image})`, backgroundSize: "cover" }}
                                    ></div>
                                    <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
                                        <h5 className="text-xl font-semibold mb-2">{project.title}</h5>
                                        <p className="text-[#ADB7BE]">{project.description}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
            <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
                <div className="container p-12 flex justify-between">
                    <span>Thomas Juet 2024-2025</span>
                </div>
            </footer>
        </main>
    );
}
