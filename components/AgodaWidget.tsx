// 'use client';

// import Script from "next/script";
// import { useEffect } from "react";

// export default function AgodaWidget() {
//   useEffect(() => {
//     if (typeof window !== 'undefined' && (window as any).AgdSherpa) {
//       const stg: any = {};
//       stg.crt = "6584199009026";
//       stg.version = "1.04";
//       stg.id = stg.name = "adgshp903464889";
//       stg.width = "320px";
//       stg.height = "420px";
//       stg.ReferenceKey = "jsYUAjeW9I3vwQygvv/KyA==";
//       stg.Layout = "SquareCalendar";
//       stg.Language = "en-us";
//       stg.Cid = "1945178";
//       stg.DestinationName = "";
//       stg.OverideConf = false;

//       new (window as any).AgdSherpa(stg).initialize();
//     }
//   }, []);

//   return (
//     <>
//       <div id="adgshp903464889" />

//       <Script
//         src="https://cdn0.agoda.net/images/sherpa/js/sherpa_init1_08.min.js"
//         strategy="afterInteractive"
//       />
//     </>
//   );
// }
