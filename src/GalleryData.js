import { cars } from "../src/database/cars";
import { bike } from "../src/database/bike";
import { shani } from "../src/database/shani";
import { BudhwaMangal } from "../src/database/budhvamangal";
import { sitanavmi } from "../src/database/sitanavmi";
import { independence } from "../src/database/independence";
import { bakrieid } from "../src/database/bakrieid";

export const GalleryData = [
    ...cars,
    ...bike,
    ...shani,
    ...BudhwaMangal,
    ...sitanavmi,
    ...independence,
    ...bakrieid,
]