const config={
    cognito:{
        identityPoolId:"ap-south-1_gQjq9HM0T", // put your AWS Cognito Identity Pool ID here
        cognitoDomain:"ap-south-1gqjq9hm0t.auth.ap-south-1.amazoncognito.com", // put your AWS Cognito domain here i.e., hote.mydomain.com
        appId:"51g601jr5lathq8bq7j44hovfl" // Create an Applicaiton in AWS Cognito (under User Pool) and put its ID here.
    }
}

var cognitoApp={
    auth:{},
    Init: function()
    {

        var authData = {
            ClientId : config.cognito.appId,
            AppWebDomain : config.cognito.cognitoDomain,
            TokenScopesArray : ['email', 'openid'],
            RedirectUriSignIn : 'http://localhost:8080',
            RedirectUriSignOut : 'http://localhost:8080',
            UserPoolId : config.cognito.identityPoolId, 
            AdvancedSecurityDataCollectionFlag : false,
                Storage: null
        };

        cognitoApp.auth = new AmazonCognitoIdentity.CognitoAuth(authData);
        cognitoApp.auth.userhandler = {
            onSuccess: function(result) {
              
            },
            onFailure: function(err) {
            }
        };
    }
}