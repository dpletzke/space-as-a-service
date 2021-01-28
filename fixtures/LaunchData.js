export const launchData = [
  {
    "flight_number": 1,
    "mission_name": "FalconSat",
    "mission_id": [],
    "upcoming": false,
    "launch_year": "2006",
    "launch_date_unix": 1143239400,
    "launch_date_utc": "2006-03-24T22:30:00.000Z",
    "launch_date_local": "2006-03-25T10:30:00+12:00",
    "is_tentative": false,
    "tentative_max_precision": "hour",
    "tbd": false,
    "launch_window": 0,
    "rocket": {
      "rocket_id": "falcon1",
      "rocket_name": "Falcon 1",
      "rocket_type": "Merlin A",
      "first_stage": {
        "cores": [
          {
            "core_serial": "Merlin1A",
            "flight": 1,
            "block": null,
            "gridfins": false,
            "legs": false,
            "reused": false,
            "land_success": null,
            "landing_intent": false,
            "landing_type": null,
            "landing_vehicle": null
          }
        ]
      },
      "second_stage": {
        "block": 1,
        "payloads": [
          {
            "payload_id": "FalconSAT-2",
            "norad_id": [],
            "reused": false,
            "customers": [
              "DARPA"
            ],
            "nationality": "United States",
            "manufacturer": "SSTL",
            "payload_type": "Satellite",
            "payload_mass_kg": 20,
            "payload_mass_lbs": 43,
            "orbit": "LEO",
            "orbit_params": {
              "reference_system": "geocentric",
              "regime": "low-earth",
              "longitude": null,
              "semi_major_axis_km": null,
              "eccentricity": null,
              "periapsis_km": 400,
              "apoapsis_km": 500,
              "inclination_deg": 39,
              "period_min": null,
              "lifespan_years": null,
              "epoch": null,
              "mean_motion": null,
              "raan": null,
              "arg_of_pericenter": null,
              "mean_anomaly": null
            }
          }
        ]
      },
      "fairings": {
        "reused": false,
        "recovery_attempt": false,
        "recovered": false,
        "ship": null
      }
    },
    "ships": [],
    "telemetry": {
      "flight_club": null
    },
    "launch_site": {
      "site_id": "kwajalein_atoll",
      "site_name": "Kwajalein Atoll",
      "site_name_long": "Kwajalein Atoll Omelek Island"
    },
    "launch_success": false,
    "launch_failure_details": {
      "time": 33,
      "altitude": null,
      "reason": "merlin engine failure"
    },
    "links": {
      "mission_patch": "https://images2.imgbox.com/40/e3/GypSkayF_o.png",
      "mission_patch_small": "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png",
      "reddit_campaign": null,
      "reddit_launch": null,
      "reddit_recovery": null,
      "reddit_media": null,
      "presskit": null,
      "article_link": "https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html",
      "wikipedia": "https://en.wikipedia.org/wiki/DemoSat",
      "video_link": "https://www.youtube.com/watch?v=0a_00nJ_Y88",
      "youtube_id": "0a_00nJ_Y88",
      "flickr_images": []
    },
    "details": "Engine failure at 33 seconds and loss of vehicle",
    "static_fire_date_utc": "2006-03-17T00:00:00.000Z",
    "static_fire_date_unix": 1142553600,
    "timeline": {
      "webcast_liftoff": 54
    }
  },
  {
    "flight_number": 2,
    "mission_name": "DemoSat",
    "mission_id": [],
    "launch_year": "2007",
    "launch_date_unix": 1174439400,
    "launch_date_utc": "2007-03-21T01:10:00.000Z",
    "launch_date_local": "2007-03-21T13:10:00+12:00",
    "is_tentative": false,
    "tentative_max_precision": "hour",
    "tbd": false,
    "launch_window": 0,
    "rocket": {
      "rocket_id": "falcon1",
      "rocket_name": "Falcon 1",
      "rocket_type": "Merlin A",
      "first_stage": {
        "cores": [
          {
            "core_serial": "Merlin2A",
            "flight": 1,
            "block": null,
            "gridfins": false,
            "legs": false,
            "reused": false,
            "land_success": null,
            "landing_intent": false,
            "landing_type": null,
            "landing_vehicle": null
          }
        ]
      },
      "second_stage": {
        "block": 1,
        "payloads": [
          {
            "payload_id": "DemoSAT",
            "norad_id": [],
            "reused": false,
            "customers": [
              "DARPA"
            ],
            "nationality": "United States",
            "manufacturer": "SpaceX",
            "payload_type": "Satellite",
            "payload_mass_kg": null,
            "payload_mass_lbs": null,
            "orbit": "LEO",
            "orbit_params": {
              "reference_system": "geocentric",
              "regime": "low-earth",
              "longitude": null,
              "semi_major_axis_km": null,
              "eccentricity": null,
              "periapsis_km": null,
              "apoapsis_km": null,
              "inclination_deg": null,
              "period_min": null,
              "lifespan_years": null,
              "epoch": null,
              "mean_motion": null,
              "raan": null,
              "arg_of_pericenter": null,
              "mean_anomaly": null
            }
          }
        ]
      },
      "fairings": {
        "reused": false,
        "recovery_attempt": false,
        "recovered": false,
        "ship": null
      }
    },
    "ships": [],
    "telemetry": {
      "flight_club": null
    },
    "launch_site": {
      "site_id": "kwajalein_atoll",
      "site_name": "Kwajalein Atoll",
      "site_name_long": "Kwajalein Atoll Omelek Island"
    },
    "launch_success": false,
    "launch_failure_details": {
      "time": 301,
      "altitude": 289,
      "reason": "harmonic oscillation leading to premature engine shutdown"
    },
    "links": {
      "mission_patch": "https://images2.imgbox.com/be/e7/iNqsqVYM_o.png",
      "mission_patch_small": "https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png",
      "reddit_campaign": null,
      "reddit_launch": null,
      "reddit_recovery": null,
      "reddit_media": null,
      "presskit": null,
      "article_link": "https://www.space.com/3590-spacex-falcon-1-rocket-fails-reach-orbit.html",
      "wikipedia": "https://en.wikipedia.org/wiki/DemoSat",
      "video_link": "https://www.youtube.com/watch?v=Lk4zQ2wP-Nc",
      "youtube_id": "Lk4zQ2wP-Nc",
      "flickr_images": []
    },
    "details": "Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage",
    "upcoming": false,
    "static_fire_date_utc": null,
    "static_fire_date_unix": null,
    "timeline": {
      "webcast_liftoff": 60
    }
  },
  {
    "flight_number": 3,
    "mission_name": "Trailblazer",
    "mission_id": [],
    "launch_year": "2008",
    "launch_date_unix": 1217648040,
    "launch_date_utc": "2008-08-02T03:34:00.000Z",
    "launch_date_local": "2008-08-02T15:34:00+12:00",
    "is_tentative": false,
    "tentative_max_precision": "hour",
    "tbd": false,
    "launch_window": 0,
    "rocket": {
      "rocket_id": "falcon1",
      "rocket_name": "Falcon 1",
      "rocket_type": "Merlin C",
      "first_stage": {
        "cores": [
          {
            "core_serial": "Merlin1C",
            "flight": 1,
            "block": null,
            "gridfins": false,
            "legs": false,
            "reused": false,
            "land_success": null,
            "landing_intent": false,
            "landing_type": null,
            "landing_vehicle": null
          }
        ]
      },
      "second_stage": {
        "block": 1,
        "payloads": [
          {
            "payload_id": "Trailblazer",
            "norad_id": [],
            "reused": false,
            "customers": [
              "NASA"
            ],
            "nationality": "United States",
            "manufacturer": "Space Dev",
            "payload_type": "Satellite",
            "payload_mass_kg": null,
            "payload_mass_lbs": null,
            "orbit": "LEO",
            "orbit_params": {
              "reference_system": "geocentric",
              "regime": "low-earth",
              "longitude": null,
              "semi_major_axis_km": null,
              "eccentricity": null,
              "periapsis_km": null,
              "apoapsis_km": null,
              "inclination_deg": null,
              "period_min": null,
              "lifespan_years": null,
              "epoch": null,
              "mean_motion": null,
              "raan": null,
              "arg_of_pericenter": null,
              "mean_anomaly": null
            }
          },
          {
            "payload_id": "PRESat",
            "norad_id": [],
            "reused": false,
            "customers": [
              "ORS"
            ],
            "nationality": "United States",
            "manufacturer": null,
            "payload_type": "Satellite",
            "payload_mass_kg": null,
            "payload_mass_lbs": null,
            "orbit": "LEO",
            "orbit_params": {
              "reference_system": "geocentric",
              "regime": "low-earth",
              "longitude": null,
              "semi_major_axis_km": null,
              "eccentricity": null,
              "periapsis_km": null,
              "apoapsis_km": null,
              "inclination_deg": null,
              "period_min": null,
              "lifespan_years": null,
              "epoch": null,
              "mean_motion": null,
              "raan": null,
              "arg_of_pericenter": null,
              "mean_anomaly": null
            }
          }
        ]
      },
      "fairings": {
        "reused": false,
        "recovery_attempt": false,
        "recovered": false,
        "ship": null
      }
    },
    "ships": [],
    "telemetry": {
      "flight_club": null
    },
    "launch_site": {
      "site_id": "kwajalein_atoll",
      "site_name": "Kwajalein Atoll",
      "site_name_long": "Kwajalein Atoll Omelek Island"
    },
    "launch_success": false,
    "launch_failure_details": {
      "time": 140,
      "altitude": 35,
      "reason": "residual stage-1 thrust led to collision between stage 1 and stage 2"
    },
    "links": {
      "mission_patch": "https://images2.imgbox.com/4b/bd/d8UxLh4q_o.png",
      "mission_patch_small": "https://images2.imgbox.com/3d/86/cnu0pan8_o.png",
      "reddit_campaign": null,
      "reddit_launch": null,
      "reddit_recovery": null,
      "reddit_media": null,
      "presskit": null,
      "article_link": "http://www.spacex.com/news/2013/02/11/falcon-1-flight-3-mission-summary",
      "wikipedia": "https://en.wikipedia.org/wiki/Trailblazer_(satellite)",
      "video_link": "https://www.youtube.com/watch?v=v0w9p3U8860",
      "youtube_id": "v0w9p3U8860",
      "flickr_images": []
    },
    "details": "Residual stage 1 thrust led to collision between stage 1 and stage 2",
    "upcoming": false,
    "static_fire_date_utc": null,
    "static_fire_date_unix": null,
    "timeline": {
      "webcast_liftoff": 14
    }
  },
  {
    "flight_number": 4,
    "mission_name": "RatSat",
    "mission_id": [],
    "launch_year": "2008",
    "launch_date_unix": 1222643700,
    "launch_date_utc": "2008-09-28T23:15:00.000Z",
    "launch_date_local": "2008-09-28T11:15:00+12:00",
    "is_tentative": false,
    "tentative_max_precision": "hour",
    "tbd": false,
    "launch_window": 0,
    "rocket": {
      "rocket_id": "falcon1",
      "rocket_name": "Falcon 1",
      "rocket_type": "Merlin C",
      "first_stage": {
        "cores": [
          {
            "core_serial": "Merlin2C",
            "flight": 1,
            "block": null,
            "gridfins": false,
            "legs": false,
            "reused": false,
            "land_success": null,
            "landing_intent": false,
            "landing_type": null,
            "landing_vehicle": null
          }
        ]
      },
      "second_stage": {
        "block": 1,
        "payloads": [
          {
            "payload_id": "RatSat",
            "norad_id": [
              33393
            ],
            "reused": false,
            "customers": [
              "SpaceX"
            ],
            "nationality": "United States",
            "manufacturer": "SpaceX",
            "payload_type": "Satellite",
            "payload_mass_kg": 165,
            "payload_mass_lbs": 363,
            "orbit": "LEO",
            "orbit_params": {
              "reference_system": "geocentric",
              "regime": "low-earth",
              "longitude": null,
              "lifespan_years": null,
              "epoch": "2019-02-05T06:47:34.000Z",
              "mean_motion": 14.84700219,
              "raan": 103.1158,
              "semi_major_axis_km": 6992.663,
              "eccentricity": 0.0013082,
              "periapsis_km": 605.381,
              "apoapsis_km": 623.676,
              "inclination_deg": 9.3464,
              "period_min": 96.989,
              "arg_of_pericenter": 188.3837,
              "mean_anomaly": 171.6144
            }
          }
        ]
      },
      "fairings": {
        "reused": false,
        "recovery_attempt": false,
        "recovered": false,
        "ship": null
      }
    },
    "ships": [],
    "telemetry": {
      "flight_club": null
    },
    "launch_site": {
      "site_id": "kwajalein_atoll",
      "site_name": "Kwajalein Atoll",
      "site_name_long": "Kwajalein Atoll Omelek Island"
    },
    "launch_success": true,
    "links": {
      "mission_patch": "https://images2.imgbox.com/e0/a7/FNjvKlXW_o.png",
      "mission_patch_small": "https://images2.imgbox.com/e9/c9/T8CfiSYb_o.png",
      "reddit_campaign": null,
      "reddit_launch": null,
      "reddit_recovery": null,
      "reddit_media": null,
      "presskit": null,
      "article_link": "https://en.wikipedia.org/wiki/Ratsat",
      "wikipedia": "https://en.wikipedia.org/wiki/Ratsat",
      "video_link": "https://www.youtube.com/watch?v=dLQ2tZEH6G0",
      "youtube_id": "dLQ2tZEH6G0",
      "flickr_images": []
    },
    "details": "Ratsat was carried to orbit on the first successful orbital launch of any privately funded and developed, liquid-propelled carrier rocket, the SpaceX Falcon 1",
    "upcoming": false,
    "static_fire_date_utc": "2008-09-20T00:00:00.000Z",
    "static_fire_date_unix": 1221868800,
    "timeline": {
      "webcast_liftoff": 5
    }
  },
  {
    "flight_number": 5,
    "mission_name": "RazakSat",
    "mission_id": [],
    "launch_year": "2009",
    "launch_date_unix": 1247456100,
    "launch_date_utc": "2009-07-13T03:35:00.000Z",
    "launch_date_local": "2009-07-13T15:35:00+12:00",
    "is_tentative": false,
    "tentative_max_precision": "hour",
    "tbd": false,
    "launch_window": 0,
    "rocket": {
      "rocket_id": "falcon1",
      "rocket_name": "Falcon 1",
      "rocket_type": "Merlin C",
      "first_stage": {
        "cores": [
          {
            "core_serial": "Merlin3C",
            "flight": 1,
            "block": null,
            "gridfins": false,
            "legs": false,
            "reused": false,
            "land_success": null,
            "landing_intent": false,
            "landing_type": null,
            "landing_vehicle": null
          }
        ]
      },
      "second_stage": {
        "block": 1,
        "payloads": [
          {
            "payload_id": "RazakSAT",
            "norad_id": [
              35578
            ],
            "reused": false,
            "customers": [
              "ATSB"
            ],
            "nationality": "Malaysia",
            "manufacturer": "Satrec",
            "payload_type": "Satellite",
            "payload_mass_kg": 200,
            "payload_mass_lbs": 440,
            "orbit": "LEO",
            "orbit_params": {
              "reference_system": "geocentric",
              "regime": "low-earth",
              "longitude": null,
              "semi_major_axis_km": 7049.165,
              "eccentricity": 0.0017567,
              "periapsis_km": 658.647,
              "apoapsis_km": 683.414,
              "inclination_deg": 8.9856,
              "period_min": 98.167,
              "lifespan_years": null,
              "epoch": "2019-02-04T20:31:02.000Z",
              "mean_motion": 14.66885367,
              "raan": 233.0108,
              "arg_of_pericenter": 289.1874,
              "mean_anomaly": 70.6425
            }
          }
        ]
      },
      "fairings": {
        "reused": false,
        "recovery_attempt": false,
        "recovered": false,
        "ship": null
      }
    },
    "ships": [],
    "telemetry": {
      "flight_club": null
    },
    "launch_site": {
      "site_id": "kwajalein_atoll",
      "site_name": "Kwajalein Atoll",
      "site_name_long": "Kwajalein Atoll Omelek Island"
    },
    "launch_success": true,
    "links": {
      "mission_patch": "https://images2.imgbox.com/8d/fc/0qdZMWWx_o.png",
      "mission_patch_small": "https://images2.imgbox.com/a7/ba/NBZSw3Ho_o.png",
      "reddit_campaign": null,
      "reddit_launch": null,
      "reddit_recovery": null,
      "reddit_media": null,
      "presskit": "http://www.spacex.com/press/2012/12/19/spacexs-falcon-1-successfully-delivers-razaksat-satellite-orbit",
      "article_link": "http://www.spacex.com/news/2013/02/12/falcon-1-flight-5",
      "wikipedia": "https://en.wikipedia.org/wiki/RazakSAT",
      "video_link": "https://www.youtube.com/watch?v=yTaIDooc8Og",
      "youtube_id": "yTaIDooc8Og",
      "flickr_images": []
    },
    "details": null,
    "upcoming": false,
    "static_fire_date_utc": null,
    "static_fire_date_unix": null,
    "timeline": {
      "webcast_liftoff": 5
    }
  },
  {
    "flight_number": 6,
    "mission_name": "Falcon 9 Test Flight",
    "mission_id": [
      "EE86F74"
    ],
    "launch_year": "2010",
    "launch_date_unix": 1275677100,
    "launch_date_utc": "2010-06-04T18:45:00.000Z",
    "launch_date_local": "2010-06-04T14:45:00-04:00",
    "is_tentative": false,
    "tentative_max_precision": "hour",
    "tbd": false,
    "launch_window": 0,
    "rocket": {
      "rocket_id": "falcon9",
      "rocket_name": "Falcon 9",
      "rocket_type": "v1.0",
      "first_stage": {
        "cores": [
          {
            "core_serial": "B0003",
            "flight": 1,
            "block": 1,
            "gridfins": false,
            "legs": false,
            "reused": false,
            "land_success": null,
            "landing_intent": false,
            "landing_type": null,
            "landing_vehicle": null
          }
        ]
      },
      "second_stage": {
        "block": 1,
        "payloads": [
          {
            "payload_id": "Dragon Qualification Unit",
            "norad_id": [
              36595
            ],
            "reused": false,
            "customers": [
              "SpaceX"
            ],
            "nationality": "United States",
            "manufacturer": "SpaceX",
            "payload_type": "Dragon Boilerplate",
            "payload_mass_kg": null,
            "payload_mass_lbs": null,
            "orbit": "LEO",
            "orbit_params": {
              "reference_system": "geocentric",
              "regime": "low-earth",
              "longitude": null,
              "semi_major_axis_km": 6634.458,
              "eccentricity": 0.0030715,
              "periapsis_km": 235.945,
              "apoapsis_km": 276.701,
              "inclination_deg": 34.5005,
              "period_min": 89.632,
              "lifespan_years": null,
              "epoch": "2010-06-04T20:04:51.000Z",
              "mean_motion": 16.06552645,
              "raan": 41.2862,
              "arg_of_pericenter": 213.759,
              "mean_anomaly": 146.1185
            }
          }
        ]
      },
      "fairings": null
    },
    "ships": [],
    "telemetry": {
      "flight_club": null
    },
    "launch_site": {
      "site_id": "ccafs_slc_40",
      "site_name": "CCAFS SLC 40",
      "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
    },
    "launch_success": true,
    "links": {
      "mission_patch": "https://images2.imgbox.com/d6/12/yxne8mMD_o.png",
      "mission_patch_small": "https://images2.imgbox.com/5c/36/gbDKf6Y7_o.png",
      "reddit_campaign": null,
      "reddit_launch": null,
      "reddit_recovery": null,
      "reddit_media": null,
      "presskit": "http://forum.nasaspaceflight.com/index.php?action=dlattach;topic=21869.0;attach=230821",
      "article_link": "http://www.spacex.com/news/2013/02/12/falcon-9-flight-1",
      "wikipedia": "https://en.wikipedia.org/wiki/Dragon_Spacecraft_Qualification_Unit",
      "video_link": "https://www.youtube.com/watch?v=nxSxgBKlYws",
      "youtube_id": "nxSxgBKlYws",
      "flickr_images": []
    },
    "details": null,
    "upcoming": false,
    "static_fire_date_utc": "2010-03-13T00:00:00.000Z",
    "static_fire_date_unix": 1268438400,
    "timeline": {
      "webcast_liftoff": 123,
      "go_for_prop_loading": -2280,
      "rp1_loading": -2100,
      "stage1_lox_loading": -2100,
      "stage2_lox_loading": -960,
      "engine_chill": -420,
      "prelaunch_checks": -60,
      "propellant_pressurization": -60,
      "go_for_launch": -45,
      "ignition": -3,
      "liftoff": 0,
      "maxq": 76,
      "meco": 174,
      "stage_sep": 176,
      "second_stage_ignition": 179,
      "seco-1": 476
    }
  },
  {
    "flight_number": 7,
    "mission_name": "COTS 1",
    "mission_id": [
      "EE86F74"
    ],
    "launch_year": "2010",
    "launch_date_unix": 1291822980,
    "launch_date_utc": "2010-12-08T15:43:00.000Z",
    "launch_date_local": "2010-12-08T11:43:00-04:00",
    "is_tentative": false,
    "tentative_max_precision": "hour",
    "tbd": false,
    "launch_window": 0,
    "rocket": {
      "rocket_id": "falcon9",
      "rocket_name": "Falcon 9",
      "rocket_type": "v1.0",
      "first_stage": {
        "cores": [
          {
            "core_serial": "B0004",
            "flight": 1,
            "block": 1,
            "gridfins": false,
            "legs": false,
            "reused": false,
            "land_success": null,
            "landing_intent": false,
            "landing_type": null,
            "landing_vehicle": null
          }
        ]
      },
      "second_stage": {
        "block": 1,
        "payloads": [
          {
            "payload_id": "COTS Demo Flight 1",
            "norad_id": [
              37244
            ],
            "cap_serial": "C101",
            "reused": false,
            "customers": [
              "NASA(COTS)"
            ],
            "nationality": "United States",
            "manufacturer": "SpaceX",
            "payload_type": "Dragon 1.0",
            "payload_mass_kg": null,
            "payload_mass_lbs": null,
            "orbit": "LEO",
            "orbit_params": {
              "reference_system": "geocentric",
              "regime": "low-earth",
              "longitude": null,
              "semi_major_axis_km": 6672.063,
              "eccentricity": 0.0021812,
              "periapsis_km": 279.375,
              "apoapsis_km": 308.481,
              "inclination_deg": 34.5447,
              "period_min": 90.396,
              "lifespan_years": null,
              "epoch": "2010-12-08T15:34:03.000Z",
              "mean_motion": 15.9298967,
              "raan": 180.7668,
              "arg_of_pericenter": 225.2707,
              "mean_anomaly": 136.6556
            }
          },
          {
            "payload_id": "Cubesats",
            "norad_id": [],
            "reused": false,
            "customers": [
              "NRO"
            ],
            "payload_type": "Satellite",
            "payload_mass_kg": null,
            "payload_mass_lbs": null,
            "orbit": "LEO",
            "orbit_params": {
              "reference_system": "geocentric",
              "regime": "low-earth",
              "longitude": null,
              "semi_major_axis_km": null,
              "eccentricity": null,
              "periapsis_km": null,
              "apoapsis_km": null,
              "inclination_deg": null,
              "period_min": null,
              "lifespan_years": 0,
              "epoch": null,
              "mean_motion": null,
              "raan": null,
              "arg_of_pericenter": null,
              "mean_anomaly": null
            }
          }
        ]
      },
      "fairings": null
    },
    "ships": [
      "AMERICANCHAMPION"
    ],
    "telemetry": {
      "flight_club": null
    },
    "launch_site": {
      "site_id": "ccafs_slc_40",
      "site_name": "CCAFS SLC 40",
      "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
    },
    "launch_success": true,
    "links": {
      "mission_patch": "https://images2.imgbox.com/00/2f/FhtEd0nB_o.png",
      "mission_patch_small": "https://images2.imgbox.com/d9/3e/FfrN88ry_o.png",
      "reddit_campaign": null,
      "reddit_launch": null,
      "reddit_recovery": null,
      "reddit_media": null,
      "presskit": "http://www.spacex.com/files/downloads/cots1-20101206.pdf",
      "article_link": "https://en.wikipedia.org/wiki/SpaceX_COTS_Demo_Flight_1",
      "wikipedia": "https://en.wikipedia.org/wiki/SpaceX_COTS_Demo_Flight_1",
      "video_link": "https://www.youtube.com/watch?v=cdLITgWKe_0",
      "youtube_id": "cdLITgWKe_0",
      "flickr_images": []
    },
    "details": null,
    "upcoming": false,
    "static_fire_date_utc": "2010-12-04T00:00:00.000Z",
    "static_fire_date_unix": 1291420800,
    "timeline": {
      "webcast_liftoff": 14,
      "go_for_prop_loading": -2280,
      "rp1_loading": -2100,
      "stage1_lox_loading": -2100,
      "stage2_lox_loading": -960,
      "engine_chill": -420,
      "prelaunch_checks": -60,
      "propellant_pressurization": -60,
      "go_for_launch": -45,
      "ignition": -3,
      "liftoff": 0,
      "meco": 178,
      "stage_sep": 182,
      "second_stage_ignition": 189,
      "seco-1": 540,
      "dragon_separation": 575
    }
  },
  {
    "flight_number": 8,
    "mission_name": "COTS 2",
    "mission_id": [
      "EE86F74"
    ],
    "launch_year": "2012",
    "launch_date_unix": 1335944640,
    "launch_date_utc": "2012-05-22T07:44:00.000Z",
    "launch_date_local": "2012-05-22T03:44:00-04:00",
    "is_tentative": false,
    "tentative_max_precision": "hour",
    "tbd": false,
    "launch_window": 0,
    "rocket": {
      "rocket_id": "falcon9",
      "rocket_name": "Falcon 9",
      "rocket_type": "v1.0",
      "first_stage": {
        "cores": [
          {
            "core_serial": "B0005",
            "flight": 1,
            "block": 1,
            "gridfins": false,
            "legs": false,
            "reused": false,
            "land_success": null,
            "landing_intent": false,
            "landing_type": null,
            "landing_vehicle": null
          }
        ]
      },
      "second_stage": {
        "block": 1,
        "payloads": [
          {
            "payload_id": "COTS Demo Flight 2",
            "norad_id": [
              38348
            ],
            "cap_serial": "C102",
            "reused": false,
            "customers": [
              "NASA(COTS)"
            ],
            "nationality": "United States",
            "manufacturer": "SpaceX",
            "payload_type": "Dragon 1.0",
            "payload_mass_kg": 525,
            "payload_mass_lbs": 1157,
            "orbit": "LEO",
            "orbit_params": {
              "reference_system": "geocentric",
              "regime": "low-earth",
              "longitude": null,
              "semi_major_axis_km": 6711.684,
              "eccentricity": 0.0057963,
              "periapsis_km": 294.646,
              "apoapsis_km": 372.452,
              "inclination_deg": 51.6726,
              "period_min": 91.202,
              "lifespan_years": null,
              "epoch": "2012-05-22T09:12:31.000Z",
              "mean_motion": 15.78904505,
              "raan": 251.5418,
              "arg_of_pericenter": 331.7079,
              "mean_anomaly": 31.2745
            },
            "mass_returned_kg": null,
            "mass_returned_lbs": null,
            "flight_time_sec": 806400,
            "cargo_manifest": null
          }
        ]
      },
      "fairings": null
    },
    "ships": [
      "AMERICANCHAMPION"
    ],
    "telemetry": {
      "flight_club": null
    },
    "launch_site": {
      "site_id": "ccafs_slc_40",
      "site_name": "CCAFS SLC 40",
      "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
    },
    "launch_success": true,
    "links": {
      "mission_patch": "https://images2.imgbox.com/2b/8e/MYyHbnd2_o.png",
      "mission_patch_small": "https://images2.imgbox.com/fc/7a/r9ITwL12_o.png",
      "reddit_campaign": null,
      "reddit_launch": null,
      "reddit_recovery": null,
      "reddit_media": null,
      "presskit": "https://www.nasa.gov/pdf/649910main_cots2_presskit_051412.pdf",
      "article_link": "https://en.wikipedia.org/wiki/Dragon_C2%2B",
      "wikipedia": "https://en.wikipedia.org/wiki/Dragon_C2%2B",
      "video_link": "https://www.youtube.com/watch?v=tpQzDbAY7yI",
      "youtube_id": "tpQzDbAY7yI",
      "flickr_images": []
    },
    "details": "Launch was scrubbed on first attempt, second launch attempt was successful",
    "upcoming": false,
    "static_fire_date_utc": "2012-04-30T00:00:00.000Z",
    "static_fire_date_unix": 1335744000,
    "timeline": {
      "webcast_liftoff": 42,
      "go_for_prop_loading": -2280,
      "rp1_loading": -2100,
      "stage1_lox_loading": -2100,
      "stage2_lox_loading": -960,
      "engine_chill": -420,
      "prelaunch_checks": -60,
      "propellant_pressurization": -60,
      "go_for_launch": -45,
      "ignition": -3,
      "liftoff": 0,
      "maxq": 84,
      "meco": 180,
      "stage_sep": 180,
      "second_stage_ignition": 185,
      "seco-1": 554,
      "dragon_separation": 598,
      "dragon_solar_deploy": 713,
      "dragon_bay_door_deploy": 8808
    }
  },
  {
    "flight_number": 9,
    "mission_name": "CRS-1",
    "mission_id": [
      "EE86F74"
    ],
    "launch_year": "2012",
    "launch_date_unix": 1349656500,
    "launch_date_utc": "2012-10-08T00:35:00.000Z",
    "launch_date_local": "2012-10-08T20:35:00-04:00",
    "is_tentative": false,
    "tentative_max_precision": "hour",
    "tbd": false,
    "launch_window": 0,
    "rocket": {
      "rocket_id": "falcon9",
      "rocket_name": "Falcon 9",
      "rocket_type": "v1.0",
      "first_stage": {
        "cores": [
          {
            "core_serial": "B0006",
            "flight": 1,
            "block": 1,
            "gridfins": false,
            "legs": false,
            "reused": false,
            "land_success": null,
            "landing_intent": false,
            "landing_type": null,
            "landing_vehicle": null
          }
        ]
      },
      "second_stage": {
        "block": 1,
        "payloads": [
          {
            "payload_id": "CRS-1",
            "norad_id": [
              38846
            ],
            "cap_serial": "C103",
            "reused": false,
            "customers": [
              "NASA (CRS)"
            ],
            "nationality": "United States",
            "manufacturer": "SpaceX",
            "payload_type": "Dragon 1.0",
            "payload_mass_kg": 400,
            "payload_mass_lbs": 881,
            "orbit": "ISS",
            "orbit_params": {
              "reference_system": "geocentric",
              "regime": "low-earth",
              "longitude": null,
              "semi_major_axis_km": 6643.164,
              "eccentricity": 0.0092222,
              "periapsis_km": 203.764,
              "apoapsis_km": 326.293,
              "inclination_deg": 51.6539,
              "period_min": 89.809,
              "lifespan_years": null,
              "epoch": "2012-10-08T00:31:33.000Z",
              "mean_motion": 16.03395683,
              "raan": 281.4248,
              "arg_of_pericenter": 54.4728,
              "mean_anomaly": 306.4841
            },
            "mass_returned_kg": 905,
            "mass_returned_lbs": 1995,
            "flight_time_sec": 1728000,
            "cargo_manifest": "https://en.wikipedia.org/wiki/SpaceX_CRS-1#Payload"
          },
          {
            "payload_id": "Orbcomm-OG2",
            "norad_id": [],
            "reused": false,
            "customers": [
              "Orbcomm"
            ],
            "payload_type": "Dragon 1.0",
            "payload_mass_kg": 400,
            "payload_mass_lbs": 881,
            "orbit": "LEO",
            "orbit_params": {
              "reference_system": "geocentric",
              "regime": "low-earth",
              "longitude": null,
              "semi_major_axis_km": null,
              "eccentricity": null,
              "periapsis_km": null,
              "apoapsis_km": null,
              "inclination_deg": 45,
              "period_min": null,
              "lifespan_years": 5,
              "epoch": null,
              "mean_motion": null,
              "raan": null
            }
          }
        ]
      },
      "fairings": null
    },
    "ships": [
      "AMERICANISLANDER"
    ],
    "telemetry": {
      "flight_club": null
    },
    "launch_site": {
      "site_id": "ccafs_slc_40",
      "site_name": "CCAFS SLC 40",
      "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
    },
    "launch_success": true,
    "links": {
      "mission_patch": "https://images2.imgbox.com/52/09/eNvilptL_o.png",
      "mission_patch_small": "https://images2.imgbox.com/0b/33/2eLGEejP_o.png",
      "reddit_campaign": null,
      "reddit_launch": null,
      "reddit_recovery": null,
      "reddit_media": null,
      "presskit": "https://www.nasa.gov/pdf/694166main_SpaceXCRS-1PressKit.pdf",
      "article_link": "https://www.nasa.gov/mission_pages/station/main/spacex-crs1-target.html",
      "wikipedia": "https://en.wikipedia.org/wiki/SpaceX_CRS-1",
      "video_link": "https://www.youtube.com/watch?v=-Vk3hiV_zXU",
      "youtube_id": "-Vk3hiV_zXU",
      "flickr_images": []
    },
    "details": "CRS-1 successful, but the secondary payload was inserted into abnormally low orbit and lost due to Falcon 9 boost stage engine failure, ISS visiting vehicle safety rules, and the primary payload owner's contractual right to decline a second ignition of the second stage under some conditions.",
    "upcoming": false,
    "static_fire_date_utc": "2012-09-29T00:00:00.000Z",
    "static_fire_date_unix": 1348876800,
    "timeline": {
      "webcast_liftoff": 605,
      "go_for_prop_loading": -2280,
      "rp1_loading": -2100,
      "stage1_lox_loading": -2100,
      "stage2_lox_loading": -960,
      "engine_chill": -420,
      "prelaunch_checks": -60,
      "propellant_pressurization": -60,
      "go_for_launch": -45,
      "ignition": -3,
      "liftoff": 0,
      "maxq": 60,
      "meco": 180,
      "stage_sep": 180,
      "second_stage_ignition": 180,
      "seco-1": 540,
      "dragon_separation": 600,
      "dragon_solar_deploy": 720,
      "dragon_bay_door_deploy": 8400
    }
  },
  {
    "flight_number": 10,
    "mission_name": "CRS-2",
    "mission_id": [
      "EE86F74"
    ],
    "launch_year": "2013",
    "launch_date_unix": 1362165000,
    "launch_date_utc": "2013-03-01T19:10:00.000Z",
    "launch_date_local": "2013-03-01T15:10:00-04:00",
    "is_tentative": false,
    "tentative_max_precision": "hour",
    "tbd": false,
    "launch_window": 0,
    "rocket": {
      "rocket_id": "falcon9",
      "rocket_name": "Falcon 9",
      "rocket_type": "v1.0",
      "first_stage": {
        "cores": [
          {
            "core_serial": "B0007",
            "flight": 1,
            "block": 1,
            "gridfins": false,
            "legs": false,
            "reused": false,
            "land_success": null,
            "landing_intent": false,
            "landing_type": null,
            "landing_vehicle": null
          }
        ]
      },
      "second_stage": {
        "block": 1,
        "payloads": [
          {
            "payload_id": "CRS-2",
            "norad_id": [
              39115
            ],
            "cap_serial": "C104",
            "reused": false,
            "customers": [
              "NASA (CRS)"
            ],
            "nationality": "United States",
            "manufacturer": "SpaceX",
            "payload_type": "Dragon 1.0",
            "payload_mass_kg": 677,
            "payload_mass_lbs": 1492,
            "orbit": "ISS",
            "orbit_params": {
              "reference_system": "geocentric",
              "regime": "low-earth",
              "longitude": null,
              "semi_major_axis_km": 6640.79,
              "eccentricity": 0.0089419,
              "periapsis_km": 203.274,
              "apoapsis_km": 322.036,
              "inclination_deg": 51.6797,
              "period_min": 89.761,
              "lifespan_years": null,
              "epoch": "2013-03-01T20:19:32.000Z",
              "mean_motion": 16.04255447,
              "raan": 281.5076,
              "arg_of_pericenter": 50.5296,
              "mean_anomaly": 127.2881
            },
            "mass_returned_kg": 1370,
            "mass_returned_lbs": 3020,
            "flight_time_sec": 2160000,
            "cargo_manifest": "https://en.wikipedia.org/wiki/SpaceX_CRS-2#Payload"
          }
        ]
      },
      "fairings": null
    },
    "ships": [
      "AMERICANISLANDER"
    ],
    "telemetry": {
      "flight_club": null
    },
    "launch_site": {
      "site_id": "ccafs_slc_40",
      "site_name": "CCAFS SLC 40",
      "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
    },
    "launch_success": true,
    "links": {
      "mission_patch": "https://images2.imgbox.com/ef/39/FyZRYeOh_o.png",
      "mission_patch_small": "https://images2.imgbox.com/1b/b6/Z4oktZeR_o.png",
      "reddit_campaign": null,
      "reddit_launch": "https://www.reddit.com/r/space/comments/19gm5f/live_coverage_spacex_crs2_launch_to_the_iss/c8nvah4",
      "reddit_recovery": null,
      "reddit_media": null,
      "presskit": "https://www.nasa.gov/sites/default/files/files/Orb2_PRESS_KIT.pdf",
      "article_link": "https://en.wikipedia.org/wiki/SpaceX_CRS-2",
      "wikipedia": "https://en.wikipedia.org/wiki/SpaceX_CRS-2",
      "video_link": "https://www.youtube.com/watch?v=ik0ElKl5kW4",
      "youtube_id": "ik0ElKl5kW4",
      "flickr_images": []
    },
    "details": "Last launch of the original Falcon 9 v1.0 launch vehicle",
    "upcoming": false,
    "static_fire_date_utc": "2013-02-25T18:30:00.000Z",
    "static_fire_date_unix": 1361817000,
    "timeline": {
      "webcast_liftoff": 2393,
      "go_for_prop_loading": -2280,
      "rp1_loading": -2100,
      "stage1_lox_loading": -2100,
      "stage2_lox_loading": -960,
      "engine_chill": -420,
      "prelaunch_checks": -60,
      "propellant_pressurization": -60,
      "go_for_launch": -45,
      "ignition": -3,
      "liftoff": 0,
      "maxq": 60,
      "meco": 180,
      "stage_sep": 180,
      "second_stage_ignition": 180,
      "seco-1": 540,
      "dragon_separation": 600,
      "dragon_solar_deploy": 720,
      "dragon_bay_door_deploy": 8400
    }
  },
  {
    "flight_number": 11,
    "mission_name": "CASSIOPE",
    "mission_id": [],
    "launch_year": "2013",
    "launch_date_unix": 1380470400,
    "launch_date_utc": "2013-09-29T16:00:00.000Z",
    "launch_date_local": "2013-09-29T09:00:00-07:00",
    "is_tentative": false,
    "tentative_max_precision": "hour",
    "tbd": false,
    "launch_window": 0,
    "rocket": {
      "rocket_id": "falcon9",
      "rocket_name": "Falcon 9",
      "rocket_type": "v1.1",
      "first_stage": {
        "cores": [
          {
            "core_serial": "B1003",
            "flight": 1,
            "block": 1,
            "gridfins": false,
            "legs": false,
            "reused": false,
            "land_success": false,
            "landing_intent": true,
            "landing_type": "Ocean",
            "landing_vehicle": null
          }
        ]
      },
      "second_stage": {
        "block": 1,
        "payloads": [
          {
            "payload_id": "CASSIOPE",
            "norad_id": [
              39265
            ],
            "reused": false,
            "customers": [
              "MDA"
            ],
            "nationality": "Canada",
            "manufacturer": "MDA",
            "payload_type": "Satellite",
            "payload_mass_kg": 500,
            "payload_mass_lbs": 1100,
            "orbit": "PO",
            "orbit_params": {
              "reference_system": "geocentric",
              "regime": "low-earth",
              "longitude": null,
              "semi_major_axis_km": 7180.434,
              "eccentricity": 0.0670527,
              "periapsis_km": 320.832,
              "apoapsis_km": 1283.767,
              "inclination_deg": 80.9698,
              "period_min": 100.921,
              "lifespan_years": 2,
              "epoch": "2019-02-05T04:25:09.000Z",
              "mean_motion": 14.26844543,
              "raan": 114.2528,
              "arg_of_pericenter": 316.6289,
              "mean_anomaly": 38.3927
            }
          }
        ]
      },
      "fairings": {
        "reused": false,
        "recovery_attempt": false,
        "recovered": false,
        "ship": null
      }
    },
    "ships": [
      "AMERICANSPIRIT"
    ],
    "telemetry": {
      "flight_club": null
    },
    "launch_site": {
      "site_id": "vafb_slc_4e",
      "site_name": "VAFB SLC 4E",
      "site_name_long": "Vandenberg Air Force Base Space Launch Complex 4E"
    },
    "launch_success": true,
    "links": {
      "mission_patch": "https://images2.imgbox.com/89/bc/JcbcvuBI_o.png",
      "mission_patch_small": "https://images2.imgbox.com/91/27/VhC1TTYN_o.png",
      "reddit_campaign": null,
      "reddit_launch": "http://www.reddit.com/r/spacex/comments/1ndlay",
      "reddit_recovery": null,
      "reddit_media": null,
      "presskit": "https://spaceflightnow.com/falcon9/006/UpgradedF9DemoMission_PressKit.pdf",
      "article_link": "http://www.parabolicarc.com/2013/09/29/falcon-9-launch-payloads-orbit-vandenberg/",
      "wikipedia": "https://en.wikipedia.org/wiki/CASSIOPE",
      "video_link": "https://www.youtube.com/watch?v=uFefasS6bhc",
      "youtube_id": "uFefasS6bhc",
      "flickr_images": []
    },
    "details": "Commercial mission and first Falcon 9 v1.1 flight, with improved 13-tonne to LEO capacity. Following second-stage separation from the first stage, an attempt was made to perform an ocean touchdown test of the discarded booster vehicle. The test provided good test data on the experiment-its primary objective-but as the booster neared the ocean, aerodynamic forces caused an uncontrollable roll. The center engine, depleted of fuel by centrifugal force, shut down resulting in the impact and destruction of the vehicle.",
    "upcoming": false,
    "static_fire_date_utc": "2013-09-19T00:00:00.000Z",
    "static_fire_date_unix": 1379548800,
    "timeline": {
      "webcast_liftoff": 55,
      "go_for_prop_loading": -2280,
      "rp1_loading": -2100,
      "stage1_lox_loading": -2100,
      "stage2_lox_loading": -960,
      "engine_chill": -420,
      "prelaunch_checks": -60,
      "propellant_pressurization": -60,
      "go_for_launch": -45,
      "ignition": -3,
      "liftoff": 0,
      "maxq": 78,
      "meco": 163,
      "stage_sep": 170,
      "second_stage_ignition": 177,
      "fairing_deploy": 217,
      "seco-1": 534,
      "payload_deploy": 855
    }
  },
  {
    "flight_number": 12,
    "mission_name": "SES-8",
    "mission_id": [
      "6C42550"
    ],
    "launch_year": "2013",
    "launch_date_unix": 1386110460,
    "launch_date_utc": "2013-12-03T22:41:00.000Z",
    "launch_date_local": "2013-12-03T18:41:00-04:00",
    "is_tentative": false,
    "tentative_max_precision": "hour",
    "tbd": false,
    "launch_window": 0,
    "rocket": {
      "rocket_id": "falcon9",
      "rocket_name": "Falcon 9",
      "rocket_type": "v1.1",
      "first_stage": {
        "cores": [
          {
            "core_serial": "B1004",
            "flight": 1,
            "block": 1,
            "gridfins": false,
            "legs": false,
            "reused": false,
            "land_success": null,
            "landing_intent": false,
            "landing_type": null,
            "landing_vehicle": null
          }
        ]
      },
      "second_stage": {
        "block": 1,
        "payloads": [
          {
            "payload_id": "SES-8",
            "norad_id": [
              39460
            ],
            "reused": false,
            "customers": [
              "SES"
            ],
            "nationality": "Luxembourg",
            "manufacturer": "Orbital ATK",
            "payload_type": "Satellite",
            "payload_mass_kg": 3170,
            "payload_mass_lbs": 6990,
            "orbit": "GTO",
            "orbit_params": {
              "reference_system": "geocentric",
              "regime": "geostationary",
              "longitude": 95,
              "semi_major_axis_km": 42165.791,
              "eccentricity": 0.0001132,
              "periapsis_km": 35782.883,
              "apoapsis_km": 35792.43,
              "inclination_deg": 0.0225,
              "period_min": 1436.151,
              "lifespan_years": 15,
              "epoch": "2019-02-04T08:43:05.000Z",
              "mean_motion": 1.00268004,
              "raan": 271.2787,
              "arg_of_pericenter": 90.1543,
              "mean_anomaly": 358.5673
            }
          }
        ]
      },
      "fairings": {
        "reused": false,
        "recovery_attempt": false,
        "recovered": false,
        "ship": null
      }
    },
    "ships": [],
    "telemetry": {
      "flight_club": null
    },
    "launch_site": {
      "site_id": "ccafs_slc_40",
      "site_name": "CCAFS SLC 40",
      "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
    },
    "launch_success": true,
    "links": {
      "mission_patch": "https://images2.imgbox.com/b5/1d/46Eo0yuu_o.png",
      "mission_patch_small": "https://images2.imgbox.com/42/b0/vP0sk3d5_o.png",
      "reddit_campaign": null,
      "reddit_launch": "http://www.reddit.com/r/spacex/comments/1ryy1n",
      "reddit_recovery": null,
      "reddit_media": null,
      "presskit": "http://www.spacex.com/sites/spacex/files/spacex_ses-8launch_presskit.pdf",
      "article_link": "https://www.nasaspaceflight.com/2013/12/spacex-falcon-9-v1-1-milestone-ses-8-launch/",
      "wikipedia": "https://en.wikipedia.org/wiki/SES-8",
      "video_link": "https://www.youtube.com/watch?v=aAj5xapImEs",
      "youtube_id": "aAj5xapImEs",
      "flickr_images": []
    },
    "details": "First GTO launch for Falcon 9",
    "upcoming": false,
    "static_fire_date_utc": "2013-11-22T06:26:00.000Z",
    "static_fire_date_unix": 1385101560,
    "timeline": {
      "webcast_liftoff": 953,
      "go_for_prop_loading": -2280,
      "rp1_loading": -2100,
      "stage1_lox_loading": -2100,
      "stage2_lox_loading": -960,
      "engine_chill": -420,
      "prelaunch_checks": -60,
      "propellant_pressurization": -60,
      "go_for_launch": -45,
      "ignition": -3,
      "liftoff": 0,
      "maxq": 60,
      "meco": 180,
      "stage_sep": 180,
      "second_stage_ignition": 1620,
      "fairing_deploy": 240,
      "seco-1": 480,
      "second_stage_restart": 1620,
      "seco-2": 1680,
      "payload_deploy": 1980
    }
  }
]