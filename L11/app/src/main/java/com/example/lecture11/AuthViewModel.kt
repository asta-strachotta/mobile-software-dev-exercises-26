package com.example.lecture11

import android.util.Log
import androidx.lifecycle.ViewModel
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.FirebaseUser
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow

class AuthViewModel : ViewModel(){

    private val auth = FirebaseAuth.getInstance()
    private val userRepo = UserRepository()

    private val _user = MutableStateFlow<User?>(null)
    val user = _user.asStateFlow()
    private val _authUser = MutableStateFlow<FirebaseUser?>(auth.currentUser)
    val authUser = _authUser.asStateFlow()

    fun registerUser(email: String, name: String, password: String){
        auth.createUserWithEmailAndPassword(email, password)
            .addOnCompleteListener { task ->
                if (task.isSuccessful){
                    Log.d("AUTH", "User created: ${auth.currentUser?.uid}")

                    userRepo.createUser(
                        uid = auth.currentUser!!.uid,
                        email = email,
                        name = name
                    ){
                        loadCurrentUser()
                    }
                } else {
                    Log.e("AUTH", "Registration failed", task.exception)
                }
            }
    }

    fun loginUser(email: String, password: String){
        auth.signInWithEmailAndPassword(email, password)
            .addOnCompleteListener { task ->
                if (task.isSuccessful){
                    loadCurrentUser()
                } else {
                    Log.e("AUTH", "Login failed", task.exception)
                }
            }
    }

    fun loadCurrentUser(){
        _authUser.value = auth.currentUser
        userRepo.getUser(_authUser.value!!.uid) { user ->
            _user.value = user
        }
    }

    fun signOut() {
        auth.signOut()
        _authUser.value = null
        _user.value = null
    }
}