interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: IThumbnail;
    medium: IThumbnail;
    high: IThumbnail;
    standard: IThumbnail;
    maxres: IThumbnail;
  };
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: {
    title: string;
    description: string;
  },
  defaultAudioLanguage: string;
};

interface IThumbnail {
  url: string;
  width: number;
  height: number;
}

interface IStatistic {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface IMovie {
  kind: string;
  etag: string;
  id: string;
  snippet: ISnippet;
  statistics: IStatistic,
  source?: string;
  operator?: string;
};
