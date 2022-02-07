export class DataStore {
  private data: string;

  constructor(initialData: string) {
    this.data = initialData;
  }

  public getData = () => this.data;
}
