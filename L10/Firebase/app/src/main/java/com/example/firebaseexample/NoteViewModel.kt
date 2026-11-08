package com.example.firebaseexample

import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.ViewModel

class NoteViewModel : ViewModel() {
    private val noteRepo: NoteRepository = NoteRepository()

    var notes = mutableStateOf<List<Note>>(emptyList())
        private set

    init {
        noteRepo.listenToNotes(
            onNotesUpdated = { fetchedNotes ->
                notes.value = fetchedNotes
            }
        )
    }

    fun createNote(author: String, note: String){
        val note = Note(author = author, content = note)
        noteRepo.createNote(note)
    }

    fun deleteNote(noteId: String){
        noteRepo.deleteNote(noteId)
    }
}