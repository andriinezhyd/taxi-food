window.addEventListener("resize", function () {
    getHeight();
});

cart.onclick = function () {
    renderModal(renderWishList());
};