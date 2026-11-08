package com.example.lecture10

import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

class RetrofitClient {

    // TODO: Configure Retrofit instance using SWAPI base URL
    //  and GSON for JSON deserialization
    private val retrofit by lazy {
        //
    }

    // TODO: Create an implementation of SwapiService using Retrofit
    val api: SwapiService by lazy {
        //
    }
}