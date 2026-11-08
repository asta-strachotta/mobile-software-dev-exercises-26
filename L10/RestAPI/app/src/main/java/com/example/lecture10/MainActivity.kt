package com.example.lecture10

import android.graphics.Paint
import android.os.Bundle
import android.text.Layout
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
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.LineHeightStyle
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.viewmodel.compose.viewModel
import com.example.lecture10.ui.theme.Lecture10Theme
import org.w3c.dom.Text

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            Lecture10Theme {
                Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
                    SwapiScreen(
                        modifier = Modifier.padding(innerPadding)
                    )
                }
            }
        }
    }
}

@Composable
fun SwapiScreen(modifier: Modifier, personVM: PersonViewModel = viewModel()){
    val persons = personVM.persons
    val person = personVM.person
    Column(
        modifier.fillMaxSize(),
        verticalArrangement = Arrangement.spacedBy(12.dp)
    ) {
        PersonList(persons, personVM::fetchPerson)
        PersonDetails(person)
    }
}

@Composable
fun PersonList(persons: List<Person>, fetchPerson: (String) -> Unit) {
    LazyColumn(
        modifier = Modifier
            .fillMaxWidth()
            .fillMaxHeight(0.7f)
            .background(Color.LightGray)
            .padding(8.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(12.dp)
    ) {
        items(persons) { person ->
            Column(
                modifier = Modifier
                    .fillMaxWidth(0.75f)
                    .clip(RoundedCornerShape(16.dp))
                    .background(Color.White)
                    .padding(12.dp),
            ) {
                Row(
                    Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween
                ){
                    Text("Name:", fontWeight = FontWeight.Bold)
                    Text(person.name)
                }
                Row(
                    Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween
                ){
                    Text("Birth year:", fontWeight = FontWeight.Bold)
                    Text(person.birth_year)
                }
                Button(onClick = { fetchPerson(person.url) }) {
                    Text("More details")
                }
            }
        }
    }
}

@Composable
fun PersonDetails(person: Person?){
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.LightGray)
            .padding(8.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(8.dp)
    ) {
        Text("Person details: ", fontWeight = FontWeight.Bold, fontSize = 24.sp)
        if (person != null){
            Text(person.name, fontWeight = FontWeight.Bold, fontSize = 20.sp)
            Column(Modifier.fillMaxWidth(0.5f).clip(RoundedCornerShape(16.dp)).background(Color.White).padding(8.dp)) {
                Text("Height: ${person.height}")
                Text("Mass: ${person.mass}")
                Text("Hair color: ${person.hair_color}")
                Text("Eye color: ${person.eye_color}")
                Text("Gender: ${person.gender}")
            }
        } else {
            Text("No person selected")
        }
    }
}