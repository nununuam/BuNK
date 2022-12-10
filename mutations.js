/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createType = /* GraphQL */ `
  mutation CreateType(
    $input: CreateTypeInput!
    $condition: ModelTypeConditionInput
  ) {
    createType(input: $input, condition: $condition) {
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
export const updateType = /* GraphQL */ `
  mutation UpdateType(
    $input: UpdateTypeInput!
    $condition: ModelTypeConditionInput
  ) {
    updateType(input: $input, condition: $condition) {
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
export const deleteType = /* GraphQL */ `
  mutation DeleteType(
    $input: DeleteTypeInput!
    $condition: ModelTypeConditionInput
  ) {
    deleteType(input: $input, condition: $condition) {
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
export const createParking = /* GraphQL */ `
  mutation CreateParking(
    $input: CreateParkingInput!
    $condition: ModelParkingConditionInput
  ) {
    createParking(input: $input, condition: $condition) {
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
export const updateParking = /* GraphQL */ `
  mutation UpdateParking(
    $input: UpdateParkingInput!
    $condition: ModelParkingConditionInput
  ) {
    updateParking(input: $input, condition: $condition) {
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
export const deleteParking = /* GraphQL */ `
  mutation DeleteParking(
    $input: DeleteParkingInput!
    $condition: ModelParkingConditionInput
  ) {
    deleteParking(input: $input, condition: $condition) {
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
export const createSave = /* GraphQL */ `
  mutation CreateSave(
    $input: CreateSaveInput!
    $condition: ModelSaveConditionInput
  ) {
    createSave(input: $input, condition: $condition) {
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
export const updateSave = /* GraphQL */ `
  mutation UpdateSave(
    $input: UpdateSaveInput!
    $condition: ModelSaveConditionInput
  ) {
    updateSave(input: $input, condition: $condition) {
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
export const deleteSave = /* GraphQL */ `
  mutation DeleteSave(
    $input: DeleteSaveInput!
    $condition: ModelSaveConditionInput
  ) {
    deleteSave(input: $input, condition: $condition) {
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
export const createContent = /* GraphQL */ `
  mutation CreateContent(
    $input: CreateContentInput!
    $condition: ModelContentConditionInput
  ) {
    createContent(input: $input, condition: $condition) {
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
export const updateContent = /* GraphQL */ `
  mutation UpdateContent(
    $input: UpdateContentInput!
    $condition: ModelContentConditionInput
  ) {
    updateContent(input: $input, condition: $condition) {
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
export const deleteContent = /* GraphQL */ `
  mutation DeleteContent(
    $input: DeleteContentInput!
    $condition: ModelContentConditionInput
  ) {
    deleteContent(input: $input, condition: $condition) {
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
export const createPosts = /* GraphQL */ `
  mutation CreatePosts(
    $input: CreatePostsInput!
    $condition: ModelPostsConditionInput
  ) {
    createPosts(input: $input, condition: $condition) {
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
export const updatePosts = /* GraphQL */ `
  mutation UpdatePosts(
    $input: UpdatePostsInput!
    $condition: ModelPostsConditionInput
  ) {
    updatePosts(input: $input, condition: $condition) {
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
export const deletePosts = /* GraphQL */ `
  mutation DeletePosts(
    $input: DeletePostsInput!
    $condition: ModelPostsConditionInput
  ) {
    deletePosts(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
