// // Import dependencies
// import React, { useRef, useState, useEffect } from "react";
// import * as tf from "@tensorflow/tfjs";
// import * as cocossd from "@tensorflow-models/coco-ssd";
// import Webcam from "react-webcam";
// import "./App.css";
// import { drawRect } from "./utilities";

// function App() {
//   const webcamRef = useRef(null);
//   const canvasRef = useRef(null);

//   // Main function
//   const runCoco = async () => {
//     const net = await cocossd.load();
//     console.log("Handpose model loaded.");
//     //  Loop and detect hands
//     setInterval(() => {
//       detect(net);
//     }, 10);
//   };

//   const detect = async (net) => {
//     // Check data is available
//     if (
//       typeof webcamRef.current !== "undefined" &&
//       webcamRef.current !== null &&
//       webcamRef.current.video.readyState === 4
//     ) {
//       // Get Video Properties
//       const video = webcamRef.current.video;
//       const videoWidth = webcamRef.current.video.videoWidth;
//       const videoHeight = webcamRef.current.video.videoHeight;

//       // Set video width
//       webcamRef.current.video.width = videoWidth;
//       webcamRef.current.video.height = videoHeight;

//       // Set canvas height and width
//       canvasRef.current.width = videoWidth;
//       canvasRef.current.height = videoHeight;

//       // Make Detections
//       const obj = await net.detect(video);

//       // Draw mesh
//       const ctx = canvasRef.current.getContext("2d");
//       drawRect(obj, ctx);
//     }
//   };

//   useEffect(() => {
//     runCoco();
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <Webcam
//           ref={webcamRef}
//           muted={true}
//           style={{
//             position: "absolute",
//             marginLeft: "auto",
//             marginRight: "auto",
//             left: 0,
//             right: 0,
//             textAlign: "center",
//             zindex: 9,
//             width: 640,
//             height: 480,
//           }}
//         />

//         <canvas
//           ref={canvasRef}
//           style={{
//             position: "absolute",
//             marginLeft: "auto",
//             marginRight: "auto",
//             left: 0,
//             right: 0,
//             textAlign: "center",
//             zindex: 8,
//             width: 640,
//             height: 480,
//           }}
//         />
//       </header>
//     </div>
//   );
// }

// export default App;
// import React, { useRef, useState, useEffect } from "react";
// import * as tf from "@tensorflow/tfjs";
// import * as cocossd from "@tensorflow-models/coco-ssd";
// import Webcam from "react-webcam";
// import "./App.css";
// import { drawRect } from "./utilities";

// function App() {
//   const webcamRef = useRef(null);
//   const canvasRef = useRef(null);
//   const [detectedObjects, setDetectedObjects] = useState([]); // State to store detected objects
//   const [cart, setCart] = useState([]); // State to store cart items

//   const runCoco = async () => {
//     const net = await cocossd.load();
//     console.log("COCO-SSD model loaded.");
//     setInterval(() => {
//       detect(net);
//     }, 10);
//   };

//   const detect = async (net) => {
//     if (webcamRef.current && webcamRef.current.video.readyState === 4) {
//       const video = webcamRef.current.video;
//       const videoWidth = webcamRef.current.video.videoWidth;
//       const videoHeight = webcamRef.current.video.videoHeight;

//       webcamRef.current.video.width = videoWidth;
//       webcamRef.current.video.height = videoHeight;

//       canvasRef.current.width = videoWidth;
//       canvasRef.current.height = videoHeight;

//       const obj = await net.detect(video);
//       setDetectedObjects(obj); // Store detected objects in state

//       const ctx = canvasRef.current.getContext("2d");
//       drawRect(obj, ctx);
//     }
//   };

//   const addToCart = () => {
//     if (detectedObjects.length > 0) {
//       const latestObject = detectedObjects[0].class; // Get the class of the first detected object
//       setCart([...cart, latestObject]); // Add it to the cart
//     }
//   };

//   useEffect(() => {
//     runCoco();
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <Webcam
//           ref={webcamRef}
//           muted={true}
//           style={{
//             position: "absolute",
//             marginLeft: "auto",
//             marginRight: "auto",
//             left: 0,
//             right: 0,
//             textAlign: "center",
//             zindex: 9,
//             width: 640,
//             height: 480,
//           }}
//         />

//         <canvas
//           ref={canvasRef}
//           style={{
//             position: "absolute",
//             marginLeft: "auto",
//             marginRight: "auto",
//             left: 0,
//             right: 0,
//             textAlign: "center",
//             zindex: 8,
//             width: 640,
//             height: 480,
//           }}
//         />

//         <button
//           onClick={addToCart}
//           style={{ position: "absolute", bottom: 50 }}
//         >
//           Add to Cart
//         </button>

//         <div style={{ position: "absolute", bottom: 10 }}>
//           <h2>Cart Items:</h2>
//           {cart.map((item, index) => (
//             <div key={index}>{item}</div>
//           ))}
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import "./App.css";
import { drawRect } from "./utilities";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import productData from "../components/products.json"; // Import product data

function ObjectDetection() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [detectedObjects, setDetectedObjects] = useState([]);
  const dispatch = useDispatch();

  const runCoco = async () => {
    const net = await cocossd.load();
    console.log("COCO-SSD model loaded.");
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    if (webcamRef.current && webcamRef.current.video.readyState === 4) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const obj = await net.detect(video);
      setDetectedObjects(obj);

      const ctx = canvasRef.current.getContext("2d");
      drawRect(obj, ctx);
    }
  };

  const handleAddToCart = () => {
    if (detectedObjects.length > 0) {
      const latestObjectClass = detectedObjects[0].class.toLowerCase();
      let productId;
      switch (latestObjectClass) {
        case "cell phone":
          productId = 0;
          break;
        case "book":
          productId = 1;
          break;
        case "bottle":
          productId = 2;
          break;
        case "laptop":
          productId = 3;
          break;
        default:
          console.log("Product not recognized");
          return;
      }
      const productToAdd = productData[productId.toString()]; // Retrieve product details
      if (productToAdd) {
        dispatch(addToCart({ ...productToAdd, quantity: 1 })); // Dispatch with full product details
      }
    }
  };

  useEffect(() => {
    runCoco();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          muted={true}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 8,
            width: 640,
            height: 480,
          }}
        />
        <button
          onClick={handleAddToCart}
          style={{ position: "absolute", bottom: 50 }}
        >
          Add to Cart
        </button>
      </header>
    </div>
  );
}

export default ObjectDetection;
