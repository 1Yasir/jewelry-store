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

import bangleMain from "../assets/products/emerald-heritage-bangle-1.jpeg";
import bangleAngle2 from "../assets/products/emerald-heritage-bangle-2.jpeg";
import bangleAngle3 from "../assets/products/emerald-heritage-bangle-3.jpeg";
import bangleAngle4 from "../assets/products/emerald-heritage-bangle-4.jpeg";
import bangleAngle5 from "../assets/products/emerald-heritage-bangle-5.jpeg";
import bangleAngle6 from "../assets/products/emerald-heritage-bangle-6.png";

import celestialMain from "../assets/products/celestial-layered-pendant-necklace-1.jpeg";
import celestialAngle2 from "../assets/products/celestial-layered-pendant-necklace-2.jpeg";
import celestialAngle3 from "../assets/products/celestial-layered-pendant-necklace-3.jpeg";

import cloverMain from "../assets/products/lucky-clover-drop-earrings-1.jpeg";
import cloverAngle2 from "../assets/products/lucky-clover-drop-earrings-2.jpeg";
import cloverAngle3 from "../assets/products/lucky-clover-drop-earrings-3.jpeg";
import cloverAngle4 from "../assets/products/lucky-clover-drop-earrings-4.jpeg";

import pearlSetMain from "../assets/products/golden-pearl-charm-jewelry-set-1.jpeg";
import pearlSetAngle2 from "../assets/products/golden-pearl-charm-jewelry-set-2.jpeg";
import pearlSetAngle3 from "../assets/products/golden-pearl-charm-jewelry-set-3.jpeg";
import pearlSetAngle4 from "../assets/products/golden-pearl-charm-jewelry-set-4.jpeg";

export const imageMaps = {
  hoops: {
    main: hoopsMain,
    angles: [hoopsMain, hoopsAngle2, hoopsAngle3, hoopsAngle4, hoopsAngle5]
  },
  necklace: {
    main: necklaceMain,
    angles: [necklaceMain, necklaceAngle2, necklaceAngle3, necklaceAngle4, necklaceAngle5]
  },
  "emerald-bangle": {
    main: bangleMain,
    angles: [bangleMain, bangleAngle2, bangleAngle3, bangleAngle4, bangleAngle5 , bangleAngle6]
  },
  "celestial-necklace": {
    main: celestialMain,
    angles: [celestialMain, celestialAngle2, celestialAngle3]
  },
  "clover-earrings": {
    main: cloverMain,
    angles: [cloverMain, cloverAngle2, cloverAngle3, cloverAngle4]
  },
  "pearl-jewelry-set": {
    main: pearlSetMain,
    angles: [pearlSetMain, pearlSetAngle2, pearlSetAngle3, pearlSetAngle4]
  }
};