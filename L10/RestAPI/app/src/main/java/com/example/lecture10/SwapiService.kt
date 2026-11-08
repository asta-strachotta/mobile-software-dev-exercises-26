package com.example.lecture10

import retrofit2.http.GET
import retrofit2.http.Path

interface SwapiService {
    @GET("people/{id}")
    suspend fun getPerson(@Path("id") personId: Int): Person

    @GET("people/")
    suspend fun getPeople(): SwapiResult
}