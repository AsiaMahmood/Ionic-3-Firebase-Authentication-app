# Ionic-3-Firebase-Authentication-app
The goal is to know how to make ionic Auth app using firebase as a backend 

---
## Features
 1. SignUp.
 2. Login.
 3. Reset Password.
 4. SignOut.

## Technology <br>
* ionic 3 and AngularFire2 




<h2> 1. Set up the Ionic 3 with Firebase Project & Install AngularFire2 </h2>
 
<h3> Install firebase and angularfire2 </h3>

<code> $ionic install firebase angularfire2 --save </code>

<h3> Create new file called credentials.ts in src/app folder </h3>

<p>contains configuration for Firebase Project (apiKey, authDomain, databaseURL, projectId, storageBucket…). </p>
</br>

## 2.Model

<p> Create USER.ts model</p>

<code>
export interface user={
  email:string,
  password:string
  }
</code>

---
## 2.Pages
1. Home Page.
2. Login Page.
3. ResetPassword page.

I build Tabs app but you can build blank app and just add Login and ResetPassword pages


