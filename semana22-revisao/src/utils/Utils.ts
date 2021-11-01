import { v4 } from 'uuid'
import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'


export class Utils {
  static generateId(): string {
    return v4()
  }

  static async hash(s: string): Promise<string> {
    const cost = Number(process.env.BCRYPT_COST!)
    const salt = await bcrypt.genSalt(cost)
    const cypherText = await bcrypt.hash(s, salt)

    return cypherText
  }

  static async compare(plaintext: string, hash: string): Promise<boolean> {
    const hashCompare: boolean = await bcrypt.compare(plaintext, hash)
    return hashCompare
  }

  static generateToken(info: string): string {
    const token = jwt.sign(
      info,
      process.env.JWT_KEY as string,
      { expiresIn: process.env.JWT_EXPIRATION_TIME }
    )
    return token
  }

  static getTokenData(token: string): string {
    const payload = jwt.verify(token, process.env.JWT_KEY as string)

    return payload as string
  }
}
