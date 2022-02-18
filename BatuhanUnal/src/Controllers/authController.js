import { auth } from "./firebase-config";

//Login process controller
export async function loginUser(email, password) {
  try {
    //sending sign in request
    const uc = await auth.signInWithEmailAndPassword(email, password);

    //if user returned
    if (uc) {
      console.log(`User has been signed in: ${uc.user.refreshToken}`);
      return uc.user.refreshToken;
    } else {
      // if no user is returned
      console.log("No user has been found.");
      alert("Email or Password is wrong.");
      return;
    }
  } catch (error) {
    //if error occurs during the process
    console.log(`Error occured: ${error.message}`);
    alert(`Error occured: ${error.message}`);
    return;
  }
}

//register process controller => registerin user with firebase method
export async function registerUser(email, password) {
  try {
    //sending user creation request
    const uc = await auth.createUserWithEmailAndPassword(email, password);

    //if user is created and returned successfully
    if (uc) {
      console.log(`User created:${uc}`);
      alert(`User has been created successfully: ${uc.user.email}`);
      return uc;
    }
  } catch (error) {
    //if error occures during process
    console.log(`Error occured: ${error.message}`);
    alert(`Error occured: ${error.message}`);
    return error;
  }
}

//user logout process controller=> signing user out with firebase method
export async function logoutUser(email, password) {
  await auth.signOut();
}
