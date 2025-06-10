function scoreTrade(rsi, chande, pattern, breakout) {
    let score = 0;
    if (rsi > 40 && rsi < 70) score += 2;
    if (chande > 50) score += 2;
    if (pattern === 'Bullish Engulfing') score += 3;
    if (breakout) score += 3;
    return score;
}