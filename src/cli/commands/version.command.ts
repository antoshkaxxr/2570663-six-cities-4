import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { Command } from './command.interface.js';
import chalk from 'chalk';

type PackageJSONConfig = {
  version: string;
}

export class VersionCommand implements Command {
  constructor(
    private readonly filePath: string = './package.json'
  ) {}

  private readVersion(): string {
    const jsonContent = readFileSync(resolve(this.filePath), 'utf-8');
    const importedContent = JSON.parse(jsonContent) as PackageJSONConfig;
    return importedContent.version;
  }

  public getName(): string {
    return '--version';
  }

  public async execute(): Promise<void> {
    try {
      const version = this.readVersion();
      console.info(chalk.green(`Версия приложения: ${version}`));
    } catch (error) {
      console.error(chalk.red(`Не удалось прочитать версию из файла ${this.filePath}`));
    }
  }
}
