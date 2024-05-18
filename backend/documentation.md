# Ocampus API Documentation

This documentation provides an overview of the API endpoints for Ocampus. The system is designed to manage properties, reviews, user authentication and user profiles. It includes functionalities for creating, reading, updating, and deleting properties, reviews, and user profiles. The API is built using Express.js and MongoDB.

## Table of Contents

1. [Authentication](#authentication)
2. [Reviews](#reviews)
3. [Properties](#properties)
4. [User Profiles](#user-profiles)

## Authentication

### Signup

- **Endpoint:** `POST /signup`
- **Description:** Allows users to sign up as either a landlord or a student.
- **Request Body:**
  - `email`: User's email address.
  - `password`: User's password.
  - `firstName`: User's first name.
  - `lastName`: User's last name.
  - `userType`: Type of user ('Landlord' or 'Student').
- **Response:**
  - `201 Created`: Successfully signed up.
  - `400 Bad Request`: User type not specified or user already exists.

### Login

- **Endpoint:** `POST /login`
- **Description:** Allows users to log in.
- **Request Body:**
  - `email`: User's email address.
  - `password`: User's password.
- **Response:**
  - `200 OK`: Successfully logged in.
  - `400 Bad Request`: Input Email and Password.
  - `401 Unauthorized`: Invalid Email or Password or User already logged in.

### Login with Google

- **Endpoint:** `GET /google`
- **Description:** Initiates the Google OAuth flow. The `userType` query parameter is used to determine whether to create a landlord or student account.
- **Query Parameters:**
  - `userType`: Type of user ('Landlord' or 'Student').
- **Response:** Redirects to Google's OAuth consent screen.

### Google Callback

- **Endpoint:** `GET /google/redirect`
- **Description:** Handles the callback from Google after the user has granted permission.
- **Response:**
  - `200 OK`: Google login successful.
  - `401 Unauthorized`: Google login failed.

### Logout

- **Endpoint:** `GET /logout`
- **Middleware:** `isAuthenticated`
- **Description:** Logs out the currently authenticated user.
- **Response:**
  - `200 OK`: Logout successful.
  - `404 Not Found`: User not found.
  - `500 Internal Server Error`: Logout failed.


## Reviews

### Create a New Review

- **Endpoint:** `POST /review/new`
- **Middleware:** `isAuthenticated`
- **Description:** Creates a new review for a property.
- **Request Body:**
  - `property`: ID of the property being reviewed.
  - `rating`: Rating for the property (1-5).
  - `comment`: Comment about the property.
- **Response:**
  - `201 Created`: Successfully created a new review.
  - `400 Bad Request`: Review not created.

### Get All Reviews

- **Endpoint:** `GET /review/all`
- **Description:** Retrieves all reviews.
- **Response:**
  - `200 OK`: Successfully retrieved all reviews.
  - `404 Not Found`: No reviews found.

### Get Review by ID

- **Endpoint:** `GET /review/:id`
- **Description:** Retrieves a review by its ID.
- **Response:**
  - `200 OK`: Successfully retrieved the review.
  - `404 Not Found`: Review not found.

### Update a Review

- **Endpoint:** `PUT /review/:id`
- **Middleware:** `isAuthenticated`
- **Description:** Updates a review by its ID.
- **Response:**
  - `200 OK`: Successfully updated the review.
  - `400 Bad Request`: Review not updated or not authorized.

### Delete a Review

- **Endpoint:** `DELETE /review/:id`
- **Middleware:** `isAuthenticated`
- **Description:** Deletes a review by its ID.
- **Response:**
  - `200 OK`: Successfully deleted the review.
  - `400 Bad Request`: Review not deleted or not authorized.

### Get All Reviews for a Property

- **Endpoint:** `GET /property/:id/reviews`
- **Description:** Retrieves all reviews for a specific property.
- **Response:**
  - `200 OK`: Successfully retrieved all reviews for the property.
  - `404 Not Found`: No reviews found.

### Get All Reviews for a User

- **Endpoint:** `GET /user/:id/reviews`
- **Description:** Retrieves all reviews for a specific user.
- **Response:**
  - `200 OK`: Successfully retrieved all reviews for the user.
  - `404 Not Found`: No reviews found.

## Properties

### Create a New Property

- **Endpoint:** `POST /property/create`
- **Middleware:** `isAuthenticated`
- **Description:** Creates a new property.
- **Request Body:** Property details.
- **Response:**
  - `201 Created`: Successfully created a new property.
  - `400 Bad Request`: Property not created.

### Get Property by ID

- **Endpoint:** `GET /property/:id`
- **Description:** Retrieves a property by its ID.
- **Response:**
  - `200 OK`: Successfully retrieved the property.
  - `404 Not Found`: Property not found.

### Update a Property

- **Endpoint:** `PUT /property/:id`
- **Middleware:** `isAuthenticated`
- **Description:** Updates a property by its ID.
- **Response:**
  - `200 OK`: Successfully updated the property.
  - `404 Not Found`: Property not found or not authorized.

### Delete a Property

- **Endpoint:** `DELETE /property/:id`
- **Middleware:** `isAuthenticated`
- **Description:** Deletes a property by its ID.
- **Response:**
  - `200 OK`: Successfully deleted the property.
  - `404 Not Found`: Property not found or not authorized.

### Get All Properties

- **Endpoint:** `GET /property/all`
- **Description:** Retrieves all properties.
- **Response:**
  - `200 OK`: Successfully retrieved all properties.
  - `404 Not Found`: Properties not found.

### Get Properties by Landlord

- **Endpoint:** `GET /property/landlord`
- **Middleware:** `isAuthenticated`
- **Description:** Retrieves all properties owned by the authenticated landlord.
- **Response:**
  - `200 OK`: Successfully retrieved all properties owned by the landlord.
  - `404 Not Found`: Properties not found.

### Property Search

- **Endpoint:** `GET /property/search`
- **Description:** Searches for properties based on various criteria.
- **Query Parameters:**
  - `location`: Location of the property.
  - `roomType`: Type of room (e.g., single, double).
  - `minPrice`: Minimum price.
  - `maxPrice`: Maximum price.
  - `amenities`: Comma-separated list of amenities.
- **Response:**
  - `200 OK`: Successfully retrieved properties matching the search criteria.
  - `404 Not Found`: Properties not found.

## User Profiles

### Get User Profile

- **Endpoint:** `GET /user/me`
- **Middleware:** `isAuthenticated`
- **Description:** Retrieves the profile of the currently authenticated user.
- **Response:**
  - `200 OK`: Successfully retrieved the user profile.

### Get User Profile by ID

- **Endpoint:** `GET /user/:id`
- **Middleware:** `isAuthenticated`
- **Description:** Retrieves the profile of a user by their ID.
- **Response:**
  - `200 OK`: Successfully retrieved the user profile.
  - `404 Not Found`: User not found.

### Update User Profile

- **Endpoint:** `PUT /user/:id`
- **Middleware:** `isAuthenticated`
- **Description:** Updates the profile of a user by their ID.
- **Response:**
  - `200 OK`: Successfully updated the user profile.
  - `401 Unauthorized`: Not authorized.
  - `404 Not Found`: User not found.

### Update User Password

- **Endpoint:** `PUT /user/password/update`
- **Middleware:** `isAuthenticated`
- **Description:** Updates the password of the currently authenticated user.
- **Request Body:**
  - `oldPassword`: Current password.
  - `newPassword`: New password.
- **Response:**
  - `200 OK`: Successfully updated the password.
  - `401 Unauthorized`: Incorrect old password.

### Delete User Account

- **Endpoint:** `DELETE /user/:id`
- **Middleware:** `isAuthenticated`
- **Description:** Deletes the user account of a user by their ID.
- **Response:**
  - `200 OK`: Successfully deleted the user account.
  - `401 Unauthorized`: You are not authorized to perform this action.
  - `404 Not Found`: User not found.

