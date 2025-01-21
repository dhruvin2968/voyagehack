import { useEffect, useRef, useState } from "react"
//import { useTitle } from "../hooks/useTitle";
import {PostCard} from "../components/ItiernaryCard"
import {SkeletonCard} from "../components/SkeletonCard"
import {getDocs,collection} from "firebase/firestore";
import{db} from "../firebase/config"
export const UserDashboard= () => {

    const itiernaries=[
        
      {
        "introduction": "Welcome to your Family Vacation trip to Mumbai from 2025-01-20 to 2025-01-23.",
        "days": "Here's a detailed itinerary for your family's Mumbai adventure, designed to balance cultural exploration, entertainment, and kid-friendly fun:\n\n## Mumbai Family Adventure: 4-Day Itinerary (Jan 20-23, 2025)\n\n*Theme:* Fun, Culture & Exploration for All Ages",
        "title":"Mumbai adventure",
        "itinerary": {
          "Day 1": {
            "title": "Arrival & Gateway Glamour",
            "activities": [
              {
                "time": "Morning (9 AM)",
                "description": "Arrive at Mumbai Airport (BOM). Take a pre-booked taxi or airport transfer to your family-friendly hotel near Marine Drive. Check in, freshen up, and leave your luggage."
              },
              {
                "time": "Afternoon (12 PM)",
                "description": "Lunch at a local restaurant with kid-friendly options near your hotel."
              },
              {
                "time": "Afternoon (2 PM)",
                "description": "Start your Mumbai adventure at the iconic Gateway of India. Marvel at its architecture, snap photos, and enjoy the bustling atmosphere."
              },
              {
                "time": "Late Afternoon (3:30 PM)",
                "description": "Take a ferry to Elephanta Island, home to ancient rock-cut cave temples dedicated to Lord Shiva. The ferry ride itself is scenic."
              },
              {
                "time": "Evening (7 PM)",
                "description": "Enjoy a relaxing walk along Marine Drive, savoring the 'Queen's Necklace' view as the city lights twinkle. Dinner at a restaurant with views of the Arabian Sea."
              }
            ]
          },
          "Day 2": {
            "title": "Bollywood Magic & Street Food Fiesta",
            "activities": [
              {
                "time": "Morning (9:30 AM)",
                "description": "Embark on a Bollywood studio tour. Experience the magic of movie making, see sets, learn about the industry, and maybe even spot a celebrity!"
              },
              {
                "time": "Lunch (1 PM)",
                "description": "Dive into the vibrant Crawford Market for a diverse street food experience. Try local snacks, chaat, and refreshing drinks."
              },
              {
                "time": "Afternoon (2:30 PM)",
                "description": "After lunch, explore the colorful stalls of Chor Bazaar, Mumbai's famous antique and vintage market. You might find unique souvenirs here!"
              },
              {
                "time": "Evening (5 PM)",
                "description": "Catch a live performance at the iconic Prithvi Theatre, known for its diverse and often experimental plays."
              },
              {
                "time": "Dinner (8 PM)",
                "description": "Enjoy a delicious Indian dinner at a restaurant near Prithvi Theatre."
              }
            ]
          },
          "Day 3": {
            "title": "Marine Wonders & Historical Charms",
            "activities": [
              {
                "time": "Morning (9 AM)",
                "description": "Embark on a thrilling harbor cruise. Admire the panoramic views of Mumbai's skyline, the Gateway of India, Marine Drive, and other landmarks from the water."
              },
              {
                "time": "Late Morning (11 AM)",
                "description": "Visit the Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (museum), a treasure trove of Indian history, art, and culture."
              },
              {
                "time": "Lunch (1 PM)",
                "description": "Have lunch at a restaurant near the museum or pack a picnic to enjoy at the nearby Kamala Nehru Park."
              },
              {
                "time": "Afternoon (2:30 PM)",
                "description": "Spend the afternoon at Kamala Nehru Park, a green oasis in the heart of the city. Kids will love the playground, boating area, and open spaces."
              },
              {
                "time": "Evening (6 PM)",
                "description": "Experience a traditional Kathakali dance performance, a mesmerizing blend of art and storytelling."
              },
              {
                "time": "Dinner (8 PM)",
                "description": "Dine at a rooftop restaurant with panoramic city views."
              }
            ]
          },
          "Day 4": {
            "title": "Relaxation & Departure",
            "activities": [
              {
                "time": "Morning (9 AM)",
                "description": "Relax at your hotel's pool or enjoy a spa treatment."
              },
              {
                "time": "Late Morning (11 AM)",
                "description": "Enjoy a final authentic Indian lunch at a restaurant near your hotel."
              },
              {
                "time": "Afternoon (1 PM)",
                "description": "Check out of your hotel and head to Mumbai Airport (BOM) for your departure."
              }
            ]
          }
        },
        "final_notes": "This itinerary includes the best recommendations based on your theme.",
        "events": [
          "Snow World, Mumbai",
          "Colaba Causeway, Mumbai",
          "Mohammed Ali Road, Mumbai",
          "Dr. Bhau Daji Lad Museum, Mumbai",
          "Elephanta Island, Mumbai",
          "Nehru Science Centre, Mumbai",
          "Victoria Terminus, Mumbai",
          "Nehru Planetarium, Mumbai",
          "Vihar Lake, Mumbai",
          "Gateway Of India, Mumbai",
          "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya, Mumbai",
          "Manori Beach, Mumbai",
          "Girgaum Chowpatty, Mumbai",
          "Horniman Circle Gardens, Mumbai",
          "Mumbai Zoo, Mumbai",
          "Global Vipassana Pagoda, Mumbai",
          "Powai Lake, Mumbai",
          "Chor Bazaar, Mumbai",
          "Fort Bassein, Mumbai",
          "Water Kingdom, Mumbai",
          "Flora Fountain, Mumbai",
          "Marine Drive, Mumbai",
          "Essel World, Mumbai",
          "Sanjay Gandhi National Park, Mumbai",
          "Elephanta Caves, Mumbai",
          "Prince Of Wales Museum, Mumbai",
          "Aksa Beach, Mumbai",
          "Mahatma Jyotiba Phule Mandai, Mumbai",
          "Iskcon Temple, Mumbai",
          "Mumba Devi Temple, Mumbai",
          "Gilbert Hill, Mumbai",
          "Worli Fort, Mumbai",
          "Kanheri Caves, Mumbai",
          "Film City, Mumbai",
          "Mumbai Dabbawala Center, Mumbai",
          "Dhobi Ghat, Mumbai",
          "Mahalakshmi Temple, Mumbai",
          "Basilica Of Our Lady Of The Mount, Bandra, Mumbai",
          "Jehangir Art Gallery, Mumbai",
          "Madh Island, Mumbai",
          "Wonders Park, Mumbai",
          "Castella De Aguada, Mumbai",
          "Gorai Beach, Mumbai",
          "Tikuji Ni Wadi, Mumbai",
          "Haji Ali Dargah, Mumbai",
          "Versova Beach, Mumbai",
          "Mahakali Caves, Mumbai",
          "Cafe Mondegar, Mumbai",
          "Mani Bhavan Gandhi Sangrahalaya, Mumbai",
          "Dharavi Slum, Mumbai",
          "Suraj Water Park, Mumbai",
          "Kidzania, Mumbai",
          "Shivaji Park, Mumbai",
          "Hanging Gardens Of Mumbai, Kamala Nehru Park, Mumbai",
          "Red Carpet Wax Museum, Mumbai",
          "Juhu Beach, Mumbai",
          "Siddhivinayak Temple, Mumbai",
          "Maratha Mandir, Mumbai",
          "Bandra–Worli Sea Link, Mumbai"
       ]
      },
      {
        "introduction": "Welcome to your Family Vacation trip to Mumbai from 2025-01-20 to 2025-01-23.",
        "days": "Here's a detailed itinerary for your family's Mumbai adventure, designed to balance cultural exploration, entertainment, and kid-friendly fun:\n\n## Mumbai Family Adventure: 4-Day Itinerary (Jan 20-23, 2025)\n\n*Theme:* Fun, Culture & Exploration for All Ages",
        "title":"Goa Beach Vacation",
        "itinerary": {
          "Day 1": {
            "title": "Arrival & Gateway Glamour",
            "activities": [
              {
                "time": "Morning (9 AM)",
                "description": "Arrive at Mumbai Airport (BOM). Take a pre-booked taxi or airport transfer to your family-friendly hotel near Marine Drive. Check in, freshen up, and leave your luggage."
              },
              {
                "time": "Afternoon (12 PM)",
                "description": "Lunch at a local restaurant with kid-friendly options near your hotel."
              },
              {
                "time": "Afternoon (2 PM)",
                "description": "Start your Mumbai adventure at the iconic Gateway of India. Marvel at its architecture, snap photos, and enjoy the bustling atmosphere."
              },
              {
                "time": "Late Afternoon (3:30 PM)",
                "description": "Take a ferry to Elephanta Island, home to ancient rock-cut cave temples dedicated to Lord Shiva. The ferry ride itself is scenic."
              },
              {
                "time": "Evening (7 PM)",
                "description": "Enjoy a relaxing walk along Marine Drive, savoring the 'Queen's Necklace' view as the city lights twinkle. Dinner at a restaurant with views of the Arabian Sea."
              }
            ]
          },
          "Day 2": {
            "title": "Bollywood Magic & Street Food Fiesta",
            "activities": [
              {
                "time": "Morning (9:30 AM)",
                "description": "Embark on a Bollywood studio tour. Experience the magic of movie making, see sets, learn about the industry, and maybe even spot a celebrity!"
              },
              {
                "time": "Lunch (1 PM)",
                "description": "Dive into the vibrant Crawford Market for a diverse street food experience. Try local snacks, chaat, and refreshing drinks."
              },
              {
                "time": "Afternoon (2:30 PM)",
                "description": "After lunch, explore the colorful stalls of Chor Bazaar, Mumbai's famous antique and vintage market. You might find unique souvenirs here!"
              },
              {
                "time": "Evening (5 PM)",
                "description": "Catch a live performance at the iconic Prithvi Theatre, known for its diverse and often experimental plays."
              },
              {
                "time": "Dinner (8 PM)",
                "description": "Enjoy a delicious Indian dinner at a restaurant near Prithvi Theatre."
              }
            ]
          },
          "Day 3": {
            "title": "Marine Wonders & Historical Charms",
            "activities": [
              {
                "time": "Morning (9 AM)",
                "description": "Embark on a thrilling harbor cruise. Admire the panoramic views of Mumbai's skyline, the Gateway of India, Marine Drive, and other landmarks from the water."
              },
              {
                "time": "Late Morning (11 AM)",
                "description": "Visit the Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (museum), a treasure trove of Indian history, art, and culture."
              },
              {
                "time": "Lunch (1 PM)",
                "description": "Have lunch at a restaurant near the museum or pack a picnic to enjoy at the nearby Kamala Nehru Park."
              },
              {
                "time": "Afternoon (2:30 PM)",
                "description": "Spend the afternoon at Kamala Nehru Park, a green oasis in the heart of the city. Kids will love the playground, boating area, and open spaces."
              },
              {
                "time": "Evening (6 PM)",
                "description": "Experience a traditional Kathakali dance performance, a mesmerizing blend of art and storytelling."
              },
              {
                "time": "Dinner (8 PM)",
                "description": "Dine at a rooftop restaurant with panoramic city views."
              }
            ]
          },
          "Day 4": {
            "title": "Relaxation & Departure",
            "activities": [
              {
                "time": "Morning (9 AM)",
                "description": "Relax at your hotel's pool or enjoy a spa treatment."
              },
              {
                "time": "Late Morning (11 AM)",
                "description": "Enjoy a final authentic Indian lunch at a restaurant near your hotel."
              },
              {
                "time": "Afternoon (1 PM)",
                "description": "Check out of your hotel and head to Mumbai Airport (BOM) for your departure."
              }
            ]
          }
        },
        "final_notes": "This itinerary includes the best recommendations based on your theme.",
        "events": [
          "Snow World, Mumbai",
          "Colaba Causeway, Mumbai",
          "Mohammed Ali Road, Mumbai",
          "Dr. Bhau Daji Lad Museum, Mumbai",
          "Elephanta Island, Mumbai",
          "Nehru Science Centre, Mumbai",
          "Victoria Terminus, Mumbai",
          "Nehru Planetarium, Mumbai",
          "Vihar Lake, Mumbai",
          "Gateway Of India, Mumbai",
          "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya, Mumbai",
          "Manori Beach, Mumbai",
          "Girgaum Chowpatty, Mumbai",
          "Horniman Circle Gardens, Mumbai",
          "Mumbai Zoo, Mumbai",
          "Global Vipassana Pagoda, Mumbai",
          "Powai Lake, Mumbai",
          "Chor Bazaar, Mumbai",
          "Fort Bassein, Mumbai",
          "Water Kingdom, Mumbai",
          "Flora Fountain, Mumbai",
          "Marine Drive, Mumbai",
          "Essel World, Mumbai",
          "Sanjay Gandhi National Park, Mumbai",
          "Elephanta Caves, Mumbai",
          "Prince Of Wales Museum, Mumbai",
          "Aksa Beach, Mumbai",
          "Mahatma Jyotiba Phule Mandai, Mumbai",
          "Iskcon Temple, Mumbai",
          "Mumba Devi Temple, Mumbai",
          "Gilbert Hill, Mumbai",
          "Worli Fort, Mumbai",
          "Kanheri Caves, Mumbai",
          "Film City, Mumbai",
          "Mumbai Dabbawala Center, Mumbai",
          "Dhobi Ghat, Mumbai",
          "Mahalakshmi Temple, Mumbai",
          "Basilica Of Our Lady Of The Mount, Bandra, Mumbai",
          "Jehangir Art Gallery, Mumbai",
          "Madh Island, Mumbai",
          "Wonders Park, Mumbai",
          "Castella De Aguada, Mumbai",
          "Gorai Beach, Mumbai",
          "Tikuji Ni Wadi, Mumbai",
          "Haji Ali Dargah, Mumbai",
          "Versova Beach, Mumbai",
          "Mahakali Caves, Mumbai",
          "Cafe Mondegar, Mumbai",
          "Mani Bhavan Gandhi Sangrahalaya, Mumbai",
          "Dharavi Slum, Mumbai",
          "Suraj Water Park, Mumbai",
          "Kidzania, Mumbai",
          "Shivaji Park, Mumbai",
          "Hanging Gardens Of Mumbai, Kamala Nehru Park, Mumbai",
          "Red Carpet Wax Museum, Mumbai",
          "Juhu Beach, Mumbai",
          "Siddhivinayak Temple, Mumbai",
          "Maratha Mandir, Mumbai",
          "Bandra–Worli Sea Link, Mumbai"
      ]
      },
      {
        "introduction": "Welcome to your Family Vacation trip to Mumbai from 2025-01-20 to 2025-01-23.",
        "days": "Here's a detailed itinerary for your family's Mumbai adventure, designed to balance cultural exploration, entertainment, and kid-friendly fun:\n\n## Mumbai Family Adventure: 4-Day Itinerary (Jan 20-23, 2025)\n\n*Theme:* Fun, Culture & Exploration for All Ages",
        "title":"Maldieves Romance",
        "itinerary": {
          "Day 1": {
            "title": "Arrival & Gateway Glamour",
            "activities": [
              {
                "time": "Morning (9 AM)",
                "description": "Arrive at Mumbai Airport (BOM). Take a pre-booked taxi or airport transfer to your family-friendly hotel near Marine Drive. Check in, freshen up, and leave your luggage."
              },
              {
                "time": "Afternoon (12 PM)",
                "description": "Lunch at a local restaurant with kid-friendly options near your hotel."
              },
              {
                "time": "Afternoon (2 PM)",
                "description": "Start your Mumbai adventure at the iconic Gateway of India. Marvel at its architecture, snap photos, and enjoy the bustling atmosphere."
              },
              {
                "time": "Late Afternoon (3:30 PM)",
                "description": "Take a ferry to Elephanta Island, home to ancient rock-cut cave temples dedicated to Lord Shiva. The ferry ride itself is scenic."
              },
              {
                "time": "Evening (7 PM)",
                "description": "Enjoy a relaxing walk along Marine Drive, savoring the 'Queen's Necklace' view as the city lights twinkle. Dinner at a restaurant with views of the Arabian Sea."
              }
            ]
          },
          "Day 2": {
            "title": "Bollywood Magic & Street Food Fiesta",
            "activities": [
              {
                "time": "Morning (9:30 AM)",
                "description": "Embark on a Bollywood studio tour. Experience the magic of movie making, see sets, learn about the industry, and maybe even spot a celebrity!"
              },
              {
                "time": "Lunch (1 PM)",
                "description": "Dive into the vibrant Crawford Market for a diverse street food experience. Try local snacks, chaat, and refreshing drinks."
              },
              {
                "time": "Afternoon (2:30 PM)",
                "description": "After lunch, explore the colorful stalls of Chor Bazaar, Mumbai's famous antique and vintage market. You might find unique souvenirs here!"
              },
              {
                "time": "Evening (5 PM)",
                "description": "Catch a live performance at the iconic Prithvi Theatre, known for its diverse and often experimental plays."
              },
              {
                "time": "Dinner (8 PM)",
                "description": "Enjoy a delicious Indian dinner at a restaurant near Prithvi Theatre."
              }
            ]
          },
          "Day 3": {
            "title": "Marine Wonders & Historical Charms",
            "activities": [
              {
                "time": "Morning (9 AM)",
                "description": "Embark on a thrilling harbor cruise. Admire the panoramic views of Mumbai's skyline, the Gateway of India, Marine Drive, and other landmarks from the water."
              },
              {
                "time": "Late Morning (11 AM)",
                "description": "Visit the Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (museum), a treasure trove of Indian history, art, and culture."
              },
              {
                "time": "Lunch (1 PM)",
                "description": "Have lunch at a restaurant near the museum or pack a picnic to enjoy at the nearby Kamala Nehru Park."
              },
              {
                "time": "Afternoon (2:30 PM)",
                "description": "Spend the afternoon at Kamala Nehru Park, a green oasis in the heart of the city. Kids will love the playground, boating area, and open spaces."
              },
              {
                "time": "Evening (6 PM)",
                "description": "Experience a traditional Kathakali dance performance, a mesmerizing blend of art and storytelling."
              },
              {
                "time": "Dinner (8 PM)",
                "description": "Dine at a rooftop restaurant with panoramic city views."
              }
            ]
          },
          "Day 4": {
            "title": "Relaxation & Departure",
            "activities": [
              {
                "time": "Morning (9 AM)",
                "description": "Relax at your hotel's pool or enjoy a spa treatment."
              },
              {
                "time": "Late Morning (11 AM)",
                "description": "Enjoy a final authentic Indian lunch at a restaurant near your hotel."
              },
              {
                "time": "Afternoon (1 PM)",
                "description": "Check out of your hotel and head to Mumbai Airport (BOM) for your departure."
              }
            ]
          }
        },
        "final_notes": "This itinerary includes the best recommendations based on your theme.",
        "events": [
          "Snow World, Mumbai",
          "Colaba Causeway, Mumbai",
          "Mohammed Ali Road, Mumbai",
          "Dr. Bhau Daji Lad Museum, Mumbai",
          "Elephanta Island, Mumbai",
          "Nehru Science Centre, Mumbai",
          "Victoria Terminus, Mumbai",
          "Nehru Planetarium, Mumbai",
          "Vihar Lake, Mumbai",
          "Gateway Of India, Mumbai",
          "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya, Mumbai",
          "Manori Beach, Mumbai",
          "Girgaum Chowpatty, Mumbai",
          "Horniman Circle Gardens, Mumbai",
          "Mumbai Zoo, Mumbai",
          "Global Vipassana Pagoda, Mumbai",
          "Powai Lake, Mumbai",
          "Chor Bazaar, Mumbai",
          "Fort Bassein, Mumbai",
          "Water Kingdom, Mumbai",
          "Flora Fountain, Mumbai",
          "Marine Drive, Mumbai",
          "Essel World, Mumbai",
          "Sanjay Gandhi National Park, Mumbai",
          "Elephanta Caves, Mumbai",
          "Prince Of Wales Museum, Mumbai",
          "Aksa Beach, Mumbai",
          "Mahatma Jyotiba Phule Mandai, Mumbai",
          "Iskcon Temple, Mumbai",
          "Mumba Devi Temple, Mumbai",
          "Gilbert Hill, Mumbai",
          "Worli Fort, Mumbai",
          "Kanheri Caves, Mumbai",
          "Film City, Mumbai",
          "Mumbai Dabbawala Center, Mumbai",
          "Dhobi Ghat, Mumbai",
          "Mahalakshmi Temple, Mumbai",
          "Basilica Of Our Lady Of The Mount, Bandra, Mumbai",
          "Jehangir Art Gallery, Mumbai",
          "Madh Island, Mumbai",
          "Wonders Park, Mumbai",
          "Castella De Aguada, Mumbai",
          "Gorai Beach, Mumbai",
          "Tikuji Ni Wadi, Mumbai",
          "Haji Ali Dargah, Mumbai",
          "Versova Beach, Mumbai",
          "Mahakali Caves, Mumbai",
          "Cafe Mondegar, Mumbai",
          "Mani Bhavan Gandhi Sangrahalaya, Mumbai",
          "Dharavi Slum, Mumbai",
          "Suraj Water Park, Mumbai",
          "Kidzania, Mumbai",
          "Shivaji Park, Mumbai",
          "Hanging Gardens Of Mumbai, Kamala Nehru Park, Mumbai",
          "Red Carpet Wax Museum, Mumbai",
          "Juhu Beach, Mumbai",
          "Siddhivinayak Temple, Mumbai",
          "Maratha Mandir, Mumbai",
          "Bandra–Worli Sea Link, Mumbai"
       ]
      },

        
    ]
  return (
    <section className="min-h-screen">
      
      { itiernaries.map((post,id) => (
        post ? (
          <PostCard key={id} post={post}  />
        ) : (
          <SkeletonCard key={id} />
        )        
      )) }      
    </section>
  )
}
    
