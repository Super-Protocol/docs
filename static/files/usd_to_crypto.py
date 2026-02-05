import requests
import sys

def main():
    input_file = "input.txt"
    output_file = "result.txt"

    try:
        # Read the input amount
        with open(input_file, "r") as f:
            content = f.read().strip()
        if not content:
            raise ValueError("Input file is empty")

        try:
            usd_amount = float(content)
        except ValueError:
            raise ValueError("Input is not a valid number")

        # Fetch BTC and ETH prices from CoinGecko
        url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd"
        response = requests.get(url, timeout=10)
        if response.status_code != 200:
            raise RuntimeError(f"API request failed with status code {response.status_code}")

        data = response.json()
        btc_price = data["bitcoin"]["usd"]
        eth_price = data["ethereum"]["usd"]

        # Calculate how much BTC and ETH can be bought
        btc_amount = usd_amount / btc_price
        eth_amount = usd_amount / eth_price

        # Write results to output file, rounded to 6 decimals
        with open(output_file, "w") as f:
            f.write(f"BTC: {btc_amount:.6f}\n")
            f.write(f"ETH: {eth_amount:.6f}\n")

    except Exception as e:
        # Write the error message to the result file
        with open(output_file, "w") as f:
            f.write(f"Error: {str(e)}\n")

if __name__ == "__main__":
    main()
