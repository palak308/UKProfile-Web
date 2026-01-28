// Import all project images
import UdayKanadia from '../assets/UdayKanadiya.png';

// Government
import SkyWalks1 from '../assets/SkyWalks1.png';
import SkyWalks2 from '../assets/SkyWalks2.png';
import SVPMarket1 from '../assets/SVPMarket1.png';
import SVPMarket2 from '../assets/SVPMarket2.png';
import GrantRoadMarket1 from '../assets/GrantRoadMarket1.png';
import GrantRoadMarket2 from '../assets/GrantRoadMarket2.png';
import GrantRoadMarket3 from '../assets/GrantRoadMarket3.png';

// Township
import VillaCalifornia1 from '../assets/VillaCalifornia1.png';
import VillaCalifornia2 from '../assets/VillaCalifornia2.png';
import BalajiHomes1 from '../assets/BalajiHomes1.png';
import BalajiHomes2 from '../assets/BalajiHomes2.png';
// Using placeholders for unlaunched township
import LargeIntegrated1 from '../assets/LargeIntegrated1.png'; 
import LargeIntegrated2 from '../assets/LargeIntegrated2.png';

// Residential & Redevelopment
import TheErra1 from '../assets/TheErra1.png';
import TheErra2 from '../assets/TheErra2.png';
import WindsorResidency from '../assets/WindsorResidency.png';
import OrionChs1 from '../assets/OrionChs1.png';
import OrionChs2 from '../assets/OrionChs2.png';
import DLHSquare from '../assets/DLHSquare.png';
import DLHOrchid1 from '../assets/DLHOrchid1.png';
import DLHOrchid2 from '../assets/DLHOrchid2.png';
import MeetiDiamond from '../assets/MeetiDiamond.png';
import DivyaDarpan from '../assets/DivyaDarpan.png';
import OmRameshwarChs from '../assets/OmRameshwarChs.png';
import JashodaCHS from '../assets/JashodaCHS.png';
import NewParijat from '../assets/NewParijat.png';
import Shivner from '../assets/Shivner.png';
import KuntiKunj from '../assets/KuntiKunj.png';
import ArieaDeGoa1 from '../assets/ArieaDeGoa1.png';
import ArieaDeGoa2 from '../assets/ArieaDeGoa2.png';
import MeetiJewells from '../assets/MeetiJewells.png';
import Shrishti from '../assets/Shrishti.png';
import LuminarsFlint from '../assets/LuminarsFlint.png';
import GardenEnclave from '../assets/GardenEnclave.png';
import JayAmrut from '../assets/JayAmrut.png';
import LuminairesOlive from '../assets/LuminairesOlive.png';
import SaiGrandeur from '../assets/SaiGrandeur.png'; // Used for Ghatkopar Resi

// Commercial
import BrynksArya from '../assets/BrynksArya.png';
import Cosmos from '../assets/Cosmos.png';
import RajputMall from '../assets/RajputMall.png';
import RajputMallBhiwandi from '../assets/RajputMallBhiwandi.png';

// Hotels
import SaiGrandeurRealtors1 from '../assets/SaiGrandeurRealtors1.png'; // Used for Lonavla Hotel
import SaiGrandeurRealtors2 from '../assets/SaiGrandeurRealtors2.png';
import AnandHotel from '../assets/AnandHotel.png';

// Export the map
// Value is now an ARRAY of images. The first one will be the thumbnail.
export const imageMap = {
  // Company Info
  "director": [UdayKanadia],

  // Government
  "sky-walks": [SkyWalks1, SkyWalks2],
  "svp-market": [SVPMarket1, SVPMarket2],
  "grant-road-market": [GrantRoadMarket1, GrantRoadMarket2, GrantRoadMarket3],

  // Township
  "township-unlaunched": [LargeIntegrated1, LargeIntegrated2], // Placeholder from existing assets
  "villa-california": [VillaCalifornia1, VillaCalifornia2],
  "balaji-homes": [BalajiHomes1, BalajiHomes2],

  // Residential & Redevelopment
  "the-erra": [TheErra1, TheErra2],
  "meeti-diamond": [MeetiDiamond],
  "windsor-residency": [WindsorResidency],
  "divya-darpan": [DivyaDarpan],
  "orion-chs": [OrionChs1, OrionChs2],
  "om-rameshwar": [OmRameshwarChs],
  "orion-chs-2": [OrionChs1, OrionChs2], // Sharing images for phase 2
  "dlh-square": [DLHSquare],
  "dlh-orchid": [DLHOrchid1, DLHOrchid2],
  "jashoda-chs": [JashodaCHS],
  "new-parijat": [NewParijat],
  "shivner": [Shivner],
  "kunti-kunj": [KuntiKunj],
  "ariea-de-goa": [ArieaDeGoa1, ArieaDeGoa2],
  "meeti-jewells": [MeetiJewells],
  "shrishti": [Shrishti],
  "luminars-flint": [LuminarsFlint],
  "garden-enclave": [GardenEnclave],
  "jay-amrut": [JayAmrut],
  "luminaires-olive": [LuminairesOlive],
  "sai-grandeur-ghatkopar": [SaiGrandeur],

  // Commercial
  "brynks-arya": [BrynksArya],
  "cosmos": [Cosmos],
  "rajput-mall-boisar": [RajputMall],
  "rajput-mall-bhiwandi": [RajputMallBhiwandi],

  // Hotels
  "sai-grandeur-hotel": [SaiGrandeurRealtors1, SaiGrandeurRealtors2],
  "anand-hotel": [AnandHotel]
};

export default imageMap;
