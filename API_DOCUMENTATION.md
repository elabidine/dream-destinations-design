# Tahwisa API Documentation

This document outlines the API endpoints required by the frontend application. All endpoints should be implemented using Django REST Framework.

## Base URL
```
https://api.tahwisa.dz/api/v1/
```

## Authentication

### Token Authentication
- Use Django REST Framework Token Authentication or JWT
- Include token in request headers: `Authorization: Token <token>` or `Authorization: Bearer <jwt_token>`

---

## 1. Authentication Endpoints

### 1.1 User Registration
**POST** `/auth/register/`

**Request Body:**
```json
{
  "full_name": "John Doe",
  "email": "john.doe@example.com",
  "password": "securepassword123",
  "confirm_password": "securepassword123"
}
```

**Response (201 Created):**
```json
{
  "id": 1,
  "email": "john.doe@example.com",
  "full_name": "John Doe",
  "token": "abc123def456...",
  "message": "Account created successfully"
}
```

**Error Response (400 Bad Request):**
```json
{
  "error": "Validation failed",
  "details": {
    "email": ["This field is required."],
    "password": ["Password must be at least 8 characters."]
  }
}
```

---

### 1.2 User Login
**POST** `/auth/login/`

**Request Body:**
```json
{
  "email": "john.doe@example.com",
  "password": "securepassword123"
}
```

**Response (200 OK):**
```json
{
  "id": 1,
  "email": "john.doe@example.com",
  "full_name": "John Doe",
  "token": "abc123def456...",
  "message": "Login successful"
}
```

**Error Response (401 Unauthorized):**
```json
{
  "error": "Invalid credentials"
}
```

---

### 1.3 User Logout
**POST** `/auth/logout/`

**Headers:**
```
Authorization: Token <token>
```

**Response (200 OK):**
```json
{
  "message": "Logged out successfully"
}
```

---

### 1.4 Get Current User
**GET** `/auth/me/`

**Headers:**
```
Authorization: Token <token>
```

**Response (200 OK):**
```json
{
  "id": 1,
  "email": "john.doe@example.com",
  "full_name": "John Doe",
  "avatar": "https://api.tahwisa.dz/media/avatars/user1.jpg",
  "date_joined": "2024-01-15T10:30:00Z"
}
```

---

### 1.5 Password Reset Request
**POST** `/auth/password-reset/`

**Request Body:**
```json
{
  "email": "john.doe@example.com"
}
```

**Response (200 OK):**
```json
{
  "message": "Password reset email sent"
}
```

---

## 2. Activities Endpoints

### 2.1 List Activities (Things to Do)
**GET** `/activities/`

**Query Parameters:**
- `category` (optional): Filter by category (Adventure, Beach, Culture, History, Food, Photography)
- `difficulty` (optional): Filter by difficulty (Easy, Moderate, Challenging)
- `duration` (optional): Filter by duration (Half Day, Full Day, Multi-Day)
- `location` (optional): Filter by location
- `search` (optional): Search in title and description
- `page` (optional): Page number for pagination
- `page_size` (optional): Items per page (default: 12)

**Response (200 OK):**
```json
{
  "count": 50,
  "next": "https://api.tahwisa.dz/api/v1/activities/?page=2",
  "previous": null,
  "results": [
    {
      "id": 1,
      "title": "Sahara Desert Adventure",
      "description": "Experience the magic of the Sahara...",
      "full_description": "Embark on an unforgettable journey...",
      "category": "Adventure",
      "duration": "3 Days",
      "difficulty": "Moderate",
      "rating": 4.9,
      "reviews_count": 127,
      "price": "299.00",
      "currency": "USD",
      "image": "https://api.tahwisa.dz/media/activities/sahara.jpg",
      "location": "Tamanrasset",
      "highlights": [
        "Camel Trekking",
        "Sandboarding",
        "Stargazing",
        "Desert Camping"
      ],
      "what_included": [
        "Professional desert guide",
        "Camel trekking experience",
        "All camping equipment"
      ],
      "what_to_bring": [
        "Comfortable walking shoes",
        "Sun protection",
        "Warm clothing for evenings"
      ],
      "gallery": [
        "https://api.tahwisa.dz/media/activities/sahara1.jpg",
        "https://api.tahwisa.dz/media/activities/sahara2.jpg",
        "https://api.tahwisa.dz/media/activities/sahara3.jpg"
      ],
      "created_at": "2024-01-10T08:00:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ]
}
```

