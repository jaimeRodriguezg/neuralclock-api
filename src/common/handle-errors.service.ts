import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { QueryFailedError } from 'typeorm';
import { DatabaseError } from 'pg-protocol';

@Injectable()
export class HandleErrorService {
  public handleErrorExceptions(service: string, method: string, error: any) {
    //handle db errors
    if (error instanceof QueryFailedError) {
      const err = error.driverError as DatabaseError;
      if (err.code === '23505') {
        throw new BadRequestException(err.detail);
      } else if (err.code === '23502') {
        throw new BadRequestException(err.detail);
      } else {
        throw new InternalServerErrorException(
          `Unexpected db error, check server logs: [${service} - ${method}]: ${error}`,
        );
      }
    }
    throw new InternalServerErrorException(
      `Unexpected error, check server logs: $[${service} - ${method}]: ${error}}`,
    );
  }
}
