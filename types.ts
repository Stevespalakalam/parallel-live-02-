
export interface Comment {
  id: string;
  username: string;
  text: string;
  profilePic: string;
  isVerified?: boolean;
}

export interface User {
  username: string;
  profilePic: string;
  isVerified: boolean;
}
