# goluuk-web-mobile

pls note: if you're calling from http, you need to change https://refer-ui to http://refer-ui

# For Web
```
<iframe 
  sandbox="allow-top-navigation allow-scripts allow-same-origin allow-forms" 
  height="500px" 
  width="800px" 
  src={`https://refer-ui-two.vercel.app/?email=${email}&name=${name}&base_url=https://goluuk.com&redirect_uri=https://goluuk.com&client_id=your-client-id&client_secre=your-client-secret`} />}

```
<br />
<br />


# For Mobile App - use webview
```sh
<WebView
          source={{ uri }}
          startInLoadingState={true}
          renderLoading={() => (
            <ActivityIndicator
              color='black'
              size='large'
              style={styles.flexContainer}
            />
          )}          
        />

uri = `https://refer-ui-two.vercel.app/?email=${email}&name=${name}&base_url=${https://goluuk.com}&client_id=your-client-id&client_secre=your-client-secret`;

```



when a new user signs up:

```
getApiToken().then((value) =>
  signUpEvent(useremail, usersreferralcode, value)
);
```

when they reach premmium event, such as make a purchase

```
getApiToken().then((value) => premiumEvent(useremail, value));
```

when you want to give them and their referrer the reward

```
getApiToken().then((value) =>
  giveReward(useremail, value).then((value) => console.log(value))
);
```
Note 1 - above we console.log the response, but in your case, you should be using this value to give the reward to these people how you want. 
Note 2 - if you by accident made a second call to giveReward to the same user, you will get a message saying that reward was already given. this is a safety mechanism to prevent double reward
Note 3 - if you by accident made a  call to giveReward to a user that hasn't had a premiu event yet, you will get a message saying that this user doesnt deserve reward yet. this is a safety mechanism as well
