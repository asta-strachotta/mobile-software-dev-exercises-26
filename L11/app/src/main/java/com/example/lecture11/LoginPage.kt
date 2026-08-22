package com.example.lecture11

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.OutlinedTextFieldDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.lifecycle.viewmodel.compose.viewModel

@Composable
fun LoginPage(modifier: Modifier = Modifier, authVM: AuthViewModel = viewModel()){
    val currentUser by authVM.user.collectAsStateWithLifecycle()

    Column(
        modifier = modifier
            .padding(12.dp)
            .fillMaxSize(),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(24.dp)
    ){
        LoginBox(
            onLogin = authVM::loginUser,
            onRegister = authVM::registerUser
        )
        UserBox(
            currentUser = currentUser,
            onSignOut = authVM::signOut
        )
    }
}

@Composable
fun LoginBox(
    onLogin: (String, String) -> Unit,
    onRegister: (String, String, String) -> Unit
){
    var email by remember { mutableStateOf("") }
    var name by remember { mutableStateOf("") }
    var password by remember { mutableStateOf("") }
    var register by remember { mutableStateOf(true) }
    Column(
        Modifier
            .fillMaxWidth()
            .padding(12.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Row(
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            Text(if (register) "Register" else "Login", fontSize = 16.sp)
            Button(onClick = { register = !register}, colors = ButtonDefaults.buttonColors(containerColor = Color.Transparent)
            ) {
                Text(if (register) "Go to login" else "Go to register", color = Color.Blue)
            }
        }
        OutlinedTextField(
            value = email,
            onValueChange = { email = it },
            label = { Text("Email") },
            colors = OutlinedTextFieldDefaults.colors(
                focusedContainerColor = Color.White,
                unfocusedContainerColor = Color.White,
                focusedBorderColor = Color.Blue

            ),
        )
        if (register){
            OutlinedTextField(
                value = name,
                onValueChange = { name = it },
                label = { Text("Name") },
                colors = OutlinedTextFieldDefaults.colors(
                    focusedContainerColor = Color.White,
                    unfocusedContainerColor = Color.White,
                    focusedBorderColor = Color.Blue

                ),
            )
        }
        OutlinedTextField(
            value = password,
            onValueChange = { password = it },
            label = { Text("Password") },
            colors = OutlinedTextFieldDefaults.colors(
                focusedContainerColor = Color.White,
                unfocusedContainerColor = Color.White,
                focusedBorderColor = Color.Blue
            ),
            keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Password),
            visualTransformation = PasswordVisualTransformation()
        )
        if (register){
            Button(onClick = {
                onRegister(email.trim(), name, password);
                email = ""; name = ""; password = ""
            }) {
                Text("Register")
            }
        } else {
            Button(onClick = {
                onLogin(email.trim(), password);
                email = ""; name = ""; password = ""
            }) {
                Text("Log in")
            }
        }
    }

}

@Composable
fun UserBox(
    currentUser: User?,
    onSignOut: () -> Unit
){
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(16.dp))
            .background(Color.LightGray)
            .padding(12.dp),
    ) {
        if (currentUser != null) {
            Text("Current user: ${currentUser.name}")
            Button(onClick = { onSignOut() }) {
                Text("Sign out")
            }
        } else {
            Text("Not signed in")
        }
    }
}