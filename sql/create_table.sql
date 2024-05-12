-- sys.cwb_weather_forcast definition

CREATE TABLE `cwb_weather_forcast` (
  `location_name` varchar(100) DEFAULT NULL,
  `data_time` varchar(100) DEFAULT NULL,
  `data_value` varchar(100) DEFAULT NULL,
  `data_description` varchar(100) DEFAULT NULL,
  `insert_time` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;