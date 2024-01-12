import { Injectable } from '@nestjs/common';
import { HashingService } from './hashing.service';
import { compare, genSalt, hash } from 'bcrypt';

@Injectable()
export class BcyptService implements HashingService {
  async hash(plainText: string | Buffer): Promise<string> {
    const saltRounds = await genSalt();
    return hash(plainText, saltRounds);
  }

  compare(plainText: string | Buffer, encypted: string): Promise<boolean> {
    return compare(plainText, encypted);
  }
}