---

### 2.2 Get Activity Detail
**GET** `/activities/{id}/`

**Response (200 OK):**
```json
{
  "id": 1,
  "title": "Sahara Desert Adventure",
  "description": "Experience the magic of the Sahara...",
  "full_description": "Embark on an unforgettable journey into the heart of the Sahara Desert...",
  "category": "Adventure",
  "duration": "3 Days",
  "difficulty": "Moderate",
  "rating": 4.9,
  "reviews_count": 127,
  "price": "299.00",
  "currency": "USD",
  "image": "https://api.tahwisa.dz/media/activities/sahara.jpg",
  "location": "Tamanrasset",
  "coordinates": {
    "latitude": 22.7850,
    "longitude": 5.5228
  },
  "highlights": [
    "Camel Trekking",
    "Sandboarding",
    "Stargazing",
    "Desert Camping"
  ],
  "what_included": [
    "Professional desert guide",
    "Camel trekking experience",
    "All camping equipment",
    "Traditional meals",
    "Transportation",
    "Sandboarding equipment",
    "Stargazing session with telescope"
  ],
  "what_to_bring": [
    "Comfortable walking shoes",
    "Sun protection (hat, sunscreen, sunglasses)",
    "Warm clothing for evenings",
    "Camera for photos",
    "Personal toiletries",
    "Water bottle"
  ],
  "itinerary": [
    {
      "day": "Day 1",
      "activities": [
        "Early morning departure from Tamanrasset",
        "Arrive at desert camp and meet your guides",
        "Camel trekking through sand dunes",
        "Traditional lunch at oasis",
        "Evening sandboarding session",
        "Sunset dinner and stargazing"
      ]
    },
    {
      "day": "Day 2",
      "activities": [
        "Sunrise breakfast",
        "Full day desert exploration",
        "Visit to traditional Berber village",
        "Lunch in the desert",
        "Afternoon camel trekking",
        "Evening campfire and traditional music"
      ]
    }
  ],
  "gallery": [
    "https://api.tahwisa.dz/media/activities/sahara1.jpg",
    "https://api.tahwisa.dz/media/activities/sahara2.jpg",
    "https://api.tahwisa.dz/media/activities/sahara3.jpg"
  ],
  "related_activities": [2, 5, 7],
  "created_at": "2024-01-10T08:00:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```

---

### 2.3 Get Activity Categories
**GET** `/activities/categories/`

**Response (200 OK):**
```json
{
  "categories": [
    {
      "id": 1,
      "name": "Adventure",
      "slug": "adventure",
      "icon": "mountain",
      "count": 15
    },
    {
      "id": 2,
      "name": "Beach",
      "slug": "beach",
      "icon": "waves",
      "count": 8
    }
  ]
}
```

---

## 3. Destinations Endpoints

### 3.1 List Destinations
**GET** `/destinations/`

**Query Parameters:**
- `category` (optional): Filter by category
- `search` (optional): Search in name and description
- `page` (optional): Page number
- `page_size` (optional): Items per page

**Response (200 OK):**
```json
{
  "count": 25,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 1,
      "name": "Cap Ivi",
      "description": "Beautiful coastal destination...",
      "category": "Coastal",
      "image": "https://api.tahwisa.dz/media/destinations/cap-ivi.jpg",
      "location": "Bejaia",
      "coordinates": {
        "latitude": 36.7539,
        "longitude": 5.0567
      },
      "rating": 4.8,
      "reviews_count": 89
    }
  ]
}
```

---

### 3.2 Get Destination Detail
**GET** `/destinations/{id}/`

