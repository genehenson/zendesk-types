interface Article {
  id: number;
  url: string;
  html_url: string;
  author_id: number;
  comments_disabled: boolean;
  draft: boolean;
  promoted: boolean;
  position: boolean;
  vote_sum: boolean;
  vote_count: boolean;
  section_id: boolean;
  created_at: Date;
  updated_at: Date;
  name: string;
  title: string;
  source_locale: string;
  locale: string;
  outdated: boolean;
  outdated_locales: any[];
  edited_at: Date | string;
  user_segment_id: number;
  permission_group_id: number;
  label_names: string[];
  body: string;
}
