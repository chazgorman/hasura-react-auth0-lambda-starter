// tslint:disable:array-type
import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import { SdkFunctionWrapper, defaultWrapper } from '@graphql-codegen/typescript-graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  uuid: any;
  timestamptz: any;
  date: any;
  jsonb: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}


/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/** columns and relationships of "genders" */
export type Genders = {
   __typename?: 'genders';
  display_en_US: Scalars['String'];
  id: Scalars['String'];
  other?: Maybe<Scalars['String']>;
};

/** aggregated selection of "genders" */
export type Genders_Aggregate = {
   __typename?: 'genders_aggregate';
  aggregate?: Maybe<Genders_Aggregate_Fields>;
  nodes: Array<Genders>;
};

/** aggregate fields of "genders" */
export type Genders_Aggregate_Fields = {
   __typename?: 'genders_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Genders_Max_Fields>;
  min?: Maybe<Genders_Min_Fields>;
};


/** aggregate fields of "genders" */
export type Genders_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Genders_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "genders" */
export type Genders_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Genders_Max_Order_By>;
  min?: Maybe<Genders_Min_Order_By>;
};

/** input type for inserting array relation for remote table "genders" */
export type Genders_Arr_Rel_Insert_Input = {
  data: Array<Genders_Insert_Input>;
  on_conflict?: Maybe<Genders_On_Conflict>;
};

/** Boolean expression to filter rows from the table "genders". All fields are combined with a logical 'AND'. */
export type Genders_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Genders_Bool_Exp>>>;
  _not?: Maybe<Genders_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Genders_Bool_Exp>>>;
  display_en_US?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  other?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "genders" */
export enum Genders_Constraint {
  /** unique or primary key constraint */
  GendersDisplayEnUsKey = 'genders_display_en_US_key',
  /** unique or primary key constraint */
  GendersPkey = 'genders_pkey'
}