**Response (200 OK):**
```json
{
  "id": 1,
  "name": "Cap Ivi",
  "description": "Beautiful coastal destination with pristine beaches...",
  "category": "Coastal",
  "image": "https://api.tahwisa.dz/media/destinations/cap-ivi.jpg",
  "gallery": [
    "https://api.tahwisa.dz/media/destinations/cap-ivi1.jpg",
    "https://api.tahwisa.dz/media/destinations/cap-ivi2.jpg"
  ],
  "location": "Bejaia",
  "coordinates": {
    "latitude": 36.7539,
    "longitude": 5.0567
  },
  "rating": 4.8,
  "reviews_count": 89,
  "activities": [2, 7],
  "hotels": [1, 3, 5],
  "created_at": "2024-01-10T08:00:00Z"
}
```

---

## 4. Hotels Endpoints

### 4.1 List Hotels (Places to Stay)
**GET** `/hotels/`

**Query Parameters:**
- `location` (optional): Filter by location
- `min_price` (optional): Minimum price per night
- `max_price` (optional): Maximum price per night
- `rating` (optional): Minimum rating
- `amenities` (optional): Comma-separated list of amenities
- `check_in` (optional): Check-in date (YYYY-MM-DD)
- `check_out` (optional): Check-out date (YYYY-MM-DD)
- `page` (optional): Page number
- `page_size` (optional): Items per page

**Response (200 OK):**
```json
{
  "count": 30,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 1,
      "name": "Sahara Luxury Resort",
      "description": "Luxury resort in the heart of the desert...",
      "location": "Tamanrasset",
      "address": "Desert Road, Tamanrasset",
      "coordinates": {
        "latitude": 22.7850,
        "longitude": 5.5228
      },
      "image": "https://api.tahwisa.dz/media/hotels/resort1.jpg",
      "gallery": [
        "https://api.tahwisa.dz/media/hotels/resort1-1.jpg",
        "https://api.tahwisa.dz/media/hotels/resort1-2.jpg"
      ],
      "rating": 4.7,
      "reviews_count": 156,
      "price_per_night": "150.00",
      "currency": "USD",
      "amenities": [
        "WiFi",
        "Pool",
        "Spa",
        "Restaurant",
        "Parking"
      ],
      "room_types": [
        {
          "id": 1,
          "name": "Standard Room",
          "price": "150.00",
          "max_guests": 2
        },
        {
          "id": 2,
          "name": "Deluxe Suite",
          "price": "250.00",
          "max_guests": 4
        }
      ],
      "created_at": "2024-01-10T08:00:00Z"
    }
  ]
}
```

---

### 4.2 Get Hotel Detail
**GET** `/hotels/{id}/`

**Response (200 OK):**
```json
{
  "id": 1,
  "name": "Sahara Luxury Resort",
  "description": "Luxury resort in the heart of the desert...",
  "location": "Tamanrasset",
  "address": "Desert Road, Tamanrasset",
  "coordinates": {
    "latitude": 22.7850,
    "longitude": 5.5228
  },
  "image": "https://api.tahwisa.dz/media/hotels/resort1.jpg",
  "gallery": [
    "https://api.tahwisa.dz/media/hotels/resort1-1.jpg",
    "https://api.tahwisa.dz/media/hotels/resort1-2.jpg"
  ],
  "rating": 4.7,
  "reviews_count": 156,
  "price_per_night": "150.00",
  "currency": "USD",
  "amenities": [
    "WiFi",
    "Pool",
    "Spa",
    "Restaurant",
    "Parking",
    "Gym",
    "Room Service"
  ],
  "room_types": [
    {
      "id": 1,
      "name": "Standard Room",
      "description": "Comfortable room with desert view",
      "price": "150.00",
      "max_guests": 2,
      "bed_type": "Queen",
      "size": "25 m²",
      "amenities": ["WiFi", "TV", "AC", "Private Bathroom"]
    }
  ],
  "policies": {
    "check_in": "14:00",
    "check_out": "11:00",
    "cancellation": "Free cancellation up to 24 hours before check-in",
    "pets": false,
    "smoking": false
  },
  "created_at": "2024-01-10T08:00:00Z"
}
```

---

## 5. Cuisine Endpoints

### 5.1 List Dishes
**GET** `/cuisine/dishes/`

**Query Parameters:**
- `region` (optional): Filter by region
- `category` (optional): Filter by category
- `search` (optional): Search in name and description
- `page` (optional): Page number
- `page_size` (optional): Items per page