//   const [posts,setPosts]=useState(new Array(2).fill(false)); //returns array with 2 elements both are false
//   const [toggle,setToggle]=useState();
//   const postRef=useRef(collection(db,"posts"));
  //everytime we r on homepage it should load all posts so we use useeffect
//   useEffect(()=>{
//     async function getPosts()
//     {
//       const data =await getDocs(postRef.current);
//       setPosts(data.docs.map((document)=>(
//         {...document.data(),id:document.id
//           //Now this thing wil return multiple objects for individual documents
//       })))
//     }
//      //just for checking if jyada requests toh send nhi hore console.log("---");
//     getPosts();
//   },[postRef,toggle])

// {   id:1,
//   introduction: "Welcome to your Family Vacation trip to Mumbai from 2025-01-20 to 2025-01-23.",
//   location:"Mumbai",
//   theme:"Adventure",
//   dates:"Jan 20-23, 2025",
//   days: "Here's a detailed itinerary for your family's Mumbai adventure, designed to balance cultural exploration, entertainment, and kid-friendly fun:\n\n## Mumbai Family Adventure: 4-Day Itinerary (Jan 20-23, 2025)\n\n*Theme:* Fun, Culture & Exploration for All Ages",
//   itinerary: "The entire itiernary will come in string format.",
//   days:"",
//   final_notes: "This itinerary includes the best recommendations based on your theme.",
//   events: [
//     "Snow World, Mumbai",
//     "Colaba Causeway, Mumbai",
//     "Mohammed Ali Road, Mumbai",
//     "Dr. Bhau Daji Lad Museum, Mumbai",
//     "Elephanta Island, Mumbai",
//     "Nehru Science Centre, Mumbai",
//     "Victoria Terminus, Mumbai",
//     "Nehru Planetarium, Mumbai",
//     "Vihar Lake, Mumbai",
//     "Gateway Of India, Mumbai",
//     "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya, Mumbai",
//     "Manori Beach, Mumbai",
//     "Girgaum Chowpatty, Mumbai",
//     "Horniman Circle Gardens, Mumbai",
//     "Mumbai Zoo, Mumbai",
//     "Global Vipassana Pagoda, Mumbai",
//     "Powai Lake, Mumbai",
//     "Chor Bazaar, Mumbai",
//     "Fort Bassein, Mumbai",
//     "Water Kingdom, Mumbai",
//     "Flora Fountain, Mumbai",
//     "Marine Drive, Mumbai",
//     "Essel World, Mumbai",
//     "Sanjay Gandhi National Park, Mumbai",
//     "Elephanta Caves, Mumbai",
//     "Prince Of Wales Museum, Mumbai",
//     "Aksa Beach, Mumbai",
//     "Mahatma Jyotiba Phule Mandai, Mumbai",
//     "Iskcon Temple, Mumbai",
//     "Mumba Devi Temple, Mumbai",
//     "Gilbert Hill, Mumbai",
//     "Worli Fort, Mumbai",
//     "Kanheri Caves, Mumbai",
//     "Film City, Mumbai",
//     "Mumbai Dabbawala Center, Mumbai",
//     "Dhobi Ghat, Mumbai",
//     "Mahalakshmi Temple, Mumbai",
//     "Basilica Of Our Lady Of The Mount, Bandra, Mumbai",
//     "Jehangir Art Gallery, Mumbai",
//     "Madh Island, Mumbai",
//     "Wonders Park, Mumbai",
//     "Castella De Aguada, Mumbai",
//     "Gorai Beach, Mumbai",
//     "Tikuji Ni Wadi, Mumbai",
//     "Haji Ali Dargah, Mumbai",
//     "Versova Beach, Mumbai",
//     "Mahakali Caves, Mumbai",
//     "Cafe Mondegar, Mumbai",
//     "Mani Bhavan Gandhi Sangrahalaya, Mumbai",
//     "Dharavi Slum, Mumbai",
//     "Suraj Water Park, Mumbai",
//     "Kidzania, Mumbai",
//     "Shivaji Park, Mumbai",
//     "Hanging Gardens Of Mumbai, Kamala Nehru Park, Mumbai",
//     "Red Carpet Wax Museum, Mumbai",
//     "Juhu Beach, Mumbai",
//     "Siddhivinayak Temple, Mumbai",
//     "Maratha Mandir, Mumbai",
//     "Bandra–Worli Sea Link, Mumbai"
//   ]

// },