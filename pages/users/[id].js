import React from "react";

const UserDetails = () => {
  // console.log(data);
  return (
    <div>
      UserDetails
      {/* <h1>Name:{data.name}</h1>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <p>City: {data.address.city}</p> */}
    </div>
  );
};

export default UserDetails;

// export const getStaticPaths = async () => {
//   const api = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await api.json();

//   const paths = data.map((item) => {
//     return {
//       params: {
//         id: item.id.toString(),
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context) => {
//   console.log(context, "CONTEXT");
//   const id = context.params.id;
//   const api = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
//   const data = await api.json();

//   return {
//     props: {
//       data,
//     },
//   };
// };

// export const getServerSideProps = async (context) => {
//   const id = context.params.id;
//   console.log("ID", id);

//   const api = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
//   const data = await api.json();

//   return {
//     props: {
//       data,
//     },
//   };
// };
