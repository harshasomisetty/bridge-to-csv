import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';

async function main(): Promise<void> {
  try {
    const url =
      'https://scan-testnet.layerzero-api.com/v1/messages/oapp/40168/8EFMTsKMbv95QNzEgtHQHqxMUNbmQTJKWKp6bp3AjYkd?limit=100';
    const headers = {
      accept: 'application/json',
    };

    console.log('Fetching data...');
    const response = await axios.get(url, { headers });
    const transactions = response.data.data;

    // Create CSV rows
    const csvRows = [
      [
        'Timestamp',
        'Source Address',
        'Destination Address',
        'Native Amount',
        'Status',
      ],
    ];

    transactions.forEach((tx: any) => {
      const nativeAmount = tx.source.tx.options.nativeDrop?.[0]?.amount || '0';
      const row = [
        tx.created,
        tx.pathway.sender.address,
        tx.pathway.receiver.address,
        nativeAmount,
        tx.status.name,
      ];
      csvRows.push(row);
      console.log('Processed transaction:', row);
    });

    // Write to CSV
    const csvContent = csvRows.map((row) => row.join(',')).join('\n');
    const outputPath = path.join(process.cwd(), 'bridge_transactions.csv');

    fs.writeFileSync(outputPath, csvContent);
    console.log(`Wrote ${transactions.length} transactions to ${outputPath}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
