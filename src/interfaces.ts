export interface Quote {
  id: string;
  author: string;
  text: string;
}

export interface Comment {
  id: string;
  text: string;
}

export interface RequestData {
  quoteId: string;
  commentData: string;
}

export interface Params {
  quoteId: string;
}