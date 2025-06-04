import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // Crear instancia de storage
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public async set(key: string, value: any) {
    await this.init();
    return this._storage?.set(key, value);
  }

  public async get(key: string) {
    await this.init();
    return this._storage?.get(key);
  }

  public async remove(key: string) {
    await this.init();
    return this._storage?.remove(key);
  }
}
