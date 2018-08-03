# Ionic-3-Firebase-Authentication-app
The goal is to know how to make ionic Auth app using firebase as a backend 

<h3>Features</h3>
 <h1>.<h1> SignUp
 <h1>.<h1> Login
 <h1>.<h1> Reset Password
 <h1>.<h1> SignOut

Technology <br>
1- ionic 3  <br>
2- AngularFire2 

</br>


<h2> 1. Set up the Ionic 3 with Firebase Project & Install AngularFire2 </h2>
 
<h3> Install firebase and angularfire2 </h3>

<code> $ionic install firebase angularfire2 --save </code>

<h3> Create new file called credentials.ts in src/app folder </h3>

<p>contains configuration for Firebase Project (apiKey, authDomain, databaseURL, projectId, storageBucket…). </p>
</br>

<h2> 2.Model </h2>

<p> Create USER.ts model</p>

<code>
export interface user={
  email:string,
  password:string
  }
</code>

<h2> 2.Pages </h2>

<h1>.<h1> Home Page
<h1>.<h1> Login Page
<h1>.<h1> ResetPassword page

I build Tabs app but you can build blank app and just add Login and ResetPassword pages


