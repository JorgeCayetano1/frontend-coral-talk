export interface SpeakerContentItem {
  header: string;
  content: ContentItem[];
}

export interface ContentItem {
  profileName: string;
  profileBirthdate: string;
  title: string;
  description: string;
}
