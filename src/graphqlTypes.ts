export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  absolutePath: Scalars['String']['output'];
  accessTime: Scalars['Date']['output'];
  atime: Scalars['Date']['output'];
  atimeMs: Scalars['Float']['output'];
  base: Scalars['String']['output'];
  birthTime: Scalars['Date']['output'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']['output']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']['output']>;
  changeTime: Scalars['Date']['output'];
  children: Array<Node>;
  ctime: Scalars['Date']['output'];
  ctimeMs: Scalars['Float']['output'];
  dev: Scalars['Int']['output'];
  dir: Scalars['String']['output'];
  ext: Scalars['String']['output'];
  extension: Scalars['String']['output'];
  gid: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  ino: Scalars['Float']['output'];
  internal: Internal;
  mode: Scalars['Int']['output'];
  modifiedTime: Scalars['Date']['output'];
  mtime: Scalars['Date']['output'];
  mtimeMs: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  nlink: Scalars['Int']['output'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String']['output'];
  rdev: Scalars['Int']['output'];
  relativeDirectory: Scalars['String']['output'];
  relativePath: Scalars['String']['output'];
  root: Scalars['String']['output'];
  size: Scalars['Int']['output'];
  sourceInstanceName: Scalars['String']['output'];
  uid: Scalars['Int']['output'];
};


export type DirectoryAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type DirectoryAtimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type DirectoryBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type DirectoryChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type DirectoryCtimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type DirectoryModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type DirectoryMtimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<DirectoryEdge>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldSelector;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldSelector = {
  absolutePath?: InputMaybe<FieldSelectorEnum>;
  accessTime?: InputMaybe<FieldSelectorEnum>;
  atime?: InputMaybe<FieldSelectorEnum>;
  atimeMs?: InputMaybe<FieldSelectorEnum>;
  base?: InputMaybe<FieldSelectorEnum>;
  birthTime?: InputMaybe<FieldSelectorEnum>;
  birthtime?: InputMaybe<FieldSelectorEnum>;
  birthtimeMs?: InputMaybe<FieldSelectorEnum>;
  changeTime?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  ctime?: InputMaybe<FieldSelectorEnum>;
  ctimeMs?: InputMaybe<FieldSelectorEnum>;
  dev?: InputMaybe<FieldSelectorEnum>;
  dir?: InputMaybe<FieldSelectorEnum>;
  ext?: InputMaybe<FieldSelectorEnum>;
  extension?: InputMaybe<FieldSelectorEnum>;
  gid?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  ino?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  mode?: InputMaybe<FieldSelectorEnum>;
  modifiedTime?: InputMaybe<FieldSelectorEnum>;
  mtime?: InputMaybe<FieldSelectorEnum>;
  mtimeMs?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  nlink?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  prettySize?: InputMaybe<FieldSelectorEnum>;
  rdev?: InputMaybe<FieldSelectorEnum>;
  relativeDirectory?: InputMaybe<FieldSelectorEnum>;
  relativePath?: InputMaybe<FieldSelectorEnum>;
  root?: InputMaybe<FieldSelectorEnum>;
  size?: InputMaybe<FieldSelectorEnum>;
  sourceInstanceName?: InputMaybe<FieldSelectorEnum>;
  uid?: InputMaybe<FieldSelectorEnum>;
};

export type DirectoryFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<DirectoryEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldSelector;
};

export type DirectorySortInput = {
  absolutePath?: InputMaybe<SortOrderEnum>;
  accessTime?: InputMaybe<SortOrderEnum>;
  atime?: InputMaybe<SortOrderEnum>;
  atimeMs?: InputMaybe<SortOrderEnum>;
  base?: InputMaybe<SortOrderEnum>;
  birthTime?: InputMaybe<SortOrderEnum>;
  birthtime?: InputMaybe<SortOrderEnum>;
  birthtimeMs?: InputMaybe<SortOrderEnum>;
  changeTime?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  ctime?: InputMaybe<SortOrderEnum>;
  ctimeMs?: InputMaybe<SortOrderEnum>;
  dev?: InputMaybe<SortOrderEnum>;
  dir?: InputMaybe<SortOrderEnum>;
  ext?: InputMaybe<SortOrderEnum>;
  extension?: InputMaybe<SortOrderEnum>;
  gid?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  ino?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  mode?: InputMaybe<SortOrderEnum>;
  modifiedTime?: InputMaybe<SortOrderEnum>;
  mtime?: InputMaybe<SortOrderEnum>;
  mtimeMs?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  nlink?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  prettySize?: InputMaybe<SortOrderEnum>;
  rdev?: InputMaybe<SortOrderEnum>;
  relativeDirectory?: InputMaybe<SortOrderEnum>;
  relativePath?: InputMaybe<SortOrderEnum>;
  root?: InputMaybe<SortOrderEnum>;
  size?: InputMaybe<SortOrderEnum>;
  sourceInstanceName?: InputMaybe<SortOrderEnum>;
  uid?: InputMaybe<SortOrderEnum>;
};

