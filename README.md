# TweetApp

A simple Twitter-like application built with Node.js, Express, and MongoDB using Mongoose. This application allows users to create accounts, post tweets, follow other users, like, bookmark, repost tweets, and more.

## Features

- User Authentication with JWT
- Follow/Unfollow Users
- Create, Like, Bookmark, Repost, and Comment on Tweets
- User Profile with Bio, Profile Picture, and Country
- Password Recovery with OTP
- JWT Token Management with Expiration
- Hashtag Support for Tweets

Schema Details
User Schema
The User schema defines the structure for user documents stored in the MongoDB collection. It includes fields for authentication, user interactions, and profile information.

<table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>username</code></td><td><code>String</code></td><td>Unique username for the user</td></tr><tr><td><code>bio</code></td><td><code>String</code></td><td>A brief bio of the user</td></tr><tr><td><code>email</code></td><td><code>String</code></td><td>Unique email address of the user</td></tr><tr><td><code>name</code></td><td><code>String</code></td><td>Full name of the user</td></tr><tr><td><code>password</code></td><td><code>String</code></td><td>Hashed password for the user's account</td></tr><tr><td><code>tweets</code></td><td><code>Array</code></td><td>List of tweet IDs that the user has posted</td></tr><tr><td><code>followers</code></td><td><code>Array</code></td><td>List of user IDs who are following this user</td></tr><tr><td><code>following</code></td><td><code>Array</code></td><td>List of user IDs that this user is following</td></tr><tr><td><code>bookmarked</code></td><td><code>Array</code></td><td>List of tweet IDs that the user has bookmarked</td></tr><tr><td><code>reposted</code></td><td><code>Array</code></td><td>List of tweet IDs that the user has reposted</td></tr><tr><td><code>liked</code></td><td><code>Array</code></td><td>List of tweet IDs that the user has liked</td></tr><tr><td><code>joined</code></td><td><code>Date</code></td><td>Date when the user joined</td></tr><tr><td><code>dob</code></td><td><code>Date</code></td><td>Date of birth of the user</td></tr><tr><td><code>pimage</code></td><td><code>String</code></td><td>Profile image URL</td></tr><tr><td><code>country</code></td><td><code>String</code></td><td>Country of the user</td></tr><tr><td><code>commented</code></td><td><code>Array</code></td><td>List of tweet IDs that the user has commented on</td></tr><tr><td><code>deleted</code></td><td><code>Array</code></td><td>List of tweet IDs that the user has deleted</td></tr><tr><td><code>tokens</code></td><td><code>Array</code></td><td>List of JWT tokens associated with the user</td></tr><tr><td><code>forgetPass</code></td><td><code>Object</code></td><td>Object containing OTP and OTP generation time for password recovery</td></tr></tbody></table>


Tweet Schema
The Tweet schema defines the structure for tweet documents stored in the MongoDB collection. It includes fields for content, user interactions, and metadata.

<table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>text</code></td><td><code>String</code></td><td>The content of the tweet</td></tr><tr><td><code>user</code></td><td><code>ObjectId</code></td><td>Reference to the user who posted the tweet</td></tr><tr><td><code>likes</code></td><td><code>Array</code></td><td>List of user IDs who liked the tweet</td></tr><tr><td><code>bookmarks</code></td><td><code>Array</code></td><td>List of user IDs who bookmarked the tweet</td></tr><tr><td><code>reposts</code></td><td><code>Array</code></td><td>List of user IDs who reposted the tweet</td></tr><tr><td><code>createdAt</code></td><td><code>Date</code></td><td>Date when the tweet was created</td></tr><tr><td><code>views</code></td><td><code>Number</code></td><td>Number of views the tweet has received</td></tr><tr><td><code>comments</code></td><td><code>Array</code></td><td>List of comment IDs related to the tweet</td></tr><tr><td><code>hashtags</code></td><td><code>Array</code></td><td>List of hashtags associated with the tweet</td></tr><tr><td><code>country</code></td><td><code>String</code></td><td>Country from where the tweet was posted</td></tr><tr><td><code>timage</code></td><td><code>String</code></td><td>URL of the image associated with the tweet</td></tr><tr><td><code>isComment</code></td><td><code>Boolean</code></td><td>Flag indicating if the tweet is a comment</td></tr><tr><td><code>parent</code></td><td><code>ObjectId</code></td><td>Reference to the parent tweet if the tweet is a comment</td></tr></tbody></table>

## Installation

 Clone the repository:
   ```bash
   git clone https://github.com/yourusername/TweetApp.git
   cd TweetApp
