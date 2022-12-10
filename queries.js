/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getType = /* GraphQL */ `
  query GetType($id: ID!) {
    getType(id: $id) {
      id
      condo
      apartment
      house
      townhouse
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTypes = /* GraphQL */ `
  query ListTypes(
    $filter: ModelTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        condo
        apartment
        house
        townhouse
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTypes = /* GraphQL */ `
  query SyncTypes(
    $filter: ModelTypeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        condo
        apartment
        house
        townhouse
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getParking = /* GraphQL */ `
  query GetParking($id: ID!) {
    getParking(id: $id) {
      id
      price
      parkingAvailable
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listParkings = /* GraphQL */ `
  query ListParkings(
    $filter: ModelParkingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParkings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        price
        parkingAvailable
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncParkings = /* GraphQL */ `
  query SyncParkings(
    $filter: ModelParkingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncParkings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        price
        parkingAvailable
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSave = /* GraphQL */ `
  query GetSave($id: ID!) {
    getSave(id: $id) {
      id
      title
      postID
      userID
      OneSaveToManyPost {
        items {
          id
          date
          title
          room
          content
          user
          saveID
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          postsOnePostToOneContentId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listSaves = /* GraphQL */ `
  query ListSaves(
    $filter: ModelSaveFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSaves(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        postID
        userID
        OneSaveToManyPost {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSaves = /* GraphQL */ `
  query SyncSaves(
    $filter: ModelSaveFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSaves(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        postID
        userID
        OneSaveToManyPost {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getContent = /* GraphQL */ `
  query GetContent($id: ID!) {
    getContent(id: $id) {
      id
      type
      availableBedroom
      bathroom
      privateBathroom
      kitchen
      laundry
      parking
      contentToParking {
        id
        price
        parkingAvailable
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      gym
      bedroom
      OneContentToOneType {
        id
        condo
        apartment
        house
        townhouse
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      contentContentToParkingId
      contentOneContentToOneTypeId
    }
  }
`;
export const listContents = /* GraphQL */ `
  query ListContents(
    $filter: ModelContentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        availableBedroom
        bathroom
        privateBathroom
        kitchen
        laundry
        parking
        contentToParking {
          id
          price
          parkingAvailable
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        gym
        bedroom
        OneContentToOneType {
          id
          condo
          apartment
          house
          townhouse
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        contentContentToParkingId
        contentOneContentToOneTypeId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncContents = /* GraphQL */ `
  query SyncContents(
    $filter: ModelContentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncContents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        type
        availableBedroom
        bathroom
        privateBathroom
        kitchen
        laundry
        parking
        contentToParking {
          id
          price
          parkingAvailable
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        gym
        bedroom
        OneContentToOneType {
          id
          condo
          apartment
          house
          townhouse
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        contentContentToParkingId
        contentOneContentToOneTypeId
      }
      nextToken
      startedAt
    }
  }
`;
export const getPosts = /* GraphQL */ `
  query GetPosts($id: ID!) {
    getPosts(id: $id) {
      id
      date
      title
      room
      content
      user
      saveID
      userID
      OnePostToOneContent {
        id
        type
        availableBedroom
        bathroom
        privateBathroom
        kitchen
        laundry
        parking
        contentToParking {
          id
          price
          parkingAvailable
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        gym
        bedroom
        OneContentToOneType {
          id
          condo
          apartment
          house
          townhouse
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        contentContentToParkingId
        contentOneContentToOneTypeId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      postsOnePostToOneContentId
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        title
        room
        content
        user
        saveID
        userID
        OnePostToOneContent {
          id
          type
          availableBedroom
          bathroom
          privateBathroom
          kitchen
          laundry
          parking
          gym
          bedroom
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          contentContentToParkingId
          contentOneContentToOneTypeId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        postsOnePostToOneContentId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        date
        title
        room
        content
        user
        saveID
        userID
        OnePostToOneContent {
          id
          type
          availableBedroom
          bathroom
          privateBathroom
          kitchen
          laundry
          parking
          gym
          bedroom
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          contentContentToParkingId
          contentOneContentToOneTypeId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        postsOnePostToOneContentId
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      phone
      email
      postingroom
      findingroommate
      bio
      profilepicture
      posts
      save
      UserHasManySaves {
        items {
          id
          title
          postID
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      OneUserToManyPosts {
        items {
          id
          date
          title
          room
          content
          user
          saveID
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          postsOnePostToOneContentId
        }
        nextToken
        startedAt
      }
      ac
      heater
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        phone
        email
        postingroom
        findingroommate
        bio
        profilepicture
        posts
        save
        UserHasManySaves {
          nextToken
          startedAt
        }
        OneUserToManyPosts {
          nextToken
          startedAt
        }
        ac
        heater
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        phone
        email
        postingroom
        findingroommate
        bio
        profilepicture
        posts
        save
        UserHasManySaves {
          nextToken
          startedAt
        }
        OneUserToManyPosts {
          nextToken
          startedAt
        }
        ac
        heater
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const savesByUserID = /* GraphQL */ `
  query SavesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSaveFilterInput
    $limit: Int
    $nextToken: String
  ) {
    savesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        postID
        userID
        OneSaveToManyPost {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const postsBySaveID = /* GraphQL */ `
  query PostsBySaveID(
    $saveID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsBySaveID(
      saveID: $saveID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        date
        title
        room
        content
        user
        saveID
        userID
        OnePostToOneContent {
          id
          type
          availableBedroom
          bathroom
          privateBathroom
          kitchen
          laundry
          parking
          gym
          bedroom
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          contentContentToParkingId
          contentOneContentToOneTypeId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        postsOnePostToOneContentId
      }
      nextToken
      startedAt
    }
  }
`;
export const postsByUserID = /* GraphQL */ `
  query PostsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        date
        title
        room
        content
        user
        saveID
        userID
        OnePostToOneContent {
          id
          type
          availableBedroom
          bathroom
          privateBathroom
          kitchen
          laundry
          parking
          gym
          bedroom
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          contentContentToParkingId
          contentOneContentToOneTypeId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        postsOnePostToOneContentId
      }
      nextToken
      startedAt
    }
  }
`;
