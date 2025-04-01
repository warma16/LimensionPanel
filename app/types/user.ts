export interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  verified: boolean;
  extraEmail: string[];
  group: number[];
  totp: string | null;
  webauthn: string | null;
}