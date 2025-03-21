import { Wallet } from "xrpl";
import qrcode from 'qrcode-terminal';


function generateWallet(): void
{
	console.log("Here is your new wallet!\n");

	const wallet: Wallet = Wallet.generate();

	console.log("Adress: " + wallet.address);
	qrcode.generate(wallet.address, {small: true});

	console.log("\nSeed: " + wallet.seed);
	qrcode.generate(wallet.seed!, {small: true});

	process.stdout.write("\nPress [Enter] to get a new one...");
}


process.stdout.write('\x1B[2J\x1B[3J\x1B[H');
process.stdout.write('\x1b]0;XRPL Wallet Generator\x07');
console.log("A simple wallet generator for the XRP Ledger,\nby Adrien Bailliard\n\n");


generateWallet();

process.stdin.on('data', () =>
{
	process.stdout.write('\x1b[1A');
	process.stdout.write('\x1b[2K');
	generateWallet();
});