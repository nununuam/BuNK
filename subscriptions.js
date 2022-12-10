/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateType = /* GraphQL */ `
  subscription OnCreateType($filter: ModelSubscriptionTypeFilterInput) {
    onCreateType(filter: $filter) {
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
export const onUpdateType = /* GraphQL */ `
  subscription OnUpdateType($filter: ModelSubscriptionTypeFilterInput) {
    onUpdateType(filter: $filter) {
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
export const onDeleteType = /* GraphQL */ `
  subscription OnDeleteType($filter: ModelSubscriptionTypeFilterInput) {
    onDeleteType(filter: $filter) {
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
export const onCreateParking = /* GraphQL */ `
  subscription OnCreateParking($filter: ModelSubscriptionParkingFilterInput) {
    onCreateParking(filter: $filter) {
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
export const onUpdateParking = /* GraphQL */ `
  subscription OnUpdateParking($filter: ModelSubscriptionParkingFilterInput) {
    onUpdateParking(filter: $filter) {
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
export const onDeleteParking = /* GraphQL */ `
  subscription OnDeleteParking($filter: ModelSubscriptionParkingFilterInput) {
    onDeleteParking(filter: $filter) {
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
export const onCreateSave = /* GraphQL */ `
  subscription OnCreateSave($filter: ModelSubscriptionSaveFilterInput) {
    onCreateSave(filter: $filter) {
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
export const onUpdateSave = /* GraphQL */ `
  subscription OnUpdateSave($filter: ModelSubscriptionSaveFilterInput) {
    onUpdateSave(filter: $filter) {
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
export const onDeleteSave = /* GraphQL */ `
  subscription OnDeleteSave($filter: ModelSubscriptionSaveFilterInput) {
    onDeleteSave(filter: $filter) {
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
export const onCreateContent = /* GraphQL */ `
  subscription OnCreateContent($filter: ModelSubscriptionContentFilterInput) {
    onCreateContent(filter: $filter) {
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
export const onUpdateContent = /* GraphQL */ `
  subscription OnUpdateContent($filter: ModelSubscriptionContentFilterInput) {
    onUpdateContent(filter: $filter) {
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
export const onDeleteContent = /* GraphQL */ `
  subscription OnDeleteContent($filter: ModelSubscriptionContentFilterInput) {
    onDeleteContent(filter: $filter) {
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
export const onCreatePosts = /* GraphQL */ `
  subscription OnCreatePosts($filter: ModelSubscriptionPostsFilterInput) {
    onCreatePosts(filter: $filter) {
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
export const onUpdatePosts = /* GraphQL */ `
  subscription OnUpdatePosts($filter: ModelSubscriptionPostsFilterInput) {
    onUpdatePosts(filter: $filter) {
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
export const onDeletePosts = /* GraphQL */ `
  subscription OnDeletePosts($filter: ModelSubscriptionPostsFilterInput) {
    onDeletePosts(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
