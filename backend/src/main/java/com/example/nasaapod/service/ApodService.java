package com.example.nasaapod.service;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.nasaapod.model.ApodDto;

@Service
public class ApodService {

    private final RestTemplate rest = new RestTemplate();

    @Value("${nasa.apod.url:https://api.nasa.gov/planetary/apod}")
    private String apodUrl;

    @Value("${NASA_API_KEY:}")
    private String apiKey;

    @Cacheable(value = "apod", key = "#date == null ? 'today' : #date")
    public ApodDto fetchApod(String date) {
        String usedKey = (apiKey == null || apiKey.isEmpty()) ? "DEMO_KEY" : apiKey;
        String url = apodUrl + "?api_key=" + usedKey;
        
        if (date != null && !date.isEmpty()) {
            // Validate date is not in future
            LocalDate reqDate = LocalDate.parse(date);
            LocalDate today = LocalDate.now();
            if (reqDate.isAfter(today)) {
                throw new IllegalArgumentException("Date cannot be in the future");
            }
            url += "&date=" + date;
        }
        
        ResponseEntity<ApodDto> res = rest.getForEntity(url, ApodDto.class);
        return res.getBody();
    }
}