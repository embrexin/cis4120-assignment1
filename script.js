document.addEventListener('DOMContentLoaded', function() {
    const advancedSearchToggle = document.querySelector('.heading-expand');
    const advancedSearchContent = document.querySelector('.advanced-search-content');
    const arrow = document.querySelector('.heading-expand .arrow');

    if (advancedSearchToggle && advancedSearchContent && arrow) {
        advancedSearchToggle.addEventListener('click', function() {
            advancedSearchContent.classList.toggle('hidden');
            arrow.classList.toggle('rotated');
        });
    }
});
