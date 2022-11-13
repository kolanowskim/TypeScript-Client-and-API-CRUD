import { AllStars, Star, AllConstellations, Constellation, StarConstellation } from "../models/types";
export declare const getStars: () => Promise<AllStars[]>;
export declare const getStar: (id: string) => Promise<Star>;
export declare const addStar: (star: Star) => Promise<boolean>;
export declare const deleteStar: (id: string) => Promise<boolean>;
export declare const getConstellations: () => Promise<AllConstellations[]>;
export declare const addConstellation: (constellation: Constellation) => Promise<boolean>;
export declare const getAllConstellationsForStar: (id: string) => Promise<[]>;
export declare const addStarConstellation: (starconstellation: StarConstellation) => Promise<boolean>;
//# sourceMappingURL=mysql.services.d.ts.map