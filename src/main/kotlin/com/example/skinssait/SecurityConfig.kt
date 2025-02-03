package com.example.skinssait

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.http.SessionCreationPolicy
import org.springframework.security.web.SecurityFilterChain

@Configuration
@EnableWebSecurity
class SecurityConfig {

    @Bean
    fun securityFilterChain(http: HttpSecurity): SecurityFilterChain {
        http
            .csrf { it.disable() }
            .authorizeHttpRequests { auth ->
                auth.requestMatchers(
                    "/static/**",  // Разрешаем доступ к статическим файлам
                    "/auth/login", // Разрешаем доступ к авторизации
                    "/auth/register" // Разрешаем доступ к регистрации
                ).permitAll()
                auth.anyRequest().authenticated() // Все остальные запросы требуют аутентификации
            }
            .sessionManagement { session ->
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS) // Без сохранения сессий
            }

        return http.build()
    }
}
