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

class mouseClickAndDrag {
    constructor(elementID) {
        this.elementToScroll = document.getElementById(elementID);
        this.elementToScrollPosition = { top: 0, left: 0, x: 0, y: 0 };

        elementToScroll.addEventListener("mousedown", this.elementToScrollMouseDownHandler);
    }

    elementToScrollMouseDownHandler = function (e) {
        this.elementToScroll.style.userSelect = "none";

        this.elementToScrollPosition = {
            left: this.elementToScroll.scrollLeft,
            top: this.elementToScroll.scrollTop,

            x: e.clientX,
            y: e.clientY,
        };

        document.addEventListener("mousemove", this.elementToScrollMouseMoveHandler);
        document.addEventListener("mouseup", this.elementToScrollMouseUpHandler);
    };

    elementToScrollMouseMoveHandler = function (e) {
        const dx = e.clientX - this.elementToScrollPosition.x;
        const dy = e.clientY - this.elementToScrollPosition.y;

        this.elementToScroll.scrollTop = this.elementToScrollPosition.top - dy;
        this.elementToScroll.scrollLeft = this.elementToScrollPosition.left - dx;
    };

    elementToScrollMouseUpHandler = function () {
        this.elementToScroll.style.removeProperty("user-select");

        document.removeEventListener("mousemove", this.elementToScrollMouseMoveHandler);
        document.removeEventListener("mouseup", this.elementToScrollMouseUpHandler);
    };
}