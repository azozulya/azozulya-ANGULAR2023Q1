import { IThumbnail } from './thumbnail.interface';

export interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: IThumbnail;
    medium: IThumbnail;
    high: IThumbnail;
    standard?: IThumbnail;
    maxres?: IThumbnail;
  };
  channelTitle: string;
  liveBroadcastContent: string;
  tags?: string[];
  categoryId?: string;
  localized?: {
    title: string;
    description: string;
  };
  defaultAudioLanguage?: string;
}
