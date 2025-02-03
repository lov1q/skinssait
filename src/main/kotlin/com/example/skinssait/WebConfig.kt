package com.example.skinssait  // Убедитесь, что этот пакет совпадает с вашим

import org.springframework.boot.web.servlet.FilterRegistrationBean
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.filter.CorsFilter
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.UrlBasedCorsConfigurationSource

@Configuration
class WebConfig {

    @Bean
    fun corsFilter(): FilterRegistrationBean<CorsFilter> {
        val corsConfig = CorsConfiguration().apply {
            addAllowedOrigin("http://localhost:63342")  // Указываем домен фронтенда
            addAllowedMethod("*")
            addAllowedHeader("*")
        }

        val source = UrlBasedCorsConfigurationSource().apply {
            registerCorsConfiguration("/**", corsConfig)
        }

        val corsFilter = CorsFilter(source)
        val registrationBean = FilterRegistrationBean(corsFilter)
        registrationBean.order = 0 // Установи порядок, чтобы он выполнялся до других фильтров
        return registrationBean
    }
}