**Response (200 OK):**
```json
{
  "count": 20,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 1,
      "name": "Couscous",
      "name_ar": "كسكس",
      "description": "Traditional Algerian couscous...",
      "region": "Algiers",
      "category": "Main Course",
      "image": "https://api.tahwisa.dz/media/cuisine/couscous.jpg",
      "ingredients": [
        "Semolina",
        "Lamb",
        "Vegetables",
        "Chickpeas"
      ],
      "preparation_time": "2 hours",
      "difficulty": "Moderate",
      "rating": 4.9,
      "reviews_count": 234
    }
  ]
}
```

---

## 6. News and Events Endpoints

### 6.1 List News and Events
**GET** `/news-events/`

**Query Parameters:**
- `type` (optional): Filter by type (news, event)
- `category` (optional): Filter by category
- `date_from` (optional): Filter events from date (YYYY-MM-DD)
- `date_to` (optional): Filter events to date (YYYY-MM-DD)
- `page` (optional): Page number
- `page_size` (optional): Items per page

**Response (200 OK):**
```json
{
  "count": 15,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 1,
      "title": "Algeria Tourism Festival 2024",
      "type": "event",
      "description": "Join us for the annual tourism festival...",
      "content": "Full article content...",
      "image": "https://api.tahwisa.dz/media/news/festival.jpg",
      "category": "Festival",
      "location": "Algiers",
      "event_date": "2024-06-15T10:00:00Z",
      "event_end_date": "2024-06-17T18:00:00Z",
      "published_at": "2024-01-20T08:00:00Z",
      "author": {
        "id": 1,
        "name": "Tahwisa Editorial",
        "avatar": "https://api.tahwisa.dz/media/avatars/editor.jpg"
      }
    },
    {
      "id": 2,
      "title": "New Desert Tours Available",
      "type": "news",
      "description": "We're excited to announce new desert tour packages...",
      "content": "Full article content...",
      "image": "https://api.tahwisa.dz/media/news/desert-tours.jpg",
      "category": "Announcement",
      "published_at": "2024-01-18T10:00:00Z",
      "author": {
        "id": 1,
        "name": "Tahwisa Editorial",
        "avatar": "https://api.tahwisa.dz/media/avatars/editor.jpg"
      }
    }
  ]
}
```

---

### 6.2 Get News/Event Detail
**GET** `/news-events/{id}/`

**Response (200 OK):**
```json
{
  "id": 1,
  "title": "Algeria Tourism Festival 2024",
  "type": "event",
  "description": "Join us for the annual tourism festival...",
  "content": "Full article content with HTML formatting...",
  "image": "https://api.tahwisa.dz/media/news/festival.jpg",
  "gallery": [
    "https://api.tahwisa.dz/media/news/festival1.jpg",
    "https://api.tahwisa.dz/media/news/festival2.jpg"
  ],
  "category": "Festival",
  "location": "Algiers",
  "coordinates": {
    "latitude": 36.7539,
    "longitude": 3.0588
  },
  "event_date": "2024-06-15T10:00:00Z",
  "event_end_date": "2024-06-17T18:00:00Z",
  "ticket_price": "25.00",
  "ticket_url": "https://tickets.tahwisa.dz/event/1",
  "published_at": "2024-01-20T08:00:00Z",
  "author": {
    "id": 1,
    "name": "Tahwisa Editorial",
    "avatar": "https://api.tahwisa.dz/media/avatars/editor.jpg"
  },
  "tags": ["festival", "tourism", "culture"],
  "related_articles": [2, 3, 5]
}
```

---

## 7. Reviews Endpoints

### 7.1 Get Activity Reviews
**GET** `/activities/{id}/reviews/`

**Query Parameters:**
- `page` (optional): Page number
- `page_size` (optional): Items per page (default: 10)

**Response (200 OK):**
```json
{
  "count": 127,
  "next": "https://api.tahwisa.dz/api/v1/activities/1/reviews/?page=2",
  "previous": null,
  "results": [
    {
      "id": 1,
      "user": {
        "id": 5,
        "full_name": "Sarah Johnson",
        "avatar": "https://api.tahwisa.dz/media/avatars/user5.jpg"
      },
      "rating": 5,
      "comment": "Amazing experience! The desert tour was incredible...",
      "created_at": "2024-01-15T10:30:00Z",
      "helpful_count": 12
    }
  ]
}
```

