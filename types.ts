export interface Article {
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

export interface Ticket {
  id: number;
  url: string;
  external_id: number;
  via: {
    channel: string,
    source: {
      from: {},
      to: {},
      rel: null
    }
  };
  priority: string;
  status: string;
  created_at: Date | string;
  updated_at: Date | string;
  assignee_id: number;
  group_id: number;
  has_incidents: boolean;
  type: string;
  subject: string;
  raw_subject: string;
  description: string;
  incident_count: number;
  dates: {
    assignee_updated_at: Date | string;
    requester_updated_at: Date | string;
    status_updated_at: Date | string;
    initially_assigned_at: Date | string;
    assigned_at: Date | string;
    solved_at: Date | string;
    latest_comment_added_at: Date | string;
  };
  custom_fields: {
    id: number;
    value: string;
  }[];
  recipient: number;
  requester_id: string;
  submitter_id: string;
  organization_id: number;
  collaborator_ids: number[];
  follower_ids: number[];
  email_cc_ids: number[];
  forum_topic_id: number;
  problem_id: number;
  is_public: boolean;
  due_at: Date;
  tags: string[];
  satisfaction_rating: {
    score: string;
  };
  sharing_agreement_ids: number[];
  fields: {
    id: number;
    value: string;
  };
  followup_ids: number[];
  ticket_form_id: number;
  brand_id: number;
  satisfaction_probability: number;
  metric_sets: MetricSet;
  slas: {
    policy_metrics: [];
  };
  metric_events: {
    resolution_time: MetricEvent[];
    requester_wait_time: MetricEvent[];
    pausable_update_time: MetricEvent[];
    agent_work_time: MetricEvent[];
    periodic_update_time: MetricEvent[];
    reply_time: MetricEvent[];
  };
  allow_channelback: boolean;
  allow_attachments: boolean;
  users: User[];
  groups: Group[];
  organizations: Organization[];
}

export interface MetricSet {
  url: string;
  id: number;
  ticket_id: number;
  created_at: Date;
  updated_at: Date;
  group_stations: number;
  assignee_stations: number;
  reopens: number;
  replies: number;
  assignee_updated_at: Date;
  requester_updated_at: Date;
  status_updated_at: Date;
  initially_assigned_at: Date;
  assigned_at: Date;
  solved_at: Date;
  latest_comment_added_at: Date;
  reply_time_in_minutes: {
    calendar: number;
    business: number;
  };
  first_resolution_time_in_minutes: {
    calendar: number;
    business: number;
  };
  full_resolution_time_in_minutes: {
    calendar: number;
    business: number;
  };
  agent_wait_time_in_minutes: {
    calendar: number;
    business: number;
  };
  on_hold_time_in_minutes: {
    calendar: number;
    business: number;
  };
  requester_wait_time_in_minutes: {
    calendar: number;
    business: number;
  };
}

export interface Group {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  deleted: boolean;
  url: string;
}

export interface User {
  id: number;
  active: boolean;
  alias: string;
  chat_only: boolean;
  created_at: Date;
  updated_at: Date;
  custom_role_id: number;
  default_group_id: number;
  details: string;
  email: string;
  external_id: number | null;
  iana_time_zone: string;
  last_login_at: Date;
  locale: string;
  locale_id: number;
  moderator: boolean;
  name: string;
  notes: string;
  only_privae_comments: boolean;
  organization_id: number;
  phone: string | null;
  photo: {
    url: string;
    id: number;
    file_name: string;
    content_url: string;
    mapped_content_url: string;
    content_type: string;
    size: number;
    width: number;
    height: number;
    inline: boolean;
    thumbnails: {
      url: string;
      id: number;
      file_name: string;
      content_url: string;
      mapped_content_url: string;
      content_type: string;
      size: number;
      width: number;
      height: number;
      inline: boolean;
    }[]
  };
  report_csv: boolean;
  restricted_agent: boolean;
  role: string;
  shared: boolean;
  shared_agent: boolean;
  shared_phone_number: string;
  signature: string;
  suspended: boolean;
  tags: string[];
  ticket_restriction: any;
  time_zone: string;
  two_factor_auth_enabled: boolean | null;
  url: string;
  user_fields: {};
  verified: boolean;
}

export interface Organization {
  id: number;
  url: string;
  name: string;
  shared_tickets: boolean;
  shared_comments: boolean;
  external_id: number;
  created_at: Date | string;
  updated_at: Date | string;
  domain_names: string[];
  details: string;
  notes: string;
  group_id: number;
  tags: string[];
  organization_fields: {
    confluence_link: string;
    enterprise_client: boolean;
    extended_9_4_support: boolean;
    priority_customer: boolean;
    verified_reseller: boolean;
  };
}

