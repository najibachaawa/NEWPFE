module.exports = {
  mongoURI: "mongodb://localhost:27017/crmpfe",
  secretOrKey: "changeme", 
  SENDGRID_API_KEY:"apikey", 
  //SMTP_HOST: "localhost", 
  //SMTP_PORT: 50,
  SMTP_SSL: false, // upgrade later with STARTTLS
  SMTP_USER:"anonymous", 
  SMTP_PASS: "anonymous", 
  APP_URI: "localhost:5000", 
  FACEBOOK_APP_ID: "3003601446355380", 
  FACEBOOK_APP_SECRET: "07adcdb65293f560622fc00f67cfa277", 
  FACEBOOK_CALLBACK_URL: "http://localhost:5000/auth/facebook/callback", 
  TWITTER_CONSUMER_KEY: 
  "IbD2taKLYsj8XP96Cec91vb3y", 
  TWITTER_CONSUMER_SECRET: 
  "ivRTtldmtZufHa0LjZGajY6nwRpOzAaRXah0ywl0QV8HXjWptY", 
  TWITTER_CALLBACK_URL: "http://localhost:5000/auth/twitter/callback"
};