---

### 7.2 Create Activity Review
**POST** `/activities/{id}/reviews/`

**Headers:**
```
Authorization: Token <token>
```

**Request Body:**
```json
{
  "rating": 5,
  "comment": "Amazing experience! Highly recommended."
}
```

**Response (201 Created):**
```json
{
  "id": 128,
  "user": {
    "id": 1,
    "full_name": "John Doe",
    "avatar": "https://api.tahwisa.dz/media/avatars/user1.jpg"
  },
  "rating": 5,
  "comment": "Amazing experience! Highly recommended.",
  "created_at": "2024-01-20T14:30:00Z",
  "helpful_count": 0
}
```

---

## 8. Bookings Endpoints

### 8.1 Create Activity Booking
**POST** `/bookings/activities/`

**Headers:**
```
Authorization: Token <token>
```

**Request Body:**
```json
{
  "activity_id": 1,
  "participants": 2,
  "date": "2024-06-15",
  "special_requests": "Vegetarian meals please"
}
```

**Response (201 Created):**
```json
{
  "id": 1,
  "booking_number": "TAH-2024-001",
  "activity": {
    "id": 1,
    "title": "Sahara Desert Adventure",
    "image": "https://api.tahwisa.dz/media/activities/sahara.jpg"
  },
  "participants": 2,
  "date": "2024-06-15",
  "total_price": "598.00",
  "currency": "USD",
  "status": "pending",
  "created_at": "2024-01-20T14:30:00Z"
}
```

---

### 8.2 Get User Bookings
**GET** `/bookings/`

**Headers:**
```
Authorization: Token <token>
```

**Query Parameters:**
- `type` (optional): Filter by type (activity, hotel)
- `status` (optional): Filter by status (pending, confirmed, cancelled, completed)
- `page` (optional): Page number
- `page_size` (optional): Items per page

**Response (200 OK):**
```json
{
  "count": 5,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 1,
      "booking_number": "TAH-2024-001",
      "type": "activity",
      "activity": {
        "id": 1,
        "title": "Sahara Desert Adventure",
        "image": "https://api.tahwisa.dz/media/activities/sahara.jpg"
      },
      "participants": 2,
      "date": "2024-06-15",
      "total_price": "598.00",
      "currency": "USD",
      "status": "confirmed",
      "created_at": "2024-01-20T14:30:00Z"
    }
  ]
}
```

---

## 9. Search Endpoint

### 9.1 Global Search
**GET** `/search/`

**Query Parameters:**
- `q` (required): Search query
- `type` (optional): Filter by type (activities, destinations, hotels, news)
- `page` (optional): Page number
- `page_size` (optional): Items per page

**Response (200 OK):**
```json
{
  "query": "sahara",
  "results": {
    "activities": [
      {
        "id": 1,
        "title": "Sahara Desert Adventure",
        "type": "activity",
        "image": "https://api.tahwisa.dz/media/activities/sahara.jpg"
      }
    ],
    "destinations": [],
    "hotels": [],
    "news": []
  },
  "total_count": 1
}
```

---

## 10. Contact Endpoints

