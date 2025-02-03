package com.example.skinssait

import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.UserRecord
import org.springframework.stereotype.Service

@Service
class FirebaseAuthService {

    fun registerUser(email: String, password: String): String {
        val user = UserRecord.CreateRequest()
            .setEmail(email)
            .setPassword(password)

        val createdUser = FirebaseAuth.getInstance().createUser(user)
        return createdUser.uid // Возвращает UID нового пользователя
    }
}
