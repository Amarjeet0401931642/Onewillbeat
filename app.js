document.addEventListener('DOMContentLoaded', () => {
    const coinList = document.getElementById('coin-list');
    coinList.innerHTML = '<p>Loading coins...</p>';
    // Simulated coin load with scoring
    setTimeout(() => {
        coinList.innerHTML = `
            <ul>
                <li>BTC/AUD - Score: 9 💎</li>
                <li>ETH/AUD - Score: 7 🔥</li>
                <li>ADA/AUD - Score: 5 ❌</li>
            </ul>`;
    }, 1000);
});