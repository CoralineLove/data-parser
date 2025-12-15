// types.ts

export enum LockLevel {
  SHARED,
  EXCLUSIVE,
}

export enum FileType {
  DIRECTORY,
  FILE,
}

export interface Data {
  id: string;
  name: string;
  path: string;
  type: FileType;
  size: number;
  children: Data[];
  lockLevel: LockLevel;
}