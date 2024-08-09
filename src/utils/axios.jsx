import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzE3YTEyZTExZjZhNzg4MmU5YmU5ZGIxNjNjZDJkYiIsIm5iZiI6MTcyMzE5OTY5NS4wOTk2Miwic3ViIjoiNjZiNWRjMTdjMTk4MGY2MzgzZDZkMjEzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.efFjJS_CVXloQ7hkLtdlIEuxfJ3tbRizxPpR5EVwcLc",
  },
});

export default instance;
