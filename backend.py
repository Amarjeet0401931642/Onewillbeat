from flask import Flask, jsonify, request
app = Flask(__name__)

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    # Simulate OTP login check
    return jsonify({"status": "success", "message": "OTP verified"})

@app.route('/trade-data')
def trade_data():
    return jsonify({"BTC/AUD": {"rsi": 45, "chande": 60}})

if __name__ == '__main__':
    app.run(debug=True)