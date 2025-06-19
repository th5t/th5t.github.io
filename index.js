// index.js

// This script can be used to enhance interactivity on your landing page.
// For now, here's a simple effect that logs when elements are hovered.

document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".title");
  const robloxLink = document.querySelector(".roblox-link img");

  if (title) {
    title.addEventListener("mouseenter", () => {
      console.log("Hovered over title");
    });

    title.addEventListener("mouseleave", () => {
      console.log("Left title");
    });
  }

  if (robloxLink) {
    robloxLink.addEventListener("mouseenter", () => {
      console.log("Hovered over Roblox logo");
    });

    robloxLink.addEventListener("mouseleave", () => {
      console.log("Left Roblox logo");
    });
  }
});
