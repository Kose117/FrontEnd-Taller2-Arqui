// utils/BrowserEventEmitter.ts
type Callback = () => void;

export class BrowserEventEmitter {
  private listeners: Callback[] = [];

  on(callback: Callback) {
    if (typeof callback === "function") {
      this.listeners.push(callback);
    } else {
      console.warn("Intentaste registrar un callback inválido:", callback);
    }
  }

  off(callback: Callback) {
    this.listeners = this.listeners.filter(cb => cb !== callback);
  }

  emit() {
    for (const cb of this.listeners) {
      try {
        cb();
      } catch (err) {
        console.error("Error al ejecutar callback:", err);
      }
    }
  }
}
