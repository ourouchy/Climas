import { PhotoCategory } from "@/components/PhotoAlbum";

export const samplePhotoData: PhotoCategory[] = [
  {
    id: "technicool",
    name: "Clima'S",
    thumbnail: "https://ext.same-assets.com/3359485804/2092674471.jpeg",
    photos: [
      {
        id: "van-1",
        src: "https://ext.same-assets.com/3359485804/2092674471.jpeg",
        alt: "Clima'S van parked outside company building",
        title: "Company Vehicle"
      },
      {
        id: "van-2", 
        src: "https://ext.same-assets.com/3359485804/2092674471.jpeg",
        alt: "Clima'S branded van with company details",
        title: "Service Vehicle"
      }
    ]
  },
  {
    id: "domestic",
    name: "Domestic Work",
    thumbnail: "https://ext.same-assets.com/3359485804/282902617.jpeg",
    photos: [
      {
        id: "domestic-1",
        src: "https://ext.same-assets.com/3359485804/282902617.jpeg",
        alt: "Domestic air conditioning installation",
        title: "Residential Installation"
      },
      {
        id: "domestic-2",
        src: "https://ext.same-assets.com/3359485804/3142369264.jpeg",
        alt: "Home air conditioning unit",
        title: "Domestic Unit"
      }
    ]
  },
  {
    id: "commercial",
    name: "Commercial",
    thumbnail: "https://ext.same-assets.com/3359485804/1811531807.jpeg",
    photos: [
      {
        id: "commercial-1",
        src: "https://ext.same-assets.com/3359485804/1811531807.jpeg",
        alt: "Commercial air conditioning installation",
        title: "Office Installation"
      },
      {
        id: "commercial-2",
        src: "https://ext.same-assets.com/3359485804/1811531807.jpeg",
        alt: "Commercial HVAC system",
        title: "Business HVAC"
      }
    ]
  },
  {
    id: "ducting",
    name: "Ducting",
    thumbnail: "https://ext.same-assets.com/3359485804/282902617.jpeg",
    photos: [
      {
        id: "ducting-1",
        src: "https://ext.same-assets.com/3359485804/282902617.jpeg",
        alt: "Ventilation ductwork installation",
        title: "Ductwork System"
      },
      {
        id: "ducting-2",
        src: "https://ext.same-assets.com/3359485804/282902617.jpeg",
        alt: "HVAC ducting work",
        title: "Ventilation Installation"
      }
    ]
  },
  {
    id: "koolduct",
    name: "Koolduct",
    thumbnail: "https://ext.same-assets.com/3359485804/282902617.jpeg",
    photos: [
      {
        id: "koolduct-1",
        src: "https://ext.same-assets.com/3359485804/282902617.jpeg",
        alt: "Koolduct specialized ducting",
        title: "Koolduct System"
      }
    ]
  },
  {
    id: "r32-case-study",
    name: "R32 Case Study",
    thumbnail: "https://ext.same-assets.com/3359485804/282902617.jpeg",
    photos: [
      {
        id: "r32-1",
        src: "https://ext.same-assets.com/3359485804/282902617.jpeg",
        alt: "R32 refrigerant case study project",
        title: "R32 Refrigerant Project"
      }
    ]
  },
  {
    id: "no-condensation",
    name: "No more condensation",
    thumbnail: "https://ext.same-assets.com/3359485804/282902617.jpeg",
    photos: [
      {
        id: "condensation-1",
        src: "https://ext.same-assets.com/3359485804/282902617.jpeg",
        alt: "Condensation control solution",
        title: "Moisture Control"
      }
    ]
  },
  {
    id: "maintenance",
    name: "Maintenance service",
    thumbnail: "https://ext.same-assets.com/3359485804/282902617.jpeg",
    photos: [
      {
        id: "maintenance-1",
        src: "https://ext.same-assets.com/3359485804/282902617.jpeg",
        alt: "Air conditioning maintenance service",
        title: "Maintenance Work"
      }
    ]
  }
];

// Different photo sets for different pages
export const domesticPhotoData: PhotoCategory[] = [
  {
    id: "residential-installations",
    name: "Residential Installations",
    thumbnail: "https://ext.same-assets.com/3359485804/3142369264.jpeg",
    photos: [
      {
        id: "res-1",
        src: "https://ext.same-assets.com/3359485804/3142369264.jpeg",
        alt: "Home air conditioning unit",
        title: "Domestic Unit Installation"
      }
    ]
  },
  {
    id: "home-heating",
    name: "Home Heating",
    thumbnail: "https://ext.same-assets.com/3359485804/282902617.jpeg",
    photos: [
      {
        id: "heating-1",
        src: "https://ext.same-assets.com/3359485804/282902617.jpeg",
        alt: "Home heating system",
        title: "Heating Installation"
      }
    ]
  }
];

export const commercialPhotoData: PhotoCategory[] = [
  {
    id: "office-systems",
    name: "Office Systems",
    thumbnail: "https://ext.same-assets.com/3359485804/1811531807.jpeg",
    photos: [
      {
        id: "office-1",
        src: "https://ext.same-assets.com/3359485804/1811531807.jpeg",
        alt: "Office air conditioning system",
        title: "Office HVAC"
      }
    ]
  },
  {
    id: "retail-installations",
    name: "Retail Installations",
    thumbnail: "https://ext.same-assets.com/3359485804/1811531807.jpeg",
    photos: [
      {
        id: "retail-1",
        src: "https://ext.same-assets.com/3359485804/1811531807.jpeg",
        alt: "Retail space air conditioning",
        title: "Retail HVAC"
      }
    ]
  }
];
