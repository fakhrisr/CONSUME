// //import { View, Text } from 'react-native'
// import React from 'react'


// export default function Table() {

//     const data = [
//         {
//           nama:'Fakhri',
//           rombel:'PPLG XI-5',
//           rayon:'Ciawi 1',
//         },
//         {
//           nama:'Ikhfan',
//           rombel:'PPLG XI-5',
//           rayon:'Ciawi 1',
//         }
//       ]

//   return (
//     <>
//         <table border={1}>
//             <thead>
//                 <tr>
//                     <td>No</td>
//                     <td>Nama</td>
//                     <td>Rombel</td>
//                     <td>Rayon</td>
//                 </tr>
//             </thead>
//             <tbody>
//             {
//           data.map((el, key) => (
//             <tr key={key}>
//                 <td>{key+1}</td>
//                 <td>{el.nama}</td>
//                 <td>{el.rombel}</td>
//                 <td>{el.rayon}</td>
//             </tr>
//           ))
//         }
//             </tbody>
//         </table>

//     {/* <View>
//       <Text>Table</Text>
//     </View> */}
//     </>
//   )
// }