### 10.1 Submit Contact Form
**POST** `/contact/`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "subject": "Inquiry about tours",
  "message": "I would like to know more about your desert tours.",
  "phone": "+213555123456"
}
```

**Response (201 Created):**
```json
{
  "message": "Thank you for contacting us. We'll get back to you soon.",
  "id": 1
}
```

---

## 11. Testimonials Endpoints

### 11.1 List Testimonials
**GET** `/testimonials/`

**Query Parameters:**
- `featured` (optional): Filter featured testimonials (true/false)
- `rating` (optional): Filter by minimum rating (1-5)
- `page` (optional): Page number
- `page_size` (optional): Items per page

**Response (200 OK):**
```json
{
  "count": 50,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 1,
      "user": {
        "id": 5,
        "full_name": "Sarah Mitchell",
        "avatar": "https://api.tahwisa.dz/media/avatars/user5.jpg",
        "location": "United Kingdom"
      },
      "rating": 5,
      "text": "Tahwisa made our Sahara trip absolutely magical. The local guides were incredible and every detail was perfectly arranged.",
      "activity": {
        "id": 1,
        "title": "Sahara Desert Adventure"
      },
      "featured": true,
      "created_at": "2024-01-15T10:30:00Z"
    }
  ]
}
```

---

### 11.2 Create Testimonial
**POST** `/testimonials/`

**Headers:**
```
Authorization: Token <token>
```

**Request Body:**
```json
{
  "rating": 5,
  "text": "Amazing experience! Highly recommended.",
  "activity_id": 1
}
```

**Response (201 Created):**
```json
{
  "id": 51,
  "user": {
    "id": 1,
    "full_name": "John Doe",
    "avatar": "https://api.tahwisa.dz/media/avatars/user1.jpg"
  },
  "rating": 5,
  "text": "Amazing experience! Highly recommended.",
  "activity": {
    "id": 1,
    "title": "Sahara Desert Adventure"
  },
  "featured": false,
  "created_at": "2024-01-20T14:30:00Z"
}
```

---

## 12. Newsletter Endpoints

### 12.1 Subscribe to Newsletter
**POST** `/newsletter/subscribe/`

**Request Body:**
```json
{
  "email": "john.doe@example.com"
}
```

**Response (201 Created):**
```json
{
  "message": "Successfully subscribed to newsletter",
  "email": "john.doe@example.com",
  "subscribed_at": "2024-01-20T14:30:00Z"
}
```

**Error Response (400 Bad Request):**
```json
{
  "error": "Email already subscribed"
}
```

---

### 12.2 Unsubscribe from Newsletter
**POST** `/newsletter/unsubscribe/`

**Request Body:**
```json
{
  "email": "john.doe@example.com",
  "token": "unsubscribe_token_from_email"
}
```

**Response (200 OK):**
```json
{
  "message": "Successfully unsubscribed from newsletter"
}
```

---

## 13. User Profile Endpoints

### 13.1 Update User Profile
**PATCH** `/auth/me/`

**Headers:**
```
Authorization: Token <token>
```

**Request Body:**
```json
{
  "full_name": "John Updated",
  "avatar": "https://api.tahwisa.dz/media/avatars/new_avatar.jpg",
  "phone": "+213555123456",
  "bio": "Travel enthusiast"
}
```

**Response (200 OK):**
```json
{
  "id": 1,
  "email": "john.doe@example.com",
  "full_name": "John Updated",
  "avatar": "https://api.tahwisa.dz/media/avatars/new_avatar.jpg",
  "phone": "+213555123456",
  "bio": "Travel enthusiast",
  "date_joined": "2024-01-15T10:30:00Z"
}
```

---

### 13.2 Change Password
**POST** `/auth/change-password/`

**Headers:**
```
Authorization: Token <token>
```

**Request Body:**
```json
{
  "old_password": "oldpassword123",
  "new_password": "newpassword123",
  "confirm_password": "newpassword123"
}
```

**Response (200 OK):**
```json
{
  "message": "Password changed successfully"
}
```

**Error Response (400 Bad Request):**
```json
{
  "error": "Invalid old password"
}
```

---

### 13.3 Upload Avatar
**POST** `/auth/upload-avatar/`

**Headers:**
```
Authorization: Token <token>
Content-Type: multipart/form-data
```

**Request Body:**
```
FormData with file field: avatar
```

**Response (200 OK):**
```json
{
  "avatar": "https://api.tahwisa.dz/media/avatars/user1_avatar.jpg",
  "message": "Avatar uploaded successfully"
}
```

---

## 14. Favorites/Wishlist Endpoints

### 14.1 Get User Favorites
**GET** `/favorites/`

**Headers:**
```
Authorization: Token <token>
```

**Query Parameters:**
- `type` (optional): Filter by type (activity, destination, hotel)
- `page` (optional): Page number
- `page_size` (optional): Items per page

**Response (200 OK):**
```json
{
  "count": 10,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 1,
      "type": "activity",
      "activity": {
        "id": 1,
        "title": "Sahara Desert Adventure",
        "image": "https://api.tahwisa.dz/media/activities/sahara.jpg",
        "price": "299.00"
      },
      "added_at": "2024-01-15T10:30:00Z"
    }
  ]
}
```

---

### 14.2 Add to Favorites
**POST** `/favorites/`

**Headers:**
```
Authorization: Token <token>
```

**Request Body:**
```json
{
  "type": "activity",
  "item_id": 1
}
```

**Response (201 Created):**
```json
{
  "id": 1,
  "type": "activity",
  "activity": {
    "id": 1,
    "title": "Sahara Desert Adventure",
    "image": "https://api.tahwisa.dz/media/activities/sahara.jpg"
  },
  "added_at": "2024-01-20T14:30:00Z"
}
```

---

### 14.3 Remove from Favorites
**DELETE** `/favorites/{id}/`

**Headers:**
```
Authorization: Token <token>
```

**Response (204 No Content)**

---

## 15. Hotel Booking Endpoints

### 15.1 Create Hotel Booking
**POST** `/bookings/hotels/`

**Headers:**
```
Authorization: Token <token>
```

**Request Body:**
```json
{
  "hotel_id": 1,
  "room_type_id": 2,
  "check_in": "2024-06-15",
  "check_out": "2024-06-17",
  "guests": 2,
  "special_requests": "Late check-in please"
}
```

**Response (201 Created):**
```json
{
  "id": 1,
  "booking_number": "TAH-HTL-2024-001",
  "hotel": {
    "id": 1,
    "name": "Sahara Luxury Resort",
    "image": "https://api.tahwisa.dz/media/hotels/resort1.jpg"
  },
  "room_type": {
    "id": 2,
    "name": "Deluxe Suite"
  },
  "check_in": "2024-06-15",
  "check_out": "2024-06-17",
  "guests": 2,
  "total_price": "300.00",
  "currency": "USD",
  "status": "pending",
  "created_at": "2024-01-20T14:30:00Z"
}
```

---

### 15.2 Check Hotel Availability
**GET** `/hotels/{id}/availability/`

**Query Parameters:**
- `check_in` (required): Check-in date (YYYY-MM-DD)
- `check_out` (required): Check-out date (YYYY-MM-DD)
- `guests` (optional): Number of guests

**Response (200 OK):**
```json
{
  "available": true,
  "available_rooms": [
    {
      "room_type_id": 1,
      "room_type_name": "Standard Room",
      "available_count": 5,
      "price_per_night": "150.00"
    },
    {
      "room_type_id": 2,
      "room_type_name": "Deluxe Suite",
      "available_count": 2,
      "price_per_night": "250.00"
    }
  ]
}
```

---

## 16. Booking Management Endpoints

### 16.1 Cancel Booking
**POST** `/bookings/{id}/cancel/`

**Headers:**
```
Authorization: Token <token>
```

**Request Body:**
```json
{
  "reason": "Change of plans"
}
```

**Response (200 OK):**
```json
{
  "message": "Booking cancelled successfully",
  "refund_amount": "598.00",
  "refund_status": "processing"
}
```

---

### 16.2 Get Booking Details
**GET** `/bookings/{id}/`

**Headers:**
```
Authorization: Token <token>
```

**Response (200 OK):**
```json
{
  "id": 1,
  "booking_number": "TAH-2024-001",
  "type": "activity",
  "activity": {
    "id": 1,
    "title": "Sahara Desert Adventure",
    "image": "https://api.tahwisa.dz/media/activities/sahara.jpg"
  },
  "participants": 2,
  "date": "2024-06-15",
  "total_price": "598.00",
  "currency": "USD",
  "status": "confirmed",
  "payment_status": "paid",
  "created_at": "2024-01-20T14:30:00Z",
  "cancellation_policy": "Free cancellation up to 48 hours before activity"
}
```

---

## 17. Email Verification Endpoints

### 17.1 Send Verification Email
**POST** `/auth/send-verification/`

**Headers:**
```
Authorization: Token <token>
```

**Response (200 OK):**
```json
{
  "message": "Verification email sent"
}
```

---

### 17.2 Verify Email
**POST** `/auth/verify-email/`

**Request Body:**
```json
{
  "token": "verification_token_from_email"
}
```

**Response (200 OK):**
```json
{
  "message": "Email verified successfully"
}
```

---

## 18. Social Sharing Endpoints

### 18.1 Get Shareable Link
**GET** `/share/{type}/{id}/`

**Query Parameters:**
- `type`: Type of resource (activity, destination, hotel, news)
- `id`: Resource ID

**Response (200 OK):**
```json
{
  "url": "https://tahwisa.dz/activity/1",
  "title": "Sahara Desert Adventure",
  "description": "Experience the magic of the Sahara...",
  "image": "https://api.tahwisa.dz/media/activities/sahara.jpg",
  "share_text": "Check out this amazing Sahara Desert Adventure on Tahwisa!"
}
```

---

## Error Responses

All endpoints may return the following error responses:

### 400 Bad Request
```json
{
  "error": "Validation failed",
  "details": {
    "field_name": ["Error message"]
  }
}
```

### 401 Unauthorized
```json
{
  "error": "Authentication credentials were not provided."
}
```

### 403 Forbidden
```json
{
  "error": "You do not have permission to perform this action."
}
```

### 404 Not Found
```json
{
  "error": "Resource not found"
}
```

### 500 Internal Server Error
```json
{
  "error": "An internal server error occurred"
}
```

---

## Pagination

All list endpoints support pagination with the following response format:

```json
{
  "count": 100,
  "next": "https://api.tahwisa.dz/api/v1/endpoint/?page=3",
  "previous": "https://api.tahwisa.dz/api/v1/endpoint/?page=1",
  "results": [...]
}
```

---

## Date Formats

- All dates should be in ISO 8601 format: `YYYY-MM-DDTHH:mm:ssZ`
- Example: `2024-01-20T14:30:00Z`

---

## Image URLs

All image URLs should be absolute URLs:
- Format: `https://api.tahwisa.dz/media/{path}/{filename}`
- Example: `https://api.tahwisa.dz/media/activities/sahara.jpg`

