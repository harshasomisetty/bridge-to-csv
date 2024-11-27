# Bridge to CSV Exporter

A TypeScript utility to export LayerZero bridge transactions to CSV format.

## Description

This tool fetches transaction data from the LayerZero API for a specific OApp and converts it into a CSV file. Each transaction record includes:

- Timestamp
- Source Address
- Destination Address
- Native Amount
- Status

## Installation

1. Clone the repository:

```
bash
git clone <repository-url>
cd bridge-to-csv
```

2. Install

```
yarn
```

3. Run the script

```
yarn start
```

The script will:

- Fetch transaction data from the LayerZero API
- Process the transactions
- Generate a CSV file in the `data` directory with a timestamp-based filename
