declare global {
  interface Window {
    progressierAppRuntimeSettings: {
      uid: string;
      icon512: string;
      name: string;
      shortName: string;
    };
  }
}

export {};