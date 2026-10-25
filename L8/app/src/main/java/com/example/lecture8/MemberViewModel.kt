package com.example.lecture8

import androidx.compose.runtime.mutableStateListOf
import androidx.lifecycle.ViewModel

class MemberViewModel : ViewModel() {
    private val _members = mutableStateListOf<String>()
    val members: List<String> = _members

    fun addMember(name: String){
        _members.add(name)
    }

    fun removeMember(name: String){
        _members.remove(name)
    }
}