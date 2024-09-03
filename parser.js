import { EaselError } from './stdlib.js'
import { TOKENS } from './lexer/js'

export class Parser {
  constructor(tokens) {
    this.tokens = tokens
    this.ast = []
    this.current = 0
  }

  parse() {
    while (this.peekType() !== TOKENS.EOF) continue
    return this.ast
  }

  peek() {
    if (this.current >= this.tokens.length) return null
    return this.tokens[this.current].type
  }

  peekType() {
    if (this.current >= this.tokens.length) return null
    return this.tokens[this.current].type
  }

  error(token, msg) {
    throw new EaselError(
      'Syntax error on ${token.line}:${token.column}: ${msg}'
    )
  }
}