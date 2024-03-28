# OnlyMemes
## Introduction

As a meme enthusiast, I love to share memes with others, but quite often I get ignored (已讀), or even worse, they don't appreciate my sense of humor. Hence, I created this website, which allows user to sign in with google account and upload their favorite memes in the form of video. Usere can give stars to the memes they like, and the website will show the current leaders, and display users' memes in the order of total stars acquired.

There are several functions under construction (listed below), but at current state users are free sign in and upload videos.

## Visuals
![Home](screenshots/home.png)


This is NOT some random youtube clone projects on youtube!

## Tech Stack
### Video Storage (Cloud Storage)
Google Cloud Storage will be used to host the raw and processed videos. This is a simple, scalable, and cost effective solution for storing and serving large files.

### Video Upload Events (Cloud Pub/Sub)
When a video is uploaded, publish a message to a Cloud Pub/Sub topic. This will add durability layer for video upload events and process videos asynchronously.

### Video Processing Workers (Cloud Run)
When a video upload event is published, a video processing worker will receive a message from Pub/Sub and transcode the video. For transcoding the video we will use ffmpeg, which is a popular open source tool for video processing and it's widely used in industry (including at YouTube).

The nature of video processing can lead to inconsistent workloads, so use Cloud Run to scale up and down as needed. Processed videos will be uploaded back to Cloud Storage.

### Video Metadata (Firestore)
After a video is processed, store the metadata in Firestore. This will allow display of processed videos in the web client along with other relevant info (e.g. title, description, etc).

### Video API (Firebase Functions)
Use Firebase Functions to build a simple API that will allow users to upload videos and retrieve video metadata. This can easily be extended to support additional Create, Read, Update, Delete (CRUD) operations.

### Web Client (Next.js / Cloud Run)
Use Next.js to build a simple web client that will allow users to sign in and upload videos. The web client will be hosted on Cloud Run.

### Authentication (Firebase Auth)
Use Firebase Auth to handle user authentication. This will make it easier integrate with Google Sign In.
