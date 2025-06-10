function sendTradeAlert(coin, score) {
    if (score >= 7) {
        console.log(`ALERT: ${coin} is a valid trade with score ${score}`);
    }
}