import { Command, flags } from '@oclif/command';
import cli from 'cli-ux';
import * as QRReader from "qrcode-reader";
import { readdir, readFileSync } from 'fs';
import * as Cryptr from "cryptr";

export default class Crypt extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ mysafeqr decrypt 
`,
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
    file: flags.string({char: 'f', description: 'name to print'}),
    pwd: flags.string({char: 'p', description: 'pwd to print'}),
  }

  static args = [{ name: 'file' }]

  async run() {
    const { args, flags } = this.parse(Crypt);

    const file = flags.file ?? 'file.txt';
    const pwd = flags.pwd ?? 'azerty';
    const cryptr = new Cryptr(pwd);
    this.log(cryptr.decrypt(readFileSync(file,{encoding:'utf8', flag:'r'})));

  }
}
