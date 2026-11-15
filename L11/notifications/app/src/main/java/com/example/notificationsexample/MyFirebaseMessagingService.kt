package com.example.notificationsexample

import android.annotation.SuppressLint
import android.util.Log
import com.google.firebase.messaging.FirebaseMessagingService

@SuppressLint("MissingFirebaseInstanceTokenRefresh")
class MyFirebaseMessagingService : FirebaseMessagingService() {
    override fun onRegistered(installationId: String) {
        Log.d("FCM", "Installation ID: $installationId")
    }
}