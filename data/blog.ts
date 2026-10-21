export const BLOG_POSTS = [
  {
    slug: "coordinating-building-services",
    title: "Behind the ceiling: bringing building services together",
    category: "Construction",
    image: "/service-img/mep-01.jpg",
    alt: "Coordinated pipes and building services above an industrial workshop",
    excerpt: "A closer look at the coordination that connects mechanical, electrical and plumbing work on site.",
    sections: [
      { title: "One space, several systems", text: "A ceiling void carries much more than lighting. Ductwork, pipework, cable containment and access routes share the same space. Planning how they fit together helps installation teams work in sequence and keeps the finished building easier to maintain." },
      { title: "Resolve interfaces early", text: "Coordination starts with the relationship between services and the structure. Teams need to understand where equipment sits, how routes cross and which areas must remain accessible. Reviewing these interfaces before closing ceilings gives everyone a clearer picture of the installation." },
      { title: "Think beyond installation", text: "An installation should also support inspection, testing and future maintenance. Clear identification, accessible equipment and records of the completed work help the people who will operate the building after handover." },
    ],
  },
  {
    slug: "organised-network-cabling",
    title: "Why organised cabling matters inside a network rack",
    category: "Technology",
    image: "/img/network-cable-dressing-01.jpg",
    alt: "Alfa Gulf technician organising network cables",
    excerpt: "Cable routing, identification and access make a difference long after the installation is complete.",
    sections: [
      { title: "Make the connections understandable", text: "Network racks bring many connections into a small area. A clear layout and consistent identification help technicians trace those connections without disturbing unrelated equipment. Organisation is part of a usable installation, rather than just a finishing detail." },
      { title: "Leave room to work", text: "Routing should take equipment access and future changes into account. Cable management needs to suit the installation and the cable manufacturer's requirements. Avoiding crowded access points makes routine inspection and replacement more practical." },
      { title: "Keep records with the installation", text: "Port schedules, labels and test records should describe the same system. When records match the installed connections, maintenance teams have a useful starting point for troubleshooting and planned expansion." },
    ],
  },
  {
    slug: "industrial-floor-finishes",
    title: "Industrial flooring starts with the way a space is used",
    category: "Construction",
    image: "/service-img/floor-epoxy-01.jpg",
    alt: "Blue industrial flooring around workshop equipment",
    excerpt: "Planning a floor finish around equipment, movement and day-to-day maintenance.",
    sections: [
      { title: "Understand the working environment", text: "A workshop floor serves people, equipment and material movement. Selecting a finish starts with understanding those uses, the condition of the substrate and the environment in which the floor will operate. A product's suitability needs to be checked against the project's requirements." },
      { title: "Preparation is part of the finish", text: "The finished appearance depends on the work beneath it. Assessment, preparation and application should follow the specified system and its manufacturer's instructions. Planning these activities alongside other trades helps protect the work during installation." },
      { title: "Plan the finished layout", text: "Colour zones and markings can help communicate how a workshop is organised. Agreeing the layout with the operating team before application connects the floor design to the actual arrangement of machines and working areas." },
    ],
  },
  {
    slug: "materials-ready-for-installation",
    title: "Getting project materials ready for installation",
    category: "Materials",
    image: "/service-img/finishes-01.jpg",
    alt: "Materials and finishing work at a project site",
    excerpt: "How delivery planning, storage and coordination support the next team on site.",
    sections: [
      { title: "Connect deliveries to the programme", text: "Material supply is most useful when it follows the installation sequence. Understanding what the team needs next helps organise deliveries and reduces the amount of material waiting in active work areas." },
      { title: "Check and protect", text: "Delivery checks provide an opportunity to compare materials with the order and project requirements. Storage should respect product instructions and site conditions, with identification that makes it easy to locate the right items when work begins." },
      { title: "Keep the handover clear", text: "Good coordination includes knowing which materials have arrived, where they are stored and whether anything needs attention. Sharing that information with the installation team supports a smoother transition from procurement to work on site." },
    ],
  },
]

export type BlogPost = (typeof BLOG_POSTS)[number]