---

## Rate Limiting

- Public endpoints: 100 requests per hour per IP
- Authenticated endpoints: 1000 requests per hour per user
- Rate limit headers:
  - `X-RateLimit-Limit`: Maximum requests allowed
  - `X-RateLimit-Remaining`: Remaining requests
  - `X-RateLimit-Reset`: Time when limit resets (Unix timestamp)

---

## CORS

The API should allow requests from:
- `https://tahwisa.dz`
- `https://www.tahwisa.dz`
- `http://localhost:5173` (for development)

---

## Notes for Backend Implementation

1. **Use Django REST Framework serializers** for request/response validation
2. **Implement pagination** using DRF's PageNumberPagination
3. **Use DRF permissions** for authentication and authorization
4. **Implement filtering** using django-filter or DRF's filtering backends
5. **Use DRF's search** functionality for search endpoints
6. **Implement proper error handling** with consistent error response format
7. **Add API versioning** (v1, v2, etc.)
8. **Use Django's ImageField** for image uploads with proper storage configuration
9. **Implement caching** for frequently accessed data (Redis recommended)
10. **Add API documentation** using drf-spectacular or drf-yasg for Swagger/OpenAPI

---

## Required Django Models

Based on the API endpoints, you'll need models for:

1. **User** (extend Django's User model)
2. **Activity**
3. **Destination**
4. **Hotel**
5. **RoomType**
6. **Dish** (Cuisine)
7. **NewsEvent**
8. **Review**
9. **Booking** (for both activities and hotels)
10. **Contact**
11. **Testimonial**
12. **NewsletterSubscription**
13. **Favorite** (Wishlist)
14. **EmailVerification**
15. **PasswordResetToken**

---

## Environment Variables

The frontend expects the API base URL to be configurable. Set it in your frontend environment:

```env
VITE_API_BASE_URL=https://api.tahwisa.dz/api/v1/
```

---

This documentation should be sufficient for implementing the Django REST Framework backend. All endpoints follow RESTful conventions and use standard HTTP methods and status codes.

