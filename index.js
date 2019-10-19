function smoothScroll(Element) {

    Element = document.getElementById(Element);
    const selectedPosX = 0;
    const selectedPosY = 0;
    while (Element != null) {
        selectedPosX += Element.offsetLeft;
        selectedPosY += Element.offsetTop;
        Element = Element.offsetParent;
    }
    window.scrollTo(selectedPosX, selectedPosY);
    }

