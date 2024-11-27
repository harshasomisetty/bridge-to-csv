# Bridge to CSV Exporter

This tool fetches transaction data from the LayerZero API for a specific OApp and converts it into a CSV file. Each transaction record includes:

- Timestamp
- Source Address
- Destination Address
- Native Amount
- Status

# Run the script

1. Install

```
yarn
```

2. Run

```
yarn start
```

The script will:

- Fetch transaction data from the LayerZero API
- Process the transactions
- Generate a CSV file in the `data` directory with a timestamp-based filename
