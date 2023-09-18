/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */
//the code is running on the browser
//window is an object scope
window.products = [
  //Pearls
  {
    id: "p1",
    title: "Fresh Pearl Necklace",
    description:
      "Elegant freshwater pearl necklace with a sterling silver clasp.",
    price: 24800, //248
    discontinued: false,
    imageUrl:
      "https://assets.angara.com/strands/sp1427fwpr/7-8mm-corrugated-ball-yellow-gold-strands_2.jpg?width=856&quality=95",
    categories: ["c1"], //[] to ensure the property contains an array of values
  },

  {
    id: "p2",
    title: "Pearl Stud Earrings",
    description: "Classic pearl stud earrings with diamond.",
    price: 7800, //78
    discontinued: false,
    imageUrl:
      "https://assets.angara.com/earrings/se1235akprd/8mm-aaa-akoya-cultured-pearl-white-gold-earrings_3.jpg?width=856&quality=95",
    categories: ["c1", "c2"],
  },

  {
    id: "p3",
    title: "Tahitian Pearl Ring",
    description: "Luxurious Tahitian pearl ring with a diamond surrounding.",
    price: 15800, //158
    discontinued: false,
    imageUrl:
      "https://assets.angara.com/ring/sr1329thprd/10mm-aaa-tahitian-cultured-pearl-white-gold-ring.jpg?width=256&quality=95",
    categories: ["c1", "c2"],
  },
  {
    id: "p4",
    title: "Pearl Necklace",
    description: "Classic pearl necklace with a sterling silver clasp.",
    price: 7500, // 75
    discontinued: false,
    imageUrl:
      "https://assets.angara.com/necklace/sp0869ssprd/10mm-aaa-south-sea-cultured-pearl-white-gold-necklace.jpg?width=384&quality=95",
    categories: ["c1"],
  },
  {
    id: "p5",
    title: "Pearl Drop Earrings",
    description: "Elegant pearl drop earrings with 14K silver hooks.",
    price: 3900, // 39
    discontinued: false,
    imageUrl:
      "https://assets.angara.com/earrings/se1534fwpr/8mm-aaaa-freshwater-cultured-pearl-white-gold-earrings.jpg?width=384&quality=95",
    categories: ["c1"],
  },
  {
    id: "p6",
    title: "Pearl Bracelet",
    description: "Charming pearl bracelet with a delicate silver chain.",
    price: 2800, // 28
    discontinued: false,
    imageUrl:
      "https://assets.angara.com/bracelet/sb0218pr/5.5-6.5mm-a-freshwater-cultured-pearl-s999-silver-bracelet.jpg?width=256&quality=95",
    categories: ["c1"],
  },
  {
    id: "p7",
    title: "Pearl Ring",
    description: "Beautiful pearl ring with a silver-plated band.",
    price: 4600, // 46
    discontinued: false,
    imageUrl:
      "https://assets.angara.com/ring/sr1340fwprd/8mm-aaa-freshwater-cultured-pearl-white-gold-ring.jpg?width=384&quality=95",
    categories: ["c1", "c2"],
  },
  //Gems&Diamonds
  {
    id: "g1",
    title: "Diamond Necklace",
    description: "Exquisite diamond necklace with a platinum pendant.",
    price: 450000, //450
    discontinued: true,
    imageUrl:
      "https://bnsec.bluenile.com/bluenile/is/image/bluenile/-jewelry/necklaces/diamond-eternity-necklace-/5287_hero?$phab_detailmain$",
    categories: ["c2"],
  },
  {
    id: "g2",
    title: "Ruby Ring",
    description: "Stunning ruby ring with a golden band.",
    price: 9500, //95
    discontinued: false,
    imageUrl:
      "https://assets.angara.com/ring/sr0218r_n/6x4mm-aaaa-ruby-yellow-gold-ring.jpg?width=256&quality=95",
    categories: ["c2"],
  },
  {
    id: "g3",
    title: "Emerald Earrings",
    description: "Elegant emerald earrings with Dazzling sapphire settings.",
    price: 14500, //145
    discontinued: false,
    imageUrl:
      "https://assets.angara.com/earrings/lse1081ed/7x5mm-labgrown-lab-grown-emerald-white-gold-earrings.jpg?width=256&quality=95",
    categories: ["c3", "c2"],
  },
  {
    id: "g4",
    title: "Sapphire Necklace",
    description: "Beautiful pink sapphire necklace with a diamond pendant.",
    price: 6800, // 68
    discontinued: false,
    imageUrl:
      "https://assets.angara.com/pendant/sp0704psd/8x5mm-aaa-pink-sapphire-white-gold-pendant.jpg?width=256&quality=95",
    categories: ["c3", "c2"],
  },
  {
    id: "g5",
    title: "Diamond Stud Earrings",
    description: "Classic diamond stud earrings with a silver setting.",
    price: 7800, // 78
    discontinued: false,
    imageUrl:
      "https://assets.angara.com/earrings/se1710d/3.5mm-gvs2-diamond-white-gold-earrings.jpg?width=256&quality=95",
    categories: ["c2"],
  },
  {
    id: "g6",
    title: "Emerald Bracelet",
    description: "Gorgeous emerald bracelet with a yellow gold clasp.",
    price: 10500, // 105
    discontinued: false,
    imageUrl:
      "https://assets.angara.com/bracelet/sb0166ed/2mm-aaa-emerald-yellow-gold-bracelet.jpg?width=384&quality=95",
    categories: ["c2"],
  },
  {
    id: "g7",
    title: "Ruby Pendant",
    description: "Dazzling ruby pendant necklace with a delicate chain.",
    price: 5900, // 59
    discontinued: false,
    imageUrl:
      "https://assets.angara.com/assets/homepage/necklaces/heart.jpg?width=384&quality=95",
    categories: ["c2"],
  },
  //Stones
  {
    id: "s1",
    title: "Sapphire Bracelet",
    description: "Dazzling sapphire bracelet with a sterling silver clasp.",
    price: 18000, //180
    discontinued: false,
    imageUrl:
      "https://assets.angara.com/bracelet/sb0373sd/5x3mm-aaa-blue-sapphire-white-gold-bracelet.jpg?width=256&quality=95",
    categories: ["c2", "c3"],
  },
  {
    id: "s2",
    title: "Amethyst Pendant",
    description: "Beautiful amethyst pendant necklace with a delicate chain.",
    price: 7000, //70
    discontinued: false,
    imageUrl:
      "https://assets.angara.com/pendant/sp0530am/7x5mm-aaa-amethyst-10k-white-gold-pendant.jpg?width=384&quality=95",
    categories: ["c3"],
  },
  {
    id: "s3",
    title: "Topaz Ring",
    description: "Gorgeous topaz ring in a unique, modern design.",
    price: 10000, //100
    discontinued: false,
    imageUrl:
      "https://assets.angara.com/ring/sr1458sbtd/8mm-aaaa-swiss-blue-topaz-white-gold-ring.jpg?width=256&quality=95",
    categories: ["c3"],
  },
  {
    id: "s4",
    title: "Garnet Necklace",
    description: "Elegant garnet necklace with a sterling silver clasp.",
    price: 5500, // 55
    discontinued: false,
    imageUrl:
      "https://assets.angara.com/necklace/sp1638gd/6x4mm-aaa-garnet-white-gold-necklace.jpg?width=384&quality=95",
    categories: ["c2", "c3"],
  },
  {
    id: "s5",
    title: "Citrine Earrings",
    description: "Beautiful citrine earrings with a yellow gold setting.",
    price: 4200, // 42
    discontinued: false,
    imageUrl:
      "https://assets.angara.com/earrings/se1390ctd/8mm-aaaa-citrine-yellow-gold-earrings.jpg?width=256&quality=95",
    categories: ["c3"],
  },
  {
    id: "s6",
    title: "Peridot Ring",
    description: "Gorgeous peridot ring in a classic design.",
    price: 3800, // 38
    discontinued: false,
    imageUrl:
      "https://assets.angara.com/ring/sr0169pd/5x3mm-aaaa-peridot-p950-platinum-ring.jpg?width=384&quality=95",
    categories: ["c2", "c3"],
  },
  {
    id: "s7",
    title: "Opal Bracelet",
    description: "Exquisite opal bracelet with a rose gold clasp.",
    price: 6200, // 62
    discontinued: false,
    imageUrl:
      "https://assets.angara.com/bracelet/sb0373fopd/6x4mm-aaa-fire-opal-white-gold-bracelet_3.jpg?width=856&quality=95",
    categories: ["c3"],
  },
];
