import JulioVerne from "../../src/assets/Julio_Verne.jpeg";
import DomQuixote from "../../src/assets/Dom_Quixote.jpg";
import IliadaOdisseia from "../../src/assets/Iliada_Odisseia.jpg";
import SenhorDosAneis from "../../src/assets/Senhor_dos_Aneis-Hobbit.jpg";
import Berserk_10 from "../../src/assets/Berserk_10.jpg";
import GeorgeOrwell from "../../src/assets/Geoger_Orwell.jpg";
import Vagabond_23 from "../../src/assets/Vagabond_23.jpg";
import OPequenoPrincipe from "../../src/assets/O_Pequeno_Principe.jpg";
import MobyDick from "../../src/assets/Moby_Dick.jpg";
import AArteDaGuerra from "../../src/assets/A_Arte_da_Guerra.jpg";

const defaultStore = [
    {
        id: 1,
        name: "BOX: As Extraordinárias Viagens de Júlio Verne",
        by: "Júlio Verne",
        price: 67.92,
        img: JulioVerne,
    },
    {
        id: 2,
        name: "BOX: Dom Quixote",
        by: "Miguel de Cervantes",
        price: 82.1,
        img: DomQuixote,
    },
    {
        id: 3,
        name: "BOX: Ilíada & Odisséia",
        by: "Homero",
        price: 92.98,
        img: IliadaOdisseia,
    },
    {
        id: 4,
        name: "BOX: Senhor do Anéis + O Hobbit",
        by: "J.R.R. Tolkien",
        price: 165.56,
        img: SenhorDosAneis,
    },
    {
        id: 5,
        name: "Berserk Deluxe Volume 10",
        by: "Kentaro Miura",
        price: 269.21,
        img: Berserk_10,
    },
    {
        id: 6,
        name: "BOX: George Orwell",
        by: "George Orwell",
        price: 89.99,
        img: GeorgeOrwell,
    },
    {
        id: 7,
        name: "Vagabond Volume 23",
        by: "Takehiko Inoue",
        price: 24.9,
        img: Vagabond_23,
    },
    {
        id: 8,
        name: "O Pequeno Príncipe",
        by: "Antoine de Saint-Exupéry",
        price: 12.9,
        img: OPequenoPrincipe,
    },
    {
        id: 9,
        name: "Moby Dick",
        by: "Christophe Chabouté - Texto Original: Herman Melville",
        price: 92.24,
        img: MobyDick,
    },
    {
        id: 10,
        name: "A Arte da Guerra",
        by: "Sun Tzu",
        price: 25.89,
        img: AArteDaGuerra,
    },
];

export default defaultStore;
