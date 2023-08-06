"use strict";
let figmaPages = figma.root.children;
let totalPages = figmaPages.length;
let currentPageColor = figma.currentPage.backgrounds;
for (var i = 0; i < totalPages; i++) {
    figmaPages[i].backgrounds = currentPageColor;
}
figma.closePlugin("Done");
