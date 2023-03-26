interface ISnippet {
  "publishedAt": string;
  "channelId": string;
  "title": string;
  "description": string;
  "thumbnails"?: {
    default: IThumbnail;
    medium: IThumbnail;
    high: IThumbnail;
    standard: IThumbnail;
    maxres: IThumbnail;
  };
  "channelTitle": string;
  "tags": string[];
  "categoryId": string;
  "liveBroadcastContent": string;
  "localized": {
    "title": string;
    "description": string;
  },
  "defaultAudioLanguage": string;
};

interface IThumbnail {
  "url": string;
  "width": number;
  "height": number;
}

enum ThumbType {
  Default = "default",
  Medium = "medium",
  High = "high",
  Standart = "standart",
  Maxres = "maxres"
};

export interface IMovie {
  "kind": string;
  "etag": string;
  "id": string;
  "snippet": ISnippet;
  "statistics": {
    "viewCount": string;
    "likeCount": string;
    "dislikeCount": string;
    "favoriteCount": string;
    "commentCount": string;
  },
  source?: string;
  operator?: string;
};
