export interface UserInfo {
  readonly id: string;
  readonly name: string;
}

export interface Notes {
  readonly id: string;
  readonly coachName: string;
  readonly content: string;
  isFlagged: boolean;
  readonly createdAt: Date;
}
