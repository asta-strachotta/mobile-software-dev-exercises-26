package com.example.lecture9.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import com.example.lecture9.NameViewModel

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ThirdScreen(onBackPressed: () -> Unit, nameVM: NameViewModel){
    val name by nameVM.name.collectAsStateWithLifecycle()
    Scaffold(modifier = Modifier.fillMaxSize(), topBar = {
        TopAppBar(
            title = {
                Text("Third Screen")
            },
            navigationIcon = {
                IconButton(onClick = onBackPressed) {
                    Icon(
                        imageVector = Icons.AutoMirrored.Filled.ArrowBack,
                        contentDescription = "Arrow back"
                    )
                }
            }
        )
    }) { innerPadding ->
        ThirdGreeting(Modifier.padding(innerPadding), name)
    }
}

@Composable
fun ThirdGreeting(modifier: Modifier, name: String){
    Column(
        modifier
            .fillMaxSize()
            .padding(12.dp)
            .clip(RoundedCornerShape(16.dp))
            .background(Color.LightGray),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(space = 32.dp, alignment = Alignment.CenterVertically)
    ) {
        if (!name.isBlank()){
            Column(
                Modifier
                    .border(2.dp, Color.Green, RoundedCornerShape(8.dp))
                    .background(Color.White, RoundedCornerShape(8.dp))
                    .padding(12.dp),
            ){
                Text("Nice to see you ${name}!")
            }
        }
        Text("Third Screen", fontWeight = FontWeight.Bold, fontSize = 32.sp)
    }
}