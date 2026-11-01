package com.example.lecture9.screens

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ThirdScreen(
    //TODO: Pass navigation callback
    //TODO (part II): Pass VM instance
){
    //TODO: Navigate back to the previous screen

    Column(Modifier.padding(12.dp)) {
        Text("This is the third screen")

        //TODO (part II): Show name if one has been entered
    }
}
