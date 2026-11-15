package com.example.lecture11

import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.firestore.toObject

class UserRepository {

    private val db = FirebaseFirestore.getInstance()

    fun createUser(
        uid: String,
        name: String,
        email: String,
        onSuccess: () -> Unit
    ){
        val user = User(
            name = name,
            email = email
        )

        db.collection("users")
            .document(uid)
            .set(user)
            .addOnSuccessListener {
                onSuccess()
            }
    }

    fun getUser(
        uid: String,
        onResult: (User?) -> Unit
    ){
        db.collection("users")
            .document(uid)
            .get()
            .addOnSuccessListener { document ->
                onResult(document.toObject<User>())
            }
    }

}