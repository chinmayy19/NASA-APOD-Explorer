package com.example.nasaapod.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ApodDto {
    public String date;
    public String explanation;
    public String hdurl;
    public String media_type;
    public String service_version;
    public String title;
    public String url;
    public String copyright;
}
