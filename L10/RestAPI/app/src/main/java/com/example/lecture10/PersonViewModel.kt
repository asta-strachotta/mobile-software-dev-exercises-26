package com.example.lecture10

import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.launch

class PersonViewModel : ViewModel() {

    // TODO: Create an instance of RetrofitClient
    var persons = mutableStateListOf<Person>()
        private set

    var person by mutableStateOf<Person?>(null)
        private set

    init {
        fetchPersons()
    }

    fun fetchPerson(url: String){
        // TODO: Use SwapiService to call the /people/{id}/ endpoint and store result in 'person'
    }

    fun fetchPersons() {
        // TODO: Use SwapiService to call the /people/ endpoint and store result in 'persons'
    }
}