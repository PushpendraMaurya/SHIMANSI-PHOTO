// Build a full image list from the supplied folder. All filenames are referenced directly.
const allImages = [
  "Skirt.jpeg",
  "Skirt_shirt.jpeg",
  "WhatsApp Image 2026-08-09 at 3.35.44 PM.jpeg",
  "WhatsApp Image 2026-08-09 at 3.35.45 PM (1).jpeg",
  "WhatsApp Image 2026-08-09 at 3.35.45 PM (2).jpeg",
  "WhatsApp Image 2026-08-09 at 3.35.45 PM.jpeg",
  "WhatsApp Image 2026-08-09 at 3.35.46 PM (1).jpeg",
  "WhatsApp Image 2026-08-09 at 3.35.46 PM (2).jpeg",
  "WhatsApp Image 2026-08-09 at 3.35.46 PM.jpeg",
  "WhatsApp Image 2026-08-09 at 3.35.47 PM (1).jpeg",
  "WhatsApp Image 2026-08-09 at 3.35.47 PM.jpeg",
  "WhatsApp Image 2026-08-09 at 3.35.48 PM.jpeg",
  "WhatsApp Image 2026-08-09 at 3.36.43 PM.jpeg",
  "WhatsApp Image 2026-08-09 at 3.46.57 PM (1).jpeg",
  "WhatsApp Image 2026-08-09 at 3.46.57 PM.jpeg",
  "WhatsApp Image 2026-08-09 at 3.46.59 PM.jpeg",
  "WhatsApp Image 2026-08-09 at 3.47.00 PM.jpeg",
  "WhatsApp Image 2026-08-09 at 3.47.01 PM (1).jpeg",
  "WhatsApp Image 2026-08-09 at 3.47.01 PM.jpeg",
  "WhatsApp Image 2026-08-09 at 3.47.04 PM (1).jpeg",
  "WhatsApp Image 2026-08-09 at 3.47.04 PM.jpeg",
  "WhatsApp Image 2026-08-09 at 3.47.05 PM.jpeg",
  "WhatsApp Image 2026-08-09 at 3.47.06 PM (1).jpeg",
  "WhatsApp Image 2026-08-09 at 3.47.06 PM.jpeg",
  "WhatsApp Image 2026-08-09 at 3.47.07 PM (1).jpeg",
  "WhatsApp Image 2026-08-09 at 3.47.07 PM (2).jpeg",
  "WhatsApp Image 2026-08-09 at 3.47.07 PM.jpeg",
  "WhatsApp Image 2026-08-09 at 4.00.15 PM (1).jpeg",
  "WhatsApp Image 2026-08-09 at 4.00.15 PM (2).jpeg",
  "WhatsApp Image 2026-08-09 at 4.00.15 PM.jpeg",
  "WhatsApp Image 2026-08-09 at 4.00.16 PM (1).jpeg",
  "WhatsApp Image 2026-08-09 at 4.00.16 PM (2).jpeg",
  "WhatsApp Image 2026-08-09 at 4.00.16 PM.jpeg",
  "WhatsApp Image 2026-08-09 at 4.00.17 PM (1).jpeg",
  "WhatsApp Image 2026-08-09 at 4.00.17 PM.jpeg",
  "cleaner.jpeg",
  "cleaner_2.jpeg",
  "cloth.jpeg",
  "cloth1.jpeg",
  "cloth2.jpeg",
  "cloth4.jpeg",
  "cloth6.jpeg",
  "college_1.jpeg",
  "crafting1.jpeg",
  "crafting2.jpeg",
  "crafting3.jpeg",
  "crafting4.jpeg",
  "crafting5.jpeg",
  "crafting7.jpeg",
  "design_frame1.jpeg",
  "design_frame2.jpeg",
  "design_frame4.jpeg",
  "design_frame8.jpeg",
  "dress1.jpeg",
  "dress2.jpeg",
  "dress_design1.jpeg",
  "dress_design2.jpeg",
  "dress_design3.jpeg",
  "dress_design4.jpeg",
  "handmaking_image1.jpeg",
  "handmaking_image2.jpeg",
  "handmaking_image3.jpeg",
  "handmaking_image4.jpeg",
  "handmaking_image5.jpeg",
  "handmaking_image6.jpeg",
  "handmaking_image7.jpeg",
  "handmaking_image8.jpeg",
  "handmaking_image9.jpeg",
  "shirt_collar.jpeg",
  "sketch1.jpeg",
  "shimansi_new.jpeg",
  "shimansi_logo.jpeg"
];

const heroImages = [
  "dress_design2.jpeg",
  "dress_design3.jpeg",
  "dress_design4.jpeg",
  "college_1.jpeg",
  "shimansi_new.jpeg"
];

const projects = [
  {
    id: 'gallery',
    title: 'Portfolio Gallery',
    category: 'Selected Work',
    year: '',
    role: '',
    cover: allImages[0],
    images: allImages,
    description: 'Curated selection of photography and textile work from supplied assets.'
  }
];

// Contact extracted from resume (do not invent other details)
const contact = {
  email: 'shimansibsc@gmail.com',
  phone: '9451331347'
};

// Experience placeholder: please paste exact experience text if you want richer entries.
const experience = [
  {
    company: 'Seeking Fashion Design Opportunity',
    position: 'Fashion Designer',
    dates: 'Open to Opportunities',
    location: 'Noida, Delhi, Jaipur, Uttar Pradesh, Gujarat',
    description: 'Aspiring Fashion Designer seeking an opportunity to gain professional experience, develop creative skills, and contribute to a dynamic fashion team. Open to learning, collaboration, and exploring new design concepts.'
  }
];

const process = [
  {step: 'Research', text: 'Understanding context, trend and material references', image: allImages[2]},
  {step: 'Concept', text: 'Translate research into a clear visual direction', image: allImages[8]},
  {step: 'Experiment', text: 'Material, surface and color exploration', image: allImages[16]},
  {step: 'Development', text: 'Sampling and iteration', image: allImages[24]},
  {step: 'Final', text: 'Final outcomes and presentation', image: allImages[32]}
];
