export class MessageType {
  private static defaultNamespace: string = "Messages";
  name: string;
  ns: string;
  exchange: string | undefined;

  constructor({
    name,
    ns,
    exchange,
  }: {
    name: string;
    ns?: string;
    exchange?: string;
  }) {
    this.name = name;
    this.ns = ns ?? MessageType.defaultNamespace;
    this.exchange = exchange;
  }

  static setDefaultNamespace(ns: string) {
    this.defaultNamespace = ns;
  }

  toString(): string {
    return `urn:message:${this.ns}:${this.name}`;
  }

  toMessageType(): Array<string> {
    return [this.toString()];
  }

  toExchange(): string {
    if (this.exchange) {
      return `${this.exchange}`;
    }
    return `${this.ns}:${this.name}`;
  }
}
