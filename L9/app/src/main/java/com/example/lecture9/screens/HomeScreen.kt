package com.example.lecture9.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.OutlinedTextFieldDefaults
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.lecture9.NameViewModel

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun HomeScreen(
    onSecondScreenPressed: () -> Unit,
    nameVM: NameViewModel
){
    Scaffold(modifier = Modifier.fillMaxSize(), topBar = {
    }) { innerPadding ->
        Greeting(
            modifier = Modifier.padding(innerPadding),
            onSecondScreenPressed,
            setName = nameVM::setName
        )
    }
}

@Composable
fun Greeting(modifier: Modifier, onSecondScreenPressed: () -> Unit, setName: (String) -> Unit){
    Column(
        modifier
            .fillMaxSize()
            .padding(12.dp)
            .clip(RoundedCornerShape(16.dp))
            .background(Color.LightGray),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(space = 12.dp, alignment = Alignment.CenterVertically)
    ) {
        Text("Home", fontWeight = FontWeight.Bold, fontSize = 32.sp)
        Text("Click the button below to navigate to the second screen", textAlign = TextAlign.Center)
        Button(onClick = onSecondScreenPressed) {
            Text("Second Screen")
        }
        NameField(setName)
    }
}

@Composable
fun NameField(setName: (String) -> Unit){
    Column(
        Modifier
            .padding(12.dp)
            .clip(RoundedCornerShape(16.dp))
            .background(Color.White)
            .padding(12.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text("Enter your name here to see it on the other screens")
        var name by remember { mutableStateOf("") }
        OutlinedTextField(
            value = name,
            onValueChange = { name = it },
            label = {Text("Name")},
            colors = OutlinedTextFieldDefaults.colors(
                focusedContainerColor = Color.White
            )
        )
        Button(onClick = { setName(name); name = "" }) {
            Text("Save")
        }
    }
}