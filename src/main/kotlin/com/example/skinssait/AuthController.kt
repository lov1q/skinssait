package com.example.skinssait

import com.example.skinssait.FirebaseAuthService  // ✅ Оставь только этот импорт
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/auth")
class AuthController(private val firebaseAuthService: FirebaseAuthService) {

    @PostMapping("/register")
    fun registerUser(@RequestBody request: RegisterRequest): ResponseEntity<Any> {
        return try {
            val userId = firebaseAuthService.registerUser(request.email, request.password)
            ResponseEntity.ok(mapOf("uid" to userId))
        } catch (e: Exception) {
            ResponseEntity.badRequest().body(mapOf("error" to e.message))
        }
    }
}

data class RegisterRequest(val email: String, val password: String)
