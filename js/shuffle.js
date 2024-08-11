document.addEventListener('DOMContentLoaded', function() {
    const parentElement = document.querySelector('.wrapper'); // Replace with the appropriate parent selector
    const shuffle = document.getElementById('shuffle');

    function randomizeSections() {
        const hoverableElements = Array.from(parentElement.querySelectorAll('.hoverable'));

        // Identify the section that should always be last (by class, id, or any other selector)
        const alwaysLastElement = parentElement.querySelector('.always-last'); // Replace with the correct selector

        // Remove the always-last element from the hoverableElements array
        const index = hoverableElements.indexOf(alwaysLastElement);
        if (index > -1) {
            hoverableElements.splice(index, 1);
        }

        // Shuffle the remaining hoverable elements
        for (let i = hoverableElements.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [hoverableElements[i], hoverableElements[j]] = [hoverableElements[j], hoverableElements[i]];
        }

        // Append the shuffled elements back to the parent
        hoverableElements.forEach(element => parentElement.appendChild(element));

        // Finally, append the always-last element at the end
        if (alwaysLastElement) {
            parentElement.appendChild(alwaysLastElement);
        }
    }

    // Run the randomizeSections function on page load
    randomizeSections();

    // Add event listener to the button
    shuffle.addEventListener('click', randomizeSections);
});