export enum FieldSelectorEnum {
  SELECT = 'SELECT'
}

export type Fields = {
  __typename?: 'Fields';
  slug: Scalars['String']['output'];
  sourceInstanceName: Scalars['String']['output'];
};

export type FieldsFieldSelector = {
  slug?: InputMaybe<FieldSelectorEnum>;
  sourceInstanceName?: InputMaybe<FieldSelectorEnum>;
};

export type FieldsFilterInput = {
  slug?: InputMaybe<StringQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
};

export type FieldsSortInput = {
  slug?: InputMaybe<SortOrderEnum>;
  sourceInstanceName?: InputMaybe<SortOrderEnum>;
};

export type File = Node & {
  __typename?: 'File';
  absolutePath: Scalars['String']['output'];
  accessTime: Scalars['Date']['output'];
  atime: Scalars['Date']['output'];
  atimeMs: Scalars['Float']['output'];
  base: Scalars['String']['output'];
  birthTime: Scalars['Date']['output'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']['output']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']['output']>;
  blksize?: Maybe<Scalars['Int']['output']>;
  blocks?: Maybe<Scalars['Int']['output']>;
  changeTime: Scalars['Date']['output'];
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  ctime: Scalars['Date']['output'];
  ctimeMs: Scalars['Float']['output'];
  dev: Scalars['Int']['output'];
  dir: Scalars['String']['output'];
  ext: Scalars['String']['output'];
  extension: Scalars['String']['output'];
  gid: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  ino: Scalars['Float']['output'];
  internal: Internal;
  mode: Scalars['Int']['output'];
  modifiedTime: Scalars['Date']['output'];
  mtime: Scalars['Date']['output'];
  mtimeMs: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  nlink: Scalars['Int']['output'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String']['output'];
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']['output']>;
  rdev: Scalars['Int']['output'];
  relativeDirectory: Scalars['String']['output'];
  relativePath: Scalars['String']['output'];
  root: Scalars['String']['output'];
  size: Scalars['Int']['output'];
  sourceInstanceName: Scalars['String']['output'];
  uid: Scalars['Int']['output'];
};


export type FileAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type FileAtimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type FileBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type FileChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type FileCtimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type FileModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type FileMtimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<FileEdge>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type FileConnectionDistinctArgs = {
  field: FileFieldSelector;
};


export type FileConnectionGroupArgs = {
  field: FileFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FileConnectionMaxArgs = {
  field: FileFieldSelector;
};


export type FileConnectionMinArgs = {
  field: FileFieldSelector;
};


export type FileConnectionSumArgs = {
  field: FileFieldSelector;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldSelector = {
  absolutePath?: InputMaybe<FieldSelectorEnum>;
  accessTime?: InputMaybe<FieldSelectorEnum>;
  atime?: InputMaybe<FieldSelectorEnum>;
  atimeMs?: InputMaybe<FieldSelectorEnum>;
  base?: InputMaybe<FieldSelectorEnum>;
  birthTime?: InputMaybe<FieldSelectorEnum>;
  birthtime?: InputMaybe<FieldSelectorEnum>;
  birthtimeMs?: InputMaybe<FieldSelectorEnum>;
  blksize?: InputMaybe<FieldSelectorEnum>;
  blocks?: InputMaybe<FieldSelectorEnum>;
  changeTime?: InputMaybe<FieldSelectorEnum>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
  ctime?: InputMaybe<FieldSelectorEnum>;
  ctimeMs?: InputMaybe<FieldSelectorEnum>;
  dev?: InputMaybe<FieldSelectorEnum>;
  dir?: InputMaybe<FieldSelectorEnum>;
  ext?: InputMaybe<FieldSelectorEnum>;
  extension?: InputMaybe<FieldSelectorEnum>;
  gid?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  ino?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  mode?: InputMaybe<FieldSelectorEnum>;
  modifiedTime?: InputMaybe<FieldSelectorEnum>;
  mtime?: InputMaybe<FieldSelectorEnum>;
  mtimeMs?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  nlink?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  prettySize?: InputMaybe<FieldSelectorEnum>;
  publicURL?: InputMaybe<FieldSelectorEnum>;
  rdev?: InputMaybe<FieldSelectorEnum>;
  relativeDirectory?: InputMaybe<FieldSelectorEnum>;
  relativePath?: InputMaybe<FieldSelectorEnum>;
  root?: InputMaybe<FieldSelectorEnum>;
  size?: InputMaybe<FieldSelectorEnum>;
  sourceInstanceName?: InputMaybe<FieldSelectorEnum>;
  uid?: InputMaybe<FieldSelectorEnum>;
};

export type FileFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<FileEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldSelector;
};


export type FileGroupConnectionGroupArgs = {
  field: FileFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldSelector;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldSelector;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldSelector;
};

export type FileSortInput = {
  absolutePath?: InputMaybe<SortOrderEnum>;
  accessTime?: InputMaybe<SortOrderEnum>;
  atime?: InputMaybe<SortOrderEnum>;
  atimeMs?: InputMaybe<SortOrderEnum>;
  base?: InputMaybe<SortOrderEnum>;
  birthTime?: InputMaybe<SortOrderEnum>;
  birthtime?: InputMaybe<SortOrderEnum>;
  birthtimeMs?: InputMaybe<SortOrderEnum>;
  blksize?: InputMaybe<SortOrderEnum>;
  blocks?: InputMaybe<SortOrderEnum>;
  changeTime?: InputMaybe<SortOrderEnum>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
  children?: InputMaybe<NodeSortInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
  ctime?: InputMaybe<SortOrderEnum>;
  ctimeMs?: InputMaybe<SortOrderEnum>;
  dev?: InputMaybe<SortOrderEnum>;
  dir?: InputMaybe<SortOrderEnum>;
  ext?: InputMaybe<SortOrderEnum>;
  extension?: InputMaybe<SortOrderEnum>;
  gid?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  ino?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  mode?: InputMaybe<SortOrderEnum>;
  modifiedTime?: InputMaybe<SortOrderEnum>;
  mtime?: InputMaybe<SortOrderEnum>;
  mtimeMs?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  nlink?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  prettySize?: InputMaybe<SortOrderEnum>;
  publicURL?: InputMaybe<SortOrderEnum>;
  rdev?: InputMaybe<SortOrderEnum>;
  relativeDirectory?: InputMaybe<SortOrderEnum>;
  relativePath?: InputMaybe<SortOrderEnum>;
  root?: InputMaybe<SortOrderEnum>;
  size?: InputMaybe<SortOrderEnum>;
  sourceInstanceName?: InputMaybe<SortOrderEnum>;
  uid?: InputMaybe<SortOrderEnum>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type Frontmatter = {
  __typename?: 'Frontmatter';
  date: Scalars['Date']['output'];
  description?: Maybe<Scalars['String']['output']>;
  published: Scalars['Boolean']['output'];
  tags: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};


export type FrontmatterDateArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type FrontmatterFieldSelector = {
  date?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  published?: InputMaybe<FieldSelectorEnum>;
  tags?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
};

export type FrontmatterFilterInput = {
  date?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  published?: InputMaybe<BooleanQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type FrontmatterSortInput = {
  date?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  published?: InputMaybe<SortOrderEnum>;
  tags?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']['output']>;
  contentDigest: Scalars['String']['output'];
  contentFilePath?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ignoreType?: Maybe<Scalars['Boolean']['output']>;
  mediaType?: Maybe<Scalars['String']['output']>;
  owner: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type InternalFieldSelector = {
  content?: InputMaybe<FieldSelectorEnum>;
  contentDigest?: InputMaybe<FieldSelectorEnum>;
  contentFilePath?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  fieldOwners?: InputMaybe<FieldSelectorEnum>;
  ignoreType?: InputMaybe<FieldSelectorEnum>;
  mediaType?: InputMaybe<FieldSelectorEnum>;
  owner?: InputMaybe<FieldSelectorEnum>;
  type?: InputMaybe<FieldSelectorEnum>;
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  contentFilePath?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type InternalSortInput = {
  content?: InputMaybe<SortOrderEnum>;
  contentDigest?: InputMaybe<SortOrderEnum>;
  contentFilePath?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  fieldOwners?: InputMaybe<SortOrderEnum>;
  ignoreType?: InputMaybe<SortOrderEnum>;
  mediaType?: InputMaybe<SortOrderEnum>;
  owner?: InputMaybe<SortOrderEnum>;
  type?: InputMaybe<SortOrderEnum>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']['input']>;
  glob?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  regex?: InputMaybe<Scalars['JSON']['input']>;
};

export enum MarkdownExcerptFormats {
  HTML = 'HTML',
  MARKDOWN = 'MARKDOWN',
  PLAIN = 'PLAIN'
}

export type MarkdownHeading = {
  __typename?: 'MarkdownHeading';
  depth?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type MarkdownHeadingFieldSelector = {
  depth?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  value?: InputMaybe<FieldSelectorEnum>;
};

export type MarkdownHeadingFilterInput = {
  depth?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: InputMaybe<MarkdownHeadingFilterInput>;
};

export enum MarkdownHeadingLevels {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6'
}

export type MarkdownHeadingSortInput = {
  depth?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  value?: InputMaybe<SortOrderEnum>;
};

export type MarkdownRemark = Node & {
  __typename?: 'MarkdownRemark';
  children: Array<Node>;
  excerpt?: Maybe<Scalars['String']['output']>;
  excerptAst?: Maybe<Scalars['JSON']['output']>;
  fields: Fields;
  fileAbsolutePath?: Maybe<Scalars['String']['output']>;
  frontmatter: Frontmatter;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  html?: Maybe<Scalars['String']['output']>;
  htmlAst?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  parent?: Maybe<Node>;
  rawMarkdownBody?: Maybe<Scalars['String']['output']>;
  tableOfContents?: Maybe<Scalars['String']['output']>;
  timeToRead?: Maybe<Scalars['Int']['output']>;
  wordCount?: Maybe<MarkdownWordCount>;
};


export type MarkdownRemarkExcerptArgs = {
  format?: InputMaybe<MarkdownExcerptFormats>;
  pruneLength?: InputMaybe<Scalars['Int']['input']>;
  truncate?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: InputMaybe<Scalars['Int']['input']>;
  truncate?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: InputMaybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: InputMaybe<Scalars['Boolean']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  maxDepth?: InputMaybe<Scalars['Int']['input']>;
  pathToSlugField?: InputMaybe<Scalars['String']['input']>;
};

export type MarkdownRemarkConnection = {
  __typename?: 'MarkdownRemarkConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<MarkdownRemarkEdge>;
  group: Array<MarkdownRemarkGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldSelector;
};


export type MarkdownRemarkConnectionGroupArgs = {
  field: MarkdownRemarkFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type MarkdownRemarkConnectionMaxArgs = {
  field: MarkdownRemarkFieldSelector;
};


export type MarkdownRemarkConnectionMinArgs = {
  field: MarkdownRemarkFieldSelector;
};


export type MarkdownRemarkConnectionSumArgs = {
  field: MarkdownRemarkFieldSelector;
};

export type MarkdownRemarkEdge = {
  __typename?: 'MarkdownRemarkEdge';
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFieldSelector = {
  children?: InputMaybe<NodeFieldSelector>;
  excerpt?: InputMaybe<FieldSelectorEnum>;
  excerptAst?: InputMaybe<FieldSelectorEnum>;
  fields?: InputMaybe<FieldsFieldSelector>;
  fileAbsolutePath?: InputMaybe<FieldSelectorEnum>;
  frontmatter?: InputMaybe<FrontmatterFieldSelector>;
  headings?: InputMaybe<MarkdownHeadingFieldSelector>;
  html?: InputMaybe<FieldSelectorEnum>;
  htmlAst?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  rawMarkdownBody?: InputMaybe<FieldSelectorEnum>;
  tableOfContents?: InputMaybe<FieldSelectorEnum>;
  timeToRead?: InputMaybe<FieldSelectorEnum>;
  wordCount?: InputMaybe<MarkdownWordCountFieldSelector>;
};

export type MarkdownRemarkFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  excerptAst?: InputMaybe<JsonQueryOperatorInput>;
  fields?: InputMaybe<FieldsFilterInput>;
  fileAbsolutePath?: InputMaybe<StringQueryOperatorInput>;
  frontmatter?: InputMaybe<FrontmatterFilterInput>;
  headings?: InputMaybe<MarkdownHeadingFilterListInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  htmlAst?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  rawMarkdownBody?: InputMaybe<StringQueryOperatorInput>;
  tableOfContents?: InputMaybe<StringQueryOperatorInput>;
  timeToRead?: InputMaybe<IntQueryOperatorInput>;
  wordCount?: InputMaybe<MarkdownWordCountFilterInput>;
};

export type MarkdownRemarkFilterListInput = {
  elemMatch?: InputMaybe<MarkdownRemarkFilterInput>;
};

export type MarkdownRemarkGroupConnection = {
  __typename?: 'MarkdownRemarkGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<MarkdownRemarkEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<MarkdownRemarkGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type MarkdownRemarkGroupConnectionDistinctArgs = {
  field: MarkdownRemarkFieldSelector;
};


export type MarkdownRemarkGroupConnectionGroupArgs = {
  field: MarkdownRemarkFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type MarkdownRemarkGroupConnectionMaxArgs = {
  field: MarkdownRemarkFieldSelector;
};


export type MarkdownRemarkGroupConnectionMinArgs = {
  field: MarkdownRemarkFieldSelector;
};


export type MarkdownRemarkGroupConnectionSumArgs = {
  field: MarkdownRemarkFieldSelector;
};

export type MarkdownRemarkSortInput = {
  children?: InputMaybe<NodeSortInput>;
  excerpt?: InputMaybe<SortOrderEnum>;
  excerptAst?: InputMaybe<SortOrderEnum>;
  fields?: InputMaybe<FieldsSortInput>;
  fileAbsolutePath?: InputMaybe<SortOrderEnum>;
  frontmatter?: InputMaybe<FrontmatterSortInput>;
  headings?: InputMaybe<MarkdownHeadingSortInput>;
  html?: InputMaybe<SortOrderEnum>;
  htmlAst?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  rawMarkdownBody?: InputMaybe<SortOrderEnum>;
  tableOfContents?: InputMaybe<SortOrderEnum>;
  timeToRead?: InputMaybe<SortOrderEnum>;
  wordCount?: InputMaybe<MarkdownWordCountSortInput>;
};

export type MarkdownWordCount = {
  __typename?: 'MarkdownWordCount';
  paragraphs?: Maybe<Scalars['Int']['output']>;
  sentences?: Maybe<Scalars['Int']['output']>;
  words?: Maybe<Scalars['Int']['output']>;
};

export type MarkdownWordCountFieldSelector = {
  paragraphs?: InputMaybe<FieldSelectorEnum>;
  sentences?: InputMaybe<FieldSelectorEnum>;
  words?: InputMaybe<FieldSelectorEnum>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: InputMaybe<IntQueryOperatorInput>;
  sentences?: InputMaybe<IntQueryOperatorInput>;
  words?: InputMaybe<IntQueryOperatorInput>;
};

export type MarkdownWordCountSortInput = {
  paragraphs?: InputMaybe<SortOrderEnum>;
  sentences?: InputMaybe<SortOrderEnum>;
  words?: InputMaybe<SortOrderEnum>;
};

/** Node Interface */
export type Node = {
  children: Array<Node>;
  id: Scalars['ID']['output'];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type NodeFieldSelector = {
  children?: InputMaybe<NodeFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
};

export type NodeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type NodeSortInput = {
  children?: InputMaybe<NodeSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  parent?: InputMaybe<NodeSortInput>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  itemCount: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  perPage?: Maybe<Scalars['Int']['output']>;
  totalCount: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  allDirectory: DirectoryConnection;
  allFile: FileConnection;
  allMarkdownRemark: MarkdownRemarkConnection;
  allSite: SiteConnection;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  allSiteFunction: SiteFunctionConnection;
  allSitePage: SitePageConnection;
  allSitePlugin: SitePluginConnection;
  directory?: Maybe<Directory>;
  file?: Maybe<File>;
  markdownRemark?: Maybe<MarkdownRemark>;
  site?: Maybe<Site>;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  siteFunction?: Maybe<SiteFunction>;
  sitePage?: Maybe<SitePage>;
  sitePlugin?: Maybe<SitePlugin>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<DirectorySortInput>>>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<FileSortInput>>>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: InputMaybe<MarkdownRemarkFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MarkdownRemarkSortInput>>>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SiteSortInput>>>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SiteBuildMetadataSortInput>>>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SiteFunctionSortInput>>>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SitePageSortInput>>>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SitePluginSortInput>>>;
};


export type QueryDirectoryArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};


export type QueryFileArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};


export type QueryMarkdownRemarkArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  excerptAst?: InputMaybe<JsonQueryOperatorInput>;
  fields?: InputMaybe<FieldsFilterInput>;
  fileAbsolutePath?: InputMaybe<StringQueryOperatorInput>;
  frontmatter?: InputMaybe<FrontmatterFilterInput>;
  headings?: InputMaybe<MarkdownHeadingFilterListInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  htmlAst?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  rawMarkdownBody?: InputMaybe<StringQueryOperatorInput>;
  tableOfContents?: InputMaybe<StringQueryOperatorInput>;
  timeToRead?: InputMaybe<IntQueryOperatorInput>;
  wordCount?: InputMaybe<MarkdownWordCountFilterInput>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  graphqlTypegen?: InputMaybe<BooleanQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};


export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySitePageArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};


export type QuerySitePluginArgs = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']['output']>;
  children: Array<Node>;
  graphqlTypegen?: Maybe<Scalars['Boolean']['output']>;
  host?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  jsxRuntime?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Node>;
  pathPrefix?: Maybe<Scalars['String']['output']>;
  polyfill?: Maybe<Scalars['Boolean']['output']>;
  port?: Maybe<Scalars['Int']['output']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  trailingSlash?: Maybe<Scalars['String']['output']>;
};


export type SiteBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  buildTime?: Maybe<Scalars['Date']['output']>;
  children: Array<Node>;
  id: Scalars['ID']['output'];
  internal: Internal;
  parent?: Maybe<Node>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SiteBuildMetadataEdge>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldSelector = {
  buildTime?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
};

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SiteBuildMetadataEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataSortInput = {
  buildTime?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  parent?: InputMaybe<NodeSortInput>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SiteEdge>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldSelector;
};


export type SiteConnectionGroupArgs = {
  field: SiteFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldSelector;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldSelector;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldSelector;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldSelector = {
  buildTime?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  graphqlTypegen?: InputMaybe<FieldSelectorEnum>;
  host?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  jsxRuntime?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  pathPrefix?: InputMaybe<FieldSelectorEnum>;
  polyfill?: InputMaybe<FieldSelectorEnum>;
  port?: InputMaybe<FieldSelectorEnum>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFieldSelector>;
  trailingSlash?: InputMaybe<FieldSelectorEnum>;
};

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  graphqlTypegen?: InputMaybe<BooleanQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunction = Node & {
  __typename?: 'SiteFunction';
  absoluteCompiledFilePath: Scalars['String']['output'];
  children: Array<Node>;
  functionRoute: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  internal: Internal;
  matchPath?: Maybe<Scalars['String']['output']>;
  originalAbsoluteFilePath: Scalars['String']['output'];
  originalRelativeFilePath: Scalars['String']['output'];
  parent?: Maybe<Node>;
  pluginName: Scalars['String']['output'];
  relativeCompiledFilePath: Scalars['String']['output'];
};

export type SiteFunctionConnection = {
  __typename?: 'SiteFunctionConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SiteFunctionEdge>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionEdge = {
  __typename?: 'SiteFunctionEdge';
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldSelector = {
  absoluteCompiledFilePath?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  functionRoute?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  matchPath?: InputMaybe<FieldSelectorEnum>;
  originalAbsoluteFilePath?: InputMaybe<FieldSelectorEnum>;
  originalRelativeFilePath?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  pluginName?: InputMaybe<FieldSelectorEnum>;
  relativeCompiledFilePath?: InputMaybe<FieldSelectorEnum>;
};

export type SiteFunctionFilterInput = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunctionGroupConnection = {
  __typename?: 'SiteFunctionGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SiteFunctionEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionSortInput = {
  absoluteCompiledFilePath?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  functionRoute?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  matchPath?: InputMaybe<SortOrderEnum>;
  originalAbsoluteFilePath?: InputMaybe<SortOrderEnum>;
  originalRelativeFilePath?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  pluginName?: InputMaybe<SortOrderEnum>;
  relativeCompiledFilePath?: InputMaybe<SortOrderEnum>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SiteEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldSelector;
};


export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldSelector;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldSelector;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldSelector;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  children: Array<Node>;
  component: Scalars['String']['output'];
  componentChunkName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  internal: Internal;
  internalComponentName: Scalars['String']['output'];
  matchPath?: Maybe<Scalars['String']['output']>;
  pageContext?: Maybe<Scalars['JSON']['output']>;
  parent?: Maybe<Node>;
  path: Scalars['String']['output'];
  pluginCreator?: Maybe<SitePlugin>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SitePageEdge>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldSelector;
};


export type SitePageConnectionGroupArgs = {
  field: SitePageFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldSelector;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldSelector;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldSelector;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldSelector = {
  children?: InputMaybe<NodeFieldSelector>;
  component?: InputMaybe<FieldSelectorEnum>;
  componentChunkName?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  internalComponentName?: InputMaybe<FieldSelectorEnum>;
  matchPath?: InputMaybe<FieldSelectorEnum>;
  pageContext?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  path?: InputMaybe<FieldSelectorEnum>;
  pluginCreator?: InputMaybe<SitePluginFieldSelector>;
};

export type SitePageFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SitePageEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldSelector;
};


export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldSelector;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldSelector;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldSelector;
};

export type SitePageSortInput = {
  children?: InputMaybe<NodeSortInput>;
  component?: InputMaybe<SortOrderEnum>;
  componentChunkName?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  internalComponentName?: InputMaybe<SortOrderEnum>;
  matchPath?: InputMaybe<SortOrderEnum>;
  pageContext?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  path?: InputMaybe<SortOrderEnum>;
  pluginCreator?: InputMaybe<SitePluginSortInput>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  children: Array<Node>;
  id: Scalars['ID']['output'];
  internal: Internal;
  name?: Maybe<Scalars['String']['output']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  packageJson?: Maybe<Scalars['JSON']['output']>;
  parent?: Maybe<Node>;
  pluginFilepath?: Maybe<Scalars['String']['output']>;
  pluginOptions?: Maybe<Scalars['JSON']['output']>;
  resolve?: Maybe<Scalars['String']['output']>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  version?: Maybe<Scalars['String']['output']>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SitePluginEdge>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldSelector;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldSelector = {
  browserAPIs?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  name?: InputMaybe<FieldSelectorEnum>;
  nodeAPIs?: InputMaybe<FieldSelectorEnum>;
  packageJson?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  pluginFilepath?: InputMaybe<FieldSelectorEnum>;
  pluginOptions?: InputMaybe<FieldSelectorEnum>;
  resolve?: InputMaybe<FieldSelectorEnum>;
  ssrAPIs?: InputMaybe<FieldSelectorEnum>;
  version?: InputMaybe<FieldSelectorEnum>;
};

export type SitePluginFilterInput = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SitePluginEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldSelector;
};

export type SitePluginSortInput = {
  browserAPIs?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  name?: InputMaybe<SortOrderEnum>;
  nodeAPIs?: InputMaybe<SortOrderEnum>;
  packageJson?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  pluginFilepath?: InputMaybe<SortOrderEnum>;
  pluginOptions?: InputMaybe<SortOrderEnum>;
  resolve?: InputMaybe<SortOrderEnum>;
  ssrAPIs?: InputMaybe<SortOrderEnum>;
  version?: InputMaybe<SortOrderEnum>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  author?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  github?: Maybe<Scalars['String']['output']>;
  repository?: Maybe<Scalars['String']['output']>;
  siteUrl?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type SiteSiteMetadataFieldSelector = {
  author?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  email?: InputMaybe<FieldSelectorEnum>;
  github?: InputMaybe<FieldSelectorEnum>;
  repository?: InputMaybe<FieldSelectorEnum>;
  siteUrl?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
};

export type SiteSiteMetadataFilterInput = {
  author?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  email?: InputMaybe<StringQueryOperatorInput>;
  github?: InputMaybe<StringQueryOperatorInput>;
  repository?: InputMaybe<StringQueryOperatorInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataSortInput = {
  author?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  email?: InputMaybe<SortOrderEnum>;
  github?: InputMaybe<SortOrderEnum>;
  repository?: InputMaybe<SortOrderEnum>;
  siteUrl?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
};

export type SiteSortInput = {
  buildTime?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  graphqlTypegen?: InputMaybe<SortOrderEnum>;
  host?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  jsxRuntime?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  pathPrefix?: InputMaybe<SortOrderEnum>;
  polyfill?: InputMaybe<SortOrderEnum>;
  port?: InputMaybe<SortOrderEnum>;
  siteMetadata?: InputMaybe<SiteSiteMetadataSortInput>;
  trailingSlash?: InputMaybe<SortOrderEnum>;
};

export enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']['input']>;
  glob?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['String']['input']>;
};

export type FooterQueryVariables = Exact<{ [key: string]: never; }>;


export type FooterQuery = { __typename?: 'Query', site?: { __typename?: 'Site', buildTime?: any | null, siteMetadata?: { __typename?: 'SiteSiteMetadata', author?: string | null } | null } | null };

export type HeaderQueryVariables = Exact<{ [key: string]: never; }>;


export type HeaderQuery = { __typename?: 'Query', site?: { __typename?: 'Site', siteMetadata?: { __typename?: 'SiteSiteMetadata', title?: string | null } | null } | null };

export type SeoQueryVariables = Exact<{ [key: string]: never; }>;


export type SeoQuery = { __typename?: 'Query', site?: { __typename?: 'Site', siteMetadata?: { __typename?: 'SiteSiteMetadata', title?: string | null, description?: string | null } | null } | null };

export type UtterancesQueryVariables = Exact<{ [key: string]: never; }>;


export type UtterancesQuery = { __typename?: 'Query', site?: { __typename?: 'Site', siteMetadata?: { __typename?: 'SiteSiteMetadata', repository?: string | null } | null } | null };

export type PostQueryVariables = Exact<{ [key: string]: never; }>;


export type PostQuery = { __typename?: 'Query', allMarkdownRemark: { __typename?: 'MarkdownRemarkConnection', nodes: Array<{ __typename?: 'MarkdownRemark', id: string, fields: { __typename?: 'Fields', slug: string } }> } };

export type BlogQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogQuery = { __typename?: 'Query', allMarkdownRemark: { __typename?: 'MarkdownRemarkConnection', nodes: Array<{ __typename?: 'MarkdownRemark', timeToRead?: number | null, fields: { __typename?: 'Fields', slug: string }, frontmatter: { __typename?: 'Frontmatter', title: string, date: any, tags: Array<string> } }> } };

export type TagQueryVariables = Exact<{ [key: string]: never; }>;


export type TagQuery = { __typename?: 'Query', allMarkdownRemark: { __typename?: 'MarkdownRemarkConnection', group: Array<{ __typename?: 'MarkdownRemarkGroupConnection', fieldValue?: string | null, totalCount: number, edges: Array<{ __typename?: 'MarkdownRemarkEdge', node: { __typename?: 'MarkdownRemark', timeToRead?: number | null, fields: { __typename?: 'Fields', slug: string }, frontmatter: { __typename?: 'Frontmatter', title: string, date: any, tags: Array<string> } } }> }> } };

export type HomeQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeQuery = { __typename?: 'Query', site?: { __typename?: 'Site', siteMetadata?: { __typename?: 'SiteSiteMetadata', github?: string | null, email?: string | null } | null } | null };

export type TagsQueryVariables = Exact<{ [key: string]: never; }>;


export type TagsQuery = { __typename?: 'Query', allMarkdownRemark: { __typename?: 'MarkdownRemarkConnection', group: Array<{ __typename?: 'MarkdownRemarkGroupConnection', fieldValue?: string | null, totalCount: number }> } };

export type PostTemplateQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type PostTemplateQuery = { __typename?: 'Query', markdownRemark?: { __typename?: 'MarkdownRemark', id: string, excerpt?: string | null, html?: string | null, timeToRead?: number | null, tableOfContents?: string | null, frontmatter: { __typename?: 'Frontmatter', title: string, description?: string | null, date: any, tags: Array<string> } } | null };
