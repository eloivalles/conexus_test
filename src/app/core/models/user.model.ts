export interface UserInfo {
  readonly id: string;
  readonly name: string;
}

export interface Notes {
  readonly coachName: string;
  readonly content: string;
  readonly isFlagged: boolean;
  readonly createdAt: Date;
}
