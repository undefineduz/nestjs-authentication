import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class HashingService {
  abstract hash(plainText: string | Buffer): Promise<string>;
  abstract compare(
    plainText: string | Buffer,
    encypted: string,
  ): Promise<boolean>;
}
