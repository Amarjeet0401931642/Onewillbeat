
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("coins-list").innerHTML = `
        <ul>
            <li>BTC/AUD - 💎 (Score: 9)</li>
            <li>ETH/AUD - 🔥 (Score: 8)</li>
        </ul>
    `;

    document.getElementById("history-table").innerHTML = `
        <table>
            <thead>
                <tr><th>Pair</th><th>Status</th><th>Entry</th><th>Target</th><th>Stop Loss</th></tr>
            </thead>
            <tbody>
                <tr><td>BTC/AUD</td><td>✅ Successful</td><td>96000</td><td>99000</td><td>94000</td></tr>
                <tr><td>ETH/AUD</td><td>🟡 Active</td><td>5100</td><td>5400</td><td>4950</td></tr>
            </tbody>
        </table>
    `;
});
