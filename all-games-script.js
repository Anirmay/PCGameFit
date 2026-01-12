// All Games Page Script - Independent version
// This script handles the display and filtering of all games

// Wait for gamesDatabase to be available
(function () {
    'use strict';

    // State
    let currentCategory = 'all';
    let currentSort = 'a-z';
    let searchQuery = '';

    // DOM Elements
    const gamesGrid = document.getElementById('games-grid');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const sortSelect = document.getElementById('sort-select');
    const searchInput = document.getElementById('search-input');
    const gamesCount = document.getElementById('games-count');

    // Check if gamesDatabase is loaded
    function checkDatabase() {
        if (typeof gamesDatabase === 'undefined') {
            console.error('gamesDatabase is not loaded!');
            if (gamesCount) {
                gamesCount.textContent = 'Error: Game database not loaded';
            }
            return false;
        }
        console.log(`✅ Loaded ${gamesDatabase.length} games`);
        return true;
    }

    // Setup Event Listeners
    function setupEventListeners() {
        // Category buttons
        categoryButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                categoryButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentCategory = btn.dataset.category;
                displayGames();
            });
        });

        // Sort dropdown
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                currentSort = e.target.value;
                displayGames();
            });
        }

        // Search input
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                searchQuery = e.target.value.toLowerCase();
                displayGames();
            });
        }
    }

    // Display Games - Independent version for all-games page
    function displayGames() {
        if (!gamesDatabase) {
            console.error('gamesDatabase not available');
            return;
        }

        let gamesToShow = [...gamesDatabase];

        // Filter by category
        if (currentCategory !== 'all') {
            gamesToShow = gamesToShow.filter(game => game.category === currentCategory);
        }

        // Filter by search query
        if (searchQuery) {
            gamesToShow = gamesToShow.filter(game =>
                game.name.toLowerCase().includes(searchQuery)
            );
        }

        // Sort games
        if (currentSort === 'a-z') {
            gamesToShow.sort((a, b) => a.name.localeCompare(b.name));
        } else if (currentSort === 'z-a') {
            gamesToShow.sort((a, b) => b.name.localeCompare(a.name));
        } else if (currentSort === 'category') {
            gamesToShow.sort((a, b) => {
                if (a.category === b.category) {
                    return a.name.localeCompare(b.name);
                }
                return a.category.localeCompare(b.category);
            });
        }

        // Update count
        if (gamesCount) {
            gamesCount.textContent = `Showing ${gamesToShow.length} of ${gamesDatabase.length} games`;
        }

        // Render games
        renderGames(gamesToShow);
    }

    // Render Games - Independent version
    function renderGames(games) {
        if (!gamesGrid) {
            console.error('games-grid element not found');
            return;
        }

        gamesGrid.innerHTML = '';

        if (games.length === 0) {
            gamesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #b4b4c8; padding: 40px;">No games found matching your criteria.</p>';
            return;
        }

        games.forEach((game, index) => {
            const gameCard = document.createElement('div');
            gameCard.className = 'game-card';
            gameCard.style.animationDelay = `${index * 0.02}s`;

            gameCard.innerHTML = `
                <h3>${game.name}</h3>
                <span class="game-category">${game.category}</span>
                <div class="game-requirements">
                    <p><strong>Min RAM:</strong> ${game.minRAM}GB</p>
                    <p><strong>Storage:</strong> ${formatStorage(game.minStorage)}</p>
                    <p><strong>Min GPU:</strong> ${getGPUName(game.minGPU)}</p>
                    <p><strong>Min CPU:</strong> ${getCPUName(game.minCPU)}</p>
                </div>
            `;

            // Add click event to open Google search
            gameCard.addEventListener('click', () => {
                const searchQuery = encodeURIComponent(game.name + ' game');
                window.open(`https://www.google.com/search?q=${searchQuery}`, '_blank');
            });

            gamesGrid.appendChild(gameCard);
        });
    }

    // Helper Functions
    function formatStorage(mb) {
        if (mb < 1024) {
            return `${mb}MB`;
        }
        return `${(mb / 1024).toFixed(1)}GB`;
    }

    function getGPUName(tier) {
        const gpuNames = {
            1: 'Intel UHD Graphics',
            2: 'Intel Iris Xe / GTX 1050',
            3: 'GTX 1650 / RX 5500M',
            4: 'RTX 2060 / RTX 3050',
            5: 'RTX 3060 / RX 6700M',
            6: 'RTX 4060 / RX 7600M',
            7: 'RTX 4070+ / RX 7700M+'
        };
        return gpuNames[tier] || 'Unknown';
    }

    function getCPUName(tier) {
        const cpuNames = {
            1: 'i3 / Ryzen 3',
            2: 'i5 / Ryzen 5',
            3: 'i7 / Ryzen 7',
            4: 'i9 / Ryzen 9'
        };
        return cpuNames[tier] || 'Unknown';
    }

    // Initialize
    function init() {
        if (!checkDatabase()) {
            // Retry after a short delay
            setTimeout(() => {
                if (checkDatabase()) {
                    displayGames();
                    setupEventListeners();
                }
            }, 100);
            return;
        }
        displayGames();
        setupEventListeners();
    }

    // Initialize when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
