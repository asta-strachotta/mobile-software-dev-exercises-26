package com.example.lecture8

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.OutlinedTextField
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
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.viewmodel.compose.viewModel
import com.example.lecture8.ui.theme.Lecture8Theme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            Lecture8Theme {
                Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
                    Group(
                        modifier = Modifier.padding(innerPadding)
                    )
                }
            }
        }
    }
}

@Composable
fun Group(modifier: Modifier = Modifier, memberVM: MemberViewModel = viewModel()) {
    Column(
        modifier
            .padding(12.dp),
        verticalArrangement = Arrangement.spacedBy(12.dp)
    ) {
        SearchBar(memberVM::addMember)
        MembersList(memberVM.members, memberVM::removeMember)
    }
}

@Composable
fun MembersList(members: List<String>, removeMember: (String) -> Unit) {
    Column(
        Modifier
            .fillMaxSize()
            .clip(RoundedCornerShape(16.dp))
            .background(Color.LightGray)
            .padding(12.dp),
        verticalArrangement = Arrangement.spacedBy(8.dp)
    ) {
        members.forEach { member ->
            MemberCard(name = member, removeMember)
        }
    }
}

@Composable
fun MemberCard(name: String, removeMember: (String) -> Unit){
    Row(
        Modifier
            .clip(RoundedCornerShape(12.dp))
            .background(Color.Gray)
            .fillMaxWidth()
            .padding(12.dp),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically
    ) {
        Text(name, color = Color.White)
        Button(onClick = { removeMember(name) }, colors = ButtonDefaults.buttonColors(containerColor = Color.Red)) {
            Text("Remove")
        }
    }
}

@Composable
fun SearchBar(addMember: (String) -> Unit) {
    var input by remember{ mutableStateOf("") }
    Row(
        Modifier.height(60.dp).fillMaxWidth(),
        horizontalArrangement = Arrangement.spacedBy(8.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        OutlinedTextField(
            value = input,
            onValueChange = { input = it },
            label = { Text("name") },
            modifier = Modifier
                .fillMaxHeight()
        )
        Button(
            onClick = { addMember(input) },
            modifier = Modifier
                .fillMaxSize().padding(top = 8.dp) //OutlinedTextField is 8 pixels taller because of the label
        ) {
            Text("Enter", fontSize = 14.sp)
        }
    }
}

@Preview(showBackground = true)
@Composable
fun GroupPreview() {
    Lecture8Theme {
        Group()
    }
}