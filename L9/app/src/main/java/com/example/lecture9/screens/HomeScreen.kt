package com.example.lecture9.screens

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun HomeScreen(
    //TODO: Pass navigation callback
    //TODO (part II): Pass VM instance
){
    Column(Modifier.padding(12.dp)) {
        Text("This is the home screen")
        Button(onClick = { /* TODO: Navigate to the second screen */ } ){
            Text("Go to second screen")
        }

        //TODO (part II): Let user input their name
    }
}