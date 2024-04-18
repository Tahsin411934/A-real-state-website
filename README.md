# LuxeVillas Website
 

🌟 Welcome to LuxeVillas, your premier destination for luxury property listings. 🚀✨

-👉 Visit my website Click: https://af-assignment-9.netlify.app/👈 

## Selected Category : Residential
            -according to Assignment - 9 Requirements

## Table of Contents

1. [Navbar](#navbar)
2. [Login Page](#login-page)
3. [Register Page](#register-page)
4. [Banner](#banner)
5. [Footer](#footer)
6. [Estate Section](#estate-section)
7. [Estate Details](#estate-details)
8. [404 Page](#404-page)
9. [Extra Route](#extra-route)
10. [Dynamic Title](#dynamic-title)
11. [Challenges Requirements](#challenges-requirements)
12. [Code Files](#code-files)


### Navbar

The Navbar is a crucial component of the website, providing navigation links and user authentication features. Here's what it includes:

- **Website Name**: The name of the website, "LuxeVillas", is prominently displayed on the Navbar.
- **Active Route Highlighting**: The Navbar highlights the active route, providing visual feedback to users about their current location within the website.
- **User Profile**: If a user is logged in, their profile picture is displayed on the Navbar. Hovering over the profile picture reveals the user's name.
- **Login/Logout Button**: The Navbar includes a conditional login/logout button. When a user is logged in, it shows a logout button, allowing users to sign out of their accounts. Upon clicking the logout button, users are redirected to the home page. If a user is not logged in, the Navbar displays a login button, which redirects users to the login page when clicked.

### Login Page

The Login Page is where users can authenticate themselves to access their accounts. Here's what it includes:

- **Authentication Methods**: Users can log in using their email and password. Additionally, social media authentication methods such as Google login and github log are implemented to provide users with alternative login options.
- **Error Handling**: The login page handles authentication errors gracefully, displaying appropriate error messages if the email/password combination is incorrect.
- **Registration Link**: For new users, a link is provided to the Register Page where they can create a new account.

### Register Page

The Register Page allows new users to create an account on the website. Here's what it includes:

- **User Information**: Users are required to provide their name, email, and password to create an account.
- **Password Verification**: Passwords must meet specific criteria, including the presence of uppercase and lowercase letters and a minimum length of 6 characters. If the password does not meet these criteria, an error message is displayed.
- **Registration Link**: After successfully registering, users are directed to the Login Page to log in to their newly created accounts.

### Banner

The Banner section features a slider component that showcases various properties available on the website. 

### Footer

The Footer appears at the bottom of every page and provides users with additional information and navigation options. Here's what it includes:


### Estate Section

The Estate Section displays various properties available for sale or rent. Here's what it includes:

- **Property Categories**: Properties are categorized based on their type (e.g., Residential, Commercial).
- **Property Listings**: Each property listing includes images, title, price,  location, facilities, and a "View Property" button for more details.

### Estate Details

The Estate Details page provides in-depth information about a selected property. Here's what it includes:



### 404 Page

The 404 Page is displayed when a user navigates to a URL that does not exist on the website. 

### Extra Route 

named:  Customer Experiences

- **Customer Experiences with video**:
In this section, we share real customer experiences through video testimonials. Hear directly from our satisfied customers about their experiences with our services.


-- **FAQ**:
Brief description of the customer's FAQ.



### Dynamic Title

Dynamic titles are implemented for each page usin react helmet

## Challenges Requirements

1. **Password Toggle on Registration Page**:
   - Implemented the functionality to show and hide passwords on the registration page.
   - By default, passwords are hidden, and when users click on the "Eye" icon, the password is revealed.
   - Implemented a toggle mechanism to switch between showing and hiding passwords.


2. **Package Implementation**:
   - Utilized the following packages:
     - Animate.css : Integrated animations in the "Discover Your Dream Home" section.
     - React Hook Form : Implemented form management for login, signup, and update profile sections.
     - Swiper Slider : Incorporated dynamic banners using Swiper slider in the website's banner section.


3. **Protected Route for User Profile Editing**:

   Create a protected route where users, after logging in, can view their profile information, including their name, email, and photoURL. Users should be able to edit their name and photoURL directly within a form displayed on this route. Upon making changes, users should be able to save the updates, which will utilize Firebase's `updateProfile()` method to securely store the modified user information in Firebase.

