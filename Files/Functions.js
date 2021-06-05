//  The JavaScript code is property to Mr. You (Kristiyan Valchev) and can only be viewed
//  If you want to use part of the code, please first contact me: mr.youdevelopment@gmail.com

class loadSmallToBigImage {
    constructor(imageID, bigImagePath) {
        var smallImage = document.getElementById(imageID);
        var bigImage = document.createElement("img");
        bigImage.setAttribute("src", bigImagePath);

        bigImage.onload = function () {
            smallImage.src = this.src;
        };
    }
}

