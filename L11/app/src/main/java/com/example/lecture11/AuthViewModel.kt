package com.example.lecture11

import android.util.Log
import androidx.lifecycle.ViewModel
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.installations.FirebaseInstallations
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow

class AuthViewModel : ViewModel(){

    private val auth = FirebaseAuth.getInstance()

    private val _currentUser = MutableStateFlow(auth.currentUser)
    val currentUser = _currentUser.asStateFlow()

    fun registerUser(email: String, password: String){
        Log.d("AUTH", "Email: '$email'")
        auth.createUserWithEmailAndPassword(email, password)
            .addOnCompleteListener { task ->
                if (task.isSuccessful){
                    _currentUser.value = auth.currentUser
                    Log.d("AUTH", "User created: ${auth.currentUser?.email}")
                    getInstallationId()
                } else {
                    Log.e("AUTH", "Registration failed", task.exception)
                }
            }
    }

    fun getInstallationId(){
        FirebaseInstallations.getInstance().id
            .addOnSuccessListener { fid ->
                Log.d("AUTH", "Installation ID: ${fid}")
            }
    }

    fun loginUser(email: String, password: String){
        auth.signInWithEmailAndPassword(email, password)
            .addOnCompleteListener { task ->
                if (task.isSuccessful){
                    _currentUser.value = auth.currentUser
                    Log.d("AUTH", "Logged in: ${auth.currentUser?.email}")
                    getInstallationId()
                } else {
                    Log.e("AUTH", "Login failed", task.exception)
                }
            }
    }

    fun signOut() {
        auth.signOut()
        _currentUser.value = auth.currentUser
    }
}