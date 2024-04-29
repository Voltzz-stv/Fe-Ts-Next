// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// type User = {
//   id: number;
//   name: string;
//   email: number;
// };

// export const useApi = createApi({
//   reducerPath: "useApi",
//   refetchOnFocus: true,
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://localhost:3000/",
//   }),
//   endpoints: (builder) => ({
//     getUsers: builder.query<User[], null>({
//       query: () => "users",
//     }),
//     getUserById: builder.query<User, { id: string }>({
//       query: ({ id }) => `users/${id}`,
//     }),
//   }),
// });
