import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Type, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly condo?: boolean | null;
  readonly apartment?: boolean | null;
  readonly house?: boolean | null;
  readonly townhouse?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Type, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly condo?: boolean | null;
  readonly apartment?: boolean | null;
  readonly house?: boolean | null;
  readonly townhouse?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Type = LazyLoading extends LazyLoadingDisabled ? EagerType : LazyType

export declare const Type: (new (init: ModelInit<Type>) => Type) & {
  copyOf(source: Type, mutator: (draft: MutableModel<Type>) => MutableModel<Type> | void): Type;
}

type EagerParking = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Parking, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly price?: number | null;
  readonly parkingAvailable?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyParking = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Parking, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly price?: number | null;
  readonly parkingAvailable?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Parking = LazyLoading extends LazyLoadingDisabled ? EagerParking : LazyParking

export declare const Parking: (new (init: ModelInit<Parking>) => Parking) & {
  copyOf(source: Parking, mutator: (draft: MutableModel<Parking>) => MutableModel<Parking> | void): Parking;
}

type EagerSave = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Save, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly postID?: string | null;
  readonly userID: string;
  readonly OneSaveToManyPost?: (Posts | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySave = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Save, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly postID?: string | null;
  readonly userID: string;
  readonly OneSaveToManyPost: AsyncCollection<Posts>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Save = LazyLoading extends LazyLoadingDisabled ? EagerSave : LazySave

export declare const Save: (new (init: ModelInit<Save>) => Save) & {
  copyOf(source: Save, mutator: (draft: MutableModel<Save>) => MutableModel<Save> | void): Save;
}

type EagerPosts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Posts, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date?: string | null;
  readonly title: string;
  readonly room: number;
  readonly content: string;
  readonly user?: string | null;
  readonly saveID: string;
  readonly userID: string;
  readonly OnePostToOneContent?: Content | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postsOnePostToOneContentId?: string | null;
}

type LazyPosts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Posts, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date?: string | null;
  readonly title: string;
  readonly room: number;
  readonly content: string;
  readonly user?: string | null;
  readonly saveID: string;
  readonly userID: string;
  readonly OnePostToOneContent: AsyncItem<Content | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postsOnePostToOneContentId?: string | null;
}

export declare type Posts = LazyLoading extends LazyLoadingDisabled ? EagerPosts : LazyPosts

export declare const Posts: (new (init: ModelInit<Posts>) => Posts) & {
  copyOf(source: Posts, mutator: (draft: MutableModel<Posts>) => MutableModel<Posts> | void): Posts;
}

type EagerContent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Content, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: string | null;
  readonly availableBedroom: number;
  readonly bathroom: number;
  readonly privateBathroom?: boolean | null;
  readonly kitchen: string;
  readonly laundry: boolean;
  readonly parking: string;
  readonly contentToParking?: Parking | null;
  readonly gym: string;
  readonly bedroom: number;
  readonly OneContentToOneType?: Type | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly contentContentToParkingId?: string | null;
  readonly contentOneContentToOneTypeId?: string | null;
}

type LazyContent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Content, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: string | null;
  readonly availableBedroom: number;
  readonly bathroom: number;
  readonly privateBathroom?: boolean | null;
  readonly kitchen: string;
  readonly laundry: boolean;
  readonly parking: string;
  readonly contentToParking: AsyncItem<Parking | undefined>;
  readonly gym: string;
  readonly bedroom: number;
  readonly OneContentToOneType: AsyncItem<Type | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly contentContentToParkingId?: string | null;
  readonly contentOneContentToOneTypeId?: string | null;
}

export declare type Content = LazyLoading extends LazyLoadingDisabled ? EagerContent : LazyContent

export declare const Content: (new (init: ModelInit<Content>) => Content) & {
  copyOf(source: Content, mutator: (draft: MutableModel<Content>) => MutableModel<Content> | void): Content;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly phone: string;
  readonly email: string;
  readonly postingroom?: boolean | null;
  readonly findingroommate?: boolean | null;
  readonly bio: string;
  readonly profilepicture: string;
  readonly posts?: string | null;
  readonly save?: string | null;
  readonly UserHasManySaves?: (Save | null)[] | null;
  readonly OneUserToManyPosts?: (Posts | null)[] | null;
  readonly ac?: boolean | null;
  readonly heater?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly phone: string;
  readonly email: string;
  readonly postingroom?: boolean | null;
  readonly findingroommate?: boolean | null;
  readonly bio: string;
  readonly profilepicture: string;
  readonly posts?: string | null;
  readonly save?: string | null;
  readonly UserHasManySaves: AsyncCollection<Save>;
  readonly OneUserToManyPosts: AsyncCollection<Posts>;
  readonly ac?: boolean | null;
  readonly heater?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}