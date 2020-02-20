const Main = require("@architect/views/main.js");
const staticAssetsHelper = require("./static-assets-helper");

// Customize your site by changing the data below
exports.handler = async function Index() {
  let body = Main({
    /**
     * Basic bio
     */
    fullname: "Fieldbender", // ←  Start by adding your name!
    title: "Fieldbenders change their reality here!",
    occupation: "Living beyond the circumference",
    location: "Denver, CO",
    bio: "Go deeper - discover your authentic self, who you were meant to be",

    /**
     * Contact / social
     * - Comment out any item below to remove it from your page
     */
    email: "jb@fieldbender.com",
    twitter: "yourTwitter",
    linkedin: "your-linkedin-name",
    instagram: "yourInsta",
    facebook: "your-facebook-name",

    /**
     * Layout
     */
    photographer: "Ivana Cajina",
    service: "Unsplash",
    credit: "https://unsplash.com/@von_co",
    image: staticAssetsHelper("background.jpg")
    // or link to an external image URL such as ↓
    // image: 'https://images.unsplash.com/photo-1506535772317-9fdb71c959c6'
  });

  return {
    headers: {
      "content-type": "text/html; charset=utf8",
      "cache-control":
        "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0"
    },
    body
  };
};
