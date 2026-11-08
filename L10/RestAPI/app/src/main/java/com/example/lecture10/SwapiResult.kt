package com.example.lecture10

import java.util.Date

data class Person(
    val name: String,
    val height: String,
    val mass: String,
    val hair_color: String,
    val eye_color: String,
    val birth_year: String,
    val gender: String,
    val species: List<String>,
    val url: String
)

data class SwapiResult(
    val count: Int,
    val next: String,
    val previous: String?,
    val results: List<Person>
)