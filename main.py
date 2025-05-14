from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
import pandas as pd

app = FastAPI()

# Enable CORS (replace "*" with the actual frontend URL in production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Adjust this based on your frontend's origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the attractions data
df = pd.read_csv('C:\\Users\\Lenovo\\Downloads\\beproject\\beproject\\Places.csv')


# Rename columns for clarity
attractions_df = df.rename(columns={'Place': 'Attraction', 'City': 'Destination', 'Place_desc': 'Description'})

# Drop unnecessary columns
attractions_df = attractions_df.drop(['Distance', 'Ratings'], axis=1)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Attractions API"}

@app.get("/recommend/{user_destination}")
def recommend_attractions(user_destination: str):
    # Filter attractions for the given destination
    attractions_for_destination = attractions_df[attractions_df['Destination'] == user_destination]

    if attractions_for_destination.empty:
        return JSONResponse(content={"message": f"No attractions found for {user_destination}"}, status_code=404)

    # TF-IDF Vectorization
    tfidf_vectorizer = TfidfVectorizer(stop_words='english')
    attractions_tfidf_matrix = tfidf_vectorizer.fit_transform(attractions_for_destination['Description'])

    # Calculate similarity scores
    attraction_similarity_scores = linear_kernel(attractions_tfidf_matrix, attractions_tfidf_matrix)

    # Recommend top attractions
    attraction_indices = range(len(attractions_for_destination))
    sim_scores = list(enumerate(attraction_similarity_scores))
    sim_scores = sorted(sim_scores, key=lambda x: x[1][0], reverse=True)
    sim_scores = sim_scores[1:16]  # Top 15 attractions (excluding itself)

    attraction_indices = [i[0] for i in sim_scores]

    recommended_attractions = attractions_for_destination.iloc[attraction_indices]['Attraction'].tolist()

    response = {"message": f"Top attractions in {user_destination}:", "attractions": recommended_attractions}
    return JSONResponse(content=response)