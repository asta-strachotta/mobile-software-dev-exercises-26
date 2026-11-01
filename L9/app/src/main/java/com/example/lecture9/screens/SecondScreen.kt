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
fun SecondScreen(
    //TODO: Pass navigation callbacks
    //TODO (part II): Pass VM instance
){
    //TODO: Navigate back to previous screen

    Column(Modifier.padding(12.dp)) {
        Text("This is the second screen")
        Button(onClick = { /* TODO: Navigate to the third screen */ } ){
            Text("Go to third screen")
        }

        //TODO (part II): Show name if one has been entered
    }
}