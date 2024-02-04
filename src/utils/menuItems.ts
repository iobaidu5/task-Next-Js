export interface SubmenuItem {
  text: string;
  link: string;
}

export interface MenuItem {
  id: number;
  text: string;
  link: string;
  sub_menu?: SubmenuItem[];
}

export class MenuItemsUtil {
  static generateMenuItems(): MenuItem[] {
    return [
      {
        id: 1,
        text: "Stock Video",
        link: "/stock-video",
        sub_menu: [
          { text: "Stock Footage", link: "/stock-video/stock-footage" },
          { text: "Motion Graphics", link: "/stock-video/motion-graphics" },
        ],
      },
      {
        id: 2,
        text: "Video Templates",
        link: "/video-templates",
        sub_menu: [
          {
            text: "After Effects",
            link: "/video-templates/compatible-with-after-effects",
          },
          {
            text: "Premiere Pro",
            link: "/video-templates/compatible-with-premiere-pro",
          },
          {
            text: "Apple Motion",
            link: "/video-templates/compatible-with-apple-motion",
          },
          {
            text: "Final Cut Pro",
            link: "/video-templates/compatible-with-final-cut-pro",
          },
          {
            text: "DaVinci Resolve",
            link: "/video-templates/compatible-with-davinci-resolve",
          },
        ],
      },
      {
        id: 3,
        text: "Music",
        link: "/audio",
        sub_menu: [
          { text: "Royalty Free Music", link: "/audio/royalty-free-music" },
          { text: "Logos & Idents", link: "/audio/logos-and-idents" },
        ],
      },
      {
        id: 4,
        text: "Sound Effects",
        link: "/sound-effects",
        sub_menu: [
          { text: "Game Sounds", link: "/sound-effects/game-sounds" },
          {
            text: "Transitions & Movement",
            link: "/sound-effects/transitions-and-movement",
          },
          { text: "Domestic Sounds", link: "/sound-effects/domestic-sounds" },
          { text: "Human Sounds", link: "/sound-effects/human-sounds" },
          { text: "Urban Sounds", link: "/sound-effects/urban-sounds" },
          { text: "Nature Sounds", link: "/sound-effects/nature-sounds" },
          {
            text: "Futuristic Sounds",
            link: "/sound-effects/futuristic-sounds",
          },
          { text: "Interface Sounds", link: "/sound-effects/interface-sounds" },
          { text: "Cartoon Sounds", link: "/sound-effects/cartoon-sounds" },
          {
            text: "Industrial Sounds",
            link: "/sound-effects/industrial-sounds",
          },
          { text: "Sound Packs", link: "/sound-effects/sound-packs" },
          { text: "Miscellaneous", link: "/sound-effects/miscellaneous" },
          { text: "Sound", link: "/sound-effects/sound" },
        ],
      },
      {
        id: 5,
        text: "Graphic Templates",
        link: "/graphic-templates",
        sub_menu: [
          {
            text: "Adobe Photoshop",
            link: "/graphic-templates/compatible-with-adobe-photoshop",
          },
          {
            text: "Adobe Illustrator",
            link: "/graphic-templates/compatible-with-adobe-illustrator",
          },
          {
            text: "Adobe InDesign",
            link: "/graphic-templates/compatible-with-adobe-indesign",
          },
          {
            text: "Adobe XD",
            link: "/graphic-templates/compatible-with-adobe-xd",
          },
          { text: "Figma", link: "/graphic-templates/compatible-with-figma" },
          { text: "Sketch", link: "/graphic-templates/compatible-with-sketch" },
        ],
      },
      {
        id: 6,
        text: "Graphics",
        link: "/graphics",
        sub_menu: [
          { text: "Backgrounds", link: "/graphics/backgrounds" },
          { text: "Textures", link: "/graphics/textures" },
          { text: "Social", link: "/graphics/social" },
          { text: "Patterns", link: "/graphics/patterns" },
          { text: "Icons", link: "/graphics/icons" },
          { text: "Objects", link: "/graphics/objects" },
          { text: "Illustrations", link: "/graphics/illustrations" },
        ],
      },
      {
        id: 7,
        text: "Presentation Templates",
        link: "/presentation-templates",
        sub_menu: [
          {
            text: "Keynote",
            link: "/presentation-templates/compatible-with-keynote",
          },
          {
            text: "PowerPoint",
            link: "/presentation-templates/compatible-with-powerpoint",
          },
          {
            text: "Google Slides",
            link: "/presentation-templates/compatible-with-google-slides",
          },
        ],
      },
      {
        id: 8,
        text: "Photos",
        link: "/photos",
        sub_menu: [{ text: "Photos", link: "/photos" }],
      },
      {
        id: 9,
        text: "Fonts",
        link: "/fonts",
        sub_menu: [
          { text: "Serif", link: "/fonts/serif" },
          { text: "Sans-Serif", link: "/fonts/sans-serif" },
          {
            text: "Script and Handwritten",
            link: "/fonts/script-and-handwritten",
          },
          { text: "Decorative", link: "/fonts/decorative" },
        ],
      },

      {
        id: 16,
        text: "WordPress",
        link: "/wordpress",
        sub_menu: [
          { text: "WordPress Themes", link: "/wordpress/wordpress-themes" },
          { text: "WordPress Plugins", link: "/wordpress/wordpress-plugins" },
        ],
      },

      {
        id: 17,
        text: "More",
        link: "/more",
        sub_menu: [
          { text: "App Landing Pages", link: "/more/app-more" },
          { text: "Agency Landing Pages", link: "/more/agency-more" },
          { text: "Corporate Landing Pages", link: "/more/corporate-more" },
          { text: "eCommerce Landing Pages", link: "/more/ecommerce-more" },
          {
            text: "Product Landing Pages",
            link: "/more/product-landing-pages",
          },
        ],
      },
    ];
  }
}
