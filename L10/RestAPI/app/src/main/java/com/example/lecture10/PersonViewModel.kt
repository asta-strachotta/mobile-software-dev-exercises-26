package com.example.lecture10

import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.launch

class PersonViewModel : ViewModel() {

    private val retrofitClient = RetrofitClient()
    var persons = mutableStateListOf<Person>()
        private set

    var person by mutableStateOf<Person?>(null)
        private set

    init {
        fetchPersons()
    }

    fun fetchPerson(url: String){
        val id = url.trimEnd('/').substringAfterLast('/').toInt()
        viewModelScope.launch {
            person = retrofitClient.api.getPerson(id)
        }
    }

    fun fetchPersons() {
        viewModelScope.launch {
            persons.clear()
            val response = retrofitClient.api.getPeople()
            persons.addAll(response.results)
        }
    }
}