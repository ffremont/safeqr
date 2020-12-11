import { Command, flags } from '@oclif/command';
import cli from 'cli-ux';
import * as Cryptr from "cryptr";
import * as QRCode from 'qrcode';

export default class Crypt extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ mysafeqr crypt 
`,
  ]

  static flags = {
    help: flags.help({ char: 'h' })
  }

  static args = [{ name: 'file' }]

  async run() {
    const { args, flags } = this.parse(Crypt);

    const password = await cli.prompt('Le mot de passe pour chiffrer ?', { type: 'hide' });
    const text = await cli.prompt('Données textuelles à chiffrer ?', { type: 'hide' });

    const cryptr = new Cryptr(password);
    const textCrypted = cryptr.encrypt(text);

    const filename = `./${(new Date()).getTime()}.png`;
    QRCode.toFile(filename, textCrypted,{}, (err: any) => {
      if (err) {
        this.error(err);
      } else {
        this.log(`Création du fichier ${filename}`);
      }
    })

  }
}
