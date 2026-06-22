// 📦 src/data/imagesData.js

// --- 1. Images Local Imports ---
import hoopsMain from "../assets/products/golden-halo-hoops-1.jpeg";
import hoopsAngle2 from "../assets/products/golden-halo-hoops-2.jpeg";
import hoopsAngle3 from "../assets/products/golden-halo-hoops-3.jpeg";
import hoopsAngle4 from "../assets/products/golden-halo-hoops-4.jpeg";
import hoopsAngle5 from "../assets/products/golden-halo-hoops-5.jpeg";

import necklaceMain from "../assets/products/rose-gold-textured-hoop-earrings-1.jpeg";
import necklaceAngle2 from "../assets/products/rose-gold-textured-hoop-earrings-2.jpeg";
import necklaceAngle3 from "../assets/products/rose-gold-textured-hoop-earrings-3.jpeg";
import necklaceAngle4 from "../assets/products/rose-gold-textured-hoop-earrings-4.jpeg";
import necklaceAngle5 from "../assets/products/rose-gold-textured-hoop-earrings-5.jpeg";

// --- 2. Image Sets Mapping Object ---
export const imageMaps = {
  hoops: {
    main: hoopsMain,
    angles: [hoopsMain, hoopsAngle2, hoopsAngle3, hoopsAngle4, hoopsAngle5]
  },
  necklace: {
    main: necklaceMain,
    angles: [necklaceMain, necklaceAngle2, necklaceAngle3, necklaceAngle4, necklaceAngle5]
  }
};