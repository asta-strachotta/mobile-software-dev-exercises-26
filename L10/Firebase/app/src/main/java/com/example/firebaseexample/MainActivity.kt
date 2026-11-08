package com.example.firebaseexample

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonColors
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.lifecycle.viewmodel.compose.viewModel
import com.example.firebaseexample.ui.theme.FirebaseExampleTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            FirebaseExampleTheme {
                Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
                    NotesScreen(Modifier.padding(innerPadding))
                }
            }
        }
    }
}

@Composable
fun NotesScreen(modifier: Modifier, notesVM: NoteViewModel = viewModel()){
    val notes = notesVM.notes.value
    Column(
        modifier = modifier.padding(12.dp)
    ) {
        NoteCreation(notesVM::createNote)
        NotesList(notes, notesVM::deleteNote)
    }
}

@Composable
fun NoteCreation(onCreate: (String, String) -> Unit){
    var inputAuthor by rememberSaveable { mutableStateOf("") }
    var inputNote by rememberSaveable { mutableStateOf("") }
    Column() {
        OutlinedTextField(
            value = inputAuthor,
            onValueChange = { inputAuthor = it },
            label = { Text("Author") }
        )
        OutlinedTextField(
            value = inputNote,
            onValueChange = { inputNote = it },
            label = { Text("Note") }
        )
        Button(onClick = { onCreate(inputAuthor, inputNote) }) {
            Text("Save")
        }
    }
}

@Composable
fun NotesList(notes: List<Note>, onDelete: (String) -> Unit){
    LazyColumn(verticalArrangement = Arrangement.spacedBy(10.dp)){
        items(notes){ note ->
            NoteCard(note, onDelete)
        }
    }
}

@Composable
fun NoteCard(note: Note, onDelete: (String) -> Unit) {
    Column(
        Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(16.dp))
            .background(Color.LightGray)
            .padding(12.dp),
        verticalArrangement = Arrangement.spacedBy(10.dp)
    ) {
        Row(
            Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Text(note.author, fontWeight = FontWeight.Bold)
            Button(
                onClick = { onDelete(note.id) },
                colors = ButtonDefaults.buttonColors(
                    containerColor = Color.Red,
                )
            ) {
                Text("Delete")
            }
        }
        Box(
            Modifier
                .fillMaxWidth()
                .clip(RoundedCornerShape(16.dp))
                .background(Color.White)
                .padding(10.dp)
        ) {
            Text(note.content)
        }
    }
}