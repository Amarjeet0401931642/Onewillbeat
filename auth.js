function sendOTP(emailOrPhone) {
    console.log(`Sending OTP to ${emailOrPhone}`);
}
function verifyOTP(code) {
    return code === "123456"; // Simulated OTP check
}