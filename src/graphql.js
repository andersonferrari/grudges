export const ListGrudges = `
  query ListGrudges {
    listGrudges {
      items {
        id
        person
        deed
        avenged
      }
    }
  }
`;

export const CreateGrudges = `
  mutation CreateGrudges(
    $person: String!
    $deed: String!
    $avenged: Boolean!
  ) {
    createGrudges(input: {
      person: $person,
      deed: $deed,
      avenged: $avenged
    }) {
      id
      person
      deed
      avenged
    }
  }
`;

export const SubscribeToNewGrudges = `
  subscription onCreateGrudges {
    onCreateGrudges {
      id
      person
      deed
      avenged
    }
  }
`;
