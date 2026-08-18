package com.example.lecture7

import android.os.Bundle
import androidx.compose.foundation.Image
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonColors
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.MaterialTheme
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
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.lecture7.ui.theme.Lecture7Theme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            Lecture7Theme {
                Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
                    Profile(
                        modifier = Modifier
                            .padding(innerPadding)
                            .padding(16.dp),
                        name = "Steven Bobby"
                    )
                }
            }
        }
    }
}

@Composable
fun Profile(modifier: Modifier = Modifier, name: String){
    Column(
        modifier.fillMaxSize(),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(20.dp)
    ) {
        Text(text = name, fontSize = 32.sp, fontWeight = FontWeight.Bold)
        Image(
            painter = painterResource(R.drawable.fella),
            contentDescription = "Feller",
            contentScale = ContentScale.Crop,
            modifier = Modifier
                .size(170.dp)
                .clip(CircleShape)
                .border(color = Color.Blue, width = 2.dp, shape = CircleShape)
        )
        var isFriend by remember { mutableStateOf(false) }
        var isMember by remember { mutableStateOf(false) }
        Row(
            Modifier.height(60.dp),
            horizontalArrangement = Arrangement.spacedBy(2.dp)
        ) {
            Button(
                onClick = {isFriend = !isFriend},
                colors = ButtonDefaults.buttonColors(
                    if (!isFriend) Color.Blue else Color.Red
                ),
                modifier = Modifier.weight(1f).fillMaxHeight()
            ) {
                Text(
                    text = if (!isFriend) "Add Friend" else "Remove Friend",
                    fontSize = 18.sp,
                    textAlign = TextAlign.Center
                )
            }
            Button(
                onClick = {isMember = !isMember},
                colors = ButtonDefaults.buttonColors(
                    if (!isMember) Color.Blue else Color.Red
                ),
                modifier = Modifier.weight(1f).fillMaxHeight()
            ) {
                Text(
                    text = if (!isMember) "Add to WeShare group" else "Remove from WeShare group",
                    fontSize = 18.sp,
                    textAlign = TextAlign.Center
                )
            }
        }
        InfoBox(name)
    }
}

@Composable
fun InfoBox(name: String){
    Column(
        Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(16.dp))
            .background(Color.LightGray)
            .padding(12.dp),
        verticalArrangement = Arrangement.spacedBy(20.dp)
    ) {
        Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
            Text(
                text = "Personal Information",
                fontSize = 24.sp,
                fontWeight = FontWeight.Bold
            )
            Row(
                Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                Text("City", fontWeight = FontWeight.Bold, fontSize = 20.sp)
                Text("Odense", fontSize = 20.sp)
            }
            Row(
                Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                Text("Birthday", fontWeight = FontWeight.Bold, fontSize = 20.sp)
                Text("01-09-1958", fontSize = 20.sp)
            }
            Row(
                Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                Text("Relationship status", fontWeight = FontWeight.Bold, fontSize = 20.sp)
                Text("Single", fontSize = 20.sp)
            }
        }
        Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
            Text(
                text = "Work",
                fontSize = 24.sp,
                fontWeight = FontWeight.Bold
            )
            Row(
                Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                Text("Workplace", fontWeight = FontWeight.Bold, fontSize = 20.sp)
                Text("Netto", fontSize = 20.sp)
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
fun SoMeScreenPreview() {
    Lecture7Theme {
        Profile(name = "Steven Bobby")
    }
}