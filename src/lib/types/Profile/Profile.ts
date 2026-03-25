export interface ProfileMe {
  name?: string;
  firstname?: string;
  lastName?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  preferred_languages?: string[];
  profile_picture?: string;
}

export interface ProfileDataInterface {
  me?: ProfileMe;
  in_progress_orders: unknown[];
}