/** input type for inserting data into table "genders" */
export type Genders_Insert_Input = {
  display_en_US?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  other?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Genders_Max_Fields = {
   __typename?: 'genders_max_fields';
  display_en_US?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  other?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "genders" */
export type Genders_Max_Order_By = {
  display_en_US?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  other?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Genders_Min_Fields = {
   __typename?: 'genders_min_fields';
  display_en_US?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  other?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "genders" */
export type Genders_Min_Order_By = {
  display_en_US?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  other?: Maybe<Order_By>;
};

/** response of any mutation on the table "genders" */
export type Genders_Mutation_Response = {
   __typename?: 'genders_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Genders>;
};

/** input type for inserting object relation for remote table "genders" */
export type Genders_Obj_Rel_Insert_Input = {
  data: Genders_Insert_Input;
  on_conflict?: Maybe<Genders_On_Conflict>;
};

/** on conflict condition type for table "genders" */
export type Genders_On_Conflict = {
  constraint: Genders_Constraint;
  update_columns: Array<Genders_Update_Column>;
  where?: Maybe<Genders_Bool_Exp>;
};

/** ordering options when selecting data from "genders" */
export type Genders_Order_By = {
  display_en_US?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  other?: Maybe<Order_By>;
};

/** select columns of table "genders" */
export enum Genders_Select_Column {
  /** column name */
  DisplayEnUs = 'display_en_US',
  /** column name */
  Id = 'id',
  /** column name */
  Other = 'other'
}

/** input type for updating data in table "genders" */
export type Genders_Set_Input = {
  display_en_US?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  other?: Maybe<Scalars['String']>;
};

/** update columns of table "genders" */
export enum Genders_Update_Column {
  /** column name */
  DisplayEnUs = 'display_en_US',
  /** column name */
  Id = 'id',
  /** column name */
  Other = 'other'
}

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};


/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
   __typename?: 'mutation_root';
  /** delete data from the table: "genders" */
  delete_genders?: Maybe<Genders_Mutation_Response>;
  /** delete data from the table: "onboarding_screens" */
  delete_onboarding_screens?: Maybe<Onboarding_Screens_Mutation_Response>;
  /** delete data from the table: "onboarding_states_enum" */
  delete_onboarding_states_enum?: Maybe<Onboarding_States_Enum_Mutation_Response>;
  /** delete data from the table: "profile_looking_for_gender_maps" */
  delete_profile_looking_for_gender_maps?: Maybe<Profile_Looking_For_Gender_Maps_Mutation_Response>;
  /** delete data from the table: "profiles" */
  delete_profiles?: Maybe<Profiles_Mutation_Response>;
  /** delete data from the table: "tokens" */
  delete_tokens?: Maybe<Tokens_Mutation_Response>;
  /** delete data from the table: "uploads" */
  delete_uploads?: Maybe<Uploads_Mutation_Response>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** insert data into the table: "genders" */
  insert_genders?: Maybe<Genders_Mutation_Response>;
  /** insert data into the table: "onboarding_screens" */
  insert_onboarding_screens?: Maybe<Onboarding_Screens_Mutation_Response>;
  /** insert data into the table: "onboarding_states_enum" */
  insert_onboarding_states_enum?: Maybe<Onboarding_States_Enum_Mutation_Response>;
  /** insert data into the table: "profile_looking_for_gender_maps" */
  insert_profile_looking_for_gender_maps?: Maybe<Profile_Looking_For_Gender_Maps_Mutation_Response>;
  /** insert data into the table: "profiles" */
  insert_profiles?: Maybe<Profiles_Mutation_Response>;
  /** insert data into the table: "tokens" */
  insert_tokens?: Maybe<Tokens_Mutation_Response>;
  /** insert data into the table: "uploads" */
  insert_uploads?: Maybe<Uploads_Mutation_Response>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** update data of the table: "genders" */
  update_genders?: Maybe<Genders_Mutation_Response>;
  /** update data of the table: "onboarding_screens" */
  update_onboarding_screens?: Maybe<Onboarding_Screens_Mutation_Response>;
  /** update data of the table: "onboarding_states_enum" */
  update_onboarding_states_enum?: Maybe<Onboarding_States_Enum_Mutation_Response>;
  /** update data of the table: "profile_looking_for_gender_maps" */
  update_profile_looking_for_gender_maps?: Maybe<Profile_Looking_For_Gender_Maps_Mutation_Response>;
  /** update data of the table: "profiles" */
  update_profiles?: Maybe<Profiles_Mutation_Response>;
  /** update data of the table: "tokens" */
  update_tokens?: Maybe<Tokens_Mutation_Response>;
  /** update data of the table: "uploads" */
  update_uploads?: Maybe<Uploads_Mutation_Response>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
};


/** mutation root */
export type Mutation_RootDelete_GendersArgs = {
  where: Genders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Onboarding_ScreensArgs = {
  where: Onboarding_Screens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Onboarding_States_EnumArgs = {
  where: Onboarding_States_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Profile_Looking_For_Gender_MapsArgs = {
  where: Profile_Looking_For_Gender_Maps_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ProfilesArgs = {
  where: Profiles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_TokensArgs = {
  where: Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_UploadsArgs = {
  where: Uploads_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootInsert_GendersArgs = {
  objects: Array<Genders_Insert_Input>;
  on_conflict?: Maybe<Genders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Onboarding_ScreensArgs = {
  objects: Array<Onboarding_Screens_Insert_Input>;
  on_conflict?: Maybe<Onboarding_Screens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Onboarding_States_EnumArgs = {
  objects: Array<Onboarding_States_Enum_Insert_Input>;
  on_conflict?: Maybe<Onboarding_States_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Profile_Looking_For_Gender_MapsArgs = {
  objects: Array<Profile_Looking_For_Gender_Maps_Insert_Input>;
  on_conflict?: Maybe<Profile_Looking_For_Gender_Maps_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProfilesArgs = {
  objects: Array<Profiles_Insert_Input>;
  on_conflict?: Maybe<Profiles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TokensArgs = {
  objects: Array<Tokens_Insert_Input>;
  on_conflict?: Maybe<Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UploadsArgs = {
  objects: Array<Uploads_Insert_Input>;
  on_conflict?: Maybe<Uploads_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_GendersArgs = {
  _set?: Maybe<Genders_Set_Input>;
  where: Genders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Onboarding_ScreensArgs = {
  _inc?: Maybe<Onboarding_Screens_Inc_Input>;
  _set?: Maybe<Onboarding_Screens_Set_Input>;
  where: Onboarding_Screens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Onboarding_States_EnumArgs = {
  _set?: Maybe<Onboarding_States_Enum_Set_Input>;
  where: Onboarding_States_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Profile_Looking_For_Gender_MapsArgs = {
  _set?: Maybe<Profile_Looking_For_Gender_Maps_Set_Input>;
  where: Profile_Looking_For_Gender_Maps_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ProfilesArgs = {
  _inc?: Maybe<Profiles_Inc_Input>;
  _set?: Maybe<Profiles_Set_Input>;
  where: Profiles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_TokensArgs = {
  _append?: Maybe<Tokens_Append_Input>;
  _delete_at_path?: Maybe<Tokens_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Tokens_Delete_Elem_Input>;
  _delete_key?: Maybe<Tokens_Delete_Key_Input>;
  _prepend?: Maybe<Tokens_Prepend_Input>;
  _set?: Maybe<Tokens_Set_Input>;
  where: Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_UploadsArgs = {
  _set?: Maybe<Uploads_Set_Input>;
  where: Uploads_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** columns and relationships of "onboarding_screens" */
export type Onboarding_Screens = {
   __typename?: 'onboarding_screens';
  copy: Scalars['String'];
  id: Scalars['uuid'];
  language: Scalars['String'];
  seqNo: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
  version: Scalars['Int'];
};

/** aggregated selection of "onboarding_screens" */
export type Onboarding_Screens_Aggregate = {
   __typename?: 'onboarding_screens_aggregate';
  aggregate?: Maybe<Onboarding_Screens_Aggregate_Fields>;
  nodes: Array<Onboarding_Screens>;
};

/** aggregate fields of "onboarding_screens" */
export type Onboarding_Screens_Aggregate_Fields = {
   __typename?: 'onboarding_screens_aggregate_fields';
  avg?: Maybe<Onboarding_Screens_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Onboarding_Screens_Max_Fields>;
  min?: Maybe<Onboarding_Screens_Min_Fields>;
  stddev?: Maybe<Onboarding_Screens_Stddev_Fields>;
  stddev_pop?: Maybe<Onboarding_Screens_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Onboarding_Screens_Stddev_Samp_Fields>;
  sum?: Maybe<Onboarding_Screens_Sum_Fields>;
  var_pop?: Maybe<Onboarding_Screens_Var_Pop_Fields>;
  var_samp?: Maybe<Onboarding_Screens_Var_Samp_Fields>;
  variance?: Maybe<Onboarding_Screens_Variance_Fields>;
};


/** aggregate fields of "onboarding_screens" */
export type Onboarding_Screens_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Onboarding_Screens_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "onboarding_screens" */
export type Onboarding_Screens_Aggregate_Order_By = {
  avg?: Maybe<Onboarding_Screens_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Onboarding_Screens_Max_Order_By>;
  min?: Maybe<Onboarding_Screens_Min_Order_By>;
  stddev?: Maybe<Onboarding_Screens_Stddev_Order_By>;
  stddev_pop?: Maybe<Onboarding_Screens_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Onboarding_Screens_Stddev_Samp_Order_By>;
  sum?: Maybe<Onboarding_Screens_Sum_Order_By>;
  var_pop?: Maybe<Onboarding_Screens_Var_Pop_Order_By>;
  var_samp?: Maybe<Onboarding_Screens_Var_Samp_Order_By>;
  variance?: Maybe<Onboarding_Screens_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "onboarding_screens" */
export type Onboarding_Screens_Arr_Rel_Insert_Input = {
  data: Array<Onboarding_Screens_Insert_Input>;
  on_conflict?: Maybe<Onboarding_Screens_On_Conflict>;
};

/** aggregate avg on columns */
export type Onboarding_Screens_Avg_Fields = {
   __typename?: 'onboarding_screens_avg_fields';
  seqNo?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "onboarding_screens" */
export type Onboarding_Screens_Avg_Order_By = {
  seqNo?: Maybe<Order_By>;
  version?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "onboarding_screens". All fields are combined with a logical 'AND'. */
export type Onboarding_Screens_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Onboarding_Screens_Bool_Exp>>>;
  _not?: Maybe<Onboarding_Screens_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Onboarding_Screens_Bool_Exp>>>;
  copy?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  language?: Maybe<String_Comparison_Exp>;
  seqNo?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  version?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "onboarding_screens" */
export enum Onboarding_Screens_Constraint {
  /** unique or primary key constraint */
  OnboardingScreensPkey = 'onboarding_screens_pkey',
  /** unique or primary key constraint */
  OnboardingScreensSeqNoLanguageVersionKey = 'onboarding_screens_seqNo_language_version_key'
}

/** input type for incrementing integer columne in table "onboarding_screens" */
export type Onboarding_Screens_Inc_Input = {
  seqNo?: Maybe<Scalars['Int']>;
  version?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "onboarding_screens" */
export type Onboarding_Screens_Insert_Input = {
  copy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  language?: Maybe<Scalars['String']>;
  seqNo?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  version?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Onboarding_Screens_Max_Fields = {
   __typename?: 'onboarding_screens_max_fields';
  copy?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  seqNo?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  version?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "onboarding_screens" */
export type Onboarding_Screens_Max_Order_By = {
  copy?: Maybe<Order_By>;
  language?: Maybe<Order_By>;
  seqNo?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  version?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Onboarding_Screens_Min_Fields = {
   __typename?: 'onboarding_screens_min_fields';
  copy?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  seqNo?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  version?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "onboarding_screens" */
export type Onboarding_Screens_Min_Order_By = {
  copy?: Maybe<Order_By>;
  language?: Maybe<Order_By>;
  seqNo?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  version?: Maybe<Order_By>;
};

/** response of any mutation on the table "onboarding_screens" */
export type Onboarding_Screens_Mutation_Response = {
   __typename?: 'onboarding_screens_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Onboarding_Screens>;
};

/** input type for inserting object relation for remote table "onboarding_screens" */
export type Onboarding_Screens_Obj_Rel_Insert_Input = {
  data: Onboarding_Screens_Insert_Input;
  on_conflict?: Maybe<Onboarding_Screens_On_Conflict>;
};

/** on conflict condition type for table "onboarding_screens" */
export type Onboarding_Screens_On_Conflict = {
  constraint: Onboarding_Screens_Constraint;
  update_columns: Array<Onboarding_Screens_Update_Column>;
  where?: Maybe<Onboarding_Screens_Bool_Exp>;
};

/** ordering options when selecting data from "onboarding_screens" */
export type Onboarding_Screens_Order_By = {
  copy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  language?: Maybe<Order_By>;
  seqNo?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  version?: Maybe<Order_By>;
};

/** select columns of table "onboarding_screens" */
export enum Onboarding_Screens_Select_Column {
  /** column name */
  Copy = 'copy',
  /** column name */
  Id = 'id',
  /** column name */
  Language = 'language',
  /** column name */
  SeqNo = 'seqNo',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Version = 'version'
}

/** input type for updating data in table "onboarding_screens" */
export type Onboarding_Screens_Set_Input = {
  copy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  language?: Maybe<Scalars['String']>;
  seqNo?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  version?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Onboarding_Screens_Stddev_Fields = {
   __typename?: 'onboarding_screens_stddev_fields';
  seqNo?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "onboarding_screens" */
export type Onboarding_Screens_Stddev_Order_By = {
  seqNo?: Maybe<Order_By>;
  version?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Onboarding_Screens_Stddev_Pop_Fields = {
   __typename?: 'onboarding_screens_stddev_pop_fields';
  seqNo?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "onboarding_screens" */
export type Onboarding_Screens_Stddev_Pop_Order_By = {
  seqNo?: Maybe<Order_By>;
  version?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Onboarding_Screens_Stddev_Samp_Fields = {
   __typename?: 'onboarding_screens_stddev_samp_fields';
  seqNo?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "onboarding_screens" */
export type Onboarding_Screens_Stddev_Samp_Order_By = {
  seqNo?: Maybe<Order_By>;
  version?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Onboarding_Screens_Sum_Fields = {
   __typename?: 'onboarding_screens_sum_fields';
  seqNo?: Maybe<Scalars['Int']>;
  version?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "onboarding_screens" */
export type Onboarding_Screens_Sum_Order_By = {
  seqNo?: Maybe<Order_By>;
  version?: Maybe<Order_By>;
};

/** update columns of table "onboarding_screens" */
export enum Onboarding_Screens_Update_Column {
  /** column name */
  Copy = 'copy',
  /** column name */
  Id = 'id',
  /** column name */
  Language = 'language',
  /** column name */
  SeqNo = 'seqNo',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Version = 'version'
}

/** aggregate var_pop on columns */
export type Onboarding_Screens_Var_Pop_Fields = {
   __typename?: 'onboarding_screens_var_pop_fields';
  seqNo?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "onboarding_screens" */
export type Onboarding_Screens_Var_Pop_Order_By = {
  seqNo?: Maybe<Order_By>;
  version?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Onboarding_Screens_Var_Samp_Fields = {
   __typename?: 'onboarding_screens_var_samp_fields';
  seqNo?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "onboarding_screens" */
export type Onboarding_Screens_Var_Samp_Order_By = {
  seqNo?: Maybe<Order_By>;
  version?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Onboarding_Screens_Variance_Fields = {
   __typename?: 'onboarding_screens_variance_fields';
  seqNo?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "onboarding_screens" */
export type Onboarding_Screens_Variance_Order_By = {
  seqNo?: Maybe<Order_By>;
  version?: Maybe<Order_By>;
};

/** columns and relationships of "onboarding_states_enum" */
export type Onboarding_States_Enum = {
   __typename?: 'onboarding_states_enum';
  comment?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** aggregated selection of "onboarding_states_enum" */
export type Onboarding_States_Enum_Aggregate = {
   __typename?: 'onboarding_states_enum_aggregate';
  aggregate?: Maybe<Onboarding_States_Enum_Aggregate_Fields>;
  nodes: Array<Onboarding_States_Enum>;
};

/** aggregate fields of "onboarding_states_enum" */
export type Onboarding_States_Enum_Aggregate_Fields = {
   __typename?: 'onboarding_states_enum_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Onboarding_States_Enum_Max_Fields>;
  min?: Maybe<Onboarding_States_Enum_Min_Fields>;
};


/** aggregate fields of "onboarding_states_enum" */
export type Onboarding_States_Enum_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Onboarding_States_Enum_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "onboarding_states_enum" */
export type Onboarding_States_Enum_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Onboarding_States_Enum_Max_Order_By>;
  min?: Maybe<Onboarding_States_Enum_Min_Order_By>;
};

/** input type for inserting array relation for remote table "onboarding_states_enum" */
export type Onboarding_States_Enum_Arr_Rel_Insert_Input = {
  data: Array<Onboarding_States_Enum_Insert_Input>;
  on_conflict?: Maybe<Onboarding_States_Enum_On_Conflict>;
};

/** Boolean expression to filter rows from the table "onboarding_states_enum". All fields are combined with a logical 'AND'. */
export type Onboarding_States_Enum_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Onboarding_States_Enum_Bool_Exp>>>;
  _not?: Maybe<Onboarding_States_Enum_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Onboarding_States_Enum_Bool_Exp>>>;
  comment?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "onboarding_states_enum" */
export enum Onboarding_States_Enum_Constraint {
  /** unique or primary key constraint */
  OnboardingStatesEnumPkey = 'onboarding_states_enum_pkey'
}

export enum Onboarding_States_Enum_Enum {
  /** 3. user has user has set a birthday */
  BirthdayComplete = 'birthday_complete',
  /** 4. user has set a display name */
  DisplayNameComplete = 'display_name_complete',
  /** 6. user has set a gender */
  GenderComplete = 'gender_complete',
  /** 8. user has set their match prefrences */
  LookingForComplete = 'looking_for_complete',
  /** 1. new user */
  New = 'new',
  /** 7. user has uploaded a picture */
  PicturesComplete = 'pictures_complete',
  /** 9. user has set up their profile */
  ProfileComplete = 'profile_complete',
  /** 5. user has set profile text */
  ProfileTextComplete = 'profile_text_complete',
  /** 2. user has gone through walkthrough screens */
  WalkthroughComplete = 'walkthrough_complete'
}

/** expression to compare columns of type onboarding_states_enum_enum. All fields are combined with logical 'AND'. */
export type Onboarding_States_Enum_Enum_Comparison_Exp = {
  _eq?: Maybe<Onboarding_States_Enum_Enum>;
  _in?: Maybe<Array<Onboarding_States_Enum_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Onboarding_States_Enum_Enum>;
  _nin?: Maybe<Array<Onboarding_States_Enum_Enum>>;
};

/** input type for inserting data into table "onboarding_states_enum" */
export type Onboarding_States_Enum_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Onboarding_States_Enum_Max_Fields = {
   __typename?: 'onboarding_states_enum_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "onboarding_states_enum" */
export type Onboarding_States_Enum_Max_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Onboarding_States_Enum_Min_Fields = {
   __typename?: 'onboarding_states_enum_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "onboarding_states_enum" */
export type Onboarding_States_Enum_Min_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "onboarding_states_enum" */
export type Onboarding_States_Enum_Mutation_Response = {
   __typename?: 'onboarding_states_enum_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Onboarding_States_Enum>;
};

/** input type for inserting object relation for remote table "onboarding_states_enum" */
export type Onboarding_States_Enum_Obj_Rel_Insert_Input = {
  data: Onboarding_States_Enum_Insert_Input;
  on_conflict?: Maybe<Onboarding_States_Enum_On_Conflict>;
};

/** on conflict condition type for table "onboarding_states_enum" */
export type Onboarding_States_Enum_On_Conflict = {
  constraint: Onboarding_States_Enum_Constraint;
  update_columns: Array<Onboarding_States_Enum_Update_Column>;
  where?: Maybe<Onboarding_States_Enum_Bool_Exp>;
};

/** ordering options when selecting data from "onboarding_states_enum" */
export type Onboarding_States_Enum_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** select columns of table "onboarding_states_enum" */
export enum Onboarding_States_Enum_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "onboarding_states_enum" */
export type Onboarding_States_Enum_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "onboarding_states_enum" */
export enum Onboarding_States_Enum_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "profile_looking_for_gender_maps" */
export type Profile_Looking_For_Gender_Maps = {
   __typename?: 'profile_looking_for_gender_maps';
  /** An object relationship */
  gender: Genders;
  gender_id: Scalars['String'];
  /** An object relationship */
  profile: Profiles;
  profile_id: Scalars['uuid'];
};

/** aggregated selection of "profile_looking_for_gender_maps" */
export type Profile_Looking_For_Gender_Maps_Aggregate = {
   __typename?: 'profile_looking_for_gender_maps_aggregate';
  aggregate?: Maybe<Profile_Looking_For_Gender_Maps_Aggregate_Fields>;
  nodes: Array<Profile_Looking_For_Gender_Maps>;
};

/** aggregate fields of "profile_looking_for_gender_maps" */
export type Profile_Looking_For_Gender_Maps_Aggregate_Fields = {
   __typename?: 'profile_looking_for_gender_maps_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Profile_Looking_For_Gender_Maps_Max_Fields>;
  min?: Maybe<Profile_Looking_For_Gender_Maps_Min_Fields>;
};


/** aggregate fields of "profile_looking_for_gender_maps" */
export type Profile_Looking_For_Gender_Maps_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Profile_Looking_For_Gender_Maps_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "profile_looking_for_gender_maps" */
export type Profile_Looking_For_Gender_Maps_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Profile_Looking_For_Gender_Maps_Max_Order_By>;
  min?: Maybe<Profile_Looking_For_Gender_Maps_Min_Order_By>;
};

/** input type for inserting array relation for remote table "profile_looking_for_gender_maps" */
export type Profile_Looking_For_Gender_Maps_Arr_Rel_Insert_Input = {
  data: Array<Profile_Looking_For_Gender_Maps_Insert_Input>;
  on_conflict?: Maybe<Profile_Looking_For_Gender_Maps_On_Conflict>;
};

/**
 * Boolean expression to filter rows from the table
 * "profile_looking_for_gender_maps". All fields are combined with a logical 'AND'.
 */
export type Profile_Looking_For_Gender_Maps_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Profile_Looking_For_Gender_Maps_Bool_Exp>>>;
  _not?: Maybe<Profile_Looking_For_Gender_Maps_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Profile_Looking_For_Gender_Maps_Bool_Exp>>>;
  gender?: Maybe<Genders_Bool_Exp>;
  gender_id?: Maybe<String_Comparison_Exp>;
  profile?: Maybe<Profiles_Bool_Exp>;
  profile_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "profile_looking_for_gender_maps" */
export enum Profile_Looking_For_Gender_Maps_Constraint {
  /** unique or primary key constraint */
  ProfileLookingForGenderMapsPkey = 'profile_looking_for_gender_maps_pkey'
}

/** input type for inserting data into table "profile_looking_for_gender_maps" */
export type Profile_Looking_For_Gender_Maps_Insert_Input = {
  gender?: Maybe<Genders_Obj_Rel_Insert_Input>;
  gender_id?: Maybe<Scalars['String']>;
  profile?: Maybe<Profiles_Obj_Rel_Insert_Input>;
  profile_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Profile_Looking_For_Gender_Maps_Max_Fields = {
   __typename?: 'profile_looking_for_gender_maps_max_fields';
  gender_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "profile_looking_for_gender_maps" */
export type Profile_Looking_For_Gender_Maps_Max_Order_By = {
  gender_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Profile_Looking_For_Gender_Maps_Min_Fields = {
   __typename?: 'profile_looking_for_gender_maps_min_fields';
  gender_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "profile_looking_for_gender_maps" */
export type Profile_Looking_For_Gender_Maps_Min_Order_By = {
  gender_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "profile_looking_for_gender_maps" */
export type Profile_Looking_For_Gender_Maps_Mutation_Response = {
   __typename?: 'profile_looking_for_gender_maps_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Profile_Looking_For_Gender_Maps>;
};

/** input type for inserting object relation for remote table "profile_looking_for_gender_maps" */
export type Profile_Looking_For_Gender_Maps_Obj_Rel_Insert_Input = {
  data: Profile_Looking_For_Gender_Maps_Insert_Input;
  on_conflict?: Maybe<Profile_Looking_For_Gender_Maps_On_Conflict>;
};

/** on conflict condition type for table "profile_looking_for_gender_maps" */
export type Profile_Looking_For_Gender_Maps_On_Conflict = {
  constraint: Profile_Looking_For_Gender_Maps_Constraint;
  update_columns: Array<Profile_Looking_For_Gender_Maps_Update_Column>;
  where?: Maybe<Profile_Looking_For_Gender_Maps_Bool_Exp>;
};

/** ordering options when selecting data from "profile_looking_for_gender_maps" */
export type Profile_Looking_For_Gender_Maps_Order_By = {
  gender?: Maybe<Genders_Order_By>;
  gender_id?: Maybe<Order_By>;
  profile?: Maybe<Profiles_Order_By>;
  profile_id?: Maybe<Order_By>;
};

/** select columns of table "profile_looking_for_gender_maps" */
export enum Profile_Looking_For_Gender_Maps_Select_Column {
  /** column name */
  GenderId = 'gender_id',
  /** column name */
  ProfileId = 'profile_id'
}

/** input type for updating data in table "profile_looking_for_gender_maps" */
export type Profile_Looking_For_Gender_Maps_Set_Input = {
  gender_id?: Maybe<Scalars['String']>;
  profile_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "profile_looking_for_gender_maps" */
export enum Profile_Looking_For_Gender_Maps_Update_Column {
  /** column name */
  GenderId = 'gender_id',
  /** column name */
  ProfileId = 'profile_id'
}

/** columns and relationships of "profiles" */
export type Profiles = {
   __typename?: 'profiles';
  birthday: Scalars['date'];
  created_at: Scalars['timestamptz'];
  display_name: Scalars['String'];
  display_profile: Scalars['String'];
  /** An object relationship */
  gender: Genders;
  gender_id: Scalars['String'];
  id: Scalars['uuid'];
  /** An object relationship */
  last_viewed_onboarding_screen?: Maybe<Onboarding_Screens>;
  last_viewed_onboarding_screen_id?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  looking_for_genders: Array<Profile_Looking_For_Gender_Maps>;
  /** An aggregated array relationship */
  looking_for_genders_aggregate: Profile_Looking_For_Gender_Maps_Aggregate;
  max_age: Scalars['Int'];
  /** Meters */
  max_dist: Scalars['Int'];
  min_age: Scalars['Int'];
  onboarding_state: Onboarding_States_Enum_Enum;
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  uploads: Array<Uploads>;
  /** An aggregated array relationship */
  uploads_aggregate: Uploads_Aggregate;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id: Scalars['uuid'];
};


/** columns and relationships of "profiles" */
export type ProfilesLooking_For_GendersArgs = {
  distinct_on?: Maybe<Array<Profile_Looking_For_Gender_Maps_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Looking_For_Gender_Maps_Order_By>>;
  where?: Maybe<Profile_Looking_For_Gender_Maps_Bool_Exp>;
};


/** columns and relationships of "profiles" */
export type ProfilesLooking_For_Genders_AggregateArgs = {
  distinct_on?: Maybe<Array<Profile_Looking_For_Gender_Maps_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Looking_For_Gender_Maps_Order_By>>;
  where?: Maybe<Profile_Looking_For_Gender_Maps_Bool_Exp>;
};


/** columns and relationships of "profiles" */
export type ProfilesUploadsArgs = {
  distinct_on?: Maybe<Array<Uploads_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Uploads_Order_By>>;
  where?: Maybe<Uploads_Bool_Exp>;
};


/** columns and relationships of "profiles" */
export type ProfilesUploads_AggregateArgs = {
  distinct_on?: Maybe<Array<Uploads_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Uploads_Order_By>>;
  where?: Maybe<Uploads_Bool_Exp>;
};

/** aggregated selection of "profiles" */
export type Profiles_Aggregate = {
   __typename?: 'profiles_aggregate';
  aggregate?: Maybe<Profiles_Aggregate_Fields>;
  nodes: Array<Profiles>;
};

/** aggregate fields of "profiles" */
export type Profiles_Aggregate_Fields = {
   __typename?: 'profiles_aggregate_fields';
  avg?: Maybe<Profiles_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Profiles_Max_Fields>;
  min?: Maybe<Profiles_Min_Fields>;
  stddev?: Maybe<Profiles_Stddev_Fields>;
  stddev_pop?: Maybe<Profiles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Profiles_Stddev_Samp_Fields>;
  sum?: Maybe<Profiles_Sum_Fields>;
  var_pop?: Maybe<Profiles_Var_Pop_Fields>;
  var_samp?: Maybe<Profiles_Var_Samp_Fields>;
  variance?: Maybe<Profiles_Variance_Fields>;
};


/** aggregate fields of "profiles" */
export type Profiles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Profiles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "profiles" */
export type Profiles_Aggregate_Order_By = {
  avg?: Maybe<Profiles_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Profiles_Max_Order_By>;
  min?: Maybe<Profiles_Min_Order_By>;
  stddev?: Maybe<Profiles_Stddev_Order_By>;
  stddev_pop?: Maybe<Profiles_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Profiles_Stddev_Samp_Order_By>;
  sum?: Maybe<Profiles_Sum_Order_By>;
  var_pop?: Maybe<Profiles_Var_Pop_Order_By>;
  var_samp?: Maybe<Profiles_Var_Samp_Order_By>;
  variance?: Maybe<Profiles_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "profiles" */
export type Profiles_Arr_Rel_Insert_Input = {
  data: Array<Profiles_Insert_Input>;
  on_conflict?: Maybe<Profiles_On_Conflict>;
};

/** aggregate avg on columns */
export type Profiles_Avg_Fields = {
   __typename?: 'profiles_avg_fields';
  max_age?: Maybe<Scalars['Float']>;
  max_dist?: Maybe<Scalars['Float']>;
  min_age?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "profiles" */
export type Profiles_Avg_Order_By = {
  max_age?: Maybe<Order_By>;
  max_dist?: Maybe<Order_By>;
  min_age?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "profiles". All fields are combined with a logical 'AND'. */
export type Profiles_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Profiles_Bool_Exp>>>;
  _not?: Maybe<Profiles_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Profiles_Bool_Exp>>>;
  birthday?: Maybe<Date_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  display_profile?: Maybe<String_Comparison_Exp>;
  gender?: Maybe<Genders_Bool_Exp>;
  gender_id?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  last_viewed_onboarding_screen?: Maybe<Onboarding_Screens_Bool_Exp>;
  last_viewed_onboarding_screen_id?: Maybe<Uuid_Comparison_Exp>;
  looking_for_genders?: Maybe<Profile_Looking_For_Gender_Maps_Bool_Exp>;
  max_age?: Maybe<Int_Comparison_Exp>;
  max_dist?: Maybe<Int_Comparison_Exp>;
  min_age?: Maybe<Int_Comparison_Exp>;
  onboarding_state?: Maybe<Onboarding_States_Enum_Enum_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  uploads?: Maybe<Uploads_Bool_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "profiles" */
export enum Profiles_Constraint {
  /** unique or primary key constraint */
  ProfilesPkey = 'profiles_pkey',
  /** unique or primary key constraint */
  ProfilesUserIdKey = 'profiles_user_id_key'
}

/** input type for incrementing integer columne in table "profiles" */
export type Profiles_Inc_Input = {
  max_age?: Maybe<Scalars['Int']>;
  max_dist?: Maybe<Scalars['Int']>;
  min_age?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "profiles" */
export type Profiles_Insert_Input = {
  birthday?: Maybe<Scalars['date']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  display_profile?: Maybe<Scalars['String']>;
  gender?: Maybe<Genders_Obj_Rel_Insert_Input>;
  gender_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_viewed_onboarding_screen?: Maybe<Onboarding_Screens_Obj_Rel_Insert_Input>;
  last_viewed_onboarding_screen_id?: Maybe<Scalars['uuid']>;
  looking_for_genders?: Maybe<Profile_Looking_For_Gender_Maps_Arr_Rel_Insert_Input>;
  max_age?: Maybe<Scalars['Int']>;
  max_dist?: Maybe<Scalars['Int']>;
  min_age?: Maybe<Scalars['Int']>;
  onboarding_state?: Maybe<Onboarding_States_Enum_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uploads?: Maybe<Uploads_Arr_Rel_Insert_Input>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Profiles_Max_Fields = {
   __typename?: 'profiles_max_fields';
  birthday?: Maybe<Scalars['date']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  display_profile?: Maybe<Scalars['String']>;
  gender_id?: Maybe<Scalars['String']>;
  max_age?: Maybe<Scalars['Int']>;
  max_dist?: Maybe<Scalars['Int']>;
  min_age?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "profiles" */
export type Profiles_Max_Order_By = {
  birthday?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  display_profile?: Maybe<Order_By>;
  gender_id?: Maybe<Order_By>;
  max_age?: Maybe<Order_By>;
  max_dist?: Maybe<Order_By>;
  min_age?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Profiles_Min_Fields = {
   __typename?: 'profiles_min_fields';
  birthday?: Maybe<Scalars['date']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  display_profile?: Maybe<Scalars['String']>;
  gender_id?: Maybe<Scalars['String']>;
  max_age?: Maybe<Scalars['Int']>;
  max_dist?: Maybe<Scalars['Int']>;
  min_age?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "profiles" */
export type Profiles_Min_Order_By = {
  birthday?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  display_profile?: Maybe<Order_By>;
  gender_id?: Maybe<Order_By>;
  max_age?: Maybe<Order_By>;
  max_dist?: Maybe<Order_By>;
  min_age?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "profiles" */
export type Profiles_Mutation_Response = {
   __typename?: 'profiles_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Profiles>;
};

/** input type for inserting object relation for remote table "profiles" */
export type Profiles_Obj_Rel_Insert_Input = {
  data: Profiles_Insert_Input;
  on_conflict?: Maybe<Profiles_On_Conflict>;
};

/** on conflict condition type for table "profiles" */
export type Profiles_On_Conflict = {
  constraint: Profiles_Constraint;
  update_columns: Array<Profiles_Update_Column>;
  where?: Maybe<Profiles_Bool_Exp>;
};

/** ordering options when selecting data from "profiles" */
export type Profiles_Order_By = {
  birthday?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  display_profile?: Maybe<Order_By>;
  gender?: Maybe<Genders_Order_By>;
  gender_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_viewed_onboarding_screen?: Maybe<Onboarding_Screens_Order_By>;
  last_viewed_onboarding_screen_id?: Maybe<Order_By>;
  looking_for_genders_aggregate?: Maybe<Profile_Looking_For_Gender_Maps_Aggregate_Order_By>;
  max_age?: Maybe<Order_By>;
  max_dist?: Maybe<Order_By>;
  min_age?: Maybe<Order_By>;
  onboarding_state?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  uploads_aggregate?: Maybe<Uploads_Aggregate_Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "profiles" */
export enum Profiles_Select_Column {
  /** column name */
  Birthday = 'birthday',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  DisplayProfile = 'display_profile',
  /** column name */
  GenderId = 'gender_id',
  /** column name */
  Id = 'id',
  /** column name */
  LastViewedOnboardingScreenId = 'last_viewed_onboarding_screen_id',
  /** column name */
  MaxAge = 'max_age',
  /** column name */
  MaxDist = 'max_dist',
  /** column name */
  MinAge = 'min_age',
  /** column name */
  OnboardingState = 'onboarding_state',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "profiles" */
export type Profiles_Set_Input = {
  birthday?: Maybe<Scalars['date']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  display_profile?: Maybe<Scalars['String']>;
  gender_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_viewed_onboarding_screen_id?: Maybe<Scalars['uuid']>;
  max_age?: Maybe<Scalars['Int']>;
  max_dist?: Maybe<Scalars['Int']>;
  min_age?: Maybe<Scalars['Int']>;
  onboarding_state?: Maybe<Onboarding_States_Enum_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Profiles_Stddev_Fields = {
   __typename?: 'profiles_stddev_fields';
  max_age?: Maybe<Scalars['Float']>;
  max_dist?: Maybe<Scalars['Float']>;
  min_age?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "profiles" */
export type Profiles_Stddev_Order_By = {
  max_age?: Maybe<Order_By>;
  max_dist?: Maybe<Order_By>;
  min_age?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Profiles_Stddev_Pop_Fields = {
   __typename?: 'profiles_stddev_pop_fields';
  max_age?: Maybe<Scalars['Float']>;
  max_dist?: Maybe<Scalars['Float']>;
  min_age?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "profiles" */
export type Profiles_Stddev_Pop_Order_By = {
  max_age?: Maybe<Order_By>;
  max_dist?: Maybe<Order_By>;
  min_age?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Profiles_Stddev_Samp_Fields = {
   __typename?: 'profiles_stddev_samp_fields';
  max_age?: Maybe<Scalars['Float']>;
  max_dist?: Maybe<Scalars['Float']>;
  min_age?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "profiles" */
export type Profiles_Stddev_Samp_Order_By = {
  max_age?: Maybe<Order_By>;
  max_dist?: Maybe<Order_By>;
  min_age?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Profiles_Sum_Fields = {
   __typename?: 'profiles_sum_fields';
  max_age?: Maybe<Scalars['Int']>;
  max_dist?: Maybe<Scalars['Int']>;
  min_age?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "profiles" */
export type Profiles_Sum_Order_By = {
  max_age?: Maybe<Order_By>;
  max_dist?: Maybe<Order_By>;
  min_age?: Maybe<Order_By>;
};

/** update columns of table "profiles" */
export enum Profiles_Update_Column {
  /** column name */
  Birthday = 'birthday',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  DisplayProfile = 'display_profile',
  /** column name */
  GenderId = 'gender_id',
  /** column name */
  Id = 'id',
  /** column name */
  LastViewedOnboardingScreenId = 'last_viewed_onboarding_screen_id',
  /** column name */
  MaxAge = 'max_age',
  /** column name */
  MaxDist = 'max_dist',
  /** column name */
  MinAge = 'min_age',
  /** column name */
  OnboardingState = 'onboarding_state',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Profiles_Var_Pop_Fields = {
   __typename?: 'profiles_var_pop_fields';
  max_age?: Maybe<Scalars['Float']>;
  max_dist?: Maybe<Scalars['Float']>;
  min_age?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "profiles" */
export type Profiles_Var_Pop_Order_By = {
  max_age?: Maybe<Order_By>;
  max_dist?: Maybe<Order_By>;
  min_age?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Profiles_Var_Samp_Fields = {
   __typename?: 'profiles_var_samp_fields';
  max_age?: Maybe<Scalars['Float']>;
  max_dist?: Maybe<Scalars['Float']>;
  min_age?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "profiles" */
export type Profiles_Var_Samp_Order_By = {
  max_age?: Maybe<Order_By>;
  max_dist?: Maybe<Order_By>;
  min_age?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Profiles_Variance_Fields = {
   __typename?: 'profiles_variance_fields';
  max_age?: Maybe<Scalars['Float']>;
  max_dist?: Maybe<Scalars['Float']>;
  min_age?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "profiles" */
export type Profiles_Variance_Order_By = {
  max_age?: Maybe<Order_By>;
  max_dist?: Maybe<Order_By>;
  min_age?: Maybe<Order_By>;
};

export type Query = {
   __typename?: 'Query';
  l_ping?: Maybe<Scalars['String']>;
};

/** query root */
export type Query_Root = {
   __typename?: 'query_root';
  /** fetch data from the table: "genders" */
  genders: Array<Genders>;
  /** fetch aggregated fields from the table: "genders" */
  genders_aggregate: Genders_Aggregate;
  /** fetch data from the table: "genders" using primary key columns */
  genders_by_pk?: Maybe<Genders>;
  l_ping?: Maybe<Scalars['String']>;
  /** fetch data from the table: "onboarding_screens" */
  onboarding_screens: Array<Onboarding_Screens>;
  /** fetch aggregated fields from the table: "onboarding_screens" */
  onboarding_screens_aggregate: Onboarding_Screens_Aggregate;
  /** fetch data from the table: "onboarding_screens" using primary key columns */
  onboarding_screens_by_pk?: Maybe<Onboarding_Screens>;
  /** fetch data from the table: "onboarding_states_enum" */
  onboarding_states_enum: Array<Onboarding_States_Enum>;
  /** fetch aggregated fields from the table: "onboarding_states_enum" */
  onboarding_states_enum_aggregate: Onboarding_States_Enum_Aggregate;
  /** fetch data from the table: "onboarding_states_enum" using primary key columns */
  onboarding_states_enum_by_pk?: Maybe<Onboarding_States_Enum>;
  /** fetch data from the table: "profile_looking_for_gender_maps" */
  profile_looking_for_gender_maps: Array<Profile_Looking_For_Gender_Maps>;
  /** fetch aggregated fields from the table: "profile_looking_for_gender_maps" */
  profile_looking_for_gender_maps_aggregate: Profile_Looking_For_Gender_Maps_Aggregate;
  /** fetch data from the table: "profile_looking_for_gender_maps" using primary key columns */
  profile_looking_for_gender_maps_by_pk?: Maybe<Profile_Looking_For_Gender_Maps>;
  /** fetch data from the table: "profiles" */
  profiles: Array<Profiles>;
  /** fetch aggregated fields from the table: "profiles" */
  profiles_aggregate: Profiles_Aggregate;
  /** fetch data from the table: "profiles" using primary key columns */
  profiles_by_pk?: Maybe<Profiles>;
  /** fetch data from the table: "tokens" */
  tokens: Array<Tokens>;
  /** fetch aggregated fields from the table: "tokens" */
  tokens_aggregate: Tokens_Aggregate;
  /** fetch data from the table: "tokens" using primary key columns */
  tokens_by_pk?: Maybe<Tokens>;
  /** fetch data from the table: "uploads" */
  uploads: Array<Uploads>;
  /** fetch aggregated fields from the table: "uploads" */
  uploads_aggregate: Uploads_Aggregate;
  /** fetch data from the table: "uploads" using primary key columns */
  uploads_by_pk?: Maybe<Uploads>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** query root */
export type Query_RootGendersArgs = {
  distinct_on?: Maybe<Array<Genders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Genders_Order_By>>;
  where?: Maybe<Genders_Bool_Exp>;
};


/** query root */
export type Query_RootGenders_AggregateArgs = {
  distinct_on?: Maybe<Array<Genders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Genders_Order_By>>;
  where?: Maybe<Genders_Bool_Exp>;
};


/** query root */
export type Query_RootGenders_By_PkArgs = {
  id: Scalars['String'];
};


/** query root */
export type Query_RootOnboarding_ScreensArgs = {
  distinct_on?: Maybe<Array<Onboarding_Screens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Onboarding_Screens_Order_By>>;
  where?: Maybe<Onboarding_Screens_Bool_Exp>;
};


/** query root */
export type Query_RootOnboarding_Screens_AggregateArgs = {
  distinct_on?: Maybe<Array<Onboarding_Screens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Onboarding_Screens_Order_By>>;
  where?: Maybe<Onboarding_Screens_Bool_Exp>;
};


/** query root */
export type Query_RootOnboarding_Screens_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootOnboarding_States_EnumArgs = {
  distinct_on?: Maybe<Array<Onboarding_States_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Onboarding_States_Enum_Order_By>>;
  where?: Maybe<Onboarding_States_Enum_Bool_Exp>;
};


/** query root */
export type Query_RootOnboarding_States_Enum_AggregateArgs = {
  distinct_on?: Maybe<Array<Onboarding_States_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Onboarding_States_Enum_Order_By>>;
  where?: Maybe<Onboarding_States_Enum_Bool_Exp>;
};


/** query root */
export type Query_RootOnboarding_States_Enum_By_PkArgs = {
  value: Scalars['String'];
};


/** query root */
export type Query_RootProfile_Looking_For_Gender_MapsArgs = {
  distinct_on?: Maybe<Array<Profile_Looking_For_Gender_Maps_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Looking_For_Gender_Maps_Order_By>>;
  where?: Maybe<Profile_Looking_For_Gender_Maps_Bool_Exp>;
};


/** query root */
export type Query_RootProfile_Looking_For_Gender_Maps_AggregateArgs = {
  distinct_on?: Maybe<Array<Profile_Looking_For_Gender_Maps_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Looking_For_Gender_Maps_Order_By>>;
  where?: Maybe<Profile_Looking_For_Gender_Maps_Bool_Exp>;
};


/** query root */
export type Query_RootProfile_Looking_For_Gender_Maps_By_PkArgs = {
  gender_id: Scalars['String'];
  profile_id: Scalars['uuid'];
};


/** query root */
export type Query_RootProfilesArgs = {
  distinct_on?: Maybe<Array<Profiles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profiles_Order_By>>;
  where?: Maybe<Profiles_Bool_Exp>;
};


/** query root */
export type Query_RootProfiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Profiles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profiles_Order_By>>;
  where?: Maybe<Profiles_Bool_Exp>;
};


/** query root */
export type Query_RootProfiles_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootTokensArgs = {
  distinct_on?: Maybe<Array<Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tokens_Order_By>>;
  where?: Maybe<Tokens_Bool_Exp>;
};


/** query root */
export type Query_RootTokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tokens_Order_By>>;
  where?: Maybe<Tokens_Bool_Exp>;
};


/** query root */
export type Query_RootTokens_By_PkArgs = {
  owner_id: Scalars['uuid'];
  provider: Scalars['String'];
};


/** query root */
export type Query_RootUploadsArgs = {
  distinct_on?: Maybe<Array<Uploads_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Uploads_Order_By>>;
  where?: Maybe<Uploads_Bool_Exp>;
};


/** query root */
export type Query_RootUploads_AggregateArgs = {
  distinct_on?: Maybe<Array<Uploads_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Uploads_Order_By>>;
  where?: Maybe<Uploads_Bool_Exp>;
};


/** query root */
export type Query_RootUploads_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** subscription root */
export type Subscription_Root = {
   __typename?: 'subscription_root';
  /** fetch data from the table: "genders" */
  genders: Array<Genders>;
  /** fetch aggregated fields from the table: "genders" */
  genders_aggregate: Genders_Aggregate;
  /** fetch data from the table: "genders" using primary key columns */
  genders_by_pk?: Maybe<Genders>;
  /** fetch data from the table: "onboarding_screens" */
  onboarding_screens: Array<Onboarding_Screens>;
  /** fetch aggregated fields from the table: "onboarding_screens" */
  onboarding_screens_aggregate: Onboarding_Screens_Aggregate;
  /** fetch data from the table: "onboarding_screens" using primary key columns */
  onboarding_screens_by_pk?: Maybe<Onboarding_Screens>;
  /** fetch data from the table: "onboarding_states_enum" */
  onboarding_states_enum: Array<Onboarding_States_Enum>;
  /** fetch aggregated fields from the table: "onboarding_states_enum" */
  onboarding_states_enum_aggregate: Onboarding_States_Enum_Aggregate;
  /** fetch data from the table: "onboarding_states_enum" using primary key columns */
  onboarding_states_enum_by_pk?: Maybe<Onboarding_States_Enum>;
  /** fetch data from the table: "profile_looking_for_gender_maps" */
  profile_looking_for_gender_maps: Array<Profile_Looking_For_Gender_Maps>;
  /** fetch aggregated fields from the table: "profile_looking_for_gender_maps" */
  profile_looking_for_gender_maps_aggregate: Profile_Looking_For_Gender_Maps_Aggregate;
  /** fetch data from the table: "profile_looking_for_gender_maps" using primary key columns */
  profile_looking_for_gender_maps_by_pk?: Maybe<Profile_Looking_For_Gender_Maps>;
  /** fetch data from the table: "profiles" */
  profiles: Array<Profiles>;
  /** fetch aggregated fields from the table: "profiles" */
  profiles_aggregate: Profiles_Aggregate;
  /** fetch data from the table: "profiles" using primary key columns */
  profiles_by_pk?: Maybe<Profiles>;
  /** fetch data from the table: "tokens" */
  tokens: Array<Tokens>;
  /** fetch aggregated fields from the table: "tokens" */
  tokens_aggregate: Tokens_Aggregate;
  /** fetch data from the table: "tokens" using primary key columns */
  tokens_by_pk?: Maybe<Tokens>;
  /** fetch data from the table: "uploads" */
  uploads: Array<Uploads>;
  /** fetch aggregated fields from the table: "uploads" */
  uploads_aggregate: Uploads_Aggregate;
  /** fetch data from the table: "uploads" using primary key columns */
  uploads_by_pk?: Maybe<Uploads>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** subscription root */
export type Subscription_RootGendersArgs = {
  distinct_on?: Maybe<Array<Genders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Genders_Order_By>>;
  where?: Maybe<Genders_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGenders_AggregateArgs = {
  distinct_on?: Maybe<Array<Genders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Genders_Order_By>>;
  where?: Maybe<Genders_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGenders_By_PkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootOnboarding_ScreensArgs = {
  distinct_on?: Maybe<Array<Onboarding_Screens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Onboarding_Screens_Order_By>>;
  where?: Maybe<Onboarding_Screens_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOnboarding_Screens_AggregateArgs = {
  distinct_on?: Maybe<Array<Onboarding_Screens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Onboarding_Screens_Order_By>>;
  where?: Maybe<Onboarding_Screens_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOnboarding_Screens_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootOnboarding_States_EnumArgs = {
  distinct_on?: Maybe<Array<Onboarding_States_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Onboarding_States_Enum_Order_By>>;
  where?: Maybe<Onboarding_States_Enum_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOnboarding_States_Enum_AggregateArgs = {
  distinct_on?: Maybe<Array<Onboarding_States_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Onboarding_States_Enum_Order_By>>;
  where?: Maybe<Onboarding_States_Enum_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOnboarding_States_Enum_By_PkArgs = {
  value: Scalars['String'];
};


/** subscription root */
export type Subscription_RootProfile_Looking_For_Gender_MapsArgs = {
  distinct_on?: Maybe<Array<Profile_Looking_For_Gender_Maps_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Looking_For_Gender_Maps_Order_By>>;
  where?: Maybe<Profile_Looking_For_Gender_Maps_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProfile_Looking_For_Gender_Maps_AggregateArgs = {
  distinct_on?: Maybe<Array<Profile_Looking_For_Gender_Maps_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Looking_For_Gender_Maps_Order_By>>;
  where?: Maybe<Profile_Looking_For_Gender_Maps_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProfile_Looking_For_Gender_Maps_By_PkArgs = {
  gender_id: Scalars['String'];
  profile_id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootProfilesArgs = {
  distinct_on?: Maybe<Array<Profiles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profiles_Order_By>>;
  where?: Maybe<Profiles_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProfiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Profiles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profiles_Order_By>>;
  where?: Maybe<Profiles_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProfiles_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootTokensArgs = {
  distinct_on?: Maybe<Array<Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tokens_Order_By>>;
  where?: Maybe<Tokens_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tokens_Order_By>>;
  where?: Maybe<Tokens_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTokens_By_PkArgs = {
  owner_id: Scalars['uuid'];
  provider: Scalars['String'];
};


/** subscription root */
export type Subscription_RootUploadsArgs = {
  distinct_on?: Maybe<Array<Uploads_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Uploads_Order_By>>;
  where?: Maybe<Uploads_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUploads_AggregateArgs = {
  distinct_on?: Maybe<Array<Uploads_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Uploads_Order_By>>;
  where?: Maybe<Uploads_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUploads_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "tokens" */
export type Tokens = {
   __typename?: 'tokens';
  access_token?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  owner: Users;
  owner_id: Scalars['uuid'];
  provider: Scalars['String'];
  raw: Scalars['jsonb'];
  refresh_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "tokens" */
export type TokensRawArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "tokens" */
export type Tokens_Aggregate = {
   __typename?: 'tokens_aggregate';
  aggregate?: Maybe<Tokens_Aggregate_Fields>;
  nodes: Array<Tokens>;
};

/** aggregate fields of "tokens" */
export type Tokens_Aggregate_Fields = {
   __typename?: 'tokens_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Tokens_Max_Fields>;
  min?: Maybe<Tokens_Min_Fields>;
};


/** aggregate fields of "tokens" */
export type Tokens_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tokens_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "tokens" */
export type Tokens_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Tokens_Max_Order_By>;
  min?: Maybe<Tokens_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Tokens_Append_Input = {
  raw?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "tokens" */
export type Tokens_Arr_Rel_Insert_Input = {
  data: Array<Tokens_Insert_Input>;
  on_conflict?: Maybe<Tokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "tokens". All fields are combined with a logical 'AND'. */
export type Tokens_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Tokens_Bool_Exp>>>;
  _not?: Maybe<Tokens_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Tokens_Bool_Exp>>>;
  access_token?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  owner?: Maybe<Users_Bool_Exp>;
  owner_id?: Maybe<Uuid_Comparison_Exp>;
  provider?: Maybe<String_Comparison_Exp>;
  raw?: Maybe<Jsonb_Comparison_Exp>;
  refresh_token?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "tokens" */
export enum Tokens_Constraint {
  /** unique or primary key constraint */
  TokensPkey = 'tokens_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Tokens_Delete_At_Path_Input = {
  raw?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/**
 * delete the array element with specified index (negative integers count from the
 * end). throws an error if top level container is not an array
 */
export type Tokens_Delete_Elem_Input = {
  raw?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Tokens_Delete_Key_Input = {
  raw?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "tokens" */
export type Tokens_Insert_Input = {
  access_token?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  owner?: Maybe<Users_Obj_Rel_Insert_Input>;
  owner_id?: Maybe<Scalars['uuid']>;
  provider?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['jsonb']>;
  refresh_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Tokens_Max_Fields = {
   __typename?: 'tokens_max_fields';
  access_token?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  provider?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "tokens" */
export type Tokens_Max_Order_By = {
  access_token?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  provider?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Tokens_Min_Fields = {
   __typename?: 'tokens_min_fields';
  access_token?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  provider?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "tokens" */
export type Tokens_Min_Order_By = {
  access_token?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  provider?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "tokens" */
export type Tokens_Mutation_Response = {
   __typename?: 'tokens_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Tokens>;
};

/** input type for inserting object relation for remote table "tokens" */
export type Tokens_Obj_Rel_Insert_Input = {
  data: Tokens_Insert_Input;
  on_conflict?: Maybe<Tokens_On_Conflict>;
};

/** on conflict condition type for table "tokens" */
export type Tokens_On_Conflict = {
  constraint: Tokens_Constraint;
  update_columns: Array<Tokens_Update_Column>;
  where?: Maybe<Tokens_Bool_Exp>;
};

/** ordering options when selecting data from "tokens" */
export type Tokens_Order_By = {
  access_token?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  owner?: Maybe<Users_Order_By>;
  owner_id?: Maybe<Order_By>;
  provider?: Maybe<Order_By>;
  raw?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Tokens_Prepend_Input = {
  raw?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "tokens" */
export enum Tokens_Select_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  Provider = 'provider',
  /** column name */
  Raw = 'raw',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "tokens" */
export type Tokens_Set_Input = {
  access_token?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  owner_id?: Maybe<Scalars['uuid']>;
  provider?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['jsonb']>;
  refresh_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "tokens" */
export enum Tokens_Update_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  Provider = 'provider',
  /** column name */
  Raw = 'raw',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "uploads" */
export type Uploads = {
   __typename?: 'uploads';
  assetS3Bucket: Scalars['String'];
  assetS3Key: Scalars['String'];
  content_type: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  profile: Profiles;
  profile_id: Scalars['uuid'];
  state: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "uploads" */
export type Uploads_Aggregate = {
   __typename?: 'uploads_aggregate';
  aggregate?: Maybe<Uploads_Aggregate_Fields>;
  nodes: Array<Uploads>;
};

/** aggregate fields of "uploads" */
export type Uploads_Aggregate_Fields = {
   __typename?: 'uploads_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Uploads_Max_Fields>;
  min?: Maybe<Uploads_Min_Fields>;
};


/** aggregate fields of "uploads" */
export type Uploads_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Uploads_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "uploads" */
export type Uploads_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Uploads_Max_Order_By>;
  min?: Maybe<Uploads_Min_Order_By>;
};

/** input type for inserting array relation for remote table "uploads" */
export type Uploads_Arr_Rel_Insert_Input = {
  data: Array<Uploads_Insert_Input>;
  on_conflict?: Maybe<Uploads_On_Conflict>;
};

/** Boolean expression to filter rows from the table "uploads". All fields are combined with a logical 'AND'. */
export type Uploads_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Uploads_Bool_Exp>>>;
  _not?: Maybe<Uploads_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Uploads_Bool_Exp>>>;
  assetS3Bucket?: Maybe<String_Comparison_Exp>;
  assetS3Key?: Maybe<String_Comparison_Exp>;
  content_type?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  profile?: Maybe<Profiles_Bool_Exp>;
  profile_id?: Maybe<Uuid_Comparison_Exp>;
  state?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "uploads" */
export enum Uploads_Constraint {
  /** unique or primary key constraint */
  UploadsAssetS3KeyKey = 'uploads_assetS3Key_key',
  /** unique or primary key constraint */
  UploadsPkey = 'uploads_pkey'
}

/** input type for inserting data into table "uploads" */
export type Uploads_Insert_Input = {
  assetS3Bucket?: Maybe<Scalars['String']>;
  assetS3Key?: Maybe<Scalars['String']>;
  content_type?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  profile?: Maybe<Profiles_Obj_Rel_Insert_Input>;
  profile_id?: Maybe<Scalars['uuid']>;
  state?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Uploads_Max_Fields = {
   __typename?: 'uploads_max_fields';
  assetS3Bucket?: Maybe<Scalars['String']>;
  assetS3Key?: Maybe<Scalars['String']>;
  content_type?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  state?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "uploads" */
export type Uploads_Max_Order_By = {
  assetS3Bucket?: Maybe<Order_By>;
  assetS3Key?: Maybe<Order_By>;
  content_type?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Uploads_Min_Fields = {
   __typename?: 'uploads_min_fields';
  assetS3Bucket?: Maybe<Scalars['String']>;
  assetS3Key?: Maybe<Scalars['String']>;
  content_type?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  state?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "uploads" */
export type Uploads_Min_Order_By = {
  assetS3Bucket?: Maybe<Order_By>;
  assetS3Key?: Maybe<Order_By>;
  content_type?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "uploads" */
export type Uploads_Mutation_Response = {
   __typename?: 'uploads_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Uploads>;
};

/** input type for inserting object relation for remote table "uploads" */
export type Uploads_Obj_Rel_Insert_Input = {
  data: Uploads_Insert_Input;
  on_conflict?: Maybe<Uploads_On_Conflict>;
};

/** on conflict condition type for table "uploads" */
export type Uploads_On_Conflict = {
  constraint: Uploads_Constraint;
  update_columns: Array<Uploads_Update_Column>;
  where?: Maybe<Uploads_Bool_Exp>;
};

/** ordering options when selecting data from "uploads" */
export type Uploads_Order_By = {
  assetS3Bucket?: Maybe<Order_By>;
  assetS3Key?: Maybe<Order_By>;
  content_type?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  profile?: Maybe<Profiles_Order_By>;
  profile_id?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** select columns of table "uploads" */
export enum Uploads_Select_Column {
  /** column name */
  AssetS3Bucket = 'assetS3Bucket',
  /** column name */
  AssetS3Key = 'assetS3Key',
  /** column name */
  ContentType = 'content_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  State = 'state',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "uploads" */
export type Uploads_Set_Input = {
  assetS3Bucket?: Maybe<Scalars['String']>;
  assetS3Key?: Maybe<Scalars['String']>;
  content_type?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  profile_id?: Maybe<Scalars['uuid']>;
  state?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "uploads" */
export enum Uploads_Update_Column {
  /** column name */
  AssetS3Bucket = 'assetS3Bucket',
  /** column name */
  AssetS3Key = 'assetS3Key',
  /** column name */
  ContentType = 'content_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  State = 'state',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "users" */
export type Users = {
   __typename?: 'users';
  created_at: Scalars['timestamptz'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  email: Scalars['String'];
  family_name?: Maybe<Scalars['String']>;
  given_name?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  jwt_valid_after: Scalars['timestamptz'];
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** An object relationship */
  profile?: Maybe<Profiles>;
  profile_id?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  tokens: Array<Tokens>;
  /** An aggregated array relationship */
  tokens_aggregate: Tokens_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "users" */
export type UsersTokensArgs = {
  distinct_on?: Maybe<Array<Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tokens_Order_By>>;
  where?: Maybe<Tokens_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersTokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tokens_Order_By>>;
  where?: Maybe<Tokens_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
   __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
   __typename?: 'users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  family_name?: Maybe<String_Comparison_Exp>;
  given_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  jwt_valid_after?: Maybe<Timestamptz_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  picture?: Maybe<String_Comparison_Exp>;
  profile?: Maybe<Profiles_Bool_Exp>;
  profile_id?: Maybe<Uuid_Comparison_Exp>;
  tokens?: Maybe<Tokens_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  family_name?: Maybe<Scalars['String']>;
  given_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  jwt_valid_after?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  profile?: Maybe<Profiles_Obj_Rel_Insert_Input>;
  profile_id?: Maybe<Scalars['uuid']>;
  tokens?: Maybe<Tokens_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
   __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  family_name?: Maybe<Scalars['String']>;
  given_name?: Maybe<Scalars['String']>;
  jwt_valid_after?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  family_name?: Maybe<Order_By>;
  given_name?: Maybe<Order_By>;
  jwt_valid_after?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
   __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  family_name?: Maybe<Scalars['String']>;
  given_name?: Maybe<Scalars['String']>;
  jwt_valid_after?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  family_name?: Maybe<Order_By>;
  given_name?: Maybe<Order_By>;
  jwt_valid_after?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
   __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  family_name?: Maybe<Order_By>;
  given_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  jwt_valid_after?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
  profile?: Maybe<Profiles_Order_By>;
  profile_id?: Maybe<Order_By>;
  tokens_aggregate?: Maybe<Tokens_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Email = 'email',
  /** column name */
  FamilyName = 'family_name',
  /** column name */
  GivenName = 'given_name',
  /** column name */
  Id = 'id',
  /** column name */
  JwtValidAfter = 'jwt_valid_after',
  /** column name */
  Name = 'name',
  /** column name */
  Picture = 'picture',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  family_name?: Maybe<Scalars['String']>;
  given_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  jwt_valid_after?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  profile_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Email = 'email',
  /** column name */
  FamilyName = 'family_name',
  /** column name */
  GivenName = 'given_name',
  /** column name */
  Id = 'id',
  /** column name */
  JwtValidAfter = 'jwt_valid_after',
  /** column name */
  Name = 'name',
  /** column name */
  Picture = 'picture',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  UpdatedAt = 'updated_at'
}


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type SampleQueryVariables = {};


export type SampleQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & Pick<Users, 'id'>
  )> }
);


export const SampleDocument = gql`
    query Sample {
  users {
    id
  }
}
    `;
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Sample(variables?: SampleQueryVariables): Promise<SampleQuery> {
      return withWrapper(() => client.request<SampleQuery>(print(SampleDocument), variables));
    }
  };
}