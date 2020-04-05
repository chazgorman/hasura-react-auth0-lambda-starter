function (user, context, callback) {
    // TODO: implement your rule
    let roles = ["user", "anonymous"];
    var uuid = require("uuid");
    user.app_metadata = user.app_metadata || {};
    var promise = Promise.resolve(1);
    if (!user.app_metadata.uuid) {
      user.app_metadata.uuid = uuid();
      promise = auth0.users.updateAppMetadata(user.user_id, user.app_metadata);
    }
    let role = "user";
    const emailMatches = user.email.match(/^(.*@cantor.mx)|(.*@maxcantor.com)$/) || (configuration.APP_EMAIL_DOMAIN.length > 4 && user.email.endsWith('@' + configuration.APP_EMAIL_DOMAIN))
    if (user.email_verified &&
        emailMatches) {
        roles.push("admin");
        role = "admin";
    }
    context.idToken[ "https://hasura.io/jwt/claims"] = {
      "x-hasura-issued-at": new Date(),
      "x-hasura-default-role": role,
      "x-hasura-user-id": user.app_metadata.uuid,
      "x-hasura-allowed-roles": roles,
      "x-hasura-email": user.email
    };
    callback(null, user, context);
  }