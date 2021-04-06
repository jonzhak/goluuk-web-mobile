const request = require("request");

const getApiToken = () => {
  const client_id = "NiwToJ2Mlkn4ubzbymnC18vM08WSXyb5";
  const client_secret =
    "_BxwOPM0xfZ6n2OUch75BjuJ8kvvuOzSLzZtmoGp5rCVfW3neYIQkBaTnGmMLWDM";
  return new Promise(function (resolve, reject) {
    var options = {
      method: "GET",
      url:
        "http://salty-reef-38656.herokuapp.com/events/updateTokenFromClientCreditentials?client_id=" +
        client_id +
        "&client_secret=" +
        client_secret,
      headers: { "content-type": "application/json" },
    };
    request(options, function (error, _, body) {
      if (error) {
        console.log("error update token", error);
        return "";
      }
      var jsonBody = JSON.parse(body);

      if (jsonBody.token) {
        resolve(jsonBody.token);
      } else {
        resolve({});
      }
    });
  });
};

const signUpEvent = (email, referral_code, authReferApiToken) => {
  return new Promise(function (resolve, reject) {
    var options = {
      method: "POST",
      url: "http://salty-reef-38656.herokuapp.com/events/sign_up_by_email",
      body: JSON.stringify({
        email: email,
        referral_code: referral_code,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: authReferApiToken,
      },
    };
    request(options, function (error, _, body) {
      if (error) {
        console.log("error premium event", error);
        return "";
      }
      var jsonBody = JSON.parse(body);
      console.log(jsonBody);

      if (jsonBody.token) {
        resolve(jsonBody.token);
        console.log();
      } else {
        resolve({});
      }
    });
  });
};

const premiumEvent = (email, authReferApiToken) => {
  return new Promise(function (resolve, reject) {
    var options = {
      method: "POST",
      url: "http://salty-reef-38656.herokuapp.com/events/premium_event",
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: authReferApiToken,
      },
    };
    request(options, function (error, _, body) {
      if (error) {
        console.log("error premium event", error);
        return "";
      }
      var jsonBody = JSON.parse(body);
      console.log(jsonBody);

      if (jsonBody.token) {
        resolve(jsonBody.token);
        console.log();
      } else {
        resolve({});
      }
    });
  });
};

const giveReward = (email, authReferApiToken) => {
  return new Promise(function (resolve, reject) {
    var options = {
      method: "POST",
      url: "http://salty-reef-38656.herokuapp.com/events/give_reward",
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: authReferApiToken,
      },
    };
    request(options, function (error, _, body) {
      if (error) {
        console.log("error premium event", error);
        return "";
      }
      var jsonBody = JSON.parse(body);
      resolve(jsonBody);
    });
  });
};
