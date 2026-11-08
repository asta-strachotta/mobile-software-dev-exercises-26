package com.example.lecture10

import retrofit2.http.GET
import retrofit2.http.Path

interface SwapiService {

    // TODO: Define Retrofit methods for GET /people/ and GET /people/{id}/

    @GET("people/{id}")
    // Should return 'Person' object

    @GET("people/")
    // Should return 'SwapiResult' object
}