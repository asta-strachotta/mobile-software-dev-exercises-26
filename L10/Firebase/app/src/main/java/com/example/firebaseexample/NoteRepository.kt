package com.example.firebaseexample

import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.firestore.toObjects

class NoteRepository {
    private val db: FirebaseFirestore = FirebaseFirestore.getInstance()

    fun listenToNotes(onNotesUpdated: (List<Note>) -> Unit){
        db.collection("notes")
            .addSnapshotListener { value, error ->
                if (error != null){
                    return@addSnapshotListener
                }
                if (value != null){
                    onNotesUpdated(value.toObjects<Note>())
                }
            }
    }

    fun createNote(note: Note){
        db.collection("notes")
            .add(note)
    }

    fun deleteNote(noteId: String){
        db.collection("notes")
            .document(noteId)
            .delete()
    }
}