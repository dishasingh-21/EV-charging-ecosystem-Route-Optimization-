const stations = [
  {
    "town": "Ajmer",
    "subtown": "Ajmer",
    "lat": 26.45,
    "lon": 74.64,
    "isCharging": true
  },
  {
    "town": "Ajmer",
    "subtown": "Kishangarh",
    "lat": 26.59,
    "lon": 74.87,
    "isCharging": true
  },
  {
    "town": "Ajmer",
    "subtown": "Beawar",
    "lat": 26.1,
    "lon": 74.32,
    "isCharging": true
  },
  {
    "town": "Ajmer",
    "subtown": "Pushkar",
    "lat": 26.49,
    "lon": 74.55,
    "isCharging": true
  },
  {
    "town": "Ajmer",
    "subtown": "Nasirabad",
    "lat": 26.298,
    "lon": 74.735,
    "isCharging": true
  },
  {
    "town": "Ajmer",
    "subtown": "Kekri",
    "lat": 25.97,
    "lon": 75.15,
    "isCharging": true
  },
  {
    "town": "Ajmer",
    "subtown": "Bijaynagar",
    "lat": 25.9,
    "lon": 74.64,
    "isCharging": true
  },
  {
    "town": "Ajmer",
    "subtown": "Sarwar",
    "lat": 25.99,
    "lon": 75.01,
    "isCharging": true
  },
  {
    "town": "Ajmer",
    "subtown": "Dargah Bazaar",
    "lat": 26.456,
    "lon": 74.626,
    "isCharging": true
  },
  {
    "town": "Ajmer",
    "subtown": "Naya Bazaar",
    "lat": 26.454,
    "lon": 74.638,
    "isCharging": true
  },
  {
    "town": "Ajmer",
    "subtown": "Kaiser Ganj",
    "lat": 26.449,
    "lon": 74.641,
    "isCharging": true
  },
  {
    "town": "Ajmer",
    "subtown": "Madar Gate",
    "lat": 26.457,
    "lon": 74.639,
    "isCharging": true
  },
  {
    "town": "Ajmer",
    "subtown": "Diggi Bazaar",
    "lat": 26.455,
    "lon": 74.632,
    "isCharging": true
  },
  {
    "town": "Ajmer",
    "subtown": "Topdara",
    "lat": 26.47,
    "lon": 74.62,
    "isCharging": true
  },
  {
    "town": "Ajmer",
    "subtown": "Ramganj",
    "lat": 26.442,
    "lon": 74.637,
    "isCharging": true
  },
  {
    "town": "Ajmer",
    "subtown": "Civil Lines",
    "lat": 26.472,
    "lon": 74.649,
    "isCharging": true
  },
  {
    "town": "Ajmer",
    "subtown": "Vaishali Nagar",
    "lat": 26.485,
    "lon": 74.657,
    "isCharging": true
  },
  {
    "town": "Ajmer",
    "subtown": "Panchsheel Nagar",
    "lat": 26.468,
    "lon": 74.655,
    "isCharging": true
  },
  {
    "town": "Ajmer",
    "subtown": "Shastri Nagar",
    "lat": 26.472,
    "lon": 74.662,
    "isCharging": true
  },
  {
    "town": "Ajmer",
    "subtown": "Adarsh Nagar",
    "lat": 26.46,
    "lon": 74.65,
    "isCharging": true
  },
  {
    "town": "Ajmer",
    "subtown": "Haribhau Upadhyay Nagar",
    "lat": 26.48,
    "lon": 74.67,
    "isCharging": true
  },
  {
    "town": "Ajmer",
    "subtown": "Kotra",
    "lat": 26.445,
    "lon": 74.655,
    "isCharging": true
  },
  {
    "town": "Ajmer",
    "subtown": "Lohagal",
    "lat": 26.47,
    "lon": 74.7,
    "isCharging": true
  },
  {
    "town": "Ajmer",
    "subtown": "Hathi Khera",
    "lat": 26.49,
    "lon": 74.67,
    "isCharging": true
  },
  {
    "town": "Ajmer",
    "subtown": "Makhupura",
    "lat": 26.46,
    "lon": 74.61,
    "isCharging": true
  },
  {
    "town": "Ajmer",
    "subtown": "Parbatpura",
    "lat": 26.48,
    "lon": 74.61,
    "isCharging": true
  },
  {
    "town": "Ajmer",
    "subtown": "Gagwana",
    "lat": 26.527,
    "lon": 74.734,
    "isCharging": true
  },
  {
    "town": "Ajmer",
    "subtown": "Jaipur Road Area",
    "lat": 26.48,
    "lon": 74.7,
    "isCharging": true
  },
  {
    "town": "Ajmer",
    "subtown": "Beawar Road Area",
    "lat": 26.45,
    "lon": 74.6,
    "isCharging": true
  },
  {
    "town": "Ajmer",
    "subtown": "Pisangan",
    "lat": 26.28,
    "lon": 74.35,
    "isCharging": true
  },
  {
    "town": "Ajmer",
    "subtown": "Masuda",
    "lat": 26.1,
    "lon": 74.25,
    "isCharging": true
  },
  {
    "town": "Ajmer",
    "subtown": "Arain",
    "lat": 26.3,
    "lon": 75.0,
    "isCharging": true
  },
  {
    "town": "Ajmer",
    "subtown": "Srinagar (Ajmer)",
    "lat": 26.43,
    "lon": 74.67,
    "isCharging": true
  },
  {
    "town": "Ajmer",
    "subtown": "Jawaja",
    "lat": 25.97,
    "lon": 74.15,
    "isCharging": true
  },
  {
    "town": "Abu Road",
    "subtown": "Abu Road",
    "lat": 24.48,
    "lon": 72.78,
    "isCharging": true
  },
  {
    "town": "Abu Road",
    "subtown": "Mount Abu",
    "lat": 24.6,
    "lon": 72.72,
    "isCharging": true
  },
  {
    "town": "Abu Road",
    "subtown": "Pindwara",
    "lat": 24.79,
    "lon": 73.06,
    "isCharging": true
  },
  {
    "town": "Abu Road",
    "subtown": "Reodar",
    "lat": 24.83,
    "lon": 72.93,
    "isCharging": true
  },
  {
    "town": "Abu Road",
    "subtown": "Sirohi",
    "lat": 24.89,
    "lon": 72.86,
    "isCharging": true
  },
  {
    "town": "Abu Road",
    "subtown": "Sheoganj",
    "lat": 25.14,
    "lon": 73.07,
    "isCharging": true
  },
  {
    "town": "Abu Road",
    "subtown": "Railway Colony",
    "lat": 24.482,
    "lon": 72.781,
    "isCharging": true
  },
  {
    "town": "Abu Road",
    "subtown": "Transport Nagar",
    "lat": 24.475,
    "lon": 72.79,
    "isCharging": true
  },
  {
    "town": "Abu Road",
    "subtown": "Shanti Nagar",
    "lat": 24.49,
    "lon": 72.785,
    "isCharging": true
  },
  {
    "town": "Abu Road",
    "subtown": "Housing Board Colony",
    "lat": 24.488,
    "lon": 72.792,
    "isCharging": true
  },
  {
    "town": "Abu Road",
    "subtown": "Mount Abu (Hill Station)",
    "lat": 24.6,
    "lon": 72.72,
    "isCharging": true
  },
  {
    "town": "Abu Road",
    "subtown": "Guru Shikhar",
    "lat": 24.65,
    "lon": 72.78,
    "isCharging": true
  },
  {
    "town": "Abu Road",
    "subtown": "Achalgarh",
    "lat": 24.63,
    "lon": 72.73,
    "isCharging": true
  },
  {
    "town": "Abu Road",
    "subtown": "Nakki Lake Area",
    "lat": 24.59,
    "lon": 72.71,
    "isCharging": true
  },
  {
    "town": "Abu Road",
    "subtown": "Maval",
    "lat": 24.5,
    "lon": 72.82,
    "isCharging": true
  },
  {
    "town": "Abu Road",
    "subtown": "Amthala",
    "lat": 24.46,
    "lon": 72.76,
    "isCharging": true
  },
  {
    "town": "Abu Road",
    "subtown": "Danvav",
    "lat": 24.55,
    "lon": 72.85,
    "isCharging": true
  },
  {
    "town": "Abu Road",
    "subtown": "NH-27 Corridor (Abu Road stretch)",
    "lat": 24.48,
    "lon": 72.8,
    "isCharging": true
  },
  {
    "town": "Abu Road",
    "subtown": "Chandela",
    "lat": 24.52,
    "lon": 72.88,
    "isCharging": true
  },
  {
    "town": "Abu Road",
    "subtown": "Banas",
    "lat": 24.45,
    "lon": 72.75,
    "isCharging": true
  },
  {
    "town": "Abu Road",
    "subtown": "Santpur",
    "lat": 24.4,
    "lon": 72.82,
    "isCharging": true
  },
  {
    "town": "Abu Road",
    "subtown": "Padiv",
    "lat": 24.6,
    "lon": 72.9,
    "isCharging": true
  },
  {
    "town": "Jodhpur",
    "subtown": "Jodhpur",
    "lat": 26.24,
    "lon": 73.02,
    "isCharging": true
  },
  {
    "town": "Jodhpur",
    "subtown": "Bilara",
    "lat": 26.18,
    "lon": 73.7,
    "isCharging": true
  },
  {
    "town": "Jodhpur",
    "subtown": "Pipar City",
    "lat": 26.38,
    "lon": 73.55,
    "isCharging": true
  },
  {
    "town": "Jodhpur",
    "subtown": "Osian",
    "lat": 26.73,
    "lon": 72.93,
    "isCharging": true
  },
  {
    "town": "Jodhpur",
    "subtown": "Phalodi",
    "lat": 27.13,
    "lon": 72.37,
    "isCharging": true
  },
  {
    "town": "Jodhpur",
    "subtown": "Balesar",
    "lat": 26.08,
    "lon": 72.93,
    "isCharging": true
  },
  {
    "town": "Jodhpur",
    "subtown": "Shergarh",
    "lat": 26.32,
    "lon": 72.75,
    "isCharging": true
  },
  {
    "town": "Jodhpur",
    "subtown": "Luni",
    "lat": 26.05,
    "lon": 73.04,
    "isCharging": true
  },
  {
    "town": "Jodhpur",
    "subtown": "Clock Tower (Ghanta Ghar)",
    "lat": 26.296,
    "lon": 73.024,
    "isCharging": true
  },
  {
    "town": "Jodhpur",
    "subtown": "Sardarpura",
    "lat": 26.275,
    "lon": 73.01,
    "isCharging": true
  },
  {
    "town": "Jodhpur",
    "subtown": "Ratanada",
    "lat": 26.28,
    "lon": 73.03,
    "isCharging": true
  },
  {
    "town": "Jodhpur",
    "subtown": "Paota",
    "lat": 26.3,
    "lon": 73.04,
    "isCharging": true
  },
  {
    "town": "Jodhpur",
    "subtown": "Sojati Gate",
    "lat": 26.292,
    "lon": 73.02,
    "isCharging": true
  },
  {
    "town": "Jodhpur",
    "subtown": "Jalori Gate",
    "lat": 26.285,
    "lon": 73.015,
    "isCharging": true
  },
  {
    "town": "Jodhpur",
    "subtown": "Nai Sarak",
    "lat": 26.295,
    "lon": 73.023,
    "isCharging": true
  },
  {
    "town": "Jodhpur",
    "subtown": "Shastri Nagar",
    "lat": 26.27,
    "lon": 73.035,
    "isCharging": true
  },
  {
    "town": "Jodhpur",
    "subtown": "Basni",
    "lat": 26.23,
    "lon": 73.05,
    "isCharging": true
  },
  {
    "town": "Jodhpur",
    "subtown": "Kudi Bhagtasni Housing Board",
    "lat": 26.24,
    "lon": 73.02,
    "isCharging": true
  },
  {
    "town": "Jodhpur",
    "subtown": "Pal Road",
    "lat": 26.26,
    "lon": 72.98,
    "isCharging": true
  },
  {
    "town": "Jodhpur",
    "subtown": "Chopasni Housing Board",
    "lat": 26.25,
    "lon": 72.97,
    "isCharging": true
  },
  {
    "town": "Jodhpur",
    "subtown": "Mahamandir",
    "lat": 26.31,
    "lon": 73.03,
    "isCharging": true
  },
  {
    "town": "Jodhpur",
    "subtown": "Banar",
    "lat": 26.35,
    "lon": 73.05,
    "isCharging": true
  },
  {
    "town": "Jodhpur",
    "subtown": "Mandore",
    "lat": 26.35,
    "lon": 73.06,
    "isCharging": true
  },
  {
    "town": "Jodhpur",
    "subtown": "Kaylana",
    "lat": 26.29,
    "lon": 72.95,
    "isCharging": true
  },
  {
    "town": "Jodhpur",
    "subtown": "Boranada RIICO",
    "lat": 26.2,
    "lon": 72.95,
    "isCharging": true
  },
  {
    "town": "Jodhpur",
    "subtown": "Basni Industrial Area",
    "lat": 26.22,
    "lon": 73.05,
    "isCharging": true
  },
  {
    "town": "Jodhpur",
    "subtown": "Salawas",
    "lat": 26.2,
    "lon": 73.0,
    "isCharging": true
  },
  {
    "town": "Jodhpur",
    "subtown": "Dangiyawas",
    "lat": 26.42,
    "lon": 72.98,
    "isCharging": true
  },
  {
    "town": "Jodhpur",
    "subtown": "NH-62 Corridor",
    "lat": 26.25,
    "lon": 73.0,
    "isCharging": true
  },
  {
    "town": "Jodhpur",
    "subtown": "NH-125 Corridor",
    "lat": 26.3,
    "lon": 72.9,
    "isCharging": true
  },
  {
    "town": "Jodhpur",
    "subtown": "Tinwari",
    "lat": 26.65,
    "lon": 73.1,
    "isCharging": true
  },
  {
    "town": "Jodhpur",
    "subtown": "Mathania",
    "lat": 26.6,
    "lon": 73.0,
    "isCharging": true
  },
  {
    "town": "Jodhpur",
    "subtown": "Bhopalgarh",
    "lat": 26.75,
    "lon": 73.5,
    "isCharging": true
  },
  {
    "town": "Jodhpur",
    "subtown": "Lohawat",
    "lat": 27.0,
    "lon": 72.6,
    "isCharging": true
  },
  {
    "town": "Jodhpur",
    "subtown": "Dechu",
    "lat": 26.6,
    "lon": 72.3,
    "isCharging": true
  },
  {
    "town": "Jodhpur",
    "subtown": "Setrawa",
    "lat": 26.95,
    "lon": 72.5,
    "isCharging": true
  },
  {
    "town": "Udaipur",
    "subtown": "Udaipur",
    "lat": 24.58,
    "lon": 73.68,
    "isCharging": true
  },
  {
    "town": "Udaipur",
    "subtown": "Gogunda",
    "lat": 24.77,
    "lon": 73.43,
    "isCharging": true
  },
  {
    "town": "Udaipur",
    "subtown": "Mavli",
    "lat": 24.63,
    "lon": 74.03,
    "isCharging": true
  },
  {
    "town": "Udaipur",
    "subtown": "Vallabhnagar",
    "lat": 24.67,
    "lon": 74.0,
    "isCharging": true
  },
  {
    "town": "Udaipur",
    "subtown": "Salumbar",
    "lat": 24.13,
    "lon": 74.05,
    "isCharging": true
  },
  {
    "town": "Udaipur",
    "subtown": "Bhinder",
    "lat": 24.5,
    "lon": 74.18,
    "isCharging": true
  },
  {
    "town": "Udaipur",
    "subtown": "Kherwara",
    "lat": 24.1,
    "lon": 73.58,
    "isCharging": true
  },
  {
    "town": "Udaipur",
    "subtown": "Rishabhdeo",
    "lat": 24.08,
    "lon": 73.69,
    "isCharging": true
  },
  {
    "town": "Udaipur",
    "subtown": "City Palace Area",
    "lat": 24.576,
    "lon": 73.683,
    "isCharging": true
  },
  {
    "town": "Udaipur",
    "subtown": "Surajpole",
    "lat": 24.579,
    "lon": 73.69,
    "isCharging": true
  },
  {
    "town": "Udaipur",
    "subtown": "Delhi Gate",
    "lat": 24.577,
    "lon": 73.69,
    "isCharging": true
  },
  {
    "town": "Udaipur",
    "subtown": "Hathi Pol",
    "lat": 24.58,
    "lon": 73.683,
    "isCharging": true
  },
  {
    "town": "Udaipur",
    "subtown": "Bapu Bazaar",
    "lat": 24.579,
    "lon": 73.688,
    "isCharging": true
  },
  {
    "town": "Udaipur",
    "subtown": "Chetak Circle",
    "lat": 24.585,
    "lon": 73.682,
    "isCharging": true
  },
  {
    "town": "Udaipur",
    "subtown": "Fatehpura",
    "lat": 24.6,
    "lon": 73.68,
    "isCharging": true
  },
  {
    "town": "Udaipur",
    "subtown": "Ashok Nagar",
    "lat": 24.595,
    "lon": 73.69,
    "isCharging": true
  },
  {
    "town": "Udaipur",
    "subtown": "Hiran Magri",
    "lat": 24.56,
    "lon": 73.72,
    "isCharging": true
  },
  {
    "town": "Udaipur",
    "subtown": "Sector 3 (Hiran Magri)",
    "lat": 24.565,
    "lon": 73.715,
    "isCharging": true
  },
  {
    "town": "Udaipur",
    "subtown": "Sector 14 (Hiran Magri)",
    "lat": 24.55,
    "lon": 73.73,
    "isCharging": true
  },
  {
    "town": "Udaipur",
    "subtown": "Pratap Nagar",
    "lat": 24.61,
    "lon": 73.74,
    "isCharging": true
  },
  {
    "town": "Udaipur",
    "subtown": "Goverdhan Vilas",
    "lat": 24.58,
    "lon": 73.71,
    "isCharging": true
  },
  {
    "town": "Udaipur",
    "subtown": "Shobhagpura",
    "lat": 24.6,
    "lon": 73.7,
    "isCharging": true
  },
  {
    "town": "Udaipur",
    "subtown": "Bhuwana",
    "lat": 24.61,
    "lon": 73.65,
    "isCharging": true
  },
  {
    "town": "Udaipur",
    "subtown": "Sukher",
    "lat": 24.62,
    "lon": 73.72,
    "isCharging": true
  },
  {
    "town": "Udaipur",
    "subtown": "Madri Industrial Area",
    "lat": 24.56,
    "lon": 73.7,
    "isCharging": true
  },
  {
    "town": "Udaipur",
    "subtown": "Sukher Industrial Area",
    "lat": 24.62,
    "lon": 73.72,
    "isCharging": true
  },
  {
    "town": "Udaipur",
    "subtown": "Debari",
    "lat": 24.6,
    "lon": 73.8,
    "isCharging": true
  },
  {
    "town": "Udaipur",
    "subtown": "NH-27 Corridor",
    "lat": 24.58,
    "lon": 73.72,
    "isCharging": true
  },
  {
    "town": "Udaipur",
    "subtown": "NH-48 Corridor",
    "lat": 24.6,
    "lon": 73.68,
    "isCharging": true
  },
  {
    "town": "Udaipur",
    "subtown": "Lake Pichola",
    "lat": 24.575,
    "lon": 73.68,
    "isCharging": true
  },
  {
    "town": "Udaipur",
    "subtown": "Fateh Sagar Lake",
    "lat": 24.6,
    "lon": 73.68,
    "isCharging": true
  },
  {
    "town": "Udaipur",
    "subtown": "Sajjangarh (Monsoon Palace)",
    "lat": 24.58,
    "lon": 73.63,
    "isCharging": true
  },
  {
    "town": "Udaipur",
    "subtown": "Eklingji",
    "lat": 24.74,
    "lon": 73.73,
    "isCharging": true
  },
  {
    "town": "Udaipur",
    "subtown": "Nathdwara",
    "lat": 24.94,
    "lon": 73.82,
    "isCharging": true
  },
  {
    "town": "Barmer",
    "subtown": "Barmer",
    "lat": 25.75,
    "lon": 71.42,
    "isCharging": true
  },
  {
    "town": "Barmer",
    "subtown": "Balotra",
    "lat": 25.83,
    "lon": 72.24,
    "isCharging": true
  },
  {
    "town": "Barmer",
    "subtown": "Siwana",
    "lat": 25.65,
    "lon": 72.42,
    "isCharging": true
  },
  {
    "town": "Barmer",
    "subtown": "Baytu",
    "lat": 25.85,
    "lon": 71.65,
    "isCharging": true
  },
  {
    "town": "Barmer",
    "subtown": "Chohtan",
    "lat": 25.47,
    "lon": 71.32,
    "isCharging": true
  },
  {
    "town": "Barmer",
    "subtown": "Gudamalani",
    "lat": 25.28,
    "lon": 71.75,
    "isCharging": true
  },
  {
    "town": "Barmer",
    "subtown": "Sheo",
    "lat": 25.12,
    "lon": 71.38,
    "isCharging": true
  },
  {
    "town": "Barmer",
    "subtown": "Ramsar",
    "lat": 25.6,
    "lon": 71.1,
    "isCharging": true
  },
  {
    "town": "Barmer",
    "subtown": "Gandhi Nagar",
    "lat": 25.76,
    "lon": 71.42,
    "isCharging": true
  },
  {
    "town": "Barmer",
    "subtown": "Mahaveer Nagar",
    "lat": 25.755,
    "lon": 71.43,
    "isCharging": true
  },
  {
    "town": "Barmer",
    "subtown": "Nehru Nagar",
    "lat": 25.75,
    "lon": 71.415,
    "isCharging": true
  },
  {
    "town": "Barmer",
    "subtown": "Station Road Area",
    "lat": 25.755,
    "lon": 71.425,
    "isCharging": true
  },
  {
    "town": "Barmer",
    "subtown": "Sadar Bazaar",
    "lat": 25.752,
    "lon": 71.418,
    "isCharging": true
  },
  {
    "town": "Barmer",
    "subtown": "Housing Board Colony",
    "lat": 25.765,
    "lon": 71.435,
    "isCharging": true
  },
  {
    "town": "Barmer",
    "subtown": "Balotra Industrial Area",
    "lat": 25.83,
    "lon": 72.24,
    "isCharging": true
  },
  {
    "town": "Barmer",
    "subtown": "Pachpadra (Refinery Area)",
    "lat": 25.92,
    "lon": 72.3,
    "isCharging": true
  },
  {
    "town": "Barmer",
    "subtown": "Uttarlai (Air Force Area)",
    "lat": 25.82,
    "lon": 71.5,
    "isCharging": true
  },
  {
    "town": "Barmer",
    "subtown": "Gida",
    "lat": 25.9,
    "lon": 71.8,
    "isCharging": true
  },
  {
    "town": "Barmer",
    "subtown": "Dhorimana",
    "lat": 25.2,
    "lon": 71.4,
    "isCharging": true
  },
  {
    "town": "Barmer",
    "subtown": "Gadra Road",
    "lat": 25.02,
    "lon": 71.2,
    "isCharging": true
  },
  {
    "town": "Barmer",
    "subtown": "Munabao (Indo-Pak Border)",
    "lat": 25.2,
    "lon": 71.05,
    "isCharging": true
  },
  {
    "town": "Barmer",
    "subtown": "Sedwa",
    "lat": 25.15,
    "lon": 71.2,
    "isCharging": true
  },
  {
    "town": "Barmer",
    "subtown": "Kalyanpur",
    "lat": 25.5,
    "lon": 72.1,
    "isCharging": true
  },
  {
    "town": "Barmer",
    "subtown": "Sindhari",
    "lat": 25.65,
    "lon": 72.05,
    "isCharging": true
  },
  {
    "town": "Barmer",
    "subtown": "Samdari",
    "lat": 25.82,
    "lon": 72.58,
    "isCharging": true
  },
  {
    "town": "Barmer",
    "subtown": "Patodi",
    "lat": 25.9,
    "lon": 71.9,
    "isCharging": true
  },
  {
    "town": "Barmer",
    "subtown": "Asotra",
    "lat": 25.9,
    "lon": 72.2,
    "isCharging": true
  },
  {
    "town": "Barmer",
    "subtown": "Jasol",
    "lat": 25.83,
    "lon": 72.2,
    "isCharging": true
  },
  {
    "town": "Chittorgarh",
    "subtown": "Chittorgarh",
    "lat": 24.88,
    "lon": 74.63,
    "isCharging": true
  },
  {
    "town": "Chittorgarh",
    "subtown": "Nimbahera",
    "lat": 24.62,
    "lon": 74.68,
    "isCharging": true
  },
  {
    "town": "Chittorgarh",
    "subtown": "Kapasan",
    "lat": 24.89,
    "lon": 74.5,
    "isCharging": true
  },
  {
    "town": "Chittorgarh",
    "subtown": "Begun",
    "lat": 24.98,
    "lon": 75.0,
    "isCharging": true
  },
  {
    "town": "Chittorgarh",
    "subtown": "Rawatbhata",
    "lat": 24.93,
    "lon": 75.58,
    "isCharging": true
  },
  {
    "town": "Chittorgarh",
    "subtown": "Badi Sadri",
    "lat": 24.38,
    "lon": 74.48,
    "isCharging": true
  },
  {
    "town": "Chittorgarh",
    "subtown": "Gangrar",
    "lat": 25.0,
    "lon": 74.65,
    "isCharging": true
  },
  {
    "town": "Chittorgarh",
    "subtown": "Rashmi",
    "lat": 25.02,
    "lon": 74.47,
    "isCharging": true
  },
  {
    "town": "Chittorgarh",
    "subtown": "Bhupalsagar",
    "lat": 24.73,
    "lon": 74.32,
    "isCharging": true
  },
  {
    "town": "Chittorgarh",
    "subtown": "Chittorgarh Fort Area",
    "lat": 24.887,
    "lon": 74.645,
    "isCharging": true
  },
  {
    "town": "Chittorgarh",
    "subtown": "Gandhi Nagar",
    "lat": 24.89,
    "lon": 74.63,
    "isCharging": true
  },
  {
    "town": "Chittorgarh",
    "subtown": "Shastri Nagar",
    "lat": 24.885,
    "lon": 74.635,
    "isCharging": true
  },
  {
    "town": "Chittorgarh",
    "subtown": "Sadar Bazaar",
    "lat": 24.882,
    "lon": 74.632,
    "isCharging": true
  },
  {
    "town": "Chittorgarh",
    "subtown": "Collectorate Area",
    "lat": 24.88,
    "lon": 74.64,
    "isCharging": true
  },
  {
    "town": "Chittorgarh",
    "subtown": "Pratap Nagar",
    "lat": 24.895,
    "lon": 74.65,
    "isCharging": true
  },
  {
    "town": "Chittorgarh",
    "subtown": "Senthi",
    "lat": 24.9,
    "lon": 74.66,
    "isCharging": true
  },
  {
    "town": "Chittorgarh",
    "subtown": "Chanderiya",
    "lat": 24.92,
    "lon": 74.68,
    "isCharging": true
  },
  {
    "town": "Chittorgarh",
    "subtown": "Bassi",
    "lat": 24.91,
    "lon": 74.72,
    "isCharging": true
  },
  {
    "town": "Chittorgarh",
    "subtown": "Ghosunda",
    "lat": 24.95,
    "lon": 74.55,
    "isCharging": true
  },
  {
    "town": "Chittorgarh",
    "subtown": "Pandoli",
    "lat": 24.92,
    "lon": 74.6,
    "isCharging": true
  },
  {
    "town": "Chittorgarh",
    "subtown": "Nagari",
    "lat": 24.95,
    "lon": 74.7,
    "isCharging": true
  },
  {
    "town": "Chittorgarh",
    "subtown": "Chanderiya Cement Area",
    "lat": 24.92,
    "lon": 74.68,
    "isCharging": true
  },
  {
    "town": "Chittorgarh",
    "subtown": "Nimbahera Industrial Area",
    "lat": 24.62,
    "lon": 74.68,
    "isCharging": true
  },
  {
    "town": "Chittorgarh",
    "subtown": "Rawatbhata (Nuclear Plant Area)",
    "lat": 24.93,
    "lon": 75.58,
    "isCharging": true
  },
  {
    "town": "Chittorgarh",
    "subtown": "Kapasan Industrial Belt",
    "lat": 24.89,
    "lon": 74.5,
    "isCharging": true
  },
  {
    "town": "Chittorgarh",
    "subtown": "NH-27 Corridor",
    "lat": 24.88,
    "lon": 74.65,
    "isCharging": true
  },
  {
    "town": "Chittorgarh",
    "subtown": "NH-48 Corridor",
    "lat": 24.9,
    "lon": 74.6,
    "isCharging": true
  },
  {
    "town": "Chittorgarh",
    "subtown": "Chittorgarh Bypass Area",
    "lat": 24.89,
    "lon": 74.66,
    "isCharging": true
  },
  {
    "town": "Chittorgarh",
    "subtown": "Akola",
    "lat": 24.78,
    "lon": 74.2,
    "isCharging": true
  },
  {
    "town": "Chittorgarh",
    "subtown": "Dungla",
    "lat": 24.6,
    "lon": 74.9,
    "isCharging": true
  },
  {
    "town": "Chittorgarh",
    "subtown": "Bari Sadri Rural",
    "lat": 24.4,
    "lon": 74.5,
    "isCharging": true
  },
  {
    "town": "Chittorgarh",
    "subtown": "Gangrar Rural",
    "lat": 25.0,
    "lon": 74.7,
    "isCharging": true
  },
  {
    "town": "Chittorgarh",
    "subtown": "Kapasan Rural",
    "lat": 24.9,
    "lon": 74.45,
    "isCharging": true
  },
  {
    "town": "Kota",
    "subtown": "Kota",
    "lat": 25.18,
    "lon": 75.83,
    "isCharging": true
  },
  {
    "town": "Kota",
    "subtown": "Ramganj Mandi",
    "lat": 24.65,
    "lon": 75.94,
    "isCharging": true
  },
  {
    "town": "Kota",
    "subtown": "Sangod",
    "lat": 25.0,
    "lon": 75.85,
    "isCharging": true
  },
  {
    "town": "Kota",
    "subtown": "Itawa",
    "lat": 25.1,
    "lon": 76.0,
    "isCharging": true
  },
  {
    "town": "Kota",
    "subtown": "Kaithoon",
    "lat": 25.15,
    "lon": 75.9,
    "isCharging": true
  },
  {
    "town": "Kota",
    "subtown": "Sultanpur",
    "lat": 25.0,
    "lon": 75.8,
    "isCharging": true
  },
  {
    "town": "Kota",
    "subtown": "Digod",
    "lat": 25.1,
    "lon": 75.75,
    "isCharging": true
  },
  {
    "town": "Kota",
    "subtown": "Ladpura",
    "lat": 25.2,
    "lon": 75.8,
    "isCharging": true
  },
  {
    "town": "Kota",
    "subtown": "Kota Junction Area",
    "lat": 25.213,
    "lon": 75.864,
    "isCharging": true
  },
  {
    "town": "Kota",
    "subtown": "Nayapura",
    "lat": 25.185,
    "lon": 75.85,
    "isCharging": true
  },
  {
    "town": "Kota",
    "subtown": "Gumanpura",
    "lat": 25.18,
    "lon": 75.84,
    "isCharging": true
  },
  {
    "town": "Kota",
    "subtown": "Rampura",
    "lat": 25.19,
    "lon": 75.845,
    "isCharging": true
  },
  {
    "town": "Kota",
    "subtown": "Chhawani",
    "lat": 25.2,
    "lon": 75.86,
    "isCharging": true
  },
  {
    "town": "Kota",
    "subtown": "Kishorepura",
    "lat": 25.17,
    "lon": 75.83,
    "isCharging": true
  },
  {
    "town": "Kota",
    "subtown": "Bajrang Nagar",
    "lat": 25.175,
    "lon": 75.855,
    "isCharging": true
  },
  {
    "town": "Kota",
    "subtown": "Kota Industrial Area",
    "lat": 25.2,
    "lon": 75.82,
    "isCharging": true
  },
  {
    "town": "Kota",
    "subtown": "RIICO Industrial Area",
    "lat": 25.21,
    "lon": 75.83,
    "isCharging": true
  },
  {
    "town": "Kota",
    "subtown": "Chambal Industrial Area",
    "lat": 25.19,
    "lon": 75.81,
    "isCharging": true
  },
  {
    "town": "Kota",
    "subtown": "Ramganj Mandi Industrial Area",
    "lat": 24.65,
    "lon": 75.94,
    "isCharging": true
  },
  {
    "town": "Kota",
    "subtown": "NH-52 Corridor",
    "lat": 25.18,
    "lon": 75.83,
    "isCharging": true
  },
  {
    "town": "Kota",
    "subtown": "NH-27 Corridor",
    "lat": 25.2,
    "lon": 75.85,
    "isCharging": true
  },
  {
    "town": "Kota",
    "subtown": "Kota Bypass Area",
    "lat": 25.21,
    "lon": 75.87,
    "isCharging": true
  },
  {
    "town": "Kota",
    "subtown": "Chambal Bridge Area",
    "lat": 25.19,
    "lon": 75.86,
    "isCharging": true
  },
  {
    "town": "Kota",
    "subtown": "Chechat",
    "lat": 24.77,
    "lon": 75.88,
    "isCharging": true
  },
  {
    "town": "Kota",
    "subtown": "Mandana",
    "lat": 25.25,
    "lon": 75.9,
    "isCharging": true
  },
  {
    "town": "Kota",
    "subtown": "Modak",
    "lat": 24.95,
    "lon": 75.95,
    "isCharging": true
  },
  {
    "town": "Kota",
    "subtown": "Suket",
    "lat": 24.8,
    "lon": 75.95,
    "isCharging": true
  },
  {
    "town": "Kota",
    "subtown": "Sangod Rural",
    "lat": 25.0,
    "lon": 75.9,
    "isCharging": true
  },
  {
    "town": "Alwar",
    "subtown": "Alwar",
    "lat": 27.55,
    "lon": 76.63,
    "isCharging": true
  },
  {
    "town": "Alwar",
    "subtown": "Bhiwadi",
    "lat": 28.21,
    "lon": 76.86,
    "isCharging": true
  },
  {
    "town": "Alwar",
    "subtown": "Neemrana",
    "lat": 27.99,
    "lon": 76.39,
    "isCharging": true
  },
  {
    "town": "Alwar",
    "subtown": "Tijara",
    "lat": 28.1,
    "lon": 76.85,
    "isCharging": true
  },
  {
    "town": "Alwar",
    "subtown": "Behror",
    "lat": 27.89,
    "lon": 76.28,
    "isCharging": true
  },
  {
    "town": "Alwar",
    "subtown": "Rajgarh",
    "lat": 27.23,
    "lon": 76.61,
    "isCharging": true
  },
  {
    "town": "Alwar",
    "subtown": "Khairthal",
    "lat": 27.8,
    "lon": 76.64,
    "isCharging": true
  },
  {
    "town": "Alwar",
    "subtown": "Kotkasim",
    "lat": 28.1,
    "lon": 76.72,
    "isCharging": true
  },
  {
    "town": "Alwar",
    "subtown": "Alwar City Center",
    "lat": 27.553,
    "lon": 76.635,
    "isCharging": true
  },
  {
    "town": "Alwar",
    "subtown": "Hope Circus",
    "lat": 27.56,
    "lon": 76.62,
    "isCharging": true
  },
  {
    "town": "Alwar",
    "subtown": "Company Bagh Area",
    "lat": 27.565,
    "lon": 76.63,
    "isCharging": true
  },
  {
    "town": "Alwar",
    "subtown": "Lajpat Nagar",
    "lat": 27.57,
    "lon": 76.64,
    "isCharging": true
  },
  {
    "town": "Alwar",
    "subtown": "Scheme No. 1",
    "lat": 27.55,
    "lon": 76.65,
    "isCharging": true
  },
  {
    "town": "Alwar",
    "subtown": "Kala Kuan",
    "lat": 27.54,
    "lon": 76.64,
    "isCharging": true
  },
  {
    "town": "Alwar",
    "subtown": "Shivaji Park",
    "lat": 27.56,
    "lon": 76.65,
    "isCharging": true
  },
  {
    "town": "Alwar",
    "subtown": "Surya Nagar",
    "lat": 27.55,
    "lon": 76.66,
    "isCharging": true
  },
  {
    "town": "Alwar",
    "subtown": "Ashok Vihar",
    "lat": 27.54,
    "lon": 76.63,
    "isCharging": true
  },
  {
    "town": "Alwar",
    "subtown": "Moti Doongri Area",
    "lat": 27.56,
    "lon": 76.66,
    "isCharging": true
  },
  {
    "town": "Alwar",
    "subtown": "Manu Marg Area",
    "lat": 27.57,
    "lon": 76.63,
    "isCharging": true
  },
  {
    "town": "Alwar",
    "subtown": "Transport Nagar",
    "lat": 27.53,
    "lon": 76.65,
    "isCharging": true
  },
  {
    "town": "Alwar",
    "subtown": "Bhiwadi Industrial Area",
    "lat": 28.21,
    "lon": 76.86,
    "isCharging": true
  },
  {
    "town": "Alwar",
    "subtown": "Neemrana Industrial Zone (Japanese Zone)",
    "lat": 27.99,
    "lon": 76.39,
    "isCharging": true
  },
  {
    "town": "Alwar",
    "subtown": "Khushkhera Industrial Area",
    "lat": 28.22,
    "lon": 76.84,
    "isCharging": true
  },
  {
    "town": "Alwar",
    "subtown": "Tapukara Industrial Area",
    "lat": 28.2,
    "lon": 76.9,
    "isCharging": true
  },
  {
    "town": "Alwar",
    "subtown": "RIICO Industrial Area (Alwar)",
    "lat": 27.54,
    "lon": 76.65,
    "isCharging": true
  },
  {
    "town": "Alwar",
    "subtown": "Sariska Tiger Reserve",
    "lat": 27.33,
    "lon": 76.43,
    "isCharging": true
  },
  {
    "town": "Alwar",
    "subtown": "Siliserh Lake",
    "lat": 27.6,
    "lon": 76.65,
    "isCharging": true
  },
  {
    "town": "Alwar",
    "subtown": "Bala Quila (Alwar Fort)",
    "lat": 27.58,
    "lon": 76.61,
    "isCharging": true
  },
  {
    "town": "Alwar",
    "subtown": "Kishangarh Bas",
    "lat": 27.82,
    "lon": 76.73,
    "isCharging": true
  },
  {
    "town": "Alwar",
    "subtown": "Mundawar",
    "lat": 27.85,
    "lon": 76.5,
    "isCharging": true
  },
  {
    "town": "Alwar",
    "subtown": "Ramgarh",
    "lat": 27.25,
    "lon": 76.7,
    "isCharging": true
  },
  {
    "town": "Alwar",
    "subtown": "Laxmangarh",
    "lat": 27.82,
    "lon": 76.83,
    "isCharging": true
  },
  {
    "town": "Alwar",
    "subtown": "Govindgarh",
    "lat": 27.5,
    "lon": 76.7,
    "isCharging": true
  }
]