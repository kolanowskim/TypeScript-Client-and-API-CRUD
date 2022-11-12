export type AllStars = [ {
    id: number;
    name: string;
    description: string;
    link: string;
} 
]

export type Star = {
    id: number;
    name: string;
    description: string;
    link: string;
}

export type AllConstellations = [ {
    id: number;
    name: string;
    description: string;
    link: string;
} 
]

export type Constellation = {
    id: number;
    name: string;
    description: string;
    link: string;
}

export type StarConstellation = {
    starID: number;
    constellationID: number;
}