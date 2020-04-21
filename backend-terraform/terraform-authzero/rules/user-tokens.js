function (user, context, callback) {
  const userId = user.app_metadata.uuid;
  const idp = user.identities[0];
  console.log(JSON.stringify(idp, null, '  '));
  const mutation = `
  mutation ($owner_id: uuid!, $refresh_token: String, $access_token: String, $provider: String!, $raw: jsonb!) {
    insert_tokens(objects: [{refresh_token: $refresh_token, access_token: $access_token, owner_id: $owner_id, provider: $provider, raw: $raw}], on_conflict: {constraint: tokens_pkey, update_columns: [access_token, refresh_token, raw, updated_at]}) {
      returning {
        access_token
        refresh_token
        updated_at
      }
      affected_rows
    }
  }
  


    `;
  if (!idp.refresh_token) {
    throw new Error ('missing refresh token: ' + JSON.stringify(idp));
  }
  if (!idp.access_token) {
    throw new Error ('missing access token: ' + JSON.stringify(idp));
  }
  request.post(
    {
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret": configuration.HASURA_GRAPHQL_ADMIN_SECRET
      },
      url: configuration.HASURA_ENDPOINT,
      body: JSON.stringify({
        query: mutation,
        variables: { owner_id: userId, raw: idp, provider: idp.provider, refresh_token: idp.refresh_token, access_token: idp.access_token }
      })
    },
    function(error, response, body) {
      console.log(body);
      callback(error, user, context);
    }
  );
}
