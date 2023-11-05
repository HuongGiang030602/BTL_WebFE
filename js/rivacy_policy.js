$(document).ready(function() {
    const placeholders = [
        'Bạn cần tìm gì....?',
        'Tên sản phẩm bạn cần tìm....',
        'Sản phẩm bán chạy nhất....?'
    ];

    let currentPlaceholderIndex = 0;
    let currentCharacterIndex = 0;
    let intervalId = null;

    function updatePlaceholder() {
        const input = $('.header-search__input');
        const placeholder = placeholders[currentPlaceholderIndex];
        input.attr('placeholder', placeholder.substring(0, currentCharacterIndex));

        if (currentCharacterIndex < placeholder.length) {
            currentCharacterIndex++;
        } else {
            clearInterval(intervalId);
            currentCharacterIndex = 0;
            currentPlaceholderIndex = (currentPlaceholderIndex + 1) % placeholders.length;
            setTimeout(function() {
                intervalId = setInterval(updatePlaceholder, 100);
            }, 1000);
        }
    }

    intervalId = setInterval(updatePlaceholder, 100);
});