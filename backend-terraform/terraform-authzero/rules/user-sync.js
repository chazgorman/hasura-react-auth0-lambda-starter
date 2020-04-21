function (user, context, callback) {
    const user_id = user.app_metadata.uuid;
    const name = user.name;
    const given_name = user.given_name;
    const family_name = user.family_name;
    const picture = user.picture;
    const email = user.email;
  
    const mutation = `mutation($user_id: uuid!, $email: String!, $family_name: String, $given_name: String, $name: String, $picture: String) {
      insert_users(objects: [{
          id: $user_id,
          name: $name,
          given_name: $given_name,
          family_name: $family_name,
                  email: $email,
                  picture: $picture
        }],
        on_conflict: {
          constraint: users_pkey,
          update_columns: [updated_at, name]
        }) {
          affected_rows
        }
      }`;
  
    request.post(
      {
        headers: {
          "content-type": "application/json",
          "x-hasura-admin-secret": configuration.HASURA_GRAPHQL_ADMIN_SECRET
        },
        url: configuration.HASURA_ENDPOINT,
        body: JSON.stringify({
          query: mutation,
          variables: { email, picture, user_id, name, given_name, family_name }
        })
      },
      function(error, response, body) {
        console.log(body);
        callback(error, user, context);
      }
    );
  }
  