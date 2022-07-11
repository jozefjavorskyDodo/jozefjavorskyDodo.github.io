"use strict";

try {
    let favicon = document.createElement("link");
    favicon.setAttribute("rel", "icon");
    favicon.setAttribute("type", "image/x-icon");
    favicon.setAttribute("sizes", "16x16");
    favicon.setAttribute("href", "data:image/x-icon;" +
        "base64," +
        "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIA" +
        "AACQkWg2AAAAAXNSR0IArs4c6QAAAARnQU1B" +
        "AACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdv" +
        "qGQAAABSSURBVDhPzYxRCgAgCEM9t+fuABHG" +
        "NKNhfTX2sQ2f8iJtWrQDM1FlwH6YsccFuwOx" +
        "7gE191NA9Q5jjwv2kKgyQLB88DNAjLMhT1QL" +
        "UPQELiTSAXhSszHbt2UeAAAAAElFTkSuQmCC"
    );
    document.head.appendChild(favicon);
} catch (error) { if (error) console.log(error); } finally { };